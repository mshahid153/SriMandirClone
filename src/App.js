import { Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Work from "./Page/Work"

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Work />} />
        </Routes>
    </>
  );
}

export default App;


