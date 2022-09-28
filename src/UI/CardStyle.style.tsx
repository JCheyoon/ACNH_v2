import styled from "styled-components";

export const MyCardItem = styled.div`
  background-color: var(--white);
  color: black;
  padding: 5px;
  margin: 5px;
  text-align: left;
  border-radius: 5px;
  border: 1px solid var(--light-gray);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  &.title {
    background-color: var(--primary-main);
    color: white;
    text-align: center;
    border: 1px solid transparent;
    width: 100px;
  }
`;

export const CatchPhrase = styled.div`
  background-color: var(--secondary-main);
  position: absolute;
  top: 108px;
  left: 256px;
  width: 105px;
  height: 36px;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

export const CatchPhraseBubble = styled.div`
  width: 12px;
  height: 12px;
  background-color: var(--secondary-main);
  transform: rotate(27deg) skewX(5deg);
  position: absolute;
  top: 21px;
  left: -3px;
`;

export const GridBox = styled.div`
  padding-top: 40px;
  width: 350px;
  justify-content: center;

  @media (min-width: 900px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const ScrollUpStyLe = styled.div`
  position: fixed;
  z-index: 11;
  right: 25px;
  bottom: 25px;
  opacity: 0;
  transition: ease-in-out 300ms;
  pointer-events: none;
  &.visible {
    opacity: 1;
    pointer-events: auto;
    cursor: pointer;
  }
`;
