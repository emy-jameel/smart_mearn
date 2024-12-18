	import { BrowserRouter , Route , Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage ";
import AuthProvider from "./context/Auth/AuthProvider";
import LoginPage from "./pages/login page";
import ProtectedRoute from "./component/ProtectedRoute";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";


	function App() {

	  return (
		<>
   <AuthProvider>
	      <BrowserRouter>
	        <Navbar />
	        <Routes>
	       
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/order-success" element={<OrderSuccessPage />} />

	        </Routes>
	      </BrowserRouter>
	    </AuthProvider>

		

	  
	</>
	  )
	}

	export default App
