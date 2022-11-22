import React from "react";
import Wrapper from "./Roadmap.styled";

// import icons
import first_img from "../../images/first_img_roadmap.png";
import mid_img from "../../images/mid_img_roadmap.png";
import last_img from "../../images/last_img_roadmap.png";
import line_img from "../../images/line_roadmap.svg";

function Roadmap() {

  return (
    <Wrapper id="roadmap">
      {/*<h3>ROAD MAP</h3>*/}
      <div className="section_heading">
        <p className="road-title">
          <span>ROAD</span>MAP
        </p>
      </div>
      <div className="road-container">
        <div className="roadmap">
          <div className="roadmap-grid">
            <img src={line_img} alt="" className="roadline" />
            <div className="grid-text">
              <p className="new_font">On Release Q3 2022</p>
              <h1 className="new_font">IRL Benefits</h1>
              <p className="new_font">
                All holders will receive the following IRL benefits: <br />
                - 20% Discount at all StrEATS restaurant locations.<br />
                - Access to VIP events.<br />
                - Voting rights on feature menu items.<br />
              </p>
            </div>
            <div className="grid-img grid-img1">
              <img src={first_img} alt="" />
            </div>
            <div className="grid-img grid-img2">
              <img src={mid_img} alt="" />
            </div>
            <div className="grid-text right_align">
              <p className="new_font">On Release Q3 2022</p>
              <h1 className="new_font">Golden Tacos & StrEATS Mascot</h1>
              <p className="new_font">
                - One lucky minter will receive the StrEATS Mascot 1 of 1 NFT, entitling them to free food for life from any StrEATS restaurant location.<br />
                - There will also be 7 Golden Taco NFTs, correlating to our 7 best selling menu items.<br />
                - Holders of a Golden Taco will be entitled to monthly payments in ETH/WETH, loosely based around the number of sales the corresponding menu item achieves in that month.<br />
              </p>
            </div>

            <div className="grid-text">
              <p className="new_font">Shortly After Launch - Q3-Q4 2022</p>
              <h1 className="new_font">$STREATS Cred Token & Staking</h1>
              <p className="new_font">
                - Shortly after mint we will begin the development of our own utility token.<br />
                - Upon release of the token, all holders will be able to claim a pre-determined amount of $StrEATS Cred, with a bonus amount being allocated  to those who minted & never listed or sold there Tenacious Taco NFT.<br />
                - Alongside the token launch we will also release staking capabilities to earn more $StrEATS Cred, as well as a shop carrying both IRL and goodies for you to spend your tokens on.<br />
              </p>
            </div>
            <div className="grid-img grid-img3">
              <img src={last_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Roadmap;
