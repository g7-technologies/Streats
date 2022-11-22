import React from "react";
import Wrapper from "./Team.styed";
import joe_img from "../../images/Joe.png";
import mike_img from "../../images/Mike.png";
import dominic_img from "../../images/Dominic.png";
import nigel_img from "../../images/Nigel.png";

function Team() {
  return (
    <Wrapper id="team">
      {/*<h3>MEET THE TEAM</h3>*/}
      <div className="section_heading">
        <p className="road-title">
          <span>MEET THE</span> TEAM
        </p>
      </div>
      <div className="container">
        <div className="teamSingleItem">
          
          <div className="teamCardItem">
            {/* left card item */}
            <div className="teamLeftCard">
              <h5>
                CEO, Joeys Group of Restaurants Founder, Tenacious Tacos NFT
              </h5>
            </div>
            {/* left card Item end here */}
            {/* right card item */}
            <div className="rightCard">
              <div className="rightCardTop">
                <div className="teamTopImg">
                  <img src={joe_img} alt="" />
                </div>
                <div className="teamTopTitle">
                  <h4>Joe Klassen </h4>
                  <a href="https://twitter.com/joeklassen" className="anchor" target="_blank">@joeklassen</a>
                </div>
              </div>
              <div className="cardPara">
                <p>
                  Starting with a single fish and chips restaurant in
                  Calgary’s beltline in 1985 at just 21 years of age, Klassen
                  has grown his Joey’s Group of Companies into a true empire.
                  It includes over 60 restaurants across Canada, magazines, a
                  printing company, a wholesale food import-distribution
                  company, a biodiesel plant, an oil servicing business, land
                  development and commercial buildings and more, employing
                  over 800 people across the country. And his story is nowhere
                  near finished. Upon learning about the Web3 space from
                  Dominic and Nigel, Joe immediately knew that this technology
                  had the potential to change the world, and as with all of
                  his business ventures, he wanted to be at the forefront of
                  it.
                </p>
              </div>
            </div>

            {/* Right Card item end here */}
          </div>

          {/*2nd Item of team  */}
          <div className="teamCardItem teamCardItem2">
            {/* right card item */}
            <div className="rightCard rightCardReverse">
              <div className="rightCardTop">
                <div className="teamTopImg">
                  <img src={mike_img} alt="" />
                </div>
                <div className="teamTopTitle">
                  <h4> Michael Klassen </h4>
                  <a href="https://twitter.com/mikeklassen90" className="anchor" target="_blank">@mikeklassen90</a>
                </div>
              </div>
              <div className="cardPara">
                <p>
                  Enter the next generation, after finishing his pro football
                  career of 7 years. Michael Has been an integral part into
                  the creation and success of the Joeys’ groups newest venture
                  strEATS Kitchens. Helping in his offseason since 2014 he has
                  now joined the team full time in late 2019 wherein, he
                  quickly took over the marketing and overall brand direction.
                  His unorthodox marketing ideas/schemes have helped put
                  strEATS on the map nationally with hopes of soon being an
                  international discussion. He understands the value of being
                  early to the NFT space in hopes of being one of the first
                  brands to adopt a blockchain based loyalty club for the
                  restaurants.
                </p>
              </div>
              {/* <div className="socilaICon">
                <button className="SocialButton">
                  <img src={Discord} alt="" />
                </button>
                <button className="SocialButton">
                  <img src={Discord} alt="" />
                </button>
                <button className="SocialButton">
                  <img src={Discord} alt="" />
                </button>
              </div> */}
            </div>

            {/* Right Card item end here */}
            {/* left card item */}
            <div className="teamLeftCard">
              <h5>
                Marketing Specialist and Regional Manager, StrEATS Kitchens
                Co-Founder & Marketing Lead, Tenacious Tacos NFT
              </h5>
            </div>
            {/* left card Item end here */}
          </div>

          {/* 3rd Team Item */}
          <div className="teamCardItem">
            {/* left card item */}
            <div className="teamLeftCard">
              <h5>Community Manager & Advisor, Tenacious Tacos NFT</h5>
            </div>
            {/* left card Item end here */}
            {/* right card item */}
            <div className="rightCard">
              <div className="rightCardTop">
                <div className="teamTopImg">
                  <img src={dominic_img} alt="" />
                </div>
                <div className="teamTopTitle">
                  <h4>Dominic Goncalves </h4>
                  <a href="https://twitter.com/0xAliterit" className="anchor" target="_blank">@0xAliterit</a>
                </div>
              </div>
              <div className="cardPara">
                <p>
                  Dominic is a full time crypto & JPEG degen, he spends his
                  days roaming the metaverse and interacting with the NFT
                  community through Discord and Twitter. He has been investing
                  in crypto since 2018 and began trading NFTs in August 2021,
                  quitting his job and going full time in Web3 as of January
                  2022.
                </p>
              </div>
            </div>

            {/* Right Card item end here */}
          </div>
          {/* 4th Team Item */}
          <div className="teamCardItem teamCardItem2">
            {/* right card item */}
            <div className="rightCard rightCardReverse">
              <div className="rightCardTop">
                <div className="teamTopImg">
                  <img src={nigel_img} alt="" />
                </div>
                <div className="teamTopTitle">
                  <h4>Nigel Nimegeers </h4>
                  <a href="https://twitter.com/nigelnim" className="anchor" target="_blank">@nigelnim</a>
                </div>
              </div>
              <div className="cardPara">
                <p>
                  Nigel has been working for Joeys Group of Companies since
                  2013. In 2020 he became the co-owner and general manager of
                  his own location at only 21 years old. Nigel began trading
                  crypto in 2017, venturing into NFTs in August 2021. He now
                  spends his days working full time both on Tenacious Tacos,
                  and as General Manager of StrEATS Beltline.
                </p>
              </div>
              {/* <div className="socilaICon">
                <button className="SocialButton">
                  <img src={Discord} alt="" />
                </button>
                <button className="SocialButton">
                  <img src={Discord} alt="" />
                </button>
                <button className="SocialButton">
                  <img src={Discord} alt="" />
                </button>
              </div> */}
            </div>

            {/* Right Card item end here */}
            {/* left card item */}
            <div className="teamLeftCard">
              <h5>
                General Manager, StrEATS Beltline Community Manager & Advisor,
                Tenacious Tacos NFT
              </h5>
            </div>
            {/* left card Item end here */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Team;
