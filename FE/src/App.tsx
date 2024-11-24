import AppRoutes from "./configs/Routes/RouteConfig";
import { BrowserRouter, useLocation } from "react-router-dom";
import React, { useEffect } from "react";

const App: React.FC = () => {
  const location = useLocation(); // Để theo dõi các thay đổi đường dẫn nếu cần thiết.

  useEffect(() => {
    // Bạn có thể làm gì đó khi location thay đổi (ví dụ: tracking, analytics, v.v.)
    console.log("Current location:", location.pathname);
  }, [location]);

  return (
    <div>
      <AppRoutes />
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
