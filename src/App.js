import Table from "./components/table";
import "./styles.css";
import data from "./data.js";
export default function App() {
  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}
