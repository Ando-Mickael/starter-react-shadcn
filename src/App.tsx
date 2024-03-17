import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes &&
          routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
