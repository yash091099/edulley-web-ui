import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import loginImage from '../../assets/login.png';
import googleLogo from '../../assets/google.png';
import { verifyPhoneNumber, generatePhoneOtp, registerUser } from '../../Services/login';
import { toast } from 'react-hot-toast';
import CustomLoader from '../loader';

Modal.setAppElement('#root');

function LoginModal() {

  useEffect(() => {
    let _user = JSON.parse(localStorage.getItem("_u"));
    if(_user?.token){
      navigate("/");
    }
    
  },[])
  const navigate = useNavigate();
  const [modalIsOpen, setIsModalOpen] = useState(true);
  const [isOtpScreen, setIsOtpScreen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateFields = () => {
    const newErrors = {};
    if (isSignUp) {
      if (!fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!email.trim()) newErrors.email = 'Email is required';
    }
    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (mobileNumber.length !== 10) {
      newErrors.mobileNumber = 'Mobile number must be 10 digits';
    }
    if (isOtpScreen && otp.join('').length !== 4) newErrors.otp = 'OTP must be 4 digits';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.slice(0, 10);
    setMobileNumber(value);
    if (!value) {
      setErrors((prevErrors) => ({ ...prevErrors, mobileNumber: 'Mobile number is required' }));
    } else if (value.length !== 10) {
      setErrors((prevErrors) => ({ ...prevErrors, mobileNumber: 'Mobile number must be 10 digits' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, mobileNumber: '' }));
    }
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    if (e.target.value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, fullName: '' }));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }
  };

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value.slice(0, 1);
    setOtp(newOtp);
    if (newOtp.join('').length === 4) {
      setErrors((prevErrors) => ({ ...prevErrors, otp: '' }));
    }
  };

  const handleRequestOtp = async () => {
    if (!validateFields()) return;
    setIsLoading(true);
    try {
      let response = await generatePhoneOtp({ countryCode: "+91", phoneNumber: mobileNumber });
      if (!response.error) {
        setIsOtpScreen(true);
        toast.success('OTP has been sent to your mobile number');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error('Error requesting OTP', error);
      toast.error(error.response?.data?.message || 'Failed to send OTP');
    }
    setIsLoading(false);
  };

  const handleSubmitOtp = async () => {
    if (!validateFields()) return;
    setIsLoading(true);
  
    try {
      const response = await verifyPhoneNumber({
        otp: otp.join(''),
        phoneNumber: mobileNumber,
        countryCode: "+91"
      });
  console.log(response,'---response---')
      // Check if the error flag in the response is false, indicating a successful verification
      if (!response?.data?.data?.error) {
        const _u = response?.data?.data?.user;
        if (_u) {
          _u.token = response?.data?.data?.token;  // Ensure the token is assigned to the user object
          localStorage.setItem('_u', JSON.stringify(_u));  // Store the user data in local storage
          

          navigate('');  // Navigate to the home page or dashboard
          window.location.reload()
          toast.success('Logged in successfully');
        }
      } else {
        // Error handling based on the error message provided in the response
        toast.error(response.message || 'Failed to verify OTP');
      }
    } catch (error) {
      console.error('Error submitting OTP', error);
      // Show a more specific error message if available within error.response.data
      toast.error((error.response && error.response.data && error.response.data.message) || 'Failed to verify OTP');
    } finally {
      setIsLoading(false);
    }
  };
  
  
  const handleRegister = async () => {
    if (!validateFields()) return;
    setIsLoading(true);
    try {
      let response = await registerUser({ fullName, countryCode: "+91", phoneNumber: mobileNumber, email });
      if (!response.error) {
        setIsSignUp(false); // Transition to login after registration
        toast.success('Registered successfully. Please log in.');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error('Error registering user', error);
      toast.error(error.response?.data?.message || 'Registration failed');
    }
    setIsLoading(false);
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isLoading && <CustomLoader />}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 d-none d-md-block">
              <img src={loginImage} alt="Login" className="img-fluid" />
            </div>
            <div className="col-md-6">
              {!isOtpScreen ? (
                <>
                  <h2 className="text-center">{isSignUp ? 'SIGN UP' : 'SIGN IN'}</h2>
                  {isSignUp && (
                    <>
                      <input
                        className="form-control my-3"
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={handleFullNameChange}
                      />
                      {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                      <input
                        className="form-control my-3"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {errors.email && <div className="text-danger">{errors.email}</div>}
                    </>
                  )}
                  <input
                    className="form-control my-3"
                    type="text"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={handleMobileChange}
                  />
                  {errors.mobileNumber && <div className="text-danger">{errors.mobileNumber}</div>}
                  <button
                    className="btn btn-primary w-100 my-3"
                    onClick={isSignUp ? handleRegister : handleRequestOtp}
                  >
                    {isSignUp ? 'Register' : 'Request OTP'}
                  </button>
                  {isSignUp ? (
                    <p className="text-center" onClick={() => setIsSignUp(false)}>Have an account? <strong>LOGIN</strong></p>
                  ) : (
                    <>
                      <div className="d-flex align-items-center justify-content-center my-2">
                        <div className="border-top w-100" />
                        <span className="mx-2">OR</span>
                        <div className="border-top w-100" />
                      </div>
                      <button className="btn btn-light w-100">
                        <img src={googleLogo} alt="Google" className="me-2" /> Sign in with Google
                      </button>
                      <p className="text-center mt-3" onClick={() => setIsSignUp(true)}>
                        Don't have an account? <strong>SIGN UP</strong>
                      </p>
                    </>
                  )}
                </>
              ) : (
                <>
                  <h2 className="text-center">ENTER OTP</h2>
                  <div className="d-flex justify-content-center my-3">
                    {otp.map((digit, index) => (
                      <input
                        className="form-control text-center mx-1"
                        type="text"
                        value={digit}
                        onChange={(e) => handleOtpChange(e, index)}
                        key={index}
                        maxLength={1}
                        style={{ maxWidth: '3rem' }}
                      />
                    ))}
                  </div>
                  {errors.otp && <div className="text-danger text-center">{errors.otp}</div>}
                  <button
                    className="btn btn-primary w-100"
                    style={{backgroundColor: '#FF6477', color: 'white'}}
                    onClick={handleSubmitOtp}
                  >
                    Submit
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
