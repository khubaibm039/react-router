import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const Post = ({ post }) => {
    const navigate = useNavigate()

    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }

    const { id, title } = post;
    return (
        <div className="border-2 border-yellow-400 p-3 rounded-2xl shadow-2xl">
            <h4 className="text-xl font-bold">Post of id : {id}</h4>
            <p className="my-6">{title}</p>
            <Link to={`/post/${id}`}><button className="p-3 bg-green-500 rounded-xl">Post Details</button></Link>
            <button onClick={handleShowDetail} className="p-3 bg-orange-500 rounded-lg">Show Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post;