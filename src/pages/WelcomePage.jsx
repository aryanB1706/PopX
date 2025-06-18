import { useNavigate } from "react-router";


export default function WelcomePage() {
  const navigate=useNavigate();

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-white">
      <div className="bg-gray-50 w-81  min-h-screen flex flex-col justify-end p-3.5 shadow-md rounded-none text-left">
        <div className="w-60">
          <h1 className="text-xl font-bold mb-1">Welcome to PopX</h1>
          <h3 className="text-gray-500 mb-5 text-sm font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </h3>
        </div>
        <div>
          <button
            onClick={() => navigate("/signup")}
            className="cursor-pointer text-xs w-full bg-violet-600 text-white font-semibold py-2 rounded-md mb-2"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer mb-4 text-xs w-full bg-violet-300 text-black font-semibold py-2 rounded-md"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}
