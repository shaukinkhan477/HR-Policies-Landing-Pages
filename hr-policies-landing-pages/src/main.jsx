import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommunicationStandards from "./pages/CommunicationStandards.jsx";
import ConfidentialityPage from "./pages/ConfidentialityPage.jsx";
import CommunicationPolicy from "./pages/CommunicationPolicy.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/confidentiality",
        element: <ConfidentialityPage />,
      },
      // {
      //   path: "/communication",
      //   element: <CommunicationStandards />,
      // },
      {
        path: "/communication",
        element: <CommunicationPolicy />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
