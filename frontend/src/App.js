import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "devextreme/dist/css/dx.light.css";
import "react-slideshow-image/dist/styles.css";

import Accommadation from "./Screens/AccommadationScreen/Accommadation";
import FoodBeverages from "./Screens/Food&BeveragesScreen/FoodBeverages";
import Gallery from "./Screens/GalleryScreen.js/Gallery";
import Home from "./Screens/HomeScreen/Home";
import ThingsToDo from "./Screens/ThingToDoScreen/ThingsToDo";
import Register from "./Screens/RegisterComponent/Register";
import LoginComponent from "./Screens/LoginComonent/LoginComponent";
import Footer from "./Components/Footer/Footer";
import RoomDetails from "./Screens/RoomDetailsComponent/RoomDetails";
import PayementGateway from "./Screens/PaymentGatewayScreen/PayementGateway";
import AdminDash from "./Screens/AdminDashboardComponent/AdminDash";

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
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/roomDetails" element={<RoomDetails />} />
        <Route path="/payment" element={<PayementGateway />} />
        <Route path="/adminDash" element={<AdminDash />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
