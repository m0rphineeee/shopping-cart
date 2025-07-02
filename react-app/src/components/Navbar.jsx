import '../styles/Navbar.css';
import { LuHeart, LuShoppingCart} from 'react-icons/lu';

export default function() {

    return (
        <header>
            <nav>
                <div className="left-bar">
                    <a className="logo" href="#">Hoopers!</a>
                    <div>
                        <ul className="pages">
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Tienda</a></li>
                        </ul>
                    </div>
                </div>
                <div className="right-bar">
                    <ul className="icons">
                        <li><a href="#"><LuHeart /></a></li>
                        <li><a href="#"><LuShoppingCart /></a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}