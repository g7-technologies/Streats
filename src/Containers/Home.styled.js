import styled from "styled-components";

const Wrapper = styled.div`
  footer {
    margin-top: 30px;
    margin-bottom: 10px;
    padding: 15px 0 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #011816;
    .footerSocialIcons {
      a {
        text-decoration: none;
        color: #ffffff;
        font-size: 30px;
        :not(:first-child) {
          margin-left: 15px;
        }
      }
    }
  }
`;

export default Wrapper;
