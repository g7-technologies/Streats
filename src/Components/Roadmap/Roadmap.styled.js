import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 50px;
  padding-bottom: 100px;
  @media (max-width: 575px) {
    padding: 20px 20px;
  }
  margin-bottom: 50px;
  h3 {
    font-size: 50px;
    font-weight: 500px;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 3px;
    text-align: center;
    color: #fff;
  }
  .new_font {
    font-family: "proxima-nova", sans-serif;
    letter-spacing: 1px;
    font-weight: 40px;
  }
  .section_heading {
    align-items: center;
    align-self: center;
    justify-content: center;
    display: flex;
  }
  .road-title {
    align-self: flex-start;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: flex-start;
    font-size: 4rem;
    color: #9ca631;
    color: white;
    font-weight: 500;
    justify-content: center;
    gap: 5px;
    /*font-family: "Hagin-Caps", sans-serif !important;*/
    font-family: "Jua", sans-serif !important;
  }
  .road-title span {
    padding-top: 5px;
    color: #a7bd39;
    border-bottom: 4px dashed white;
    font-size: 2.8rem;
  }
  .road-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: #021816;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 0px;
  }
  .roadmap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-inline: 50px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1440px;
  }
  .hide-scroll::-webkit-scrollbar,
  .cont::-webkit-scrollbar {
    display: none !important;
  }
  .roadmap .cont {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }
  .cont {
    align-self: center;
    max-width: fit-content;
    overflow-y: scroll;
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
  .roadmap-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 3rem;
    position: relative;
    isolation: isolate;
    width: 100%;
  }
  .roadline {
    position: absolute;
    left: 48%;
    top: 15%;
    transform: translateX(-50%);
    z-index: -1;
    object-fit: contain;
    height: 56%;
  }
  .grid-text {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    flex-direction: column;
    width: 100%;
  }
  .right_align {
    margin-left: 60px;
    @media (max-width: 767px) {
      margin-left: 0px;
    }
  }
  .grid-img {
    align-self: center;
    max-width: 300px;
    justify-self: center;
  }
  .grid-img:last-of-type {
    align-self: flex-start;
  }
  .grid-img img {
    max-width: 100%;
    object-fit: contain;
  }
  .grid-text h1 {
    font-size: 53px;
    line-height: 53px;
    color: #ffffff;
  }
  .grid-text p {
    font-size: 19px;
    line-height: 23px;
    color: #ffffff;
    max-width: 580px;
  }
  @media screen and (max-width: 1314px) {
    .roadline {
      left: 48%;
      top: 18%;
      height: 53%;
    }
    .grid-img2 {
      margin-right: 40px;
    }
  }

  @media screen and (max-width: 1230px) {
    .grid-img2 {
      margin-right: 0px;
    }
    .roadline {
      display: none;
    }
    .roadmap-grid {
      margin-top: 3rem;
      grid-template-rows: auto auto auto;
    }
    .grid-img:last-of-type {
      align-self: center;
    }
    .grid-text p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 770px) {
    .roadmap {
      padding-inline: 15px;
    }
    .roadmap-grid {
      grid-template-columns: 1fr;
      grid-template-rows: none;
      grid-auto-rows: auto;
      place-items: center;
      row-gap: 1rem;
      margin-top: 1rem;
    }
    .grid-img {
      margin-top: 6rem;
    }
    .grid-img1 {
      grid-row: 1/2;
    }
    .grid-img3 {
      grid-row: 5/6;
    }
    .grid-text {
      align-items: center;
      text-align: center;
    }
    .road-title {
      align-self: center;
    }
  }
`;
export default Wrapper;
