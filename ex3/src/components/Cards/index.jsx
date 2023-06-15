import "./style.css";
import Modal from "../Modal";

function Cards({ data, onclick }) {
  return (
    <div className="card" onClick={() => onclick(data)}>
      <img src={data.image} />
      <span>{data.description}</span>
      <div className="price-wrap">
        <span className="old">R$ {data.oldPrice.toFixed(2)}</span>
        <span className="current">R$ {data.currentPrice.toFixed(2)}</span>
      </div>
      <div>
        <span className="parcelas">
          6x {(data.currentPrice / 6).toFixed(2)}
        </span>
        <span> Sem juros</span>
      </div>
    </div>
  );
}

export default Cards;
