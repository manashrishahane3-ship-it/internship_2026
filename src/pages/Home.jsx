import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to My Store...</h1>

      <p>This is Home Page.</p>

      <Link to="/products">View Products</Link>
    </div>
  );
}

export default Home;