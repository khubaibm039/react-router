import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData()
    return (
        <div>
            <h1 className="text-2xl font-bold my-6">Our users : {users.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    users.map((user, idx) => <User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;