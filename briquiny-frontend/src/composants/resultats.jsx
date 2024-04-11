function resultats(){
    return(
        <div className="resultats-container">
            <h2>RESULTAT(S) EXAMEN(S)</h2>
            <form className="resutats-form" method="post">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <label>NOM DE L'EXAMEN</label> : <input type="text" name="result-year"/> : <input type="text" name="result-percent"/>
                <input type="submit" name="submit-result" value="METTRE A JOUR" className="change-date"/>
            </form>

        </div>
    )
}

export default resultats