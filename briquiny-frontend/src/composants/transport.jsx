function transport(){
    return(
        <div className="transport-container">
            <h2>FRAIS TRANSPORT</h2>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Zones</th>
                        <th scope="col">Montant</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Makepe</th>
                        <th>12000</th>
                    </tr>
                </tbody>
            </table>
            <button className="send" type="submit">Mettre à jour</button>
        </div>
    )
}

export default transport