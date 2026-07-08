function CarForm({ formData, onChange, onSubmit, submitText }) {
  return (
    <form onSubmit={onSubmit}>
      {/* License Plate */}
      <div className="mb-3">
        <label className="form-label">License Plate</label>

        <input
          type="text"
          className="form-control"
          name="LicensePlate"
          value={formData.LicensePlate}
          onChange={onChange}
          required
        />
      </div>

      {/* Brand */}
      <div className="mb-3">
        <label className="form-label">Brand</label>

        <input
          type="text"
          className="form-control"
          name="Brand"
          value={formData.Brand}
          onChange={onChange}
          required
        />
      </div>

      {/* Model */}
      <div className="mb-3">
        <label className="form-label">Model</label>

        <input
          type="text"
          className="form-control"
          name="Model"
          value={formData.Model}
          onChange={onChange}
          required
        />
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
