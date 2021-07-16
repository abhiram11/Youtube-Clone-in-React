import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body: Sidebar, Videos, Genre specifier row if possible */}
      <div className="body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
