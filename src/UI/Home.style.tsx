import styled from "styled-components";

export const GridContainer = styled.div`
  background-color: var(--light-gray);
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(5, 70px);
  grid-template-rows: repeat(2, 70px);
  grid-gap: 7px;
`;

export const BoxTitle = styled.div`
  width: 140px;
  background-color: var(--primary-main);
  border-radius: 5px;
  position: absolute;
  top: -18px;
  left: 20px;
  z-index: 3;
  p {
    text-align: center;
    font-weight: 600;
    color: var(--white);
    margin: 6px;
  }
`;

export const VillagerBox = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: var(--gray);
    img {
      width: 50px;
    }
  }
  div:nth-child(2) {
    text-align: center;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    width: 100%;
    background-color: var(--white);
    font-size: 14px;
  }
`;
