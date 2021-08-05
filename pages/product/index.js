import Image from "next/image";
import Link from "next/link";

// Styled Components
import { Wrapper, ProductTitle, ImageWrapper } from "./product.styles";

const Product = ({ id, title, img }) => {
  return (
    <Link href={`/product/${id}`} passHref>
      <Wrapper key={id}>
        <ProductTitle>{title}</ProductTitle>
        <ImageWrapper>
          <Image alt={title} src={img} layout="fill" objectFit="contain" />
        </ImageWrapper>
      </Wrapper>
    </Link>
  );
};

export default Product;
