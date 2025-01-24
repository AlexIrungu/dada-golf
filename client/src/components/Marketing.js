import React from "react";

function Marketing() {
  return (
    <div className="w-full bg-gradient-to-r from-teal-600 to-teal-800 py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-12 text-center">
            <h2 className="text-6xl font-extrabold text-teal-700 mb-6 uppercase tracking-wide">
              DADA HEALTH FESTIVAL
            </h2>
            <h5 className="text-2xl text-gray-600 mb-8 italic">
              Broadcast, Print, and Digital Media Campaign
            </h5>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-800 leading-relaxed mb-8">
                Our comprehensive media strategy is designed to maximize visibility and impact, 
                providing unparalleled opportunities for brand positioning and engagement.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-teal-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-teal-700 mb-4">Guest Interactions</h3>
                  <p className="text-gray-700">Direct engagement opportunities with our diverse audience.</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-teal-700 mb-4">Festival Mentions</h3>
                  <p className="text-gray-700">Comprehensive campaign coverage across multiple platforms.</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-teal-700 mb-4">Branding Visibility</h3>
                  <p className="text-gray-700">Logo placement and brand representation on all festival materials.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;