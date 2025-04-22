
import { useEffect, useState, useRef } from "react";
import t1 from "../image/t1.jpg";
import t2 from "../image/t2.jpg";
import t4 from "../image/t4.jpg";
import t5 from "../image/t5.jpg";
import t6 from "../image/t6.jpg";

const testimonials = [
  {
    id: 1,
    name: "Emma Richardson",
    role: "Procurement Manager",
    content:
      "Working with Sanofy International has had a profound impact on our procurement operations. Their attention to detail, especially in packaging and compliance, is truly commendable. From the outset, their team took time to understand our specific sourcing needs and adapted seamlessly to our processes. What really sets them apart is their proactive communication and reliability. We've never had to worry about missed deadlines or inconsistencies in quality. Their lentils and grains arrive fresh, well-packaged, and in line with international standards. Sanofy also shines in documentation accuracy, which greatly simplifies customs and logistics on our end. It's rare to find an export partner so dedicated to building a long-term, transparent relationship.",
    image: t6,
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Director of Operations",
    content:
      "Sanofy International has been instrumental in streamlining our sourcing and supply processes. From day one, their team demonstrated a strong commitment to quality and efficiency. Their logistical expertise ensures that we receive shipments on time, every time, regardless of volume or destination. One of the most impressive aspects of working with Sanofy is their consistent communication. They keep us informed throughout every stage of the export process, which is critical for planning and client updates. Their product quality—particularly spices, grains, and pulses—has exceeded our expectations, helping us maintain our reputation for excellence with our own customers. They've also adapted well to our operational requirements, adjusting timelines and paperwork processes to suit our internal systems.",
    image: t2,
  },
  {
    id: 3,
    name: "Olivia Bennett",
    role: "Co-Founder",
    content:
      "When we first engaged with Sanofy International, we were a growing business seeking dependable suppliers who could scale with us. What we found in Sanofy was not just a supplier, but a strategic partner. Their attention to detail, dedication to customer satisfaction, and deep knowledge of export compliance helped streamline our operations from the very beginning. Initially, we placed a small trial order to assess their quality and professionalism. That quickly turned into a full-fledged partnership. Their team ensured smooth communication, timely deliveries, and a clear understanding of international trade requirements. As we scaled up, Sanofy matched our growth step-for-step—handling larger volumes while maintaining product integrity and freshness.",
    image: t5,
  },
  {
    id: 4,
    name: "Thomas Müller",
    role: "Senior Supply Chain Analyst",
    content:
      "Consistency is the cornerstone of effective supply chain management, and Sanofy International has consistently delivered for us. From their punctual shipments to the superior quality of their products, they've proven time and again that they're committed to excellence. As a supply chain analyst, I value transparency and reliability above all else—and Sanofy excels in both areas. Their documentation is always in order, their team is responsive to inquiries, and their ability to resolve minor issues before they escalate is impressive. Whether we're ordering in bulk or placing smaller, market-specific orders, the level of care and quality control remains the same. They also bring valuable insights into market trends and regional demand, which has helped us optimize our purchasing strategy.",
    image: t1,
  },
  {
    id: 5,
    name: "Isabella Chen",
    role: "Global Sourcing Director",
    content:
      "Sanofy International has truly redefined our expectations from an export partner. From the very beginning, they showed deep understanding of regulatory requirements and product specifications, tailoring each shipment to our exact needs. Their responsiveness, combined with the consistency of their product quality—especially their spices and legumes—has brought tremendous value to our supply chain. We’ve benefited greatly from their proactive updates and real-time logistics coordination, which allows us to operate smoothly and confidently. It’s refreshing to work with a team that prioritizes precision, transparency, and long-term success as much as we do. As we scaled up, Sanofy matched our growth step-for-step—handling larger volumes while maintaining product integrity and freshness.",
    image: t4,
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(nextTestimonial, 5000);
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextTestimonial, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const comaIcon = `<svg width="86" height="87" viewBox="0 0 86 87" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.3193 12.2141V48.5334C36.3193 53.2847 36.0362 59.9269 31.4229 65.3977C26.8623 70.8057 17.9604 75.1848 0.5 75.2668V68.4485C8.89012 68.3443 13.7639 65.6118 16.3984 61.7209C19.0627 57.7861 19.3524 52.7865 18.873 48.4778L18.8242 48.0334H0.5V12.2141H36.3193Z" stroke="white"/>
    <path d="M85.5005 12.2141V48.5334C85.5005 53.2847 85.2174 59.9269 80.604 65.3977C76.0433 70.8057 67.1412 75.1848 49.6812 75.2668V68.4485C58.0711 68.3443 62.9452 65.6118 65.5796 61.7209C68.2437 57.7861 68.5325 52.7865 68.0532 48.4778L68.0044 48.0334H49.6812V12.2141H85.5005Z" stroke="white"/>
  </svg>`;

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center mb-0">
          <span className="w-2 h-2 sm:w-3 sm:h-3 bg-black inline-block mr-2"></span>
          <span className="text-xs sm:text-sm text-gray-700 font-medium">
            Testimonials
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 mt-4 ">
          Real feedback from our satisfied clients
        </h2>

        <div
          className="relative w-full overflow-hidden mb-10"
          style={{ height: isMobile ? "auto" : "550px" }}
        >
          <div className="flex items-center justify-center h-full">
            {testimonials.map((testimonial, index) => {
              const position =
                (index - activeIndex + testimonials.length) %
                testimonials.length;
              let classes =
                "absolute transition-all duration-500 ease-in-out max-w-full";
              if (position === 0) {
                classes += " z-20 opacity-100 scale-100 translate-x-0";
              } else if (position === testimonials.length - 1) {
                classes += isMobile
                  ? " z-10 opacity-50 scale-90 -translate-x-[calc(100%-30px)]"
                  : " z-10 opacity-50 scale-95 -translate-x-[calc(100%-60px)] sm:-translate-x-[calc(100%-80px)] md:-translate-x-[calc(100%-120px)]";
              } else if (position === 1) {
                classes += isMobile
                  ? " z-10 opacity-50 scale-90 translate-x-[calc(100%-30px)]"
                  : " z-10 opacity-50 scale-95 translate-x-[calc(100%-60px)] sm:translate-x-[calc(100%-80px)] md:translate-x-[calc(100%-120px)]";
              } else {
                classes += " opacity-0 scale-75 translate-x-full";
              }

              return (
                <div
                  key={testimonial.id}
                  className={classes}
                  style={{
                    position:
                      position === 0 && isMobile ? "relative" : "absolute",
                  }}
                >
                  <div className="bg-black text-white rounded-[20px] sm:rounded-[30px] md:rounded-[40px] p-4 sm:p-6 md:p-8 lg:p-12 w-[calc(100vw-32px)] sm:w-[400px] md:w-[600px] lg:w-[800px] relative">
                    <div className="absolute bottom-70 right-160 opacity-20 z-0 scale-x-150 scale-y-150 rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.17 6A5.99 5.99 0 002 12v7h7v-7H6.18a3.99 3.99 0 013.99-3.99V6H7.17zm10 0A5.99 5.99 0 0012 12v7h7v-7h-2.82a3.99 3.99 0 013.99-3.99V6h-2.99z" />
                      </svg>
                    </div>

                    <div className="absolute top-3 left-3 sm:top-4 sm:left-6 md:top-6 md:left-8 z-10 w-8 sm:w-12 md:w-16 lg:w-20">
                      <div dangerouslySetInnerHTML={{ __html: comaIcon }} />
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4 justify-center mb-4 sm:mb-6 md:mb-8 relative z-10 mt-8 sm:mt-6">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 overflow-hidden rounded-full">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xl sm:text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 pl-2 sm:pl-4 md:pl-6">
                      <p className="text-[11px] sm:text-xs md:text-sm lg:text-base leading-relaxed">
                        {testimonial.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center mt-4 gap-1 sm:gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "bg-black w-4 sm:w-6"
                  : "bg-gray-300 w-1.5 sm:w-2"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
