import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 50px;
  padding-bottom: 100px;
  @media (max-width: 575px) {
    padding: 20px 20px;
  }
  h3 {
    font-size: 50px;
    font-weight: 500px;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 50px;
    color: #fff;
  }
  .anchor {
    color: #65b90c;
  }
  .section_heading {
    align-items: center;
    align-self: center;
    justify-content: center;
    display: flex;
    margin-bottom: 70px;
    align-content: center;
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
  > div {
    :first-child {
      @media (max-width: 992px) {
        flex-direction: column-reverse;
      }
    }
    :last-child {
      @media (max-width: 992px) {
        flex-direction: column-reverse;
      }
    }
    @media (max-width: 992px) {
      flex-direction: column;
      flex-wrap: wrap;
    }
    @media (max-width: 768px) {
      margin-top: 50px;
    }
    .overviewText {
      padding-right: 20px;
      @media (max-width: 992px) {
        padding-top: 20px;
      }
      .q {
        font-size: 45px;
        font-weight: 500px;
        font-family: "Bebas Neue", cursive;
        letter-spacing: 3px;
        text-align: left;
        margin-bottom: 10px;
        @media (max-width: 575px) {
          font-size: 35px;
        }
      }
      p {
        font-size: 22px;
        font-weight: 400;
        line-height: 1.2;
        font-family: "Karla", sans-serif;
        @media (max-width: 575px) {
          font-size: 16px;
        }
      }
    }
    .overviewImg {
      min-width: 500px;
      @media (max-width: 575px) {
        min-width: 300px;
      }
      img {
        margin-top: 50px;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default Wrapper;
