import "./index.css";
import PropTypes from "prop-types";

function Service({img, lorem}){
    return(
        <div className="bloc_div2_div1_container">
            <div className="bloc_div2_div1_container_circle">
                {img}
            </div>
            <p>{lorem}</p>
        </div>
    )
}

Service.propTypes = {
    img: PropTypes.string.isRequired,
    lorem: PropTypes.string.isRequired,
}

export default Service;