import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const { id, title, body } = post;
    return (
        <div className="border-2 border-yellow-400 p-3 rounded-2xl shadow-2xl">
            <h4 className="text-xl font-bold">Post of id : {id}</h4>
            <p className="my-6">{title}</p>
            <Link to={`/post/${id}`}><button className="p-3 bg-green-500 rounded-xl">Post Details</button></Link>
        </div>
    );
};

export default Post;