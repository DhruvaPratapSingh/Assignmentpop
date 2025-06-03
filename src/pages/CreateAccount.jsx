import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateAccount() {
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: '', // "yes" or "no"
  });

  const [error, setError] = useState('');

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    const { name, phone, email, password, company, agency } = form;

    if (!name || !phone || !email || !password || !company || !agency) {
      setError('Please fill all fields and select an option.');
      return;
    }

    // Clear error and proceed
    setError('');
    navigate('/settings');
  };

  return (
    <div className='bg-gray-50 min-h-screen min-w-screen flex items-center justify-center p-4'>
      <div className="bg-white p-6 rounded-md shadow w-full max-w-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Create your PopX account</h2>

        <div className="mb-4">
          <label className="block text-sm text-purple-600 font-medium">Full Name *</label>
          <input
            type="text"
            placeholder="Marry Doe"
            value={form.name}
            onChange={e => handleChange('name', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 text-sm text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-purple-600 font-medium">Phone Number *</label>
          <input
            type="text"
            placeholder="9876543210"
            value={form.phone}
            onChange={e => handleChange('phone', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 text-sm text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-purple-600 font-medium">Email Address *</label>
          <input
            type="email"
            placeholder="email@example.com"
            value={form.email}
            onChange={e => handleChange('email', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 text-sm text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-purple-600 font-medium">Password *</label>
          <input
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={e => handleChange('password', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 text-sm text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm text-purple-600 font-medium">Company Name *</label>
          <input
            type="text"
            placeholder="Company Inc."
            value={form.company}
            onChange={e => handleChange('company', e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mt-1 text-sm text-black"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-purple-600 font-medium mb-2">Are you an Agency? *</label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                onChange={() => handleChange('agency', 'yes')}
                checked={form.agency === 'yes'}
                className="accent-purple-600"
              />
              <span className="text-gray-700">Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="agency"
                value="no"
                onChange={() => handleChange('agency', 'no')}
                checked={form.agency === 'no'}
                className="accent-purple-600"
              />
              <span className="text-gray-700">No</span>
            </label>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          className="bg-purple-600 text-white w-full py-2 rounded-md font-semibold text-sm hover:bg-purple-700"
          onClick={handleSubmit}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
