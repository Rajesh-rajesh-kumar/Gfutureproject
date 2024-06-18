import './App.css';  
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loadingspinner from "./components/Loadingspinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Homepage = lazy(() => import("./components/Homepage"));

const Login=lazy(()=>import('./components/Login'))
const ProductDetail=lazy(()=>import('./components/ProductDetail'))
const Signup=lazy(()=>import("./components/Signup"));
const Cart=lazy(()=>import("./components/Cart"))
const ShippingScreen=lazy(()=>import("./components/ShippingScreen"))
// const MyProfile=lazy(()=>import("./components/MyProfile"))
function App() {
  return (
     <div  className='App'  >  

<Suspense fallback={<Loadingspinner />}>
        <Header />

        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/signin"  element={<Login/>}    />
          <Route  path="/shipping" element={<ShippingScreen/>}  /> 
          <Route  path="/cart/:id"  element={<Cart/>}   />
          <Route path="/product/:id" element={<ProductDetail/>}/>
          <Route   path="/signup" element={<Signup/>} />
          {/* <Route  path="/myprofile" element={<MyProfile/>}   /> */}
           
    
        </Routes>
        <ToastContainer/>

        <Footer />
      </Suspense>
        
     </div>
  );
}

export default App;
