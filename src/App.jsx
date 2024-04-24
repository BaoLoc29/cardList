import { Routes, Route } from "react-router-dom";
import CardList from "./components/CardList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CardList />} />
      </Routes>
    </>
  );
}

export default App;
