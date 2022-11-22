import styled from "styled-components";
import Backgroundimg from "../../images/homeBg.png";

const Wrapper = styled.div`
  color: #000000;
  background: url(${Backgroundimg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
  .desc-body {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 80vh;
  }
  .desc {
    display: inline-block;
    background: #65b90c;
    justify-content: center;
    align-items: center;
    padding: 50px 50px 10px 50px;
    border-radius: 20px;
    @media (max-width: 767px) {
      padding: 10px 25px 10px 25px;
    }
    // #65b90ccc
  }
  .desc-head {
    font-family: "Bebas Neue", cursive;
    letter-spacing: 3px;
    text-align: center;
    font-size: 50px;
    font-weight: 500px;
    color: #ffffff;
    margin-bottom: 20px;
    @media (max-width: 767px) {
      font-size: 30px;
      font-weight: 300px;
    }
  }
  ul {
    font-size: 24px;
    color: #ffffff;
    font-family: "Karla", sans-serif;
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
  ul.dash {
    list-style: none;
    margin-left: 0;
    padding-left: 1em;
  }
  ul.dash > li:before {
    display: inline-block;
    content: "-";
    width: 1em;
    margin-left: -1em;
  }
  .button_discord {
    /* background: #65b90ccc; */
    padding: 20px 100px 20px 100px;
    /* border-radius: 20px; */
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 15px;
    @media (max-width: 767px) {
      padding: 10px 50px 10px 50px;
    }
  }
  .discord_icon {
    margin-right: 10px;
    margin-bottom: -2px;
  }
  .btn_text {
    text-decoration: none;
    font-family: "Bebas Neue", cursive;
    font-size: 24px;
    color: #ffffff;
  }

  > div {
    padding: 0 50px;
    padding-top: 30px;
    position: relative;
    @media (max-width: 575px) {
      padding: 0 20px;
      padding-top: 30px;
    }
    .buttonGroups {
      width: auto;
      @media (max-width: 767px) {
        position: fixed;
        left: 0;
        top: 0;
        min-height: 100%;
        display: flex;
        width: 0%;
        flex-direction: column;
        align-items: center;
        background: #ffffff;
        border-radius: 0 5px 5px 0;
        overflow: hidden;
        transition: 0.3s ease;
        z-index: 9999;
      }
      a {
        text-decoration: none;
        color: #000000;
        padding: 20px 40px;
        font-size: 28px;
        font-weight: bold;
        font-family: "proxima-nova", sans-serif;
        :not(:first-child) {
          margin-left: 20px;
          @media (max-width: 767px) {
            margin-left: 0;
            color: #000000;
          }
        }
        @media (max-width: 1024px) {
          font-size: 16px;
          padding: 10px 25px;
        }
        @media (max-width: 768px) {
          padding: 10px 15px;
        }
        @media (max-width: 767px) {
          padding: 10px 20px;
          width: 100%;
          border-bottom: 1px solid #bbbbbb;
          border-radius: 0;
        }
      }
      .closeMobileMenu {
        display: none;
        font-size: 24px;
        border: none;
        background-color: transparent;
        margin-left: auto;
        padding: 15px;
        @media (max-width: 767px) {
          display: block;
        }
      }
    }
    .mobileMenu {
      display: none;
      border: none;
      font-size: 26px;
      color: #ffffff;
      background-color: transparent;
      @media (max-width: 767px) {
        display: block;
      }
    }
    .logo {
      @media (max-width: 767px) {
        display: none;
      }
    }
    .socialIcons {
      padding-top: 10px;
      a {
        text-decoration: none;
        color: #ffffff;
        font-size: 40px;
        :not(:first-child) {
          margin-left: 15px;
        }
        @media (max-width: 1024px) {
          font-size: 36px;
        }
        @media (max-width: 768px) {
          font-size: 35px;
        }
      }
    }
  }
`;

export default Wrapper;
