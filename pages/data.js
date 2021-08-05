import Image from "next/image";

const data = () => {
  const products = require("../data/data.json");

  const printProducts = () => {
    return products.map((product) => {
      return (
        <div key={product.id}>
          <p>{product.title}</p>
          <div
            style={{
              width: "100px",
              height: "100px",
              position: "relative",
            }}
          >
            <Image
              alt={product.title}
              src={product.image}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Data</h1>
      {printProducts()}
    </div>
  );
};

export default data;
