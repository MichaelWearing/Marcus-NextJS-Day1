import styled from "styled-components";

export const Wrapper = styled.div`
  background: #f0f2f5;
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  padding: 2vh 0;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  font-size: 10vh;
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (max-width: 1140px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 5vh;
  }
`;
