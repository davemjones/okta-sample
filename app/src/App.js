import Header from "./components/Header";
import {Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import "./app.css";

const App = ({ children }) => {
  return (
    <Container className="app">
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export default App;
