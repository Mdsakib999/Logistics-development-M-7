"use client";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="p-6 md:max-w-5xl mx-auto pt-20">
      {/* Legal Notice Section */}
      <section className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
          Legal Notice
        </h1>

        <p className="mb-5 text-base sm:text-lg">
          <strong>Spedition Bernhard GmbH</strong>
          <br />
          Boschstr. 4 <br /> 67304 Eisenberg
          <br />
        </p>

        <p className="mb-2 text-base sm:text-lg">
          <strong>Represented by:</strong> Thomas Bernhard
        </p>

        <p className="mb-2 text-base sm:text-lg">
          <strong>Commercial Register:</strong> HRB 12345
          <br />
          <strong>Register Court:</strong> Kaiserslautern District Court
        </p>

        <p className="mb-2 text-base sm:text-lg">
          <strong>Email: </strong>
          <a href="mailto:transport@bernhardlogistik.de">
            transport@bernhardlogistik.de
          </a>
        </p>

        <p className="mb-2 text-base sm:text-lg">
          VAT Identification Number according to §27a UStG: DE192254731
        </p>
      </section>

      {/* Privacy Policy Section */}
      <section>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
          Privacy Policy
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-4 mb-2">
          1. General Information
        </h2>
        <p className="mb-4 text-base sm:text-lg">
          The protection of your personal data is very important to us. We treat
          your personal data confidentially and in accordance with statutory
          data protection regulations and this privacy policy.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-4 mb-2">
          2. Responsible Entity
        </h2>
        <p className="mb-4 text-base sm:text-lg">
          The responsible entity for data processing on this website is:
        </p>

        <p className="mb-4 text-base sm:text-lg">
          Spedition Bernhard GmbH
          <br />
          Boschstr. 4 <br /> 67304 Eisenberg
          <br />
          <strong>Email: </strong>
          <a href="mailto:transport@bernhardlogistik.de">
            transport@bernhardlogistik.de
          </a>
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-4 mb-2">
          3. Collection and Storage of Personal Data and Purpose of Use
        </h2>
        <p className="mb-4 text-base sm:text-lg">
          When visiting the website: When you access our website, information is
          automatically sent to the server of our website by the browser used on
          your device. This information is temporarily stored in a so-called log
          file. The following information is collected without your action and
          stored until automatically deleted:
        </p>

        <ul className="list-disc pl-6 mb-4 text-base sm:text-lg">
          <li>IP address of the requesting device</li>
          <li>Date and time of access</li>
          <li>Name and URL of the retrieved file</li>
          <li>Website from which access was made (referrer URL)</li>
          <li>
            Browser used and, if applicable, the operating system of your device
            and the name of your access provider
          </li>
        </ul>

        <p className="mb-4 text-base sm:text-lg">
          This data is processed by us for the following purposes:
        </p>

        <ul className="list-disc pl-6 mb-4 text-base sm:text-lg">
          <li>Ensuring a smooth connection to the website</li>
          <li>Ensuring comfortable use of our website</li>
          <li>Evaluation of system security and stability</li>
          <li>Other administrative purposes</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-4 mb-2">
          4. Data Disclosure
        </h2>
        <p className="mb-4 text-base sm:text-lg">
          Your personal data will only be transferred to third parties if:
        </p>

        <ul className="list-disc pl-6 mb-4 text-base sm:text-lg">
          <li>You have given your explicit consent</li>
          <li>
            Processing is necessary for the performance of a contract with you
          </li>
          <li>There is a legal obligation to disclose the data</li>
          <li>
            Disclosure is necessary to protect legitimate interests and there is
            no reason to assume that you have an overriding interest in
            non-disclosure
          </li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-4 mb-2">
          5. Your Rights as a Data Subject
        </h2>
        <p className="mb-4 text-base sm:text-lg">You have the right to:</p>

        <ul className="list-disc pl-6 mb-4 text-base sm:text-lg">
          <li>
            request information pursuant to Art. 15 GDPR about your personal
            data processed by us
          </li>
          <li>
            request immediate correction of inaccurate or incomplete personal
            data pursuant to Art. 16 GDPR
          </li>
          <li>
            request deletion of your personal data pursuant to Art. 17 GDPR
          </li>
          <li>request restriction of processing pursuant to Art. 18 GDPR</li>
          <li>
            receive your personal data in a structured, commonly used, and
            machine-readable format or request transfer to another controller
            pursuant to Art. 20 GDPR
          </li>
          <li>withdraw your consent at any time pursuant to Art. 7(3) GDPR</li>
          <li>
            lodge a complaint with a supervisory authority pursuant to Art. 77
            GDPR
          </li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-4 mb-2">
          6. Data Security
        </h2>
        <p className="mb-4 text-base sm:text-lg">
          We use the widely used SSL (Secure Socket Layer) method within website
          visits in conjunction with the highest level of encryption supported
          by your browser.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold mt-4 mb-2">
          7. Currency and Changes to This Privacy Policy
        </h2>
        <p className="mb-4 text-base sm:text-lg">
          This privacy policy is currently valid and has the status of [insert
          date].
          <br />
          Due to the further development of our website and services or due to
          changes in legal requirements, it may be necessary to amend this
          privacy policy.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
