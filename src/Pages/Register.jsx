// import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {

    const { createUser, profileUpdate, logOut } = useAuth()
    const [errorMessage, setErrorMessage] = useState()
    const [successMessage, setSuccessMessage] = useState()
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()

        setErrorMessage("")
        setSuccessMessage("")

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photo = form.photo.value
        const newUser = { email, password, name, photo }
        console.log(newUser);

        if (password.length < 6) {
            return setErrorMessage('Provide at least 6 character')
        }
        if (!/[A-Z]/.test(password)) {
            return setErrorMessage("Provide at least one Uppercase")
        }

        if (!/[\W_]/.test(password)) {
            return setErrorMessage("Provide at least one Special Character")
        }

        fetch("https://assignment-11-server-eight-iota.vercel.app/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });

        // fetch("https://assignment-11-server-eight-iota.vercel.app/jwt", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(newUser),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //     });


        createUser(email, password)
            .then(res => {
                console.log(res.user)
                profileUpdate(name, photo)
                    .then(res => {
                        console.log(res.user);
                        setSuccessMessage("User updated successfully")
                        return
                    })
                    .catch(error => {
                        console.error(error);
                        setErrorMessage("User updated is not successfully")
                        return
                    })
                logOut()
                    .then(res => res.user)
                    .catch(error => console.error(error))
                // setSuccessMessage(
                //     Swal.fire(
                //         'Good job!',
                //         'User Created successfully!',
                //         'success'
                //     ))
                navigate('/login')
                return
            })
            .catch(error => {
                console.log(error);
                setSuccessMessage(error.message)
                setErrorMessage("User created is not successful")

                return
            })

    }
    return (
        <div className="bg-[#000B33] py-10">
            <Helmet>
                <title>
                    FoodieFleet | Register
                </title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className="text-4xl text-black text-center pt-4 pb-1 font-semibold">Register !</h2>
                    <form onSubmit={handleRegister} className="card-body bg-white rounded-lg">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-medium">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-medium">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter your Photo Url" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                        </div>
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
                        <div>
                            <h3>Already have an account? <span> <Link to='/login' className="font-bold hover:text-blue-700 text-xl text-[#FAA916]">Login</Link> </span> </h3>
                        </div>
                        <div>
                            <p className="text-red-700 ">{errorMessage}</p>
                            <p className="text-green-700">{successMessage}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;