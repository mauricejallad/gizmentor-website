import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Terms() {
  useScrollReveal();

  return (
    <div className="page-terms">
      <article className="terms-content reveal">
        <h1 className="terms-title">Terms of Use</h1>
        <p className="terms-effective">Effective Date: March 15, 2026</p>

        <p className="terms-intro">
          Welcome to GizMentor. These Terms of Use govern your access to and use of the GizMentor website and any related content, products, services, and communications provided through it. By accessing or using this website, you agree to be bound by these Terms. If you do not agree, please do not use the website.
        </p>

        <section>
          <h2>1. Use of Website</h2>
          <p>
            You may use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit the use of this website by any other person. You agree not to misuse the website, attempt unauthorized access, interfere with its operation, or use it in any way that could damage the GizMentor brand or platform.
          </p>
        </section>

        <section>
          <h2>2. Product Information</h2>
          <p>
            GizMentor presents products, concepts, and related information with the aim of offering refined and practical consumer solutions. We make reasonable efforts to ensure that product descriptions, visuals, specifications, and other content are accurate and up to date. However, we do not guarantee that all information on the website will always be complete, current, or error-free.
          </p>
          <p>
            Product availability, specifications, pricing, and presentation may be changed, updated, or removed at any time without prior notice.
          </p>
        </section>

        <section>
          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, branding, product names, logos, graphics, layouts, images, icons, design elements, and other materials, is owned by or licensed to GizMentor and is protected by applicable intellectual property laws.
          </p>
          <p>
            You may not copy, reproduce, distribute, modify, republish, transmit, display, or exploit any part of this website without prior written permission from GizMentor, except for personal, non-commercial use that does not remove or alter any proprietary notices.
          </p>
        </section>

        <section>
          <h2>4. Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites, platforms, or services for your convenience or reference. GizMentor does not control and is not responsible for the content, policies, practices, or availability of any third-party websites. Accessing third-party links is done at your own risk.
          </p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, GizMentor shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or related to your use of, or inability to use, this website or any information contained on it.
          </p>
          <p>
            This includes, without limitation, damages relating to interruptions, inaccuracies, errors, omissions, delays, loss of data, or reliance on any website content.
          </p>
        </section>

        <section>
          <h2>6. No Warranties</h2>
          <p>
            This website and its contents are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. GizMentor makes no warranties, express or implied, regarding the operation of the website or the accuracy, reliability, or suitability of the content made available through it.
          </p>
        </section>

        <section>
          <h2>7. User Conduct</h2>
          <p>By using this website, you agree not to:</p>
          <ul>
            <li>violate any applicable laws or regulations</li>
            <li>upload or transmit malicious code or harmful material</li>
            <li>attempt to gain unauthorized access to any part of the website</li>
            <li>use the website in a fraudulent, abusive, or misleading manner</li>
            <li>reproduce or exploit the website for unauthorized commercial purposes</li>
          </ul>
        </section>

        <section>
          <h2>8. Changes to These Terms</h2>
          <p>
            GizMentor reserves the right to update or modify these Terms of Use at any time. Any changes will become effective once posted on this page. Your continued use of the website after such changes constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws applicable in the United Arab Emirates, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2>10. Contact Information</h2>
          <p>
            If you have any questions regarding these Terms of Use, you may contact us at:
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
