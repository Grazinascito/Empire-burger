import burgerIcon from "../../assets/icons/burger.svg";
import headsetIcon from "../../assets/icons/headset.svg";
import deliveryIcon from "../../assets/icons/delivery.svg";
import "./styled.scss";

export const Infos = () => {
  return (
    <section className="info-content">
      <div className="box-artesanal">
        <div>
          <img src={burgerIcon} alt="" />
        </div>
        <div>
          <h3>ARTESANAL</h3>
          <p>Nossas receitas são feitas com todo cuidado</p>
        </div>
      </div>
      <div className="box-treatment">
        <div>
          <img src={headsetIcon} alt="" />
        </div>
        <div>
          <h3>ATENDIMENTO</h3>
          <p>Totalmente personalizado</p>
        </div>
      </div>
      <div className="box-delivery">
        <div>

        <img src={deliveryIcon} alt="" />
        </div>
        <div>

        <h3>DELIVERY SPEED</h3>
        <p>Entregamos menos de 45 minutos</p>
        </div>
      </div>
    </section>
  );
};
