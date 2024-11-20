// routes.tsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/userPages/publicPages/HomePage";
import NotFoundPage from "../../pages/404Page/NotFoundPage";
import Login from "../../components/auths/login/Login";
import Register from "../../components/auths/register/Signup";
import React from "react";
import WeatherPage from "../../pages/userPages/publicPages/WeatherPage";
import { AppRouteProps } from "../../rules/props/pages/AppRoutesProps";
import TestingPage from "../../pages/userPages/publicPages/TestingPage";


const AppRoutes = ({ currentBodyLightMode, currentShadowLightMode, currentTextLightMode }: AppRouteProps) => {
    return (
        <div className="min-h-screen">
            <Routes>
                {/* Public Routes - Các route ra vào thoải mải không ràng buộc*/}
                <Route path="/" element={<HomePage currentBodyLightMode={currentBodyLightMode} currentTextLightMode={currentTextLightMode} currentShadowLightMode={currentShadowLightMode} />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/register" element={<Register />} />
                <Route path="/weather" element={<WeatherPage currentBodyLightMode={currentBodyLightMode} currentTextLightMode={currentTextLightMode} currentShadowLightMode={currentShadowLightMode} />} />

                <Route path="/testing" element={<TestingPage currentBodyLightMode={currentBodyLightMode} currentTextLightMode={currentTextLightMode} currentShadowLightMode={currentShadowLightMode} />} />

                {/* Private Routes - Các route bắt buộc phải Login hoặc với Role gì đấy mới được vào*/}
                {/* <Route path="/profile" element={<PrivateRoute component={ProfilePage} />} /> */}

                {/* 404 Page - Route hiện page lỗi*/}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default AppRoutes;
