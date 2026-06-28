import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Your cart is empty</h2>
        <p>Start shopping to add items to your cart!</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '14px' }}>{item.title}</h3>
            <p>₹ {item.price.toFixed(2)}</p>
            <div>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '5px 10px', cursor: 'pointer' }}>-</button>
              <span style={{ margin: '0 10px' }}>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '5px 10px', cursor: 'pointer' }}>+</button>
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px', color: 'red', cursor: 'pointer' }}>Remove</button>
            </div>
          </div>
          <div style={{ fontWeight: 'bold' }}>
            ₹ {(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      ))}
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <h3>Total: ₹ {getTotalPrice().toFixed(2)}</h3>
        <button onClick={clearCart} style={{ marginRight: '10px', padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Clear Cart</button>
        <button style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;