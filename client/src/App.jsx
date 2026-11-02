import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Promotion from "./components/Promotion";
import "./index.css";

const App = () => {
  return (
    <div className="root">
      <Hero />
      <Promotion />
      <Latest />
    </div>
  );
};

export default App;
