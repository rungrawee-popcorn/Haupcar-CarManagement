import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CarTable from "../components/CarTable";
import Pagination from "../components/Pagination";

import { getCars } from "../services/carService";

function CarList() {
  // Store car data
  const [cars, setCars] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Page size
  const pageSize = 10;

  // Navigate between pages
  const navigate = useNavigate();

  // Load data
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await getCars();

        setCars(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Pagination calculation
  const totalPages = Math.ceil(cars.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;

  const endIndex = startIndex + pageSize;

  const currentCars = cars.slice(startIndex, endIndex);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="card shadow">
            <div className="card-header bg-white">
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                  <h3 className="mb-1">Car Management</h3>

                  <small className="text-muted">Manage company vehicles</small>
                </div>

                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/cars/add")}
                >
                  + Add Car
                </button>
              </div>
            </div>

            <div className="card-body">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status" />

                  <p className="mt-3">Loading cars...</p>
                </div>
              ) : cars.length === 0 ? (
                <div className="alert alert-warning">No cars found.</div>
              ) : (
                <>
                  <CarTable cars={currentCars} />

                  <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
                    <small className="text-muted">
                      Showing <strong>{startIndex + 1}</strong>-
                      <strong>{Math.min(endIndex, cars.length)}</strong> of{" "}
                      <strong>{cars.length}</strong> cars
                    </small>
                  </div>

                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarList;
