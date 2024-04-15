import "./index.css";
import PropTypes from "prop-types";

function Service({src, desc}){
    return(
        <div className="bloc_div2_div1_container">
            <div className="bloc_div2_div1_container_circle">
                {src ? <img src={src} alt="" />: null}
            </div>
            <p>{desc}</p>
        </div>
    )
}

Service.propTypes = {
    src: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

export default Service;