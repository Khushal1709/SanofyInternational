import Bottomcontact from "./Bottomcontact"

export default function Termsofservice() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="space-y-6">
        <section>
          <h2 className="text-lg font-medium">1. Acceptance of Terms</h2>
          <p className="mt-2 text-sm text-gray-700">
            By accessing or using our services, you agree to be bound by these
            Terms of Service. If you do not agree with any part of these terms,
            you may not access the service. These terms apply to all users,
            including visitors, registered users, and those who engage with our
            products or features.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">2. User Responsibilities</h2>
          <p className="mt-2 text-sm text-gray-700">
            As a user, you agree to provide accurate and current information
            when required and to use the service for lawful purposes only. You
            are responsible for maintaining the confidentiality of your account
            credentials and for all activities that occur under your account.
            Any unauthorized use or breach of security must be reported to us
            immediately.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">
            3. Intellectual Property Rights
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            All content on this website or platform, including text, images,
            graphics, logos, and software, is the property of the company and
            protected by intellectual property laws. You may not copy,
            distribute, modify, or use our content for commercial purposes
            without prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">
            4. Service Modifications and Termination
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            We reserve the right to change, suspend, or discontinue any aspect
            of the service at any time, including features, content, or
            availability. We may also terminate or restrict your access to the
            service without notice if we believe you have violated these terms
            or engaged in harmful conduct.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">5. Limitation of Liability</h2>
          <p className="mt-2 text-sm text-gray-700">
            We strive to provide reliable and secure services, but we do not
            guarantee uninterrupted or error-free operation. In no event shall
            we be liable for any indirect, incidental, or consequential damages
            arising out of your use or inability to use the service. Your use of
            the service is at your own risk.
          </p>
        </section>
      </div>

      <Bottomcontact/>

    </div>
  )
}
