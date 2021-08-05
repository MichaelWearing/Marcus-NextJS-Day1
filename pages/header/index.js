import Link from "next/link";

// Styled Components
import { Wrapper, Title, CatagoryWrapper, CatagoryLink } from "./header.styles";

export default function Header() {
  return (
    <Wrapper>
      <Link href={"/"} passHref>
        <Title>Mikey Store</Title>
      </Link>
      <CatagoryWrapper>
        <Link href={"/men"} passHref>
          <CatagoryLink>Mens Clothing</CatagoryLink>
        </Link>
        <Link href={"/women"} passHref>
          <CatagoryLink>Womens Clothing</CatagoryLink>
        </Link>
        <Link href={"/jewelery"} passHref>
          <CatagoryLink>Jewelery</CatagoryLink>
        </Link>
        <Link href={"/electronics"} passHref>
          <CatagoryLink>Electronics</CatagoryLink>
        </Link>
      </CatagoryWrapper>
    </Wrapper>
  );
}
