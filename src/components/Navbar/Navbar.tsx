import React from 'react';
import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="container border-t h-[60px] bg-white shadow-md fixed  left-1/2 -translate-x-1/2 bottom-0 w-full z-10">
            <div className="">
                <div className="h-16">
                    <div className="grid grid-cols-5 items-center justify-center  h-full">
                        <Link href={`/discover`} className="h-full text-center">
                            <button className="h-full text-gray-600 hover:text-gray-900 focus:outline-none">发现</button>
                        </Link>
                        <Link href={`/favorites`} className="h-full text-center">
                            <button className="h-full text-gray-600 hover:text-gray-900 focus:outline-none">喜欢</button>
                        </Link>
                        <Link href={`/`} className="h-full text-center">
                            <button className="h-full text-gray-600 hover:text-gray-900 focus:outline-none">首页</button>
                        </Link>

                        <Link href={`/message`} className="h-full text-center">
                            <button className="h-full text-gray-600 hover:text-gray-900 focus:outline-none">消息</button>
                        </Link>
                        <Link href={`/profile`} className="h-full text-center">
                            <button className="h-full text-gray-600 hover:text-gray-900 focus:outline-none">我的</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;