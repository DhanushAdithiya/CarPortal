"use client";

import { getMan } from "@/app/actions/getMan";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Manufacturer({
	params,
}: {
	params: {
		slug: string[];
	};
}) {
	const router = useRouter();
	const [man, setMan] = useState(null);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const data = await getMan(Number(params.slug[0]));
				setMan(data); // Store the fetched user data in state
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData(); // Call the async function
	}, [params.slug, router]); // Dependencies array

	return (
		<section className="h-svh dark:bg-gray-900 min-h-screen">
			<div className="flex flex-col items-center justify-start px-6 py-8">
				<div className="w-full h-svh bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
					<div className="h-full p-6 space-y-4 md:space-y-6 sm:p-8">
						{man ? (
							<>
								<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
									Cars Sold By {man.name}
								</h1>
								<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
									{man.cars.length > 0 ? (
										man.cars.map((car) => (
											<a href={`/cars/${car.id}`} key={car.id}>
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
												</div>
											</a>
										))
									) : (
										<p className="text-gray-500 dark:text-gray-400">
											You have no cars listed.
										</p>
									)}
								</div>
							</>
						) : (
							<h1 className="text-xl font-bold text-gray-900 dark:text-white">
								Loading...
							</h1> // Optional loading state
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
