import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import CarList from "./pages/CarList";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";

function App() {
  return (
    <>
      <Navbar />

      <main className="py-4">
        <Routes>
          {/* Redirect root URL to car list */}
          <Route path="/" element={<Navigate to="/cars" replace />} />

          {/* Car list page */}
          <Route path="/cars" element={<CarList />} />

          {/* Add car page */}
          <Route path="/cars/add" element={<AddCar />} />

          {/* Edit car page */}
          <Route path="/cars/edit/:id" element={<EditCar />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
