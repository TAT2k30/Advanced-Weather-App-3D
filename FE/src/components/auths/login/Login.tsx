import React from 'react';
import { LoginPageProps } from '../../../rules/props/auth/LoginPageProps';

function Login({ currentBodyLightMode, currentShadowLightMode, currentTextLightMode, isLightMode }: LoginPageProps) {
    return (
        <div
            className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80')",
            }}
        >
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <img
                            src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg"
                            width="150"
                            alt="Instagram Logo"
                        />
                        <h1 className="mb-2 text-2xl">Instagram</h1>
                        <span className="text-gray-300">Enter Login Details</span>
                    </div>

                    <form action="#">
                        {/* Email Input */}
                        <div className="mb-4 text-lg">
                            <input
                                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="email"
                                name="email"
                                placeholder="id@email.com"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4 text-lg">
                            <input
                                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="password"
                                name="password"
                                placeholder="*********"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8 flex justify-center text-lg">
                            <button
                                type="submit"
                                className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
