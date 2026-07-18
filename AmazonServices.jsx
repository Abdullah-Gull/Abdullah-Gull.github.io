'use client';

import { useState } from 'react';

export default function AmazonServices() {
  const [activeTab, setActiveTab] = useState('seller-central');

  const sellerServices = [
    {
      icon: '🏪',
      title: 'Full-Account Management',
      desc: 'I take over your daily operations, inventory health, case logs, and performance metrics so your account stays compliant and continuously scales.',
    },
    {
      icon: '🔍',
      title: 'Amazon SEO & Visibility',
      desc: 'I map high-intent buyer keywords into back-end search terms, titles, and bullets to rapidly lift your organic rankings and conversion metrics.',
    },
    {
      icon: '📢',
      title: 'Precision PPC Campaigns',
      desc: 'I architect and optimize Sponsored Products, Brands, and Display campaigns, eliminating wasted ad spend while driving profitable top-line revenue.',
    },
    {
      icon: '✏️',
      title: 'Listing Optimization',
      desc: 'I reconstruct your product detail pages to answer customer friction points immediately, lowering bounce rates and driving higher unit session percentages.',
    },
    {
      icon: '🖼️',
      title: 'Visual Asset Optimization',
      desc: 'I direct main images, lifestyle graphics, and detailed infographics that turn passive browsers into high-confidence buyers.',
    },
    {
      icon: '🥞',
      title: 'Premium A+ Content',
      desc: 'I build custom, brand-focused A+ structures that cross-sell your catalog, decrease product returns, and elevate overall brand equity.',
    },
  ];

  const vendorServices = [
    {
      icon: '🤝',
      title: 'Vendor Onboarding',
      desc: 'I streamline your initial setup, data catalog ingestion, and retail configurations for a highly efficient and flawless Vendor Central launch.',
    },
    {
      icon: '📦',
      title: 'Inventory & Buy-Box Management',
      desc: 'I closely track automated purchase orders and stock patterns to minimize buy-box losses and prevent expensive chargebacks.',
    },
    {
      icon: '📈',
      title: 'Retail Media Management',
      desc: 'I execute strategic co-op and retail marketing initiatives designed to boost sales velocities while successfully protecting your margins.',
    },
    {
      icon: '🏆',
      title: 'A+ Content Creation',
      desc: 'I map out premium conversion modules that demonstrate value clearly, allowing wholesale buyers to trust your brand completely.',
    },
    {
      icon: '🚀',
      title: 'Sponsored Ad Management',
      desc: 'I design full-funnel ad sequences tailored specifically for first-party listings to capture maximum visibility on competitive keywords.',
    },
    {
      icon: '📝',
      title: '1P Listing Enhancement',
      desc: 'I overhaul descriptive bullet structures, technical data, and rich media assets to align seamlessly with Amazon\'s rigorous 1P retail standards.',
    },
  ];

  return (
    <section className="bg-[#0b0b0b] text-white py-20 px-6 sm:px-10 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 tracking-tight text-white">
            Amazon Marketplace Expertise
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            I help brands maximize control over pricing, listings, ads, and store presence. 
            Whether navigating Seller Central or managing Vendor Central relations, I design 
            custom strategies to scale your sales velocity.
          </p>
        </div>

        {/* Tailwind Customized Orange Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#161616] p-1.5 rounded-full border border-zinc-800">
            <button
              onClick={() => setActiveTab('seller-central')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'seller-central'
                  ? 'bg-[#ff5e00] text-white shadow-lg shadow-[#ff5e00]/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Seller Central
            </button>
            <button
              onClick={() => setActiveTab('vendor-central')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'vendor-central'
                  ? 'bg-[#ff5e00] text-white shadow-lg shadow-[#ff5e00]/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Vendor Central
            </button>
          </div>
        </div>

        {/* Services Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'seller-central' ? sellerServices : vendorServices).map((service, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff5e00] group hover:bg-[#151515]"
            >
              <div>
                {/* Advanced Icon Box with Tailwind Transitions */}
                <div className="w-12 h-12 rounded-xl bg-[#ff5e00]/10 flex items-center justify-center text-xl mb-6 transition-colors duration-300 group-hover:bg-[#ff5e00] text-[#ff5e00] group-hover:text-white">
                  {service.icon}
                </div>
                
                {/* Heading */}
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#ff5e00] transition-colors duration-200">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Action Button styled with Orange theme */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff5e00] hover:text-[#ff7a29] transition-colors duration-200"
              >
                Explore Strategy 
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
