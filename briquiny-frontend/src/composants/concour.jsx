
function Date(){
    return(
        <div className="date">
            <h2>DATE DU CONCOUR</h2>
            <form className="date-concour" method="post">
                <label>DATE DU CONCOUR</label> : <input type="date" name="date-concour"/>
                <input type="submit" name="change-date" value="METTRE A JOUR" className="change-date"/>
            </form>
        </div>
    )
}

export default Date