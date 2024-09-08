"use client";
import { useState } from "react";
import { uploadCar } from "../actions/uploadCar";

export interface CarDetails {
  carName: string;
  carManufacturer: string;
  carImage: string;
  carPrice: number;
  carManufactureYear: number;
}

export default function UploadCar() {
  const [carName, setCarName] = useState("");
  const [carManufacturer, setCarManufacturer] = useState("");
  const [carImage, setCarImage] = useState("");
  const [carManufactureYear, setCarManufactureYear] = useState(0);
  const [carPrice, setCarPrice] = useState(0);

  async function handleClick() {
    const carDetails: CarDetails = {
      carName,
      carManufacturer,
      carImage,
      carPrice,
      carManufactureYear,
    };

    await uploadCar(carDetails);
  }

  return (
    <div>
      <h1>Upload your car</h1>
      <h3>Car Name</h3>
      <input
        onChange={(event) => setCarName(event.target.value)}
        type="text"
        name="carname"
        id="carname"
      />
      <h3>Car Manufacturer</h3>
      <input
        onChange={(event) => setCarManufacturer(event.target.value)}
        type="text"
        name="manufacturer"
        id="manufacturer"
      />
      <h3>Car Image</h3>
      <input
        onChange={(event) => setCarImage(event.target.value)}
        type="text"
        name="car-image"
        id="car-image"
      />
      <h3>Manufacture Year</h3>
      <input
        onChange={(event) => setCarManufactureYear(Number(event.target.value))}
        type="text"
        name="manufacture-year"
        id="manufacture-year"
      />
      <h3>Price</h3>
      <input
        onChange={(event) => setCarPrice(Number(event.target.value))}
        type="text"
        name="price"
        id="price"
      />
      <button onClick={handleClick} type="submit">
        Upload Your Car
      </button>
    </div>
  );
}
