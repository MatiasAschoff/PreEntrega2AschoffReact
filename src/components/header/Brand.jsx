import brand from "../../img/NikosLogo.png";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="NikosLogo" title="NikosLogo"></img>
        </Link>
    )
}

export default Brand;