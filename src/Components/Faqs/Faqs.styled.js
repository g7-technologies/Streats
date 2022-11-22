import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1055px;
  width: 100%;
  margin: auto;
  padding: 50px 50px;
  @media (max-width: 700px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  h3 {
    font-size: 50px;
    font-weight: 500px;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 6px;
    text-align: center;
    margin-bottom: 50px;
  }
  .section_heading {
    align-items: center;
    align-self: center;
    justify-content: center;
    display: flex;
    margin-bottom: 50px;
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
  .accordion-container {
    padding: 0 30px;
    font-family: "Karla", sans-serif;
    position: relative;
    @media (max-width: 640px) {
      padding: 0;
    }
    ::after {
      width: 15px;
      height: 15px;
      position: absolute;
      right: 100%;
      top: 25px;
      transform: translateX(50%);
      background-color: #ffffff;
      border-radius: 50%;
      @media (max-width: 640px) {
        display: none;
      }
    }
    :last-child {
      ::after {
        top: auto;
        bottom: 30px;
      }
    }
    .accordion-item {
      background-color: transparent;
      color: #fff;
      cursor: pointer;
      padding: 18px;
      width: 100%;
      border: none;
      text-align: left;
      outline: none;
      font-size: 25px;
      font-weight: 400;
      transition: 0.4s;
      position: relative;
      font-family: "proxima-nova", sans-serif !important;
      @media (max-width: 640px) {
        font-size: 18px;
        padding-left: 0;
      }
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: url("https://api.iconify.design/akar-icons/plus.svg?color=white") no-repeat center center / contain;
      }
    }
    .active {
      :after {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        background: url("https://api.iconify.design/akar-icons/arrow-up.svg?color=white") no-repeat center center /
          contain;
      }
    }
    .panel {
      padding: 0 30px;
      background-color: transparent;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out;
      p {
        padding: 30px 0;
        font-size: 18px;
        font-weight: 400;
        font-family: "proxima-nova", sans-serif !important;
      }
    }
  }
`;

export default Wrapper;
