import React from 'react';
import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/legal/LegalPageLayout';

const CookiePolicy = () => (
    <LegalPageLayout
        title="Cookie Policy"
        variant="cookies"
        emoji="🍪"
        kidLine="Not the chocolate kind — tiny files that help our website remember things for you."
    >
        <p>
            This Cookie Policy explains how kidscodingai.com (&quot;we,&quot; &quot;us&quot;) uses cookies and similar
            technologies when you visit our website. It should be read together with our{' '}
            <Link to="/privacy">Privacy Policy</Link>.
        </p>

        <h2>1. What are cookies?</h2>
        <p>
            Cookies are small text files stored on your device when you visit a website. They help the site
            remember your preferences, understand how pages are used, and in some cases support security and
            performance.
        </p>

        <h2>2. Types of cookies we may use</h2>
        <ul>
            <li>
                <strong>Strictly necessary:</strong> Required for basic site operation (for example, load
                balancing or remembering cookie consent choices where implemented).
            </li>
            <li>
                <strong>Functional:</strong> Remember settings such as language or display preferences when we
                offer those features.
            </li>
            <li>
                <strong>Analytics:</strong> Help us understand aggregate usage (for example, which pages are
                popular) so we can improve content and performance.
            </li>
            <li>
                <strong>Marketing (if used):</strong> Only if we integrate advertising or social tools that set
                such cookies; we will describe them clearly if that applies.
            </li>
        </ul>

        <h2>3. Similar technologies</h2>
        <p>
            We may use local storage, session storage, or pixels for similar purposes as cookies—for example,
            to remember UI state or measure engagement.
        </p>

        <h2>4. Third-party cookies</h2>
        <p>
            Some features may set cookies from partners (for example, embedded videos or analytics). Those
            providers have their own policies. We recommend reviewing their documentation if you use those
            features.
        </p>

        <h2>5. How long cookies last</h2>
        <p>
            Session cookies expire when you close your browser. Persistent cookies remain for a set period or
            until you delete them, depending on the cookie&apos;s purpose.
        </p>

        <h2>6. Your choices</h2>
        <p>
            Most browsers let you block or delete cookies through settings. Blocking all cookies may affect how
            the site works. You can also use private or incognito browsing to limit persistent storage for that
            session.
        </p>

        <h2>7. Updates</h2>
        <p>
            We may update this Cookie Policy when our practices or regulations change. The &quot;Last updated&quot;
            date on this page will reflect the latest version.
        </p>

        <h2>8. Contact</h2>
        <p>
            Questions about cookies:{' '}
            <a href="mailto:info@kidscodingai.com">info@kidscodingai.com</a>
        </p>
    </LegalPageLayout>
);

export default CookiePolicy;
