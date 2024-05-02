import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";
import { Helmet } from "react-helmet-async";

const AddAFood = () => {

    const { user } = useAuth()

    const handleAddFood = (e) => {
        e.preventDefault()

        const form = e.target
        const email = user?.email
        const name = user?.displayName
        const foodName = form.foodName.value
        const image = form.image.value
        const category = form.category.value
        const quantity = parseInt(form.quantity.value)
        const sell = parseInt(form.sell.value)
        const origin = form.origin.value
        const price = parseInt(form.price.value).toFixed(2)
        const description = form.description.value

        const newFood = { email, name, foodName,sell, image, category, quantity, origin, price, description };
        console.log(newFood);

        fetch("https://assignment-11-server-eight-iota.vercel.app/allFood", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFood),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'You Food is Added!',
                        'success'
                    )
                }
                form.reset()
            });

    }
    return (
        <div className="bg-[#000B33] py-10">
            <Helmet>
                <title>
                    FoodieFleet | Add Food
                </title>
            </Helmet>

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-4xl shadow-2xl bg-base-100">
                    <h2 className="text-4xl text-black text-center pt-4 pb-1 font-semibold">Add a Food</h2>
                    <form onSubmit={handleAddFood} className="card-body bg-white rounded-lg">
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Food Name</span>
                                </label>
                                <input type="text" name="foodName" placeholder="Food Name" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Food Image</span>
                                </label>
                                <input type="text" name="image" placeholder="Food Image" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Food Category</span>
                                </label>
                                <input type="text" name="category" placeholder="Food Category" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                {/* <label className="label">
                                    <span className="label-text text-black font-medium">Food Category</span>
                                </label>
                                <select name="" value={category} onChange={handleCategory} className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none">
                                    <option value="">Select An Option</option>
                                    <option value="Thai">Thai</option>
                                    <option value="Indian">Indian</option>
                                    <option value="Chinese">Chinese</option>
                                </select> */}
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Quantity</span>
                                </label>
                                <input type="number" name="quantity" placeholder="Quantity" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Food Origin(Country)</span>
                                </label>
                                <input type="text" name="origin" placeholder="Food Origin" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                                {/* <select name="" value={country} onChange={handleOrigin} className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none">
                                    <option value="">Select Country</option>
                                    {countries.map(country,index => <option key={index}> </option>)}
            
                                </select> */}
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Price" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Added By(Name)</span>
                                </label>
                                <input type="text" name="name" placeholder="Added By(Name)" defaultValue={user?.displayName} readOnly className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Added By(Email)</span>
                                </label>
                                <input type="email" name="email" placeholder="email" defaultValue={user?.email} readOnly className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Number of sell</span>
                                </label>
                                <input type="number" min={0} name="sell" placeholder="Number of sell" defaultValue={0} className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required />
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-medium">Description</span>
                                </label>
                                {/* <input type="text" name="description" placeholder="description" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" required /> */}
                                <textarea name="description" className="p-3 w-full text-sm rounded-md bg-[#000B33] text-white focus:border-white focus:outline-none" cols="30" rows="2" placeholder="Short description" required></textarea>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Add a Food</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAFood;