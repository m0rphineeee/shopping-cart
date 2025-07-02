import Navbar from "./Navbar";
import "../styles/Home.css";
import euroLogo from "../assets/euro.png";
import fibaLogo from "../assets/fiba.png"
import nbaLogo from "../assets/nba.png";

export default function Home() {

    return (
        <div>
            <Navbar />
            <div className="homepage">
                <h1>Bienvenido a <span>Hoopers!</span></h1>
                <p>¿Buscas camiseta nueva? Descubrí nuestro catálogo completo de camisetas 
                    de básquet diseñadas para acompañarte en cada partido y 
                    fuera de la cancha.
                </p>
                <button>Comprar Ahora</button>
                <div className="logos">
                    <img src={fibaLogo} alt="fiba logo" />
                    <img src={euroLogo} alt="euroleague logo" />
                    <img src={nbaLogo} alt="nba logo" />
                </div>
            </div>  


        </div>
    )
}