import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Privacy() {
  useScrollReveal();

  return (
    <div className="page-terms">
      <article className="terms-content reveal">
        <h1 className="terms-title">Privacy Policy</h1>
        <p className="terms-effective">Effective Date: March 15, 2026</p>

        <p className="terms-intro">
          GizMentor respects your privacy and is committed to protecting the personal information you may provide while using our website. This Privacy Policy explains how information is collected, used, and protected when you visit or interact with the GizMentor website.
        </p>
        <p className="terms-intro">
          By using this website, you agree to the practices described in this policy.
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We may collect limited information when you interact with the website, including:
          </p>
          <ul>
            <li><strong>Contact information</strong> you voluntarily provide (such as your name or email when submitting an inquiry through a contact form).</li>
            <li><strong>Technical information</strong> such as browser type, device information, and general usage data.</li>
            <li><strong>Analytics information</strong> related to how visitors interact with the website.</li>
          </ul>
          <p>
            This information helps us understand how the website is used and improve the overall user experience.
          </p>
        </section>

        <section>
          <h2>2. How We Use Information</h2>
          <p>
            Information collected through the website may be used to:
          </p>
          <ul>
            <li>Respond to inquiries or communication requests</li>
            <li>Improve website functionality and performance</li>
            <li>Understand user behavior and site usage patterns</li>
            <li>Maintain security and prevent misuse of the platform</li>
          </ul>
          <p>
            GizMentor does not sell, rent, or trade personal information to third parties.
          </p>
        </section>

        <section>
          <h2>3. Cookies and Analytics</h2>
          <p>
            The website may use cookies or similar technologies to improve functionality and analyze traffic.
          </p>
          <p>
            Cookies are small files stored on your device that help websites remember certain information about your visit. These technologies may be used to:
          </p>
          <ul>
            <li>Understand website traffic and usage trends</li>
            <li>Improve performance and usability</li>
            <li>Maintain basic site functionality</li>
          </ul>
          <p>
            You can modify your browser settings to disable cookies if you prefer.
          </p>
        </section>

        <section>
          <h2>4. Third-Party Links</h2>
          <p>
            The GizMentor website may contain links to third-party websites or services. These external sites are not controlled by GizMentor, and we are not responsible for their privacy practices or policies.
          </p>
          <p>
            Users are encouraged to review the privacy policies of any external websites they visit.
          </p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            GizMentor takes reasonable steps to protect information collected through the website. While we strive to use commercially acceptable methods to safeguard information, no method of internet transmission or electronic storage is completely secure.
          </p>
        </section>

        <section>
          <h2>6. Children&apos;s Privacy</h2>
          <p>
            The GizMentor website is not intended for children under the age of 13, and we do not knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2>7. Changes to This Policy</h2>
          <p>
            GizMentor may update this Privacy Policy from time to time. When updates occur, the revised version will be posted on this page with the updated effective date.
          </p>
          <p>
            Continued use of the website after such updates constitutes acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2>8. Contact Information</h2>
          <p>
            If you have any questions regarding this Privacy Policy, you may contact us at:
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
