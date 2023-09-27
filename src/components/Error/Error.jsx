import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <h2 className="text-7xl text-red-600">OOPS!!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3 className="text-6xl text-pink-600">Page Not Found</h3>
                    <Link to={'/'}><button className="p-3 bg-orange-500 rounded-lg">Go back</button></Link>
                </div>
            }
        </div>
    );
};

export default Error;