import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CarForm from "../components/CarForm";

import { createCar } from "../services/carService";

function AddCar() {
  const navigate = useNavigate();

  // Store form data
  const [formData, setFormData] = useState({
    LicensePlate: "",

    Brand: "",

    Model: "",

    Note: "",
  });

  // Prevent multiple submit
  const [submitting, setSubmitting] = useState(false);

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,

      [name]: value,
    }));
  };

  // Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setSubmitting(true);

      await createCar(formData);

      alert("Car created successfully");

      navigate("/cars");
    } catch (error) {
      console.error("Create car failed:", error);

      alert("Failed to create car");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-header bg-white">
              <h3 className="mb-0">Add Car</h3>
            </div>

            <div className="card-body">
              <CarForm
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitText={submitting ? "Saving..." : "Save"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCar;
