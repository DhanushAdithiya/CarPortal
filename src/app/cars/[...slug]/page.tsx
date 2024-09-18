"use client";

import { useEffect, useState } from "react";
import { fetchCar } from "@/app/actions/fetchCar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { buyCar } from "@/app/actions/buyCar";

// Define the types for the car and manufacturer
interface Manufacturer {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Car {
  id: number;
  name: string;
  manufacturerId: number;
  price: number;
  images: string;
  manufactureYear: number;
  createdAt: Date;
  updatedAt: Date;
  manufacturer: Manufacturer;
}

// Define the props for the Cars component
interface CarsProps {
  params: {
    slug: string[];
  };
}

export default function Cars({ params }: CarsProps) {
  const router = useRouter();
  async function handleClick() {
    const id = localStorage.getItem("id");
    if (!id) {
      // Redirect logic
      router.push("/login");
    }

    router.push(`/purchase/${params.slug[0]}`);
  }

  const [car, setCar] = useState<Car | null>(null); // Use the Car type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Use string or null for error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCar = await fetchCar(params.slug[0]);
        setCar(fetchedCar);
      } catch (err) {
        setError("Car Not Found");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

	if(!car) {
    return <h1>{error}</h1>;
	}


  return (
    <div className="h-lvh flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Image
        src={car.images}
        alt="Car-Image"
        width={800}
        height={800}
        className="rounded-lg"
      />
      <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
        {car.name}
      </h2>
      <h4 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
        {car.manufacturer.name}
      </h4>
      <h2 className="mt-2 text-2xl font-bold text-blue-600 dark:text-blue-500">
        ${car?.price}
      </h2>
      <button
        type="button"
        onClick={handleClick}
        className="w-full mt-4 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
      >
        Buy Now
      </button>
    </div>
  );
}
