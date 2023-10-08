import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div style = {{display: "flex", justifyContent : "space-between", width : "100vw", height : "60px", backgroundColor : "grey", color : "white", alignItems : "center", marginTop : "0"}}>
                <div style = {{padding : "30px", marginLeft : "50px", cursor : "pointer" }}>
                    <Link to = "/" style = {{textDecoration : "none", color : "white"}}> Home </Link>
                </div>
                <div style = {{padding : "30px", marginRight : "50px", cursor : "pointer"}}>
                    <Link to = "/cart" style = {{textDecoration : "none", color : "white"}}> Cart </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;