import "./style/global.scss";
import { Header } from "./components/Header/Header";
import { BannerHero } from "./components/BannerHero/BannerHero";
import { Infos } from "./components/Infos/Infos";

function App() {
  return (
    <>
      <BannerHero />
      <div style={{display: "flex", justifyContent: "center"}}>
        <Infos />
      </div>
    </>
  );
}

export default App;
