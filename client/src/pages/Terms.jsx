import React from 'react';
import LegalPageLayout from '../components/legal/LegalPageLayout';

const Terms = () => (
    <LegalPageLayout
        title="Terms & Conditions"
        variant="terms"
        emoji="📜"
        kidLine="The friendly rules for exploring kidscodingai.com — read with a grown-up if you like!"
    >
        <p>
            These Terms & Conditions (&quot;Terms&quot;) govern your use of the website and educational
            content offered by kidscodingai.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our
            services, you agree to these Terms. If you do not agree, please do not use the site.
        </p>

        <h2>1. Educational purpose</h2>
        <p>
            Our materials are provided for general educational and informational purposes. Content is
            designed for children under appropriate adult supervision. We do not guarantee specific academic
            outcomes or certification results.
        </p>

        <h2>2. Eligibility and supervision</h2>
        <p>
            Users under the age of majority should use this site only with the consent and supervision of a
            parent or legal guardian. Parents and guardians are responsible for monitoring their
            child&apos;s use of our services and any third-party tools we may link to.
        </p>

        <h2>3. Acceptable use</h2>
        <ul>
            <li>Do not attempt to disrupt, damage, or gain unauthorized access to our systems or data.</li>
            <li>Do not use the site to harass others, post unlawful content, or violate anyone&apos;s rights.</li>
            <li>Do not scrape, automate, or mass-download content in a way that burdens our infrastructure.</li>
        </ul>

        <h2>4. Intellectual property</h2>
        <p>
            Text, graphics, logos, and curriculum structure on kidscodingai.com are owned by us or our
            licensors and are protected by applicable laws. You may view and print content for personal,
            non-commercial educational use unless we state otherwise. Redistribution or commercial use
            requires our prior written permission.
        </p>

        <h2>5. Third-party links and tools</h2>
        <p>
            We may link to external sites (for example, coding platforms or documentation). Those sites have
            their own terms and privacy practices. We are not responsible for third-party content or services.
        </p>

        <h2>6. Disclaimers</h2>
        <p>
            The site and content are provided &quot;as is&quot; without warranties of any kind, express or implied,
            including fitness for a particular purpose. We do not warrant that the site will be uninterrupted
            or error-free.
        </p>

        <h2>7. Limitation of liability</h2>
        <p>
            To the fullest extent permitted by law, kidscodingai.com and its team shall not be liable for any
            indirect, incidental, special, or consequential damages arising from your use of the site.
        </p>

        <h2>8. Changes</h2>
        <p>
            We may update these Terms from time to time. The &quot;Last updated&quot; date at the top of this page
            will change when we do. Continued use of the site after changes constitutes acceptance of the
            revised Terms.
        </p>

        <h2>9. Contact</h2>
        <p>
            Questions about these Terms:{' '}
            <a href="mailto:info@kidscodingai.com">info@kidscodingai.com</a>
        </p>
    </LegalPageLayout>
);

export default Terms;
