"use client";

import { useState } from "react";
import { createManufacturer } from "../actions/createManufacturer";

export default function UploadManufacturer() {
  const [manufacture, setManufacture] = useState("");
	const [logo, setLogo] = useState("");

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up as a Manufacturer
            </h1>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name of Manufacturer
                </label>
                <input
                  type="text"
                  name="manufacturer"
                  id="create-m"
                  onChange={(event) => setManufacture(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter manufacturer name"
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Manufacturer Logo
                </label>
                <input
                  type="text"
                  name="manufacturer"
                  id="create-logo"
                  onChange={(event) => setLogo(event.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Upload a link to logo"
                />
              </div>

              <button
                type="button" // Changed to button for custom handling
                onClick={() => createManufacturer(manufacture, logo)}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
