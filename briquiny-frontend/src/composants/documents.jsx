import {useState} from "react";
import axios from "axios";


function documents(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [file, setFile] = useState('')

    const handleFileChange = (e) =>{
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            alert('Veuillez sélectionner un fichier PDF.');
            return;
        }

        const formData = new FormData();
        formData.append('pdfFile', file);

        try {
            await axios.put('http://localhost:3000/briquiny/admin/file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(response => alert(response.data.message));
        } catch (error) {
            console.error(error);
            alert('Erreur lors de l\'envoi des fichiers');
        }
    };

    return(
        <div className="document-contenair">
            <h2>DOCUMENTS</h2>
            <form className="form-document" onSubmit={handleSubmit}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <label className="label-file">Modalités d'inscriptions </label>:
                <input type="file" className="input-file" name="document" onChange={handleFileChange} accept="application/pdf"/>
                <input type="submit" className="change-date" value="Choisir"/>
            </form>
        </div>
    )
}

export default documents