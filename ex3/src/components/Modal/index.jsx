import "./style.css";
import Close from "../../assets/close-icon.svg";

function Modal({ data, onclick }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <img
          className="close"
          src={Close}
          alt="close-image"
          onClick={() => onclick()}
        />
        <img className="shoe-image" src={data.image} alt="shoes" />
        <span className="name">{data.name}</span>
        <p>{data.description}</p>
        <span className="oldPrice">R$ {data.oldPrice}</span>
        <span className="currentPrice">R$ {data.currentPrice}</span>
        <span className="payments">
          6x {(data.currentPrice / 6).toFixed(2)}
        </span>
        <p className="juros">Sem juros</p>
        <button>COMPRAR</button>
      </div>
    </div>
  );
}

export default Modal;
