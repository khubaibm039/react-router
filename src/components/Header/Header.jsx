import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className="flex gap-5 justify-center">
                <Link className="bg-purple-500 p-2 rounded-lg hover:text-black duration-500" to='/'>Home</Link>
                <Link className="bg-purple-500 p-2 rounded-lg hover:text-black duration-500" to='/users'>Users</Link>
                <Link className="bg-purple-500 p-2 rounded-lg hover:text-black duration-500" to='/posts'>Posts</Link>
                <Link className="bg-purple-500 p-2 rounded-lg hover:text-black duration-500" to='/about'>About</Link>
                <Link className="bg-purple-500 p-2 rounded-lg hover:text-black duration-500" to='/contact'>Contact us</Link>

            </nav>
        </div>
    );
};

export default Header;