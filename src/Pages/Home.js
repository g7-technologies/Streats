import React, { useState, useEffect } from "react";
import Banner from "../Components/Banner/Banner";
import Faqs from "../Components/Faqs/Faqs";
import Overview from "../Components/Overview/Overview";
import Team from "../Components/Team/Team";
import Roadmap from "../Components/Roadmap/Roadmap";
import Wrapper from "../Containers/Home.styled";
import Loader from "../Components/Loader/Loader";
// import icons
import { Icon } from "@iconify/react";

function Home() {
  const [loader, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 5000);
  }, []);
  return (
    <Wrapper id="home">
      {loader ? <Loader /> : ""}
      <header>
        <Banner />
      </header>
      <main>
        <Overview />
        <Roadmap />
        <Team />
        <Faqs />
      </main>
      <footer>
        <div className="footerSocialIcons">
          <a href="https://discord.gg/vsbtsHQAUz" target="_blank" rel="noreferrer">
            <Icon icon="akar-icons:discord-fill" />
          </a>
          <a href="https://twitter.com/TenaciousTacos" target="_blank" rel="noreferrer">
            <Icon icon="ant-design:twitter-circle-filled" />
          </a>
          <a href="https://opensea.io/" target="_blank" rel="noreferrer">
            <Icon icon="simple-icons:opensea" />
          </a>
        </div>
      </footer>
    </Wrapper>
  );
}

export default Home;
