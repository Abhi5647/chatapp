import "./App.css";
import { Chatarea } from "./component/Chatarea";
import { Header } from "./component/Header";
import Member from "./component/Member";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
        <div className="col-md-4">
          <Member/>
        </div>
        <div className="col-md-8" >
          <Chatarea/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
