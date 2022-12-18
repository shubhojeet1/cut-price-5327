import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Topnav from "./component/Home/Topnav"
import Footer from "./component/Home/Footer"
import BlackNav from "./component/Home/BlackNav";
import AllRoutes from "./component/Routes/AllRoutes";
// import slides from "./component/Home/slides"
import Women from "./component/WomensPage/Women"
import Menpage from "./pages/MenPage";






function App() {
  return (
    <div >

    
     {/* <Login /> */}

{/* <AllRoutes/> */}
     <Topnav/>
    
      <BlackNav/>
      <Register />
      {/* <Menpage/> */}

      {/* <Women/> */}
      <Footer/>
      {/* <slides/> */}

    </div>
  );
}

export default App;