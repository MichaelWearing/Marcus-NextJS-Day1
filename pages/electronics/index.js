// Styled Components
import { Wrapper, Title, ProductGrid } from "./electronics.styles";

// Data
const products = require("../../data/data.json");

// Components
import Header from "../header/index";
import Product from "../product/index";

export default function Electronics() {
  const printElectronicsProducts = () => {
    return products.map((product) => {
      if (product.category === "electronics") {
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
      <ProductGrid>{printElectronicsProducts()}</ProductGrid>
    </Wrapper>
  );
}
