import Header from "./components/Header";
import "./app.css";

function App({ children }) {
  return (
    <div className="app">
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default App;
