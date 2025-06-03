import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }
    // Clear error and navigate
    setError('');
    navigate('/settings');
  };

  return (
    <div className='bg-gray-50 min-h-screen min-w-screen flex items-center justify-center p-4'>
      <div className="bg-white p-6 rounded-md shadow w-full max-w-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Signin to your PopX account</h2>
        <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <div className="mb-4">
          <label className="block text-sm text-purple-600 font-medium">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 text-sm text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-purple-600 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 text-sm text-black"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          className="bg-purple-600 text-white w-full py-2 rounded-md font-semibold text-sm hover:bg-purple-700"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
