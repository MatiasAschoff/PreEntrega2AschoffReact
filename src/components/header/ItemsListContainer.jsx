import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/Hombre"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Mujer">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Niños">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/Accesorios">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;

