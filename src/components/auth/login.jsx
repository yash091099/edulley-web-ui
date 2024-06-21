import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import loginImage from '../../assets/login_image.png';
import googleLogo from '../../assets/google.png';
import { verifyPhoneNumber, generatePhoneOtp, registerUser } from '../../Services/login';
import { toast } from 'react-hot-toast';
import CustomLoader from '../loader';
import { useGoogleLogin } from "@react-oauth/google";
import logo from "../../assets/navbar-logo@2x.png";
import cherons from "../../assets/chevrons-right.png";
import axios from "axios";
import OTPInput from "otp-input-react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

Modal.setAppElement('#root');

function LoginModal({ isOpen, onClose, initialTab }) {
  useEffect(() => {
    let _user = JSON.parse(localStorage.getItem("_u"));
    if (_user?.token) {
      navigate("/");
    }
  }, []);
  
  const navigate = useNavigate();
  const [modalIsOpen, setIsModalOpen] = useState(true);
  const [isOtpScreen, setIsOtpScreen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(initialTab === 'signup');
  const [mobileNumber, setMobileNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [countryCode, setCountryCode] = useState('in');
  // useEffect(() => {
  //   const handleKeyPress = (event) => {
  //     if (event.key === 'Enter') {
  //       if (isOtpScreen) {
  //         handleSubmitOtp();
  //       } else if (isSignUp) {
  //         handleRegister();
  //       } else {
  //         handleRequestOtp();
  //       }
  //     }
  //   };
  
  //   document.addEventListener('keydown', handleKeyPress);
  //   return () => {
  //     document.removeEventListener('keydown', handleKeyPress);
  //   };
  // }, [isOtpScreen, isSignUp]);
  
  const validateFields = () => {
    const newErrors = {};
    console.log(mobileNumber, '---mobile number---');
    if (isSignUp) {
      if (!fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!email.trim()) newErrors.email = 'Email is required';
    }
    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (mobileNumber.length !== 10) {
      newErrors.mobileNumber = 'Mobile number must be 10 digits';
    }
    if (isOtpScreen && otp.length !== 4) newErrors.otp = 'OTP must be 4 digits';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        if (isOtpScreen) {
          handleSubmitOtp();
        } else if (isSignUp) {
          handleRegister();
        } else {
          handleRequestOtp();
        }
      }
    };
  
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOtpScreen, isSignUp]);
  
 
  

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

  const handleOtpChange = (otp) => {
    setOtp(otp);
    if (otp.length === 4) {
      setErrors((prevErrors) => ({ ...prevErrors, otp: '' }));
    }
  };

  const handleRequestOtp = async () => {
    if (!validateFields()) return;
    setIsLoading(true);
    try {
      let response = await generatePhoneOtp({ countryCode: `+${countryCode}`, phoneNumber: mobileNumber });
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
        otp: otp,
        phoneNumber: mobileNumber,
        countryCode: `+${countryCode}`
      });
      console.log(response, '---response---')
      if (!response?.data?.data?.error) {
        const _u = response?.data?.data?.user;
        if (_u) {
          _u.token = response?.data?.data?.token;
          _u.mobileNumber = mobileNumber;
          localStorage.setItem('_u', JSON.stringify(_u));
          navigate('');
          window.location.reload();
          toast.success('Logged in successfully');
        }
      } else {
        toast.error(response.message || 'Failed to verify OTP');
      }
    } catch (error) {
      console.error('Error submitting OTP', error);
      toast.error((error.response && error.response.data && error.response.data.message) || 'Failed to verify OTP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!validateFields()) return;
    setIsLoading(true);
    try {
      let response = await registerUser({ fullName, countryCode: `+${countryCode}`, phoneNumber: mobileNumber, email });
      if (!response.error) {
        setIsSignUp(false);
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

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse.access_token);
      if (codeResponse && codeResponse.access_token) {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${codeResponse.access_token}`,
                Accept: "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res.data, '----------------------google response');
          })
          .catch((err) => console.log(err));
      }
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <>
      {/* <button onClick={() => setIsModalOpen(true)}>Open Modal</button> */}
      {isLoading && <CustomLoader />}
      <Modal
        isOpen={modalIsOpen ||isOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="container">
          <div className="" style={{ textAlign: "right"}}>
          <button style={{width: "30px",height: "30px",borderRadius: "50%",border: "1px solid #ff5573",color: "#ff5573" }}  className="close-btn" onClick={() =>{ onClose(); setIsModalOpen(false)}}>
          X
        </button>
          </div>
          <div className="row justify-content-center align-items-center">
        
            <div className="col-md-6 d-none d-md-block">
              <img className="logo mb-5" alt="Home" src={logo} />
              <img src={loginImage} alt="Login" className="img-fluid" />
            </div>
            <div className="col-md-6">
          
              {!isOtpScreen ? (
                <>
                  <h5 className="text-center" style={{ fontFamily: "Gilroy-Medium",fontWeight: "600" }}>{isSignUp ? 'SIGN UP' : 'SIGN IN'}</h5>
                  {isSignUp && (
                    <>
                      <input
                        className="form-control my-3"
                        type="text"
                        style={{ fontFamily: "Gilroy-Bold" , border: "1px solid #CCC0C0 " }}
                        placeholder="Full Name"
                        value={fullName}
                        onChange={handleFullNameChange}
                      />
                      {errors.fullName && <div className="text-danger" style={{ marginTop: "-15px", marginBottom: "10px" }}>{errors.fullName}</div>}
                      <input
                        className="form-control my-3"
                        type="email"
                        style={{ fontFamily: "Gilroy-Bold", border: "1px solid #CCC0C0 "  }}
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {errors.email && <div className="text-danger" style={{ marginTop: "-15px", marginBottom: "10px" }}>{errors.email}</div>}
                    </>
                  )}
                  <div className="input-group my-3">
                    <PhoneInput
                      country={countryCode}
                      value={`+${countryCode}${mobileNumber}`}
                      onChange={(value, country) => {
                        setMobileNumber(value.slice(country.dialCode.length));
                        
                        setCountryCode(country.dialCode);
                        if (value.slice(country.dialCode.length).length !== 10) {
                          setErrors((prevErrors) => ({ ...prevErrors, mobileNumber: 'Mobile number must be 10 digits' }));
                        } else {
                          setErrors((prevErrors) => ({ ...prevErrors, mobileNumber: '' }));
                        }
                      }}
                      inputStyle={{ width: "100%", border: "1px solid #CCC0C0", fontFamily: "Gilroy-Bold" }}
                      containerStyle={{ width: "100%" }}
                      dropdownStyle={{ width: "auto" }}
                    />
                  </div>
                  {errors.mobileNumber && <div className="text-danger" style={{ marginTop: "-15px", marginBottom: "10px" }}>{errors.mobileNumber}</div>}
                  <div style={{display:'flex',justifyContent:'center'}}>

                  <button
                    style={{ fontFamily: "Gilroy-Medium",width:"180px !important" }}
                    className="btn btn-primary w-100 my-3 auth-buttons"
                    onClick={isSignUp ? handleRegister : handleRequestOtp}
                  >
                    {isSignUp ? 'SIGN UP' : 'Request OTP'}  <img className='mb-1' src={cherons} alt="Home" />
                  </button>
                  </div>
                  {isSignUp ? (
                    <>
                      <div className='w-100 d-flex justify-content-center' style={{ fontFamily: "Gilroy-Medium" }}>
                        <p style={{ fontFamily: "Gilroy-Medium" }}>By Signing up you agree to our <span style={{ color: "#00949B",fontFamily: "Gilroy-Medium", cursor: 'pointer' }} onClick={() => navigate('/faq')}>Terms and Conditions</span></p>
                      </div>
                      <div className="d-flex align-items-center justify-content-center my-2">
                        <div className="border-top w-100" />
                        <span className="mx-2" style={{ fontFamily: "Gilroy-Bold" }}>OR</span>
                        <div className="border-top w-100" />
                      </div>
                      <button onClick={handleGoogleLogin} className="btn mb-3 btn-light w-100" style={{ fontFamily: "Gilroy-Medium",color:"#000000" }}>
                        <img src={googleLogo} alt="Google" className="me-2" /> Sign up with Google
                      </button>
                      <p className="text-center" onClick={() => setIsSignUp(false)} style={{ fontFamily: "Gilroy-Medium" }}>Have an account? <strong style={{ fontFamily: "Gilroy-Medium", cursor: 'pointer',color:"#FF5573" }}>LOGIN</strong></p>
                    </>
                  ) : (
                    <>
                      <div className="d-flex align-items-center justify-content-center my-2">
                        <div className="border-top w-100" />
                        <span className="mx-2" style={{ fontFamily: "Gilroy-Bold" }}>OR</span>
                        <div className="border-top w-100" />
                      </div>
                      <button onClick={handleGoogleLogin} className="btn btn-light w-100" style={{ fontFamily: "Gilroy-Medium" }}>
                        <img src={googleLogo} alt="Google" className="me-2" /> Sign in with Google
                      </button>
                      <p className="text-center mt-3" onClick={() => setIsSignUp(true)} style={{ fontFamily: "Gilroy-Medium" }}>
                        Don't have an account? <strong style={{ cursor: 'pointer', color: "#FF5573",fontFamily: "Gilroy-Medium" }}>SIGN UP</strong>
                      </p>
                    </>
                  )}
                </>
              ) : (
                <>
                  <h5 className="text-center" style={{ fontFamily: "Gilroy-Medium",fontWeight: "600" }}>Enter OTP</h5>
                  <div className="d-flex justify-content-center my-3">
                    <OTPInput
                      value={otp}
                      onChange={handleOtpChange}
                      autoFocus
                      OTPLength={4}
                      otpType="number"
                      disabled={false}
                      secure
                      inputClassName="otp-input"
                      inputStyles={{
                        width: "2rem",
                        height: "2rem",
                        margin: "0 0.5rem",
                        fontSize: "2rem",
                        borderRadius: 4,
                        border: "1px solid rgba(0,0,0,0.3)"
                      }}
                    />
                  </div>
                  {errors.otp && <div className="text-danger text-center">{errors.otp}</div>}
                  <div style={{display:'flex',justifyContent:'center'}}>

                  <button
                    className="btn btn-primary w-100 my-3 auth-buttons"
                    style={{ backgroundColor: '#FF5573', color: 'white', fontFamily: "Gilroy-Medium",width:"180px !important" }}
                    onClick={handleSubmitOtp}
                  >
                    Submit
                  </button>
                  </div>
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
