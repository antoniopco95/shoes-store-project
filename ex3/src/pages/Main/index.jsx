import "./style.css";
import Logo from "../../assets/logo.svg";

function Main() {
  return (
    <div className="container">
      <header>
        <h1>MODA MASCULINA</h1>
        <span>SAPATOS SOCIAIS - CASUAIS - ESPORTE FINO</span>
        <img src={Logo} />
      </header>
    </div>
  );
}

export default Main;
