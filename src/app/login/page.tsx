"use client";
import { useEffect, useState } from "react";
import { LoginUser } from "../actions/loginUser";

async function UpdateUser(username: string, password: string) {
  const response = await LoginUser(username, password);
  localStorage.setItem("id", response);
}

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    UpdateUser(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <h3>Username</h3>
      <input
        type="text"
        name="username"
        id="login-username"
        onChange={(event) => setUsername(event.target.value)}
      />

      <h3>Password</h3>
      <input
        type="password"
        name="password"
        id="login-password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}
