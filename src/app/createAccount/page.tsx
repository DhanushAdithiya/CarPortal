"use client";
import { useState } from "react";
import createUser from "../actions/createUser";

export interface User {
  name: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Create a user object based on the User interface
    const newUser: User = {
      name: username,
      password: password,
      email: email,
    };

    // Log the new user object to the console
    console.log(newUser);
    createUser(newUser);
    // You can also add further logic here, such as sending the user data to an API
  };

  return (
    <div>
      <h1>Create An Account</h1>
      <h3>Username</h3>
      <input
        type="text"
        name="username"
        id="signup-username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <h3>Email</h3>
      <input
        type="email"
        name="email"
        id="signup-email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <h3>Password</h3>
      <input
        type="password"
        name="password"
        id="signup-password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit" onClickCapture={handleSubmit}>
        Create An Account
      </button>
    </div>
  );
}
