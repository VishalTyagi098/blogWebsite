import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Trending from "./Components/Trending";
import Footer from "./Components/Footer";
import MainWrapper from "./Components/MainWrapper";
import Tech from "./Components/Technology/Tech";

import { Route, Switch, Link,Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
        <Navbar />

        {/* Homepage Switch */}
        
            <Header />
            <Trending />
            {/* MainWrapper contains Articles.js and Filter.js */}
            <MainWrapper />
          

          <Route path="/tech/">
            <Tech />
          </Route>
        

        <Footer />
      
    </div>
  );
}

export default App;
