import React from 'react';

export default function AccountSettings() {
  return (
    <div className='bg-gray-50 min-h-screen min-w-screen flex items-center justify-center p-4'>

    <div className="bg-white p-6 rounded-md shadow w-full max-w-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Account Settings</h2>
      <div className="flex items-center mb-4">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-14 h-14 rounded-full object-cover" />
        <div className="ml-4">
          <h3 className="font-semibold text-gray-800">Marry Doe</h3>
          <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
    </div>
  );
}
