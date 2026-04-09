import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do you require contracts?',
    answer:
      "No — we don't require contracts. You can set up a regular maintenance schedule or request service as needed, with no binding agreements. We believe in earning your trust through quality service.",
  },
  {
    question: 'Do you provide residential grease trap or cooking oil services?',
    answer:
      'No, we exclusively serve commercial establishments such as restaurants, hotels, schools, food trucks, and markets. We do not offer residential services.',
  },
  {
    question: 'Is emergency service available?',
    answer:
      "Yes! We understand that grease trap issues can't always wait. We offer same-day and next-day emergency service to minimize disruption to your business.",
  },
  {
    question: 'Can I request a one-time grease trap cleaning?',
    answer:
      'Absolutely. While we recommend regular preventative maintenance schedules, we are happy to perform one-time cleanings. Note that grease trap pumping requires payment due to specialized equipment and disposal costs.',
  },
  {
    question: 'Do you provide containers for cooking oil collection?',
    answer:
      'Yes, we provide complimentary containers for your used cooking oil at no charge. We handle everything from container placement to scheduled pickups.',
  },
  {
    question: 'Is cooking oil recycling collection free?',
    answer:
      'For most facilities, cooking oil collection is provided at no cost. High-volume establishments may even qualify to receive payment or rebates based on the volume and quality of oil collected.',
  },
  {
    question: 'What counties do you serve in Central Florida?',
    answer:
      'We serve Marion, Lake, Volusia, Polk, Citrus, Orange, Sumter, and Seminole counties. Our base of operations is in Fruitland Park, FL, allowing us to efficiently serve the Central Florida region.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20" style={{ backgroundColor: '#f0faf4' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ backgroundColor: '#dcf5e7', color: '#1e6b3c' }}
          >
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Have a question not answered here? Call us at{' '}
            <a href="tel:3527060410" className="font-medium" style={{ color: '#1e6b3c' }}>
              352-706-0410
            </a>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: '#1e6b3c',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50">
                  <div className="pt-3">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
