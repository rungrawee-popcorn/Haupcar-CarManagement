import Navbar from "./components/Navbar";
import CarList from "./pages/CarList";

function App() {
  return (
    <>
      <Navbar />

      <main className="py-4">
        <CarList />
      </main>
    </>
  );
}

export default App;
