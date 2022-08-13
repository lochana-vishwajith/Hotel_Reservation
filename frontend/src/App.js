import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Accommadation from "./Screens/AccommadationScreen/Accommadation";
import FoodBeverages from "./Screens/Food&BeveragesScreen/FoodBeverages";
import Gallery from "./Screens/GalleryScreen.js/Gallery";
import Home from "./Screens/HomeScreen/Home";
import ThingsToDo from "./Screens/ThingToDoScreen/ThingsToDo";
import Register from "./Screens/RegisterComponent/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accommadation" element={<Accommadation />} />
        <Route path="/foodBeverages" element={<FoodBeverages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/thingsToDo" element={<ThingsToDo />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
