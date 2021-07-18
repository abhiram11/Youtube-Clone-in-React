import Header from "./Header";
import "./App.css";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

export const justAnAlert = () => {
  alert("Coming soon!");
};

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body: Sidebar, Videos, Genre specifier row if possible */}
      <div className="body">
        <Sidebar />
        <Videos />
      </div>
    </div>
  );
}

export default App;
