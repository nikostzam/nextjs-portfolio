import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
`;

export const NavWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: #191919;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    z-index: 1;
    letter-spacing: -1px;
    z-index: 999;
    position: fixed;

    cursor: pointer;
    span {
      font-weight: 900;
    }
  }
`;

export const MenuWrapper = styled.div`
  width: 30px;
  height: 24px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  cursor: pointer;
  position: fixed;
  right: 90px;
  @media (max-width: 450px) {
    right: 25px;
  }

  span {
    width: 30px;
    height: 5px;
    background-color: #191919;
    position: relative;
    transition: 0.3s ease-in-out;
  }
`;
