import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/legal/LegalPageLayout';

const PrivacyPolicy = () => (
    <LegalPageLayout
        title="Privacy Policy"
        variant="privacy"
        emoji="🔒"
        kidLine="How we take care of your information — written so kids and families can understand."
    >
        <p>
            kidscodingai.com (&quot;we,&quot; &quot;us,&quot;) respects your privacy. This Privacy Policy explains what
            information we may collect, how we use it, and your choices. It applies to visitors of our website
            and users of our educational content.
        </p>

        <h2>1. Information we may collect</h2>
        <ul>
            <li>
                <strong>Information you provide:</strong> For example, if you contact us by email or subscribe
                to updates, we receive the details you send (such as email address and message content).
            </li>
            <li>
                <strong>Technical data:</strong> Such as browser type, device type, general location (e.g.,
                region from IP address), pages visited, and timestamps. This helps us operate and improve the
                site.
            </li>
            <li>
                <strong>Cookies:</strong> See our{' '}
                <Link to="/cookies">Cookie Policy</Link> for how we use cookies and similar technologies.
            </li>
        </ul>

        <h2>2. How we use information</h2>
        <ul>
            <li>To provide, maintain, and improve our website and educational materials.</li>
            <li>To respond to inquiries and send administrative or service-related messages.</li>
            <li>To understand how the site is used so we can improve content and user experience.</li>
            <li>To comply with legal obligations and protect the security of our services.</li>
        </ul>

        <h2>3. Legal bases (where applicable)</h2>
        <p>
            Depending on your location, we may rely on consent, legitimate interests (such as improving our
            services and securing our site), or contract performance to process personal data.
        </p>

        <h2>4. Sharing of information</h2>
        <p>
            We do not sell your personal information. We may share data with service providers who assist us
            (for example, hosting or analytics) under strict confidentiality, when required by law, or to
            protect our rights and users&apos; safety.
        </p>

        <h2>5. Children&apos;s privacy</h2>
        <p>
            Our content is aimed at families and educators. We encourage parents and guardians to guide
            children&apos;s online activity. We do not knowingly collect personal information from children
            beyond what is reasonably necessary to provide the service, and we encourage adults to contact us if
            they believe a child has shared information inappropriately.
        </p>

        <h2>6. Data retention</h2>
        <p>
            We keep information only as long as needed for the purposes described in this policy, unless a
            longer period is required or permitted by law.
        </p>

        <h2>7. Security</h2>
        <p>
            We take reasonable measures to protect information against unauthorized access, loss, or misuse.
            No method of transmission over the internet is completely secure.
        </p>

        <h2>8. Your rights</h2>
        <p>
            Depending on where you live, you may have rights to access, correct, delete, or restrict processing
            of your personal data, or to object to certain processing. To exercise these rights, contact us at
            the email below. You may also have the right to lodge a complaint with a supervisory authority.
        </p>

        <h2>9. International users</h2>
        <p>
            If you access the site from outside India, your information may be processed in India or other
            countries where we or our providers operate, which may have different data protection laws.
        </p>

        <h2>10. Changes to this policy</h2>
        <p>
            We may update this Privacy Policy from time to time. We will adjust the &quot;Last updated&quot; date
            when we do. Please review this page periodically.
        </p>

        <h2>11. Contact</h2>
        <p>
            Privacy questions:{' '}
            <a href="mailto:info@kidscodingai.com">info@kidscodingai.com</a>
        </p>
    </LegalPageLayout>
);

export default PrivacyPolicy;
