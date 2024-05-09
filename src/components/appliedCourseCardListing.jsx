import React, { useState } from "react";
import CustomLoader from "../components/loader";
import { toast } from "react-hot-toast";
import { createTransaction, verifyTransaction } from "../Services/dashboard";
import { Tooltip } from 'reactstrap';
import { Money, Timer, Wallet } from "@mui/icons-material";
import { FaRupeeSign } from "react-icons/fa";
import book from "../assets/book.svg";
import map from "../assets/mappin.svg";

const AppliedCourseListCard = ({ course }) => {
  const [loading, setLoading] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  function formatText(text) {
    return text.toLowerCase().replace(/_/g, ' ').replace(/\b[a-z]/g, (char) => char.toUpperCase());
  }

  const handlePayment = async (course) => {
    setLoading(true);
    const paymentAmount = course?.courseId?.uniqueCourseInfo?.applicationFee * 100; // Convert to paisa
    try {
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
    <div className="course_card card" style={{ height: '400px', overflow: 'hidden', marginBottom: "8px" }}>
      <div className="inner_card">
        <div id={'Tooltip-' + course?.courseId?._id}>
          <h5 className="fw-semibold">{course?.courseId?.courseName || '--'}</h5>
          <p><img style={{ height: "2rem", width: "2rem", objectFit: "cover", marginRight: '5px' }} alt="" src={map} />{course?.courseId?.universityName || '--'}</p>
          <p><img style={{ height: "2rem", width: "2rem", objectFit: "cover", marginRight: '5px' }} alt="" src={book} />{course?.courseId?.overview?.slice(0, 300) || '--'}</p>
        </div>
        <Tooltip placement="top" isOpen={tooltipOpen} target={'Tooltip-' + course?.courseId?._id} toggle={toggle}>
          {course?.courseId?.overview || '--'}
        </Tooltip>
      </div>
      <div className="course_head_new">
        <h6 className="p-0 m-0">Level : {course?.courseId?.level?.slice(0, 200) || '--'}</h6>
      </div>
      <div className="course_head_new" style={{ marginBottom: "10px" }}>
        <h6 className="p-0 m-0">{course?.courseId?.requirements?.slice(0, 300) || '--'}</h6>
      </div>
      <div className="d-flex  align-items-center gap-4 mt-4 flex-wrap" style={{ position: 'absolute', bottom: '12px' }}>
        <div>
          <p className="fw-bold" style={{ color: "#575656" }}><span><Wallet /></span>Fees</p>
          <p style={{ color: "#FF6477", fontWeight: "800" }}><FaRupeeSign /> {course?.courseId?.uniqueCourseInfo?.fee || '--'} / year</p>
        </div>
        <div>
          <p className="fw-bold " style={{ color: "#575656" }}><Timer />Duration</p>
          <p style={{ color: "#FF6477", fontWeight: "800" }}>{course?.courseId?.uniqueCourseInfo?.duration || '--'} years</p>
        </div>
        <div>
          <p className="fw-bold " style={{ color: "#575656" }}><FaRupeeSign />Application Fee</p>
          <p style={{ color: "#FF6477", fontWeight: "800" }}><FaRupeeSign /> {course?.courseId?.uniqueCourseInfo?.applicationFee || '--'}</p>
        </div>
        <div>
          <span className="badge  pt-2 pb-2" style={{ backgroundColor: '#CDC1F9', color: '#5932EA' }}>{formatText(course?.status)}</span>
          {course?.status === 'APPLIED_CONDITIONAL_OFFER' &&
            <button className="btn btn-primary text-white text-bold ml-2" onClick={() => { handlePayment(course) }}>Pay Application Fee</button>}
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default AppliedCourseListCard;
