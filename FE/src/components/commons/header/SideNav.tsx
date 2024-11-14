import React from 'react';
import { SideNavProps } from '../../../rules/props/SideNavProps';
import { Link } from 'react-router-dom';

function SideNav({ handleCloseSideNav, isSideNavOpen }: SideNavProps) {
    return (
        <div>
            {/* Màn phủ phía sau SideNav */}
            <div
                className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 transition-opacity duration-700 ${isSideNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => handleCloseSideNav(false)} // Đóng SideNav khi nhấn vào màn phủ
            />
            {/* SideNav */}
            <div className={`fixed inset-y-0 right-0 max-w-xs w-64 bg-white transition-transform duration-700 transform ${isSideNavOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex items-center justify-between px-4 py-2">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button onClick={() => handleCloseSideNav(false)}>X</button>
                </div>
                <ul className="px-4 space-y-2">
                    <li>
                        <Link to="/" onClick={() => handleCloseSideNav(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/team" onClick={() => handleCloseSideNav(false)}>Team</Link>
                    </li>
                    <li>
                        <Link to="/shop" onClick={() => handleCloseSideNav(false)}>Shop</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideNav;
