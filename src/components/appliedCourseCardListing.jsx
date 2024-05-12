import React, { useEffect, useState } from "react";
import CustomLoader from "../components/loader";
import { toast } from "react-hot-toast";
import { createTransaction, verifyTransaction } from "../Services/dashboard";
import { Tooltip } from 'reactstrap';
import { Money, Timer, Wallet } from "@mui/icons-material";
import { FaRupeeSign } from "react-icons/fa";
import book from "../assets/book.svg";
import map from "../assets/mappin.svg";
import time from "../assets/ion_time-outline.png";
import walletImage from "../assets/solar_wallet-linear.png";
import ellipse from "../assets/Ellipse.png";
const AppliedCourseListCard = ({ course }) => {
  const [loading, setLoading] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  function formatText(text) {
    return text.toLowerCase().replace(/_/g, ' ').replace(/\b[a-z]/g, (char) => char.toUpperCase());
  }
  useEffect(() => {
    // Load Razorpay script dynamically
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handlePayment = async (course) => {
    setLoading(true);
    const paymentAmount = course?.courseId?.uniqueCourseInfo?.applicationFee * 100; // Convert to paisa
    try {
      if (!razorpayLoaded) {
        throw new Error('Razorpay script is not loaded');
      }
      const transaction = await createTransaction({
        amount: paymentAmount,
        currency: "INR",
        countryCode: "+91",
        applicationId: course?._id
      });

      const options = {
        key: "rzp_test_FELPeq7HeVvV2w", // Replace with your actual key
        amount: paymentAmount, // amount in the smallest currency unit
        currency: "INR",
        name: "Application Fee",
        description: "Transaction for Application Fee",
        order_id: transaction?.data?.data.orderId,
        handler: async (response) => {
          try {
            const verify = await verifyTransaction({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              applicationId: course?._id
            });
            if (verify) {
              toast.success('Payment successful');
            } else {
              toast.error('Payment verification failed');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            toast.error('Payment verification error');
          }
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "+919876543210"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };

      // Check if Razorpay is available
      if (typeof window.Razorpay !== 'undefined') {
        const paymentWindow = new window.Razorpay(options);
        paymentWindow.open();
      } else {
        throw new Error('Razorpay is not available');
      }
    } catch (error) {
      console.error('Error creating transaction:', error);
      toast.error('Failed to initiate payment');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <CustomLoader />;
  }

  return (
    <div className="course_card card" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden', marginBottom: "8px"}}>
      <div className="inner_card">
        <div id={'Tooltip-' + course?.courseId?._id}>
          <h5 style={{fontFamily:"Gilroy-Bold"}}>{course?.courseId?.courseName || '--'}</h5>
          <p style={{fontFamily:"Gilroy-Regular"}}><img style={{ height: "1.5rem", width: "1.5rem", objectFit: "cover", marginRight: '5px' }} alt="" src={ellipse} />{course?.courseId?.universityName || '--'}</p>
          <p style={{fontFamily:"Gilroy-Regular"}}><img style={{ height: "1.5rem", width: "1.5rem", objectFit: "cover", marginRight: '5px' }} alt="" src={book} />{course?.courseId?.overview?.slice(0, 300) || '--'}</p>
        </div>
        <Tooltip placement="top" isOpen={tooltipOpen} target={'Tooltip-' + course        ?.courseId?._id} toggle={toggle}>
          {course?.courseId?.overview || '--'}
        </Tooltip>
      </div>
      <div className="course_head_new">
        <h6 className="p-0 m-0" style={{fontFamily:"Gilroy-Regular"}}>Level : {course?.courseId?.level?.slice(0, 200) || '--'}</h6>
      </div>
      <div className="course_head_new" style={{ marginBottom: "10px" }}>
        <h6 className="p-0 m-0" style={{fontFamily:"Gilroy-Regular"}}>Requirements : {course?.courseId?.requirements?.slice(0, 200) || '--'}</h6>
      </div>
      <div className="d-flex align-items-center gap-5 mt-4 flex-wrap">
        <div>
          <p  style={{ color: "#575656",fontFamily:"Gilroy-Regular" }}><span><img
              style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
              alt=""
              src={walletImage}
            /></span>Fees</p>
          <p style={{ color: "#FF6477", fontFamily:"Gilroy-Regular" }}><FaRupeeSign /> {course?.courseId?.uniqueCourseInfo?.fee || '--'} / year</p>
        </div>
        <div>
          <p className="fw-bold " style={{ color: "#575656",fontFamily:"Gilroy-Regular" }}><img
              style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
              alt=""
              src={time}
            />Duration</p>
          <p style={{ color: "#FF6477",fontFamily:"Gilroy-Regular"}}>{course?.courseId?.uniqueCourseInfo?.duration || '--'} years</p>
        </div>
        <div>
          <p className="fw-bold " style={{ color: "#575656",fontFamily:"Gilroy-Regular" }}><img
              style={{ height: "1rem", width: "1rem", objectFit: "cover", marginRight: "5px" }}
              alt=""
              src={time}
            />Application Fee</p>
          <p style={{ color: "#FF6477",fontFamily:"Gilroy-Regular"}}><FaRupeeSign /> {course?.courseId?.uniqueCourseInfo?.applicationFee || '--'}</p>
        </div>
        <div>
          <span className="badge pt-2 pb-2" style={{ backgroundColor: '#CDC1F9', color: '#5932EA', fontFamily: 'Gilroy-SemiBold'  }}>{formatText(course?.status)}</span>
          {course?.status === 'APPLIED_CONDITIONAL_OFFER' &&
            <button className="btn btn-primary text-white text-bold ml-2" style={{ fontFamily: 'Gilroy-Medium' }} onClick={() => { handlePayment(course) }}>Pay Application Fee</button>}
        </div>
      </div>
    </div>
  );
};

export default AppliedCourseListCard;
