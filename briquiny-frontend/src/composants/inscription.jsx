function inscription(){
    return(
        <div className="inscription">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2>FRAIS D'INSCRIPTION</h2>
            <table className="frais-inscription">
                <thead>
                <tr>
                    <th scope="col">Cycle</th>
                    <th scope="col">Montant</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>6éme</th>
                        <th>4000</th>
                    </tr>
                </tbody>
            </table>
            <button type="submit" className="send">Mettre à jour</button>
        </div>
    )
}

export default inscription