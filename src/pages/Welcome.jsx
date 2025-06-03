
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className='bg-gray-50 min-h-screen min-w-screen flex items-center justify-center'>
    <div className="bg-white p-6 rounded-md shadow w-full max-w-sm mt-40">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Welcome to PopX</h2>
      <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button
        onClick={() => navigate('/register')}
        className="bg-purple-600 text-white w-full py-2 rounded-md font-semibold text-sm mb-3 hover:bg-purple-700"
      >
        Create Account
      </button>
      <button
        onClick={() => navigate('/login')}
        className="bg-purple-100 text-purple-900 w-full py-2 rounded-md font-semibold text-sm"
      >
        Already Registered? Login
      </button>
    </div>
    </div>
  );
}
