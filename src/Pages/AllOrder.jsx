import { useLoaderData } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import MyOrderedFood from "./MyOrderedFood";
import { useEffect, useState } from "react";



const AllOrder = () => {
    const allOrders = useLoaderData()
    const { user } = useAuth()
    console.log(allOrders);
    const [myOrders, setMyOrder] = useState([])

    useEffect(() => {
        const Orders = allOrders.filter(order => order.buyerEmail === user?.email)
        setMyOrder(Orders)

    }, [allOrders, user?.email])
    // console.log(Array.isArray(myOrders));


    return (


        <div className=" bg-[#000B33]">
            <div className="max-w-7xl mx-4 lg:mx-24">
               {
                 myOrders.length == 0 ?
                 <div>
                     <h2 className="text-center font-bold text-3xl text-white py-10">You have not Ordered any food Yet</h2>
                 </div> :
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
                     {
                         myOrders?.map(myOrder => <MyOrderedFood
                             key={myOrder._id}
                             myOrder={myOrder}
                             setMyOrder={setMyOrder}
                             myOrders={myOrders}> </MyOrderedFood>)
                     }
                 </div>
               }
            </div>
        </div>
    );
};

export default AllOrder;