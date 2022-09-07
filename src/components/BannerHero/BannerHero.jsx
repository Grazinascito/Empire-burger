import bannerHeroIcon from "../../assets/banner-hero.png";
import { Header } from "../Header/Header";
import "./styled.scss";

export const BannerHero = () => {
  return (
    <>
      <Header />
      <section className="banner-hero">
        <img src={bannerHeroIcon} alt="" />
        <div>
          <strong>Uma nova experiência!</strong>
          <h1>
            KING <span>BURGER</span>
          </h1>
          <p>
            Para quem tem um <span>Apetite de um REI!</span>
          </p>

          <button>Comprar Agora</button>
        </div>
      </section>
    </>
  );
};
