import "./style.css";
import Modal from "../Modal";

function Cards({
  openModal,
  setModalOpen,
  img,
  description,
  oldPrice,
  currentPrice,
}) {
  return (
    <div className="card">
      <img src={img} />
      <span>{description}</span>
      <div className="price-wrap">
        <span className="old">{oldPrice.toFixed(2)}</span>
        <span className="current">R$ {currentPrice.toFixed(2)}</span>
      </div>
      <div>
        <span className="parcelas">6x {(currentPrice / 6).toFixed(2)}</span>
        <span> Sem juros</span>
      </div>
      <>{openModal && <Modal />}</>
    </div>
  );
}

export default Cards;
