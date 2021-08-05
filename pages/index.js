// Styled Components
import { Wrapper, Title, ProductGrid } from "./home.styles";

// Data
const products = require("../data/data.json");

// Components
import Header from "./header/index";
import Product from "./product/index";

export default function Home() {
  const printProducts = () => {
    return products.map((product) => {
      return (
        <Product key={product.id} id={product.id} title={product.title} img={product.image} />
      );
    });
  };

  return (
    <Wrapper>
      <Header />
      <Title>Home</Title>
      <ProductGrid>{printProducts()}</ProductGrid>
    </Wrapper>
  );
}
