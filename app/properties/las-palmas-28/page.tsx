"use client";

import { useState } from "react";
import Link from "next/link";
import PropertyGallery from "@/components/property/PropertyGallery";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(0);

  const property = {
    name: "Las Palmas 28",
    startingPrice: "$1,100 USD per night",
    images: ["/properties/las-palmas-28.jpg"],
  };

  return (
    <>
      {/* HERO IMAGE ONLY */}
      <div className="relative">
        <img
          src={property.images[selectedImage]}
          alt={property.name}
          className="w-full h-[55vh] md:h-[65vh] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />

        <div className="absolute bottom-16 left-6 md:bottom-24 md:left-10 text-white max-w-[680px] animate-fadeUp">
          <h1 className="font-serif text-4xl md:text-6xl leading-[0.98] tracking-tight drop-shadow-sm">
            {property.name}
          </h1>

          <div className="mt-5 inline-block rounded-lg border border-white/25 bg-white/10 px-5 py-2 text-[13px] tracking-[0.12em] backdrop-blur-md">
            Starting at {property.startingPrice}
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/523313619889?text=${encodeURIComponent(
                `Hi, I am interested in ${property.name}`
              )}`}
              className="inline-flex items-center gap-2 justify-center rounded-lg bg-white text-slate-900 px-6 py-3 text-[14px] tracking-wide font-medium hover:bg-slate-100 transition"
            >
              WhatsApp
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 text-white px-6 py-3 text-[14px] tracking-wide font-medium hover:bg-white/15 transition backdrop-blur-sm"
            >
              Inquire About This Property
            </Link>
          </div>
        </div>
      </div>

      <main>
        {/* GALLERY */}
        <div className="bg-white py-8 md:py-10">
          <div className="mx-auto max-w-[1240px] px-6 md:px-8">
            <PropertyGallery
              images={property.images}
              alt={property.name}
              selectedIndex={selectedImage}
              onSelect={setSelectedImage}
            />
          </div>
        </div>

        {/* ABOUT */}
        <section className="pt-10 pb-16 md:pt-14 md:pb-24 bg-white">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <div className="mt-6 text-[17px] leading-[1.9] text-slate-900/75 space-y-7 text-justify">
              <p>
                Las Palmas 28 is a private residence in Punta Mita designed for a relaxed luxury stay. 
                The villa offers comfortable living spaces, access to the Punta Mita lifestyle, and an 
                ideal setting for families or groups looking for privacy, comfort, and convenience.
              </p>
              <p>
                With indoor-outdoor living, a peaceful atmosphere, and close access to Punta Mita’s beaches, 
                dining, golf, and resort amenities, Las Palmas 28 is a welcoming home base for enjoying the area.
              </p>
            </div>
          </div>
        </section>

        {/* ROOM ARRANGEMENT */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
              Room Arrangement
            </h2>

            <div className="mt-10 grid md:grid-cols-4 gap-8">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 md:p-7 transition duration-300 hover:shadow-md">
                <h3 className="font-medium text-slate-900">Bedroom 1</h3>
                <p className="mt-2 text-slate-600">Details upon request</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 md:p-7 transition duration-300 hover:shadow-md">
                <h3 className="font-medium text-slate-900">Bedroom 2</h3>
                <p className="mt-2 text-slate-600">Details upon request</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 md:p-7 transition duration-300 hover:shadow-md">
                <h3 className="font-medium text-slate-900">Bedroom 3</h3>
                <p className="mt-2 text-slate-600">Details upon request</p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 md:p-7 transition duration-300 hover:shadow-md">
                <h3 className="font-medium text-slate-900">Bedroom 4</h3>
                <p className="mt-2 text-slate-600">Details upon request</p>
              </div>
            </div>
          </div>
        </section>

        {/* STAFF AND AMENITIES */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
              Staff and Amenities
            </h2>

            <div className="mt-10 grid md:grid-cols-1 gap-8 text-slate-800">
              <ul className="space-y-3 text-slate-800 list-disc pl-5">
                <li>Concierge services</li>
                <li>Daily cleaning</li>
                <li>Access to Punta Mita amenities</li>
                <li>Availability confirmed upon request</li>
              </ul>
            </div>
          </div>
        </section>

        {/* VILLA FEATURES */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
              Villa Features
            </h2>

            <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-10 text-slate-800">
              <div>
                <h4 className="font-medium text-slate-900">Key Features</h4>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li>Private residence</li>
                  <li>Indoor-outdoor living</li>
                  <li>Punta Mita location</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-slate-900">Comfort</h4>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li>Air Conditioning</li>
                  <li>WiFi</li>
                  <li>Linens Provided</li>
                  <li>Towels Provided</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-slate-900">Lifestyle</h4>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li>Beach access nearby</li>
                  <li>Golf nearby</li>
                  <li>Dining nearby</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-slate-900">Services</h4>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li>Concierge support</li>
                  <li>Availability assistance</li>
                  <li>Guest coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* RATES */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
              Seasonal Rates
            </h2>

            <div className="mt-6 divide-y divide-slate-200 text-[15px]">
              <div className="flex justify-between py-4">
                <span>Low Season</span>
                <span>From $1,050 USD per night</span>
              </div>

              <div className="flex justify-between py-4">
                <span>High Season</span>
                <span>From $1,600 USD per night</span>
              </div>

              <div className="flex justify-between py-4">
                <span>Holiday</span>
                <span>From $4,000 USD per night</span>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-[12px] text-slate-600 list-disc pl-5">
              <li>Rates are quoted per night and in USD.</li>
              <li>Rates are subject to change without notice.</li>
              <li>Final rates and availability are confirmed upon request.</li>
              <li>Taxes and service fees may apply.</li>
            </ul>
          </div>
        </section>

        <div className="mx-auto max-w-[1000px] px-6">
          <div className="border-t border-slate-200"></div>
        </div>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-[900px] px-6 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-slate-900">
              Ready to Check Availability?
            </h2>
            <p className="mt-4 text-slate-600">
              Send us a message and we’ll confirm availability and details shortly.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-6 text-[15px] font-medium text-white transition hover:bg-slate-800"
              >
                Inquire About This Property
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
