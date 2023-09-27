import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    const { id, title, body } = post
    return (
        <div>
            <h3 className="text-2xl font-bold my-6" >Post Details about : {id}</h3>
            <p>Title : {title}</p>
            <p className="my-6">{body}</p>
        </div>
    );
};

export default PostDetails;