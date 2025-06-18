import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const CreateAccountPage = () => {
  const navitage = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    navitage("/setting");
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-white">
      <div className="bg-gray-50 w-81 min-h-screen flex flex-col justify-start p-4 shadow-md text-left">
        <h2 className="text-lg font-bold mb-2 mt-3 mr-26">
          Create your PopX account
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col h-full justify-between"
        >
          <div className="space-y-3">
            {[
              { label: "Full Name", name: "fullName", required: true },
              { label: "Phone number", name: "phone", required: true },
              { label: "Email address", name: "email", required: true },
              {
                label: "Password",
                name: "password",
                required: true,
                type: "password",
              },
              { label: "Company name", name: "company" },
            ].map((field) => (
              <fieldset
                key={field.name}
                className="relative border border-gray-300 rounded px-1.5 py-0"
              >
                <legend className="text-[9px] text-purple-500 px-0.5 font-medium">
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </legend>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  required={field.required}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full outline-none text-[11px] bg-gray-50 px-1 py-0"
                />
              </fieldset>
            ))}

            <legend className="text-[9px] text-gray-700 px-0.5 mb-0 font-semibold">
              Are you an Agency? <span className="text-red-500">*</span>
            </legend>
            <div className="flex gap-7 mt-0.5">
              {["Yes", "No"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-1 text-[10px] text-gray-700 font-semibold"
                >
                  <input
                    type="radio"
                    name="isAgency"
                    value={option}
                    checked={formData.isAgency === option}
                    onChange={handleChange}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* 👇 Button always stays at the bottom */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-violet-600 text-white font-medium py-2 rounded mt-80 text-xs mb-2"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
