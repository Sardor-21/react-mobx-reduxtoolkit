import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={"header  py-5 px-10 bg-blue-600 flex items-center"}>
            <h2 className="logo mb-0 text-white mr-5">LOGO</h2>
        <div>
            <Link className={"p-2 rounded-lg hover:text-green-500 text-white transition"} to={"/"}>Home</Link>
            <Link className={"p-2 rounded-lg hover:text-green-500 text-white transition"} to={"/counter"}>Counter</Link>
            <Link className={"p-2 rounded-lg hover:text-green-500 text-white transition"} to={"/users"}>Users</Link>
            <Link className={"p-2 rounded-lg hover:text-green-500 text-white transition"} to={"/posts"}>Posts</Link>
        </div>
        </div>
    );
};

export default Header;