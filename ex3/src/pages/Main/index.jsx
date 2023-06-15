import "./style.css";
import Logo from "../../assets/logo.svg";
import Face from "../../assets/facebook.svg";
import Insta from "../../assets/instagram.svg";
import Cards from "../../components/Cards";
import Datas from "../../data";
import { useState } from "react";

function Main() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="container">
      <header>
        <h1>MODA MASCULINA</h1>
        <span>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</span>
        <img src={Logo} />
      </header>
      <div className="cards-container">
        {Datas.map((data) => (
          <Cards
            key={data.id}
            img={data.image}
            description={data.description}
            oldPrice={data.oldPrice}
            currentPrice={data.currentPrice}
            onclick={() => setOpenModal(true)}
          />
        ))}
      </div>
      <footer>
        <div className="endereço">
          <h2>Endereço:</h2>
          <br />
          <span>Rua Cubos, 10</span>
          <span>Jardim Academy</span>
          <span>Salvador-Bahia-CEP 41820-021</span>
          <div className="logos">
            <img src={Face} alt="facebook-logo" />
            <img src={Insta} alt="instagram-logo" />
          </div>
        </div>
        <div className="border"></div>
        <div className="footer-logo">
          <img src={Logo} alt="footer-logo" />
        </div>
      </footer>
    </div>
  );
}

export default Main;
