import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    const { name, username, email, phone, website, } = user
    return (
        <div className="my-6 border-2 p-4">
            <h2 className="py-6 text-3xl font-bold">Details about user : {name}</h2>
            <h3>Username : {username}</h3>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <p>Website : {website}</p>
        </div>
    );
};

export default UserDetails;