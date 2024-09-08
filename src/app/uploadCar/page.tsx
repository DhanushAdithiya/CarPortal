export interface CarDetails {
  carName: string;
  carManufacturer: string;
  carImage: string;
  carPrice: number;
  carManufactureYear: number;
}

export default function uploadCar() {
  return (
    <div>
      <h1>Upload your car</h1>
      <h3>Car Name</h3>
      <input type="text" name="carname" id="carname" />
      <h3>Car Manufacturer</h3>
      <input type="text" name="manufacturer" id="manufacturer" />
      <h3>Car Image</h3>
      <input type="text" name="car-image" id="car-image" />
      <h3>Manufacture Year</h3>
      <input type="text" name="manufacture-year" id="manufacture-year" />
      <h3>Price</h3>
      <input type="text" name="price" id="price" />
      <button type="submit">Upload Your Car</button>
    </div>
  );
}
