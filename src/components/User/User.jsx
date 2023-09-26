import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, email, phone } = user
    return (
        <div className="border-2 border-yellow-400 p-3 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="my-6">Email : {email}</p>
            <p className="my-6">Phone : {phone}</p>
            <Link to={`/user/${id}`} className="bg-orange-500 text-white p-4 rounded-lg">Show Details</Link>
        </div>
    );
};

export default User;