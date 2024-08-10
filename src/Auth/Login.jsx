import React from "react";
import GoogleIcon from "../assets/images/google-icon.png";
import useLoggingIn from "../hooks/useLoggingIn";
import AppIcon from "../components/AppIcon";

const Login = () => {
    const [loggingIn] = useLoggingIn((navigate) => {
        navigate('/dashboard');
    });
    return (
        <>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900 flex items-center justify-center">
                <div className="bg-white p-4 py-8 rounded-3xl w-4/12 tablet:w-8/12 mobile:w-10/12 flex flex-col items-center gap-2">
                    <AppIcon size={16} textSize="2xl" />

                    <h1 className="text-4xl font-bold text-slate-800 mt-4">Welcome,</h1>
                    <div className="text-xl text-slate-500">Sign in to continue!</div>

                    <div className="h-8"></div>

                    <button className="border rounded-lg font-bold text-slate-700 w-full h-12 flex items-center justify-center gap-4 hover:bg-gray-100" onClick={loggingIn}>
                        <img src={GoogleIcon} alt="Google Icon" className="h-8" />
                        Continue with Google
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login