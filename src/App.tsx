import "./App.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <div className="fabric">фабрика по производству биороботов</div>

        <div className="purse">purse</div>
        <div className="market">market</div>
        <div className="storage">storage</div>
        <div className="production">production</div>
      </div>
    </div>
  );
}

export default App;
