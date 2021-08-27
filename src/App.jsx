
import  {AppContainer} from "./styles"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Navbar,Product} from "./components"
function App() {
  return (
   <AppContainer>
     <Navbar/>
     <Product/>
   </AppContainer>
  );
}

export default App;
