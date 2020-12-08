import './App.css';
import Site from './containers/Site/Site'
import { BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
        <Site/>
      </BrowserRouter>
    </div>
  );
}

export default App;
