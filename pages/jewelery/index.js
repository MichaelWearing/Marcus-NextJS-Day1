// Styled Components
import { Wrapper, Title, ProductGrid } from "./jewelery.styles";

// Data
const products = require("../../data/data.json");

// Components
import Header from "../header/index";
import Product from "../product/index";

export default function Jewelery() {
  const printJeweleryProducts = () => {
    return products.map((product) => {
      if (product.category === "jewelery") {
        return (
          <Product key={product.id} title={product.title} img={product.image} />
        );
      }
    });
  };

  return (
    <Wrapper>
      <Header />
      <Title>Jewelery</Title>
      <ProductGrid>{printJeweleryProducts()}</ProductGrid>
    </Wrapper>
  );
}
