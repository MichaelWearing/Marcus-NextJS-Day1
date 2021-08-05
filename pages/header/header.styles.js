import styled from "styled-components";

export const Wrapper = styled.div`
  background: deepskyblue;
`;

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  padding: 2vh 0;

  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);


  &:hover,
  &:focus {
    transform: translateY(-3px);
    color: white;
  }
`;

export const CatagoryWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin: 0 auto;
  padding-bottom: 1vh;

  width: 130vh;
`;

export const CatagoryLink = styled.a`
  color: black;
  font-size: 25px;

  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    transform: translateY(-3px);
    color: white;
  }
`;
