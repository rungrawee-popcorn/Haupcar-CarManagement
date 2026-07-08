import { useState } from "react";

function CarForm({ formData, onChange, onSubmit, submitText }) {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    // License Plate validation
    if (!formData.LicensePlate.trim()) {
      validationErrors.LicensePlate = "License Plate is required";
    }

    // Brand validation
    if (!formData.Brand.trim()) {
      validationErrors.Brand = "Brand is required";
    }

    // Model validation
    if (!formData.Model.trim()) {
      validationErrors.Model = "Model is required";
    }

    setErrors(validationErrors);

    // Stop submit if error
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Pass to parent component
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* License Plate */}
      <div className="mb-3">
        <label className="form-label">
          License Plate<span className="text-danger">*</span>
        </label>

        <input
          type="text"
          className={`form-control ${errors.LicensePlate ? "is-invalid" : ""}`}
          name="LicensePlate"
          value={formData.LicensePlate}
          onChange={onChange}
        />

        {errors.LicensePlate && (
          <div className="invalid-feedback">{errors.LicensePlate}</div>
        )}
      </div>

      {/* Brand */}
      <div className="mb-3">
        <label className="form-label">
          Brand<span className="text-danger">*</span>
        </label>

        <input
          type="text"
          className={`form-control ${errors.Brand ? "is-invalid" : ""}`}
          name="Brand"
          value={formData.Brand}
          onChange={onChange}
        />

        {errors.Brand && <div className="invalid-feedback">{errors.Brand}</div>}
      </div>

      {/* Model */}
      <div className="mb-3">
        <label className="form-label">
          Model<span className="text-danger">*</span>
        </label>

        <input
          type="text"
          className={`form-control ${errors.Model ? "is-invalid" : ""}`}
          name="Model"
          value={formData.Model}
          onChange={onChange}
        />

        {errors.Model && <div className="invalid-feedback">{errors.Model}</div>}
      </div>

      {/* Note */}
      <div className="mb-4">
        <label className="form-label">Note</label>

        <textarea
          rows="3"
          className="form-control"
          name="Note"
          value={formData.Note}
          onChange={onChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {submitText}
      </button>
    </form>
  );
}

export default CarForm;
