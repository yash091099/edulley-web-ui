import React from "react";

const RefundPolicy = () => {
  return (
    <div className="container py-5">
      <div className="py-5"></div>
     <div className="privacy-policy-container">
      <header className="privacy-header">
        <h1 className="font-gilroy-bold  " style={{color:"#ff5573",fontWeight:"600"}}>Refund Policy</h1>
      </header>
      <main className="privacy-main">
        <section>
          <p>Last updated: 02/04/2024</p>
          <p>Welcome to Edulley. We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services (collectively, "Services").</p>
          <p>This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [insert website address], including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the “Site”). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.</p>
        </section>
        <section>
          <h2>Information We Collect</h2>
          <p>We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device (“personal information”). In particular, our Site has collected the following categories of personal information from its consumers within the last twelve months:</p>
          <ul>
            <li><strong>Identifiers</strong>: Real name, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, or other similar identifiers.</li>
            <li><strong>Personal information</strong>: Described in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)), including, but not limited to, name, signature, Social Security number, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information.</li>
            <li><strong>Protected classification characteristics under California or federal law</strong>: Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information).</li>
            {/* Add more as needed */}
          </ul>
        </section>
        {/* Additional sections as necessary */}
        <footer>
          <p>Please note that this privacy policy is subject to change, and we recommend checking our website regularly for any updates to stay informed about how we are protecting your information.</p>
        </footer>
      </main>
    </div>
    </div>
  );
};

export default RefundPolicy;
