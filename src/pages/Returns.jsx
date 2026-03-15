import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Returns() {
  useScrollReveal();

  return (
    <div className="page-terms">
      <article className="terms-content reveal">
        <h1 className="terms-title">Returns Policy</h1>
        <p className="terms-effective">Effective Date: March 15, 2026</p>

        <p className="terms-intro">
          At GizMentor, we aim to provide carefully selected and refined products designed to deliver reliable daily performance. If you experience an issue with a product purchased through our platform, this Returns Policy explains how return requests are handled.
        </p>

        <section>
          <h2>1. Return Eligibility</h2>
          <p>To be eligible for a return, the product must:</p>
          <ul>
            <li>Be in its original condition</li>
            <li>Not show signs of misuse, damage, or modification</li>
            <li>Be returned with its original packaging and accessories (when applicable)</li>
          </ul>
          <p>Returns that do not meet these conditions may not be accepted.</p>
        </section>

        <section>
          <h2>2. Return Window</h2>
          <p>
            Return requests must be submitted within <strong>14 days of receiving the product</strong>. Requests submitted after this period may not be eligible for a return or refund.
          </p>
        </section>

        <section>
          <h2>3. Non-Returnable Items</h2>
          <p>Certain items may not be eligible for return, including:</p>
          <ul>
            <li>Products damaged due to misuse or improper handling</li>
            <li>Items returned without original components or packaging</li>
            <li>Products that have been significantly altered after delivery</li>
          </ul>
        </section>

        <section>
          <h2>4. Return Process</h2>
          <p>If you wish to request a return:</p>
          <ol>
            <li>Contact GizMentor support with your order details and reason for return.</li>
            <li>Our team will provide return instructions and next steps.</li>
            <li>Ship the item as instructed and retain proof of return.</li>
          </ol>
        </section>

        <section>
          <h2>5. Contact Information</h2>
          <p>
            For return requests or questions about this policy, contact us at:
          </p>
          <p className="terms-contact">
            <strong>GizMentor</strong><br />
            IFZA Business Park, Dubai Silicon Oasis<br />
            Email: <a href="mailto:info@gizmentor.com">info@gizmentor.com</a>
          </p>
        </section>
      </article>
    </div>
  );
}
