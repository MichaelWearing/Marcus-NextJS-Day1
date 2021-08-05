// Styled Components
import { Wrapper, Title, ProductGrid } from "./men.styles";

// Data
const products = require("../../data/data.json");

// Components
import Header from "../header/index";
import Product from "../product/index";

export default function Men() {
  const printMensProducts = () => {
    return products.map((product) => {
      if (product.category === "men's clothing") {
        return (
          <Product key={product.id} title={product.title} img={product.image} />
        );
      }
    });
  };

  return (
    <Wrapper>
      <Header />
      <Title>Men</Title>
      <ProductGrid>{printMensProducts()}</ProductGrid>
    </Wrapper>
  );
}
