import { RouterProvider } from "react-router";
import { router } from "./routes";
import { CartProvider } from "./CartContext";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;