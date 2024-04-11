function scolarite(){
    return(
        <div className="scolarite-container">
            <h2>FRAIS DE SCOLARITE</h2>
            <table className="frais-scolarite-table">
                <thead>
                    <tr>
                        <th scope="col">Cycle</th>
                        <th scope="col">montant</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>6éme</th>
                        <th>5000</th>
                    </tr>
                </tbody>
            </table>
            <button type="submit" className="send">Mettre à jour</button>
        </div>
    )
}

export default scolarite