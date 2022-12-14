import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #011816;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 0;
  top: 0;
  z-index: 999;
  .loader-div {
    width: 300px;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader-gif {
    max-width: 100%;
    width: 20%;
    object-fit: contain;
  }
  .loader-img {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    object-fit: contain;
    position: absolute;
    width: 80px;
  }
`;
export default Wrapper;