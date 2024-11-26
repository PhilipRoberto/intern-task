import { Routes, Route } from "react-router-dom"
import Home from "@/pages/home";
import Navbar from "./components/ui/navbar";


const App = () => {
  return (
    <div className="app-container flex flex-col align-center scroll-smooth">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App;