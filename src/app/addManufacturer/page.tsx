"use client";

import { useState } from "react";
import { createManufacturer } from "../actions/createManufacturer";

export default function UploadManufacturer() {
  const [manufacture, setManufacture] = useState("");

  return (
    <div>
      <h1>Signup as a Manufacturer</h1>
      <h3>Name of Manufacturer</h3>
      <input
        onChange={(event) => setManufacture(event.target.value)}
        type="text"
        name="manufacturer"
        id="crate-m"
      />
      <button onClick={() => createManufacturer(manufacture)} type="submit">
        Submit
      </button>
    </div>
  );
}
