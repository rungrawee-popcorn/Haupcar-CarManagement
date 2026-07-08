import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CarForm from "../components/CarForm";

import { getCarById, updateCar } from "../services/carService";

function EditCar() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    LicensePlate: "",

    Brand: "",

    Model: "",

    Note: "",
  });

  const [loading, setLoading] = useState(true);

  // Load existing car data
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const data = await getCarById(id);

        setFormData({
          LicensePlate: data.LicensePlate,

          Brand: data.Brand,

          Model: data.Model,

          Note: data.Note || "",
        });
      } catch (error) {
        console.error(error);

        alert("Failed to load car");
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,

      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await updateCar(id, formData);

      alert("Car updated successfully");

      navigate("/cars");
    } catch (error) {
      console.error(error);

      alert("Failed to update car");
    }
  };

  if (loading) {
    return <div className="container py-5 text-center">Loading...</div>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow">
            <div className="card-header bg-white">
              <h3 className="mb-0">Edit Car</h3>
            </div>

            <div className="card-body">
              <CarForm
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitText="Update"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCar;
