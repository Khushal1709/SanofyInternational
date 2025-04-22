import React from "react"
import Tradelogo from "../image/Tradeblog.svg";
import t2 from "../image/t2.jpg";
import Bottomcontact from "./Bottomcontact";

export default function Singleblog() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-gray-800">
      <div className="mb-4">
        <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
          News
        </span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold mb-6">
        How to choose the right import-export partner for your business needs
      </h1>
      <div className="rounded-3xl overflow-hidden mb-10">
        <img
          // replace with your actual image path
          src={Tradelogo}
          alt="Import Export"
          className="w-full object-cover"
        />
      </div>
      <div className="space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <strong>1. Understand Your Business Goals and Requirements</strong>
          <p>
            Before selecting an import-export partner, you need to have a clear
            understanding of your own business needs. What kind of goods are you
            trading? What are your target markets? Do you need help with
            logistics, documentation, compliance, or all of the above?
            Identifying your goals will help you filter potential partners based
            on their experience, services, and strengths. A partner that aligns
            with your vision will bring more value than one with just a big
            name.
          </p>
        </div>
        <div>
          <strong>2. Evaluate Their Experience and Global Network</strong>
          <p>
            A reliable import-export partner should have proven experience in
            international trade. Check how long they’ve been in business, the
            countries they operate in, and what kind of clients they’ve worked
            with. A wide global network is also a big advantage—it means better
            market insights, smoother customs clearance, and faster shipping.
            Look for partners who understand your industry and the specific
            challenges of cross-border trade.
          </p>
        </div>
        <div>
          <strong>3. Check Their Compliance and Certifications</strong>
          <p>
            International trade is highly regulated, and non-compliance can be
            costly. Ensure your potential partner follows all relevant trade
            laws, has up-to-date licenses, and is certified by appropriate
            bodies (like ISO, REO, or other export councils). Ask about their
            knowledge of import/export documentation, trade agreements, tariffs,
            and regulations in different countries. A compliant partner protects
            your business from delays, penalties, and legal issues.
          </p>
        </div>
        <div>
          <strong>4. Analyze Their Communication and Support System</strong>
          <p>
            Efficient communication is key when dealing with time zones, customs
            paperwork, and unpredictable logistics. Choose a partner who is
            responsive, transparent, and proactive. Do they offer real-time
            shipment tracking? Do they provide quick updates if something goes
            wrong? Great customer support can make all the difference when
            you’re managing inventory or facing a supply chain hiccup.
          </p>
        </div>
        <div>
          <strong>5. Start Small and Build Trust</strong>
          <p>
            Once you shortlist a partner, test the waters with a small shipment
            or pilot project. This helps you evaluate their performance without
            risking a large order. Observe how they handle timelines, quality
            control, packaging, and documentation. Over time, you’ll be able to
            build a strong relationship based on trust and reliability—essential
            for long-term success in the import-export world.
          </p>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-4">
        <img
          // replace with actual image path
          src={t2}
          alt="Krushant Vamja"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm">Carlos Mendes</p>
          <p className="text-xs text-gray-500">Director of Operations</p>
        </div>
      </div>
        <Bottomcontact/>
    </section>
  )
}
