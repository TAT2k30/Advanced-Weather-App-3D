import React from 'react';
import LoginComponent from '../../../../components/auths/login/Login.component';
import WindMap from '../../../../components/worlds/Wind';

function Login() {
    const mockWindData = {
        particles: [
            { x: 100, y: 110, u: 5, v: -3 },
            { x: 400, y: 300, u: -2, v: 2 },
            { x: 800, y: 700, u: 1, v: 1 },
            { x: 100, y: 200, u: 5, v: -3 },
            { x: 400, y: 300, u: -2, v: 2 },
            { x: 800, y: 700, u: 1, v: 1 },
            { x: 300, y: 200, u: 5, v: -3 },
            { x: 520, y: 300, u: -2, v: 2 },
            { x: 800, y: 700, u: 1, v: 1 },
            { x: 100, y: 200, u: 5, v: -3 },
            { x: 400, y: 300, u: -2, v: 2 },
            { x: 800, y: 700, u: 1, v: 1 },
        ],
    };

    return (
        <div>
            <div className="absolute bottom-0 left-0 w-[100vw] h-[100vh] z-10">
                <LoginComponent />
            </div>
            <div className="absolute bottom-0 left-0 w-[100vw] h-[100vh]">
                <WindMap windData={mockWindData} />
            </div>
        </div>
    );
}

export default Login;
