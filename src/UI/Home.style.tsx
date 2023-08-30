import styled from "styled-components";

export const GridContainer = styled.div`
  background-color: var(--light-gray);
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(3, 70px);
  grid-template-rows: repeat(2, 70px);
  grid-gap: 10px;
  margin: 20px;

  @media (min-width: 350px) {
    grid-template-columns: repeat(4, 70px);
  }

  @media (min-width: 410px) {
    grid-template-columns: repeat(5, 70px);
  }
`;

export const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  @media (min-width: 350px) {
    width: 300px;
  }

  @media (min-width: 410px) {
    width: 400px;
  }
`;

export const BoxTitle = styled.div`
  width: 140px;
  background-color: var(--primary-main);
  border-radius: 5px;
  position: absolute;
  top: -23px;
  left: 20px;
  z-index: 3;

  p {
    text-align: center;
    font-weight: 600;
    color: var(--white);
    margin: 6px;
  }

  &.fav {
    width: 155px;
  }
`;

export const VillagerBox = styled.div`
  position: relative;
  width: 60px;
  height: 70px;
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
      height: 50px;
      padding: 5px;
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
