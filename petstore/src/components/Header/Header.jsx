import { Link } from "react-router-dom";
import Navigation from "../Navigation";
import PropTypes from "prop-types";
import image from "./img/shopingcart.ico";
import { ReactComponent as Chosen } from "./img/svg/chosenSvg.svg";
import "./Header.scss";

const Header = ({ countStar, countCart }) => {
    return (
        <header className="header">
            <div className="header__option">
                <Navigation />
                <div className="icon">
                    <Link to="/favorites">
                        <span className="chosenCount">
                            {countStar}
                            <Chosen />
                        </span>
                    </Link>
                    <Link to="/cart">
                        <span className="cartCount">
                            {countCart}
                            <img className="cartImg" src={image} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    countStar: PropTypes.number,
    countCart: PropTypes.number,
};
export default Header;
