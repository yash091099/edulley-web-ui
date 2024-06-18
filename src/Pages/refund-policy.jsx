import React from "react";

const RefundPolicy = () => {
  return (
    <div className="container py-5">
            <div className="py-5"></div>

      <header style={{ fontFamily: "Gilroy-Bold" }}>
        <h1 style={{ color: "#ff5573", fontWeight: "600" }}>Refund Policy</h1>
      </header>
      <main style={{ fontFamily: "Gilroy-Medium" }}>
        <section>
          <p style={{ fontFamily: "Gilroy-Bold", marginTop: "4px" }}>Last updated: June 14, 2024</p>
          <p>Before you enroll with us, look into our refund policies for a smooth experience:</p>
          <ul>
            <li>In the first place, we don't charge a penny for our consulting services. However, if a student is opting for any of our premium services, we charge e.g., applying to an institution we don't represent, IELTS training, Resume Writing, or SOP writing services.</li>
            <li><strong>Full Refund for Cancellations Within 7 Days:</strong> Clients can receive a full refund if they cancel any added service within 7 days of purchase if the service is not yet delivered or worked upon.</li>
            <li><strong>No Refund After Service Completion:</strong> No refunds will be issued if the service has been completed or if more than 50% of the service has been delivered.</li>
            <li><strong>Refund for Non-Availability:</strong> If a service cannot be provided due to unforeseen circumstances on the provider's end, clients will receive a full refund.</li>
            <li><strong>Refund for Course Cancellations:</strong> If an IELTS, PTE, or TOEFL training course is cancelled by the provider, clients will receive a full refund or the option to enroll in the next available course.</li>
            <li><strong>Refund Processing Time:</strong> All approved refunds will be processed within 10-15 business days of the refund request approval.</li>
          </ul>
        </section>
        <footer style={{ fontFamily: "Gilroy-Bold", marginTop: "20px" }}>
          <p>Please note that these refund policies are subject to change, and we recommend checking our website regularly for any updates to stay informed about your rights and options.</p>
        </footer>
      </main>
    </div>
  );
};

export default RefundPolicy;
