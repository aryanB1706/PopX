import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />,
    },
    
    {
      path: "/login",
      element: <LoginPage />,
    },
    
    {
      path: "/signup",
      element: <CreateAccountPage />,
    },
    {
      path: "/setting",
      element: <AccountSettingsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
