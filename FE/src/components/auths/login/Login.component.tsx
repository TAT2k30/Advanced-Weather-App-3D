import Logo from "../../../assets/logos/Software-logo-removebg-preview.png";

function LoginComponent() {
    return (
        <div
            className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat"

        >
            <div className="rounded-xl bg-gray-500 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-sm max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <img
                            src={Logo}
                            width="150"
                            alt="Instagram Logo"
                        />
                        <span className="text-gray-300">Enter Login Details</span>
                    </div>

                    <form action="#">
                        {/* Email Input */}
                        <div className="mb-4 text-lg">
                            <input
                                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="email"
                                name="email"
                                placeholder="Enter email"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4 text-lg">
                            <input
                                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                                type="password"
                                name="password"
                                placeholder="Enter password"
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

export default LoginComponent;
