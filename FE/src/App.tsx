import Footer from "./components/commons/footer/Footer";
import Header from "./components/commons/header/Header";
import AppRoutes from "./configs/Routes/RouteConfig";
import { BrowserRouter, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [lightMode, setLightMode] = useState<boolean>(true);

  const LocationWrapper = () => {
    const location = useLocation();

    useEffect(() => {
      // Cập nhật lớp CSS khi thay đổi chế độ sáng/tối
      document.body.classList.add("transition-all", "duration-500");
      document.body.classList.toggle("bg-bodyBlack", !lightMode);
      document.body.classList.toggle("bg-white", lightMode);
    }, [lightMode]);

    const backgroundClass = lightMode ? "bg-white" : "bg-commonBlack";
    const textClass = lightMode ? "text-commonBlack" : "text-commonBlue";
    const shadowClass = lightMode ? "shadow-lg shadow-gray-200" : "shadow-lg shadow-gray-800";

    return (
      <div className={`transition-all duration-300 ${backgroundClass} ${textClass}`}>
        {location.pathname !== "/play" && (
          <Header
            lightMode={lightMode}
            setLightMode={setLightMode}
            currentBodyLightMode={backgroundClass}
            currentTextLightMode={textClass}
            currentShadowLightMode={shadowClass}
          />
        )}

        <div className="transition-opacity duration-500">
          <AppRoutes />
        </div>

        {location.pathname !== "/play" && (
          <Footer
            currentBodyLightMode={backgroundClass}
            currentTextLightMode={textClass}
            currentShadowLightMode={shadowClass}
          />
        )}
      </div>
    );
  };

  return (
    <BrowserRouter>
      <LocationWrapper />
    </BrowserRouter>
  );
}

export default App;
