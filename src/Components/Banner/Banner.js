import React, { useState, useEffect } from "react";
import Wrapper from "./Banner.styled";
import Container from "../Container/Container";
import { NavHashLink } from "react-router-hash-link";

// import icons and images
import { Icon } from "@iconify/react";
import Logo from "../../images/mainLogo.png";

function Banner() {
  const [mobileMenu, setMobileMenu] = useState(false);
  // mobile menu function
  useEffect(() => {
    const x = document.querySelector(".buttonGroups");
    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        x.style.width = "auto";
      } else {
        x.style.width = 0 + "%";
      }
    });

    if (window.innerWidth < 575) {
      if (mobileMenu) {
        x.style.width = 75 + "%";
      } else {
        x.style.width = 0 + "%";
      }
    } else if (window.innerWidth < 768) {
      if (mobileMenu) {
        x.style.width = 50 + "%";
      } else {
        x.style.width = 0 + "%";
      }
    }
  }, [mobileMenu]);

  return (
    <Wrapper>
      <Container dflex between>
        <div className="logo">
          <img src={Logo} alt=""/>
        </div>
        <button
          className="mobileMenu"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          <Icon icon="codicon:menu" />
        </button>
        <div className="buttonGroups">
          <button
            className="closeMobileMenu"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            <Icon icon="akar-icons:cross" />
          </button>
          <NavHashLink
            to="/#home"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            Home
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#about"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            About
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#roadmap"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            Roadmap
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#team"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            Team
          </NavHashLink>
          <NavHashLink
            smooth
            to="/#faq"
            onClick={() => {
              setMobileMenu(!mobileMenu);
            }}
          >
            FAQ's
          </NavHashLink>
        </div>
        <div className="socialIcons">
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
      </Container>
      <div className="desc-body">
        <div className="desc">
          <h3 className="desc-head">TENACIOUS TACOS</h3>
          <h3 className="desc-head">JOIN THE WORLDS FIRST LOYALTY CLUB BACKED BY WEB3</h3>
          <ul className="dash">
            <li>Share in the success of growing brand</li>
            <li>Receive WEB3 and IRL benefits</li>
            <li>Get your very own Tenacious Tacos NFT</li>
            <li>Stake to earn $TACO and redeem for prizes</li>
            <li>Chance to win free food for life or monthly payments in ETH/WETH</li>
          </ul>
          <div className="button_discord">
            <a href="https://discord.gg/vsbtsHQAUz"  target="_blank" rel="noreferrer"className="btn_text">
              <Icon icon="akar-icons:discord-fill" className="discord_icon"/>Join Discord Now
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Banner;
