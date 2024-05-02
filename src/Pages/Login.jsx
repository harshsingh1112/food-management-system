import { useState } from "react";
import useAuth from "../Hook/useAuth";
// import Swal from 'sweetalert2'
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const Login = () => {

    const { login, googleLogin } = useAuth()
    const [errorMessage, setErrorMessage] = useState()
    const [successMessage, setSuccessMessage] = useState()
    const location = useLocation()
    const navigate = useNavigate()


    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                // setSuccessMessage(
                //     Swal.fire(
                //         'Good job!',
                //         'Google Login Successful !',
                //         'success'
                //     ))
                navigate(location?.state ? location?.state : '/')
            })
            .catch(err => console.error(err))

    }
    const handleLogin = (e) => {

        setErrorMessage("")
        setSuccessMessage("")
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);


        login(email, password)
            .then(res => {
                console.log(res.user)
                // setSuccessMessage(
                //     Swal.fire(
                //         'Good job!',
                //         'Login Successful !',
                //         'success'
                //     ))
                navigate(location?.state ? location?.state : '/')
                // window.location.reload();
                return


            })
            .catch(error => {
                console.error(error);
                return setErrorMessage(error.message)
            })
    }

    return (
        <div className="bg-[#000B33] py-10">
            <Helmet>
                <title>
                    FoodieFleet | Login
                </title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-4xl text-black text-center pt-4 pb-1 font-semibold">Login !</h2>
                    <form onSubmit={handleLogin} className="card-body bg-white rounded-lg">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-medium">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-medium">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your Password" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                        </div>
                        <h3>New to the website? <span> <Link to='/register' className="font-bold hover:text-blue-700 text-xl text-[#FAA916]">Register</Link> </span> </h3>

                        <div>
                            <p className="text-red-700">{errorMessage}</p>
                            <p className="text-green-700">{successMessage}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                    </form>
                    <div className="divider md:mx-8 -mt-4"> Or </div>
                    <div className="flex items-center justify-center mb-8 ">
                        <button onClick={handleGoogleLogin} className="btn btn-outline md:text-xl gap-4 ">
                            <FcGoogle></FcGoogle>
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;