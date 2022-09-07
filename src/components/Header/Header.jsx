import logo from "../../assets/logo.png";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import ifoodIcon from "../../assets/icons/ifood.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import "./styled.scss";

export const Header = () => {
  return (
    <header>
      <div className="content-logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <nav className="content-nav">
        <a href="Home">Home</a>
        <a href="Promo">Promoção</a>
        <a href="menu">Cardapio</a>
        <a href="comments">Comentário</a>
        <a href="contact">Contato</a>
      </nav>
      <div className="content-contacs">
        <a href="https://www.ifood.com.br" target="_blank">
          <img src={ifoodIcon} alt="" />
        </a>
        <a href="https://www.ifood.com.br" target="_blank">
          <img src={instagramIcon} alt="" />
        </a>

        <div>
          <button>
            <img src={whatsappIcon} /> Contato
          </button>
        </div>
      </div>
    </header>
  );
};
