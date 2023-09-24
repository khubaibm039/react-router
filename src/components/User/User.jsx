const User = ({ user }) => {
    const { id, name, email, phone } = user
    return (
        <div className="border-2 p-3 rounded-2xl my-6 shadow-2xl">
            <h2>{name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
        </div>
    );
};

export default User;