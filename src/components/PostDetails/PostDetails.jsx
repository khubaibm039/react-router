import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const navigate = useNavigate()
    const { postId } = useParams()
    const post = useLoaderData()
    const { id, title, body } = post

    const handleGoBack = () => {
        navigate(-1)
    }

    console.log(postId);
    return (
        <div>
            <h3 className="text-2xl font-bold my-6" >Post Details about : {id}</h3>
            <p>Title : {title}</p>
            <p className="my-6">{body}</p>
            <button onClick={handleGoBack} className="p-3 bg-orange-500 rounded-lg">Go Back</button>
        </div>
    );
};

export default PostDetails;