import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;
  background-color: #191919;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    max-width: 960px;
  }
  @media (max-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0 auto;
      background: #191919;
      max-width: 100% !important;
      color: white;
    `}
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  justify-content: center;
  margin: 0 auto;
  ${(props) =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${(props) =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${(props) =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${(props) =>
    props.noHeight &&
    css`
      height: 0;
    `};
`;

export const FooterContent = styled.div`
  color: white;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  flex: 1;
  align-self: center;
  @media (max-width: 1216px) {
    p {
      font-size: 20px;
    }
  }
  p {
    span {
      font-weight: 400;
      font-size: 16px;
      margin-right: 5px;
    }
  }
  ${(props) =>
    props.wider &&
    css`
      flex: 2;
    `};
`;
export const FooterNav = styled(motion.div)`
  height: 300px;
  margin-top: 296px;
`;

export const FooterSocial = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  @media (max-width: 1216px) {
    p {
      font-size: 14px;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    margin-right: 5px;
  }
  a {
    position: relative;
    display: block;
    width: 44px;
    height: 44px;
    padding: 8px;

    svg {
      width: 100%;
      height: 100%;
      path {
        fill: white;
      }
      &:hover {
        path {
          fill: #519e67;
        }
      }
    }
  }
`;
