import { FaCamera } from "react-icons/fa";

function AccountSettingsPage() {
  return (
    <div className="flex justify-center min-h-screen bg-white">
      <div className="w-66 bg-gray-50 border border-gray-200 rounded shadow-sm">
       
        <div className="w-full border-b border-gray-100 px-4 py-3 bg-white">
          <h2 className="text-sm font-medium text-gray-800">
            Account Settings
          </h2>
        </div>

      

        <div className="flex items-center gap-3 my-4 ml-3">
          <div className="relative w-16 h-16">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
            <div className="absolute bottom-0 right-0 bg-purple-600 p-1.5 rounded-full">
              <FaCamera className="text-white text-[10px]" />
            </div>
          </div>
          <div className='-mt-7'>
            <h3 className="font-semibold text-xs">Marry Doe</h3>
            <p className="text-[10px] text-gray-600 mt-0.5 font-medium">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-[10px] text-gray-600 leading-snug ml-3 font-medium mt-5">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
        <div className="border-t border-gray-300 border-dashed mt-3" />

      </div>
    </div>
  );
}

export default AccountSettingsPage;
