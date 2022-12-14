import React from "react";
import Wrapper from "./Faqs.styled";

function Faqs() {
  // accordion open function
  function handleAccordion(e) {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  return (
    <Wrapper id="faq">
      {/*<h3>FAQS</h3>*/}
      <div className="section_heading">
        <p className="road-title">
          <span>FAQ</span>S
        </p>
      </div>
      <div className="accordion">
        <div className="accordion-container">
          <button className="accordion-item" onClick={handleAccordion}>
            What is StrEATS?
          </button>
          <div className="panel">
            <p>
              StrEATS is an up-and-coming restaurant franchise based
              out of Canada. We opened our first location in 2017 and
              over the last four years we have grown to 15 locations
              with many more planned to open soon. Our menu consists
              of globally inspired street food such as tacos,
              burritos, bowls & poutines. We pride ourselves in using
              only the freshest ingredients to deliver excellence and
              provide our customers and community members the
              experience they deserve! In 2021 the StrEATS brand
              achieved $6,000,000 in revenue and a brand growth of 75%
              with absolutely no signs of slowing down! We plan to
              continue to grow the StrEATS brand internationally at
              the same blistering pace we have done in the past, and
              we hope to expand globally within the coming years.
            </p>
          </div>
        </div>
        <hr></hr>
        <br />
        <div className="accordion-container" onClick={handleAccordion}>
          <button className="accordion-item">
            Why are we launching an NFT project?
          </button>
          <div className="panel">
            <p>
              From the flavours we use to the foods we create, to our
              marketing tactics, StrEATS has always strived to be at
              the leading edge of innovation, this is no different
              when it comes to Web3. We at StrEATS understand the long
              lasting impact crypto and NFTs will have on our world,
              and we believe that we have something to offer the NFT
              space that has never been seen before. By launching a
              project backed by real-world assets and real-world
              utility, we also hope to help push the space towards the
              public eye, and push the narrative that NFT???s aren???t
              just pictures of monkeys you see online, but something
              so much more than that.
            </p>
          </div>
        </div>
        <hr></hr>
        <br />
        <div className="accordion-container" onClick={handleAccordion}>
          <button className="accordion-item">
            WEN roadmap?
          </button>
          <div className="panel">
            <p>
              You can see a brief overview of the Tenacious Tacos
              Roadmap in the roadmap section of our website. For more
              information regarding the perks of holding a Tenacious
              Tacos NFT, please join our Discord, where you will find
              a more in depth look in to the future of Tenacious
              Tacos.
            </p>
          </div>
        </div>
        <hr></hr>
        <br />
        <div className="accordion-container" onClick={handleAccordion}>
          <button className="accordion-item">
            WEN launch?
          </button>
          <div className="panel">
            <p>
              We don???t want to set anything in stone yet, as the
              quality of the project is our number one priority. But
              we currently have plans to launch some time in Q3 2022
            </p>
          </div>
        </div>
        <hr></hr>
        <br />
        <div className="accordion-container" onClick={handleAccordion}>
          <button className="accordion-item">
            Is there a whitelist? How do I get on it?
          </button>
          <div className="panel">
            <p>
              At the time of writing there is currently no guaranteed
              way to receive a whitelist spot, however as the
              community grows we will be running constant giveaways,
              contests, games and tournaments for everybody to
              participate in. Make sure to keep an eye on the Discord
              and turn on Twitter notifications for @TenaciousTacos,
              @0xAliterit and @Nimberry#1109 in order to have the best
              chance at receiving a spot!
            </p>
          </div>
        </div>
        <hr></hr>
        <br />
        <br />
      </div>
    </Wrapper>
  );
}

export default Faqs;
