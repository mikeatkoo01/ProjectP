import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Home/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <body>
      <div>
        <BrowserRouter>
      
          <nav className="navbar align-content-center " style={{ display: "flex", backgroundColor: "  #0000ff" }}>
            <div>

              <div className="leeds"></div>
              {/* <img class="text-center" style={{ width: "10%" }} src={homeLogo}></img> */}
              <Link to='/'><button type="button" className="btn btn-primary btn-lg" style={{ margin: "10px", color: "#ffff00" }}><strong>Home</strong></button></Link>
              <Link to='/About Me'><button type="button" className="btn btn-primary btn-lg" style={{ margin: "10px", color: "#ffff00" }}><strong>About Me</strong></button></Link>
              <Link to='/Time Line'><button type="button" className="btn btn-primary btn-lg" style={{ margin: "10px", color: "#ffff00" }}><strong>Time Line</strong></button> </Link>
              <Link to='/Leeds United'><button type="button" className="btn btn-primary btn-lg  " style={{ margin: "10px", color: "#ffff00" }}><strong>Leeds United</strong></button> </Link>
             
            </div>

          </nav>

          <div style={{ width: "100%" }}>
            
          </div>
          <Routes>
          {/* <Route path="/" element={<ProtectedRoutes />}>
            <Route element={<Homepage />} path="/" />
          </Route> */}
          <Route path="/" element={<Home />} />
          
          
        
      

            </Routes>


        </BrowserRouter>
<Footer />


      </div>
    </body>


   
  );
}

export default App;
