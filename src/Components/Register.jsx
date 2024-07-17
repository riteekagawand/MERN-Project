import { Link } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    let isValid = true;

    if (!email) {
      setEmailError('Please enter your email');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Please enter your password');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (isValid) {
      try {
        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }), // Send email and password to backend
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Registration successful:', data);
          // Optionally, redirect to login page or show success message
        } else {
          const errorData = await response.json();
          console.error('Registration failed:', errorData);
          // Handle error, show error message to user
        }
      } catch (error) {
        console.error('Error during registration:', error);
        // Handle network error or other exceptions
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#c3cfd9]">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[600px] w-[400px]" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center mb-4 mt-[-10px]">
            <h1 className="text-[50px] text-[#293845] font-medium">Registration</h1>
            <h1 className="text-[50px] text-[#293845] font-medium mt-[-20px]">Form</h1>
          </div>
          <div className="mb-4">
            <label className="block text-[#293845] text-lg font-bold mb-2 mt-[-10px]" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded-3xl bg-[#e0defd] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="text-red-500 text-xs italic mt-1">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-[#293845] text-lg font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded-3xl w-full py-2 px-3 bg-[#e0defd] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="text-red-500 text-xs italic mt-1">{passwordError}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-[#293845] text-lg font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow appearance-none border rounded-3xl w-full py-2 px-3 bg-[#e0defd] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError && <p className="text-red-500 text-xs italic mt-1">{confirmPasswordError}</p>}
          </div>
          <div className="flex items-center justify-center mt-[20px]">
            <button
              type="submit"
              className="relative bg-gradient-to-r from-[#6c60f1] to-[#e971d6] text-white text-[25px] font-bold py-2 px-4 h-[60px] w-[120px] rounded-md focus:outline-none focus:shadow-outline overflow-hidden"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-[#f43d7e]  transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              Register
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
