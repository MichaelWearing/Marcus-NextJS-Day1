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

/* export const Product = styled.div`
  background: violet;

  padding: 1rem 1.5rem;
  display: grid;
  place-items: center;
`; */

///

/* export const CatagoryWrapper = styled.div`
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
 */
