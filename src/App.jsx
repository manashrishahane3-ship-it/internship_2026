import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Products Page</h1>
      <h2>Cart Items: {cart.length}</h2>

      {cart.length > 0 && (
        <div
          style={{
            border: "1px solid green",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>Added to Cart</h3>
          {cart.map((item, index) => (
            <p key={`${item.id}-${index}`}>{item.title}</p>
          ))}
        </div>
      )}

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            width="100"
          />

          <h3>{product.title}</h3>

          <p>₹ {product.price}</p>

          <button
            onClick={() => handleAddToCart(product)}
            style={{
              backgroundColor: "black",
              color: "white",
              border: "none",
              padding: "8px 14px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;