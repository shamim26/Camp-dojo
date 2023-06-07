import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/routes.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthContext from "./context/AuthContext";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthContext>
  </React.StrictMode>
);
