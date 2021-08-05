// Styled Components
import { Wrapper, Title, ProductGrid } from "./women.styles";

// Data
const products = require("../../data/data.json");

// Components
import Header from "../header/index";
import Product from "../product/index";

export default function Woman() {
  const printWomansProducts = () => {
    return products.map((product) => {
      if (product.category === "women's clothing") {
        return (
          <Product key={product.id} title={product.title} img={product.image} />
        );
      }
    });
  };

  return (
    <Wrapper>
      <Header />
      <Title>Woman</Title>
      <ProductGrid>{printWomansProducts()}</ProductGrid>
    </Wrapper>
  );
}
