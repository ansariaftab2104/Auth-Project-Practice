import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoute from "./routes/AppRoute";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <AppRoute />
  </AuthProvider>,
);
