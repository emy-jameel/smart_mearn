	import { BrowserRouter , Route , Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage ";
import AuthProvider from "./context/Auth/AuthProvider";
import LoginPage from "./pages/login page";


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
	        </Routes>
	      </BrowserRouter>
	    </AuthProvider>

		

	  
	</>
	  )
	}

	export default App
