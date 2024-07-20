/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
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
      try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success('Login successful!');
          onLogin(true); // Call onLogin callback to update the login state
          navigate('/'); // Redirect to dashboard or any other page
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        console.log(error.message);
        setMessage('An error occurred');
      }
    }
  };

  const redirectToRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div className="flex h-screen justify-center items-center bg-[#989ea6]">
      {/* Outer Container */}
      <div className="h-[500px] flex w-[800px] ">
        {/* Login Form Container */}
        <div className="w-3/5 bg-white  flex justify-center items-center rounded-l-3xl">
          <div className="w-full max-w-xs">
            <form className="bg-white rounded px-8 pt-6 pb-8 ml-[-60px] h-[500px] w-[450px]" onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className='flex justify-center'> 
                  <h1 className='text-[50px] text-[#293845] font-medium'>Login Form</h1>
                </div>
                <label className="block text-[#293845] text-lg font-bold mb-2 mt-[-10px]" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  aria-label="Email"
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
                  aria-label="Password"
                  className="shadow appearance-none border rounded-3xl w-full py-2 px-3 bg-[#e0defd] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="text-red-500 text-xs italic mt-1">{passwordError}</p>}
              </div>
              <div className="flex flex-col items-center justify-center mt-[55px]">
              <button
                type="submit"
                aria-label="Login"
                className="relative bg-gradient-to-r from-[#6c60f1] to-[#e971d6] text-white text-[20px] font-bold py-2 px-4 h-[40px] w-full rounded-3xl focus:outline-none focus:shadow-outline overflow-hidden flex justify-center items-center"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-[#f43d7e] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"></span>
                <span className="relative z-10">Login</span>
              </button>

                {message && <p className="text-center text-md mt-4">{message}</p>}
                <div className="text-center mt-6">
                  <p className="text-gray-600 text-md">
                    Don't have an account? <button onClick={redirectToRegister} className="text-blue-500 underline">Register</button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* Background Image */}
        <div className="w-2/5 bg-black flex justify-center items-center rounded-r-3xl" style={{ 
          backgroundImage: "url('/Login.png')",
          backgroundSize: 'cover', // Adjust image size to cover the div
          backgroundPosition: 'center', // Center the image
          backgroundRepeat: 'no-repeat' // Prevent image from repeating
        }}>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired, // Ensure onLogin is required
};

export default Login;
