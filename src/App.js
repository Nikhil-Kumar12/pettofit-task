import Landing from "../src/Components/Home/Landing";
import Card from "./Components/Cards/Card";
import "./App.css";

function App() {
  const data = [0, 1, 2, 3, 4, 5];
  return (
    <div className="App ">
      <Landing />
      <p>Products</p>
      <div className="cardContainer">
        {data.map(() => {
          return <Card />;
        })}
      </div>
    </div>
  );
}

export default App;
