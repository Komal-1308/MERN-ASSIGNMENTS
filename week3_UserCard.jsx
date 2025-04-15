import React from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{email}</p>
    </div>
  );
};

export default UserCard;
