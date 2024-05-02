import AllFoodCard from "./AllFoodCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllFood = () => {
    // const allFoods = useLoaderData()
    // console.log(allFoods);

    const [allFoods,setAllFoods] = useState([])
    const [search, setSearch] = useState("");
    const [count, setCount] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch(`https://assignment-11-server-eight-iota.vercel.app/allFood?page=${currentPage}&size=${itemsPerPage}`)

        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllFoods(data)
        })
    },[currentPage,itemsPerPage])

    useEffect(() => {
        fetch('https://assignment-11-server-eight-iota.vercel.app/foodCount')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCount(data.count)
            })
    }, [])
    const numberOfPages = Math.ceil(count / itemsPerPage)
    console.log(count);
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);

    const handleItemsPerPage = e => {
        const foodPerPage = parseInt(e.target.value);
        console.log(foodPerPage);
        setItemsPerPage(foodPerPage);
        setCurrentPage(1);
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    }



    return (
        <div className="bg-[#000B33]">
            <Helmet>
                <title>
                    FoodieFleet | AllFood
                </title>
            </Helmet>
            <div className=" max-w-7xl mx-4 md:mx-10">
                <div className="flex items-center gap-2 pt-10 justify-end">
                    <div className="form-control">
                        <input type="text"
                            name="search"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search By Food Name"
                            className="input input-bordered max-w-md" />
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                        {
                            allFoods.filter((food) => {
                                return search.toLowerCase() === "" ? food : food.foodName.toLowerCase().includes(search)
                            }).map(food => <AllFoodCard key={food._id} food={food}></AllFoodCard>)
                        }
                    </div>
                </div>
                <p>ccc  {currentPage} </p>

                <h3 className="text-center flex items-center pb-10 justify-center text-white gap-5 font-semibold text-xl">
                    <button className="btn btn-sm" onClick={handlePrevPage}>Prev</button>
                    {
                        pages.map(page => <button
                            className={currentPage === page + 1 ?
                                "btn btn-sm btn-warning" : "btn btn-sm"}
                            key={page+1}
                            onClick={() => setCurrentPage(page + 1)}
                        >{page + 1}

                        </button>)
                    }
                    <button className="btn btn-sm" onClick={handleNextPage}>Next</button>
                    <select value={itemsPerPage} className="bg-[#000B33]" onChange={handleItemsPerPage} name="" id="">
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="9" defaultValue={9}>9</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="30">50</option>
                        <option value="30">100</option>
                    </select>
                </h3>
            </div>
        </div>
    );
};

export default AllFood;