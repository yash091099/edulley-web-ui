import React, { useState } from "react";
import CustomLoader from "../components/loader";
import {toast} from "react-hot-toast";
import { createTransaction, verifyTransaction } from "../Services/dashboard";

const AppliedCourseListCard = ({ course }) => {
  const [loading, setLoading] = useState(false);

  function formatText(text) {
    return text.toLowerCase().replace(/_/g, ' ').replace(/\b[a-z]/g, (char) => char.toUpperCase());
  }

  const handlePayment = async () => {
    setLoading(true);
    const paymentAmount = course?.courseId?.uniqueCourseInfo?.applicationFee * 100; // Convert to paisa
    try {
      const transaction = await createTransaction({
        amount: paymentAmount,
        currency: "INR",
        countryCode: "+91"
      });

      const options = {
        key: "rzp_test_FELPeq7HeVvV2w", // Replace with your actual key
        amount: paymentAmount, // amount in the smallest currency unit
        currency: "INR",
        name: "Application Fee",
        description: "Transaction for Application Fee",
        order_id: transaction.orderId,
        handler: async (response) => {
          try {
            const verify = await verifyTransaction({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
              applicationId: "66253ba08d7bb486e60c75a0" // This should be dynamic based on actual application data
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
      const paymentWindow = new window.Razorpay(options);
      paymentWindow.open();
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
    <div className="course_card">
      <div className="inner_card">
        <div>
          <h5 className="fw-semibold">{course?.courseId?.courseName || '--'}</h5>
          <p>{course?.courseId?.universityName || '--'}</p>
          <p>{course?.courseId?.overview || '--'}</p>
        </div>
        <div>
        
         
        </div>
      </div>
      <div className="course_head">
        <h6 className="p-0 m-0">Level : {course?.courseId?.level || '--'}</h6>
      </div>
      <div className="course_head">
        <h6 className="p-0 m-0">{course?.courseId?.requirements || '--'}</h6>
      </div>
      <div className="d-flex align-items-center gap-5 mt-4 flex-wrap">
        <div>
          <p className="fw-bold">Fees</p>
          <p className="">$ {course?.courseId?.uniqueCourseInfo?.fee || '--'} / year</p>
        </div>
        <div>
          <p className="fw-bold">Duration</p>
          <p className="">{course?.courseId?.uniqueCourseInfo?.duration || '--'} years</p>
        </div>
        <div>
          <p className="fw-bold">Application Fee</p>
          <p>$ {course?.courseId?.uniqueCourseInfo?.applicationFee || '--'}</p>
        </div>
        <div>
          <span className="badge bg-primary pt-2 pb-2">{formatText(course?.status)}</span>
          {course?.status === 'APPLIED_CONDITIONAL_OFFER' && 
            <button className="btn btn-primary text-white text-bold ml-2" onClick={handlePayment}>Pay Application Fee</button>}
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default AppliedCourseListCard;
