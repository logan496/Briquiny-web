function resultats(){
    return(
        <div className="resultats-container">
            <h2>RESULTAT(S) EXAMEN(S)</h2>
            <form className="resutats-form" method="post">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <label>NOM DE L'EXAMEN</label> :
                <input type="text" name="result-year" placeholder="Annee" className="resultats-container"/>
                <input type="text" name="result-percent" placeholder="Pourcentage" className="resultats-container"/>
                <input type="submit" name="submit-result" value="METTRE A JOUR" className="change-date"/>
            </form>

        </div>
    )
}

export default resultats