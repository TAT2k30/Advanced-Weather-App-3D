import Footer from "./components/commons/footer/Footer";
import Header from "./components/commons/header/Header";
import AppRoutes from "./configs/Routes/RouteConfig";
import { BrowserRouter, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [lightMode, setLightMode] = useState<boolean>(true);
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
    <div className={`flex flex-col min-h-screen ${backgroundClass} ${textClass} transition-all duration-500`}>
      {/* Header */}
      {location.pathname !== "/weather" && (
        <Header
          isLigtMode={lightMode}
          setIsLightMode={setLightMode}
          currentBodyLightMode={backgroundClass}
          currentTextLightMode={textClass}
          currentShadowLightMode={shadowClass}
        />
      )}

      {/* Nội dung chính */}
      <main className="flex-grow transition-opacity duration-500">
        <AppRoutes
          currentBodyLightMode={backgroundClass}
          currentTextLightMode={textClass}
          currentShadowLightMode={shadowClass} />
      </main>

      {/* Footer */}
      {location.pathname !== "/weather" && (
        <Footer
          currentBodyLightMode={backgroundClass}
          currentTextLightMode={textClass}
          currentShadowLightMode={shadowClass}
        />
      )}
    </div>
  );
};

const AppWrapper: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
