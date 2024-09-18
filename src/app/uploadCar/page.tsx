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
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Upload Your Car
            </h1>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Car Name
                </label>
                <input
                  type="text"
                  name="carname"
                  id="carname"
                  onChange={(event) => setCarName(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter car name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Car Manufacturer
                </label>
                <input
                  type="text"
                  name="manufacturer"
                  id="manufacturer"
                  onChange={(event) => setCarManufacturer(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter manufacturer"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Car Image URL
                </label>
                <input
                  type="text"
                  name="car-image"
                  id="car-image"
                  onChange={(event) => setCarImage(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter image URL"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Manufacture Year
                </label>
                <input
                  type="text"
                  name="manufacture-year"
                  id="manufacture-year"
                  onChange={(event) =>
                    setCarManufactureYear(Number(event.target.value))
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter manufacture year"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  onChange={(event) => setCarPrice(Number(event.target.value))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter price"
                />
              </div>

              <button
                type="button" // Changed to button for custom handling
                onClick={handleClick}
                className="w-full text-white bg-primary600 hover:bg-primary700 focus:ring4 focus:outline-none focus:ringprimary300 font-medium rounded-lg text-sm px5 py2.5 text-center dark:bg-primary600 dark:hover:bg-primary700 dark:focus:ringprimary800 bg-blue-600 h-10"
              >
                Upload Your Car
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
