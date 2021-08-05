import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;

  padding: 1rem 1.5rem;
  margin: 5px;
  display: grid;
  place-items: center;

  border: 1px solid black;
  border-radius: 1vh;

  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;

export const ProductTitle = styled.h3`
  font-size: 12px;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;
