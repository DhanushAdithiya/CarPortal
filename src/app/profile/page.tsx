"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUserData } from "../actions/getProfileData";
import Image from "next/image";

export default function Profile() {
	const router = useRouter();
	const [userData, setUserData] = useState(null);
	const userId = localStorage.getItem("id");

	useEffect(() => {
		if (!userId) {
			router.push("/login");
			return; // Exit early if no userId
		}

		const fetchUserData = async () => {
			try {
				const data = await getUserData(userId);
				setUserData(data); // Store the fetched user data in state
				console.log(data); // Log the user data
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData(); // Call the async function
	}, [userId, router]); // Dependencies array

	return (<section className="h-svh dark:bg-gray-900 min-h-screen">
  <div className="flex flex-col items-center justify-start px-6 py-8">
    <div className="w-full h-svh bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
      <div className="h-full p-6 space-y-4 md:space-y-6 sm:p-8">
        {userData ? (
          <>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Hello, {userData.name}
            </h1>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-300">
              Your Cars
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {userData.cars.length > 0 ? (
                userData.cars.map((car) => (
                  <div
                    key={car.id}
                    className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-700"
                  >
                    <Image
                      height={250}
                      width={250}
                      src={car.images}
                      alt={car.name}
                      className="rounded-lg mb-2"
                    />
                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                      {car.name}
                    </h2>
                    <h4 className="text-sm text-gray-600 dark:text-gray-400">
                      {car.manufacturer.name}
                    </h4>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">You have no cars listed.</p>
              )}
            </div>
          </>
        ) : (
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Loading...</h1> // Optional loading state
        )}
      </div>
    </div>
  </div>
</section>);
}
