"use client";

import { buyCar } from "@/app/actions/buyCar";
import { useState } from "react";

export interface PurchaseDetails {
	cardNo: string;
	cardName: string;
	CVV: string;
	credit: boolean;
}

export default function Purhcase({
	params,
}: {
	params: {
		slug: string[];
	};
}) {
	const [cardNo, setCardNo] = useState("");
	const [cardName, setCardName] = useState("");
	const [CVV, setCVV] = useState("");
	const [credit, setCredit] = useState(false);

	async function HandleClick() {
		const purchaseDetail: PurchaseDetails = {
			cardName,
			cardNo,
			CVV,
			credit,
		};

		await buyCar(
			Number(localStorage.getItem("id")),
			Number(params.slug[0]),
			purchaseDetail,
		);
	}
	return (
		<div className="h-lvh flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
			<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
				Purchase Car
			</h2>
			<h3 className="text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">
				Input Card Details
			</h3>

			<input
				type="text"
				name="card-no"
				id="purchase_card_no"
				placeholder="Enter Card Number"
				onChange={(event) => setCardNo(event.target.value)}
				className="mb-4 w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			/>

			<input
				type="text"
				name="card-name"
				id="purchase_card_name"
				placeholder="Enter Card Name"
				onChange={(event) => setCardName(event.target.value)}
				className="mb-4 w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			/>

			<input
				type="password"
				name="cvv"
				id="purchase_cvv"
				placeholder="CVV"
				onChange={(event) => setCVV(event.target.value)}
				className="mb-4 w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
			/>

			<div className="flex items-center mb-4">
				<input
					type="checkbox"
					id="credit-card"
					name="credit-card"
					value="credit-card"
					onClick={(event) => setCredit(true)}
					className="w-4 h-4 text-blue-600 bg-gray-100 border border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
				/>
				<label
					htmlFor="credit-card"
					className="ml-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Credit Card
				</label>
			</div>

			<button
				onClick={HandleClick}
				type="button" // Changed to button for custom handling
				className="w-full max-w-xs px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 shadow-md hover:shadow-lg"
			>
				Buy Now
			</button>
		</div>
	);
}
