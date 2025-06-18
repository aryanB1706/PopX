import { useState } from "react";
import { useNavigate } from "react-router";

const LoginPage = () => {

  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/setting");
    console.log("Login details:", { email, password });
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-white">
  <div className="bg-gray-50 w-81 min-h-screen flex flex-col justify-start p-3 shadow-md rounded text-left">
    <div>
      <h2 className="text-lg font-bold mb-1 mt-2 mr-20">Signin to your PopX account</h2>
      <p className="text-gray-500 mb-3 text-xs font-medium mr-15">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <form onSubmit={handleLogin}>
        <fieldset className="border border-gray-300 rounded px-1 pb-0 mb-2">
          <legend className="text-[9px] text-purple-600 px-1 font-medium">Email Address</legend>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full outline-none text-[11px] bg-gray-50 py-px p-1.5 font-medium"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </fieldset>

        <fieldset className="border border-gray-300 rounded px-1 pb-0 mb-2">
          <legend className="text-[9px] text-purple-600 px-1 font-medium">Password</legend>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full outline-none text-[11px] bg-gray-50 py-px p-1.5 font-medium"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>

        <button
          type="submit"
          className="cursor-pointer w-full bg-gray-300 text-white font-semibold py-2 rounded text-xs"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default LoginPage;
