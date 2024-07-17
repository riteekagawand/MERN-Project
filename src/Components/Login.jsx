/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

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

    if (isValid) {
      // Perform authentication logic
      if (email === 'user@example.com' && password === 'password') {
        onLogin(true);
      } else {
        alert('Invalid credentials');
      }
    }
  };

  const redirectToRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#c3cfd9]">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[500px] w-[350px]" onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className='flex justify-center'> 
              <h1 className='text-[50px] text-[#293845] font-medium'>Login Form</h1>
            </div>
            <label className="block text-[#293845] text-lg font-bold mb-2 mt-[30px]" htmlFor="email">
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
          <div className="mb-6 mt-8">
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
          <div className="flex flex-col items-center justify-center mt-[25px]">
            <button
              type="submit"
              className="relative bg-gradient-to-r from-[#6c60f1] to-[#e971d6] text-white text-[25px] font-bold py-2 px-4 h-[60px] w-[120px] rounded-md focus:outline-none focus:shadow-outline overflow-hidden"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-[#f43d7e] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
              Login
            </button>
            <div className="text-center mt-6">
              <p className="text-gray-600 text-md">
                Don't have an account? <button onClick={redirectToRegister} className="text-blue-500 underline">Register</button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
