function CarTable({ cars }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered align-middle mb-0">
        <thead className="table-dark">
          <tr>
            <th className="text-center" style={{ width: "70px" }}>
              #
            </th>

            <th>License Plate</th>

            <th>Brand</th>

            <th>Model</th>

            <th>Note</th>

            <th className="text-center" style={{ width: "170px" }}>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car, index) => (
            <tr key={car.CarId}>
              <td className="text-center">{index + 1}</td>

              <td>{car.LicensePlate}</td>

              <td>{car.Brand}</td>

              <td>{car.Model}</td>

              <td>{car.Note || "-"}</td>

              <td className="text-center">
                <button className="btn btn-warning btn-sm me-2" disabled>
                  Edit
                </button>

                <button className="btn btn-danger btn-sm" disabled>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarTable;
