import Hello from "./Component";
import Welcome from "./Welcome";
import Counter from "./Counter";
import Bai1 from "./bai1";
import Bai2 from "./bai2";
import Bai3 from "./bai3";
import Bai4 from "./bai4";
import Bai5 from "./bai5";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Hello />
          <Welcome name="Huy" />
          <Counter />
          <br />
          <Bai1 />
          <Bai2 />
          <Bai3 />
          <Bai4 />
          <Bai5 />
        </div>
      </header>
    </div>
  );
}

export default App;
