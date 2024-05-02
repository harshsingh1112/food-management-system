import PropTypes from 'prop-types';
const Chef = ({chef}) => {
    const { name, title, image, experience } = chef

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg mx-auto w-3/5 " src={image} alt="" />
            <div className="p-5">
                <div>
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">  {name} </h5>
                    <p className="mb-3 text-center text-gray-700 dark:text-gray-400"> <span className='font-bold'></span>  {title} </p>
                    <p className="mb-3 text-center text-gray-700 dark:text-gray-400"> <span className='font-bold'></span> {experience}  </p>
                </div>
            </div>
        </div>
    );
};
Chef.propTypes = {
    chef: PropTypes.object
};

export default Chef;