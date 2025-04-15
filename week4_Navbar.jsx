import React from 'react';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">My Store</h1>
    <ul className="flex space-x-4">
      <li><a href="/" className="hover:underline">Home</a></li>
    </ul>
  </nav>
);

export default Navbar;