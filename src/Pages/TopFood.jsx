import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopFood = ({allFood}) => {
    const { foodName, image, price, category, _id, quantity } = allFood

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg h-[310px]" src={image} alt="" />
            <div className="p-5">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> Food Name: {foodName} </h5>
                    <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Food Category:</span>  {category} </p>
                </div>
                <div>
                    <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Price: $</span> {price}  </p>
                    <p className="mb-3 text-gray-700 dark:text-gray-400"> <span className='font-bold'>Amount: </span>{quantity} </p>
                </div>
                <Link to={`/allFood/${_id}`} className='btn btn-warning'> Details</Link>
            </div>
        </div>
    );
};
TopFood.propTypes = {
    allFood: PropTypes.object
};
export default TopFood;