import React from "react";
import Wrapper from "./Overview.styled";
import Container from "../Container/Container";

function Overview() {
  return (
    <Wrapper id="about">
      {/*<h3>ABOUT US</h3>*/}
      <div className="section_heading">
        <p className="road-title">
          <span>ABOUT</span> US
        </p>
      </div>
      <Container dflex between>
        <div className="overviewText">
          <h3 className="q">WHAT IS STREATS?</h3>
          <h3 className="q">WHY DO WE WANT TO RELEASE AN NFT PROJECT?</h3>
          <p>
            In 2017 a group of like-minded people got together and opened <a href="https://twitter.com/streatskitchen" target="_blank" className="anchor">@streatskitchen’s</a> first restaurant location in Canada. Since its inception, StrEATS has grown from its original standalone store, to a franchise composed of 15 locations, spread all across Canada. Amidst a global pandemic and multiple government shut downs, through hard work and impeccable management, StrEATS managed to have its most successful year to date. Achieving $6m in revenue, and a brand growth of 75%. With projected earnings in 2022 being upwards of $10m, and plans to expand into the US, StrEATS is showing absolutely no sign of slowing down, and we want to bring you with us! If you would like to learn more about the StrEATS brand check us out on our <a href="https://streats.ca/" target="_blank" className="anchor">website</a>.<br/><br/>
            So how does this relate to NFTs, and what do we hope to achieve through the Tenacious Tacos project?<br/><br/>
            In mid 2021, our resident crypto degens <a href="https://twitter.com/nigelnim" target="_blank" className="anchor">@nigelnim</a> and <a href="https://twitter.com/0xAliterit" target="_blank" className="anchor">@0xAliterit</a> became involved in Web3. After falling in love with the community and innovation of the space they decided to on-board the rest of our team. After taking the last few months to learn the benefits of the space, as well as some difficult lessons, we came together to create Tenacious Tacos. Our vision with this project is to become closer with our community, and create the opportunity for you to share in our growing success.<br/><br/>
            Whether you're a regular customer or living overseas, we hope to create value for each and every one of you through ownership of our NFT. The team at StrEATS Kitchen are truly excited to begin building within this community, and we look forward to meeting all of you in our Discord server.<br/>
          </p>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Overview;
