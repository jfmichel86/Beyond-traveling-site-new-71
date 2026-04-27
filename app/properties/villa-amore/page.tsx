"use client";

import { useState } from "react";
import Link from "next/link";
import PropertyGallery from "@/components/property/PropertyGallery";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(0);
  const property = {
    name: "Villa Amore",
    startingPrice: "$1,800 USD per night",
    images: Array.from({ length: 30 }, (_, i) =>
    `/properties/villa-amore/villa-amore-${i + 1}.jpg`
    ),
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

{/* LEFT ARROW */}
<button
  onClick={() =>
    setSelectedImage(
      selectedImage === 0 ? property.images.length - 1 : selectedImage - 1
    )
  }
  className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 
             bg-white/90 hover:bg-white text-black 
             w-12 h-12 md:w-14 md:h-14 
             flex items-center justify-center 
             rounded-lg shadow-lg transition z-20 text-xl"
>
  ‹
</button>

{/* RIGHT ARROW */}
<button
  onClick={() =>
    setSelectedImage(
      selectedImage === property.images.length - 1 ? 0 : selectedImage + 1
    )
  }
  className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 
             bg-white/90 hover:bg-white text-black 
             w-12 h-12 md:w-14 md:h-14 
             flex items-center justify-center 
             rounded-lg shadow-lg transition z-20 text-xl"
>
  ›
</button>

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
  href={`https://wa.me/523313619889?text=${encodeURIComponent(`Hi, I am interested in ${property.name}`)}`}
  className="inline-flex items-center gap-2 justify-center rounded-lg bg-white text-slate-900 px-6 py-3 text-[14px] tracking-wide font-medium hover:bg-slate-100 transition"
>
     {/* WhatsApp Icon */}
  <span className="w-4 h-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-full h-full"
      fill="currentColor"
    >
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.638.858 5.077 2.313 7.06L4 29l7.153-2.252A11.937 11.937 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.872 0-3.644-.5-5.184-1.374l-.37-.22-4.247 1.337 1.388-4.136-.241-.387A9.958 9.958 0 0 1 6 15c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.393-7.382c-.294-.147-1.737-.857-2.007-.955-.27-.098-.467-.147-.664.147-.197.294-.762.955-.934 1.152-.172.197-.344.221-.638.074-.294-.147-1.24-.457-2.363-1.457-.873-.779-1.462-1.74-1.634-2.034-.172-.294-.018-.453.129-.6.132-.131.294-.344.441-.516.147-.172.197-.294.294-.49.098-.197.049-.369-.025-.516-.074-.147-.664-1.602-.91-2.193-.24-.577-.485-.498-.664-.507-.172-.009-.369-.011-.566-.011-.197 0-.516.074-.787.369-.27.294-1.033 1.01-1.033 2.459 0 1.449 1.058 2.847 1.205 3.044.147.197 2.083 3.183 5.043 4.464.705.304 1.254.485 1.683.621.707.225 1.35.193 1.86.117.567-.084 1.737-.71 1.982-1.396.245-.686.245-1.274.172-1.396-.074-.123-.27-.197-.566-.344z"/>
    </svg>
  </span>
    
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
              Villa Amore is a stunning four-bedroom sanctuary located in Punta Mita’s exclusive Iyari community. 
              This exquisite 2 level villa features unobstructed views of the Pacific Ocean, 
              providing a serene and picturesque backdrop for your getaway. 
              Every living space is meticulously crafted to enhance relaxation and provide ultimate comfort, 
              ensuring an unforgettable stay. 
              With daily service, ocean views, and access to Punta Mita’s premier golf and beach clubs, 
              Villa Amore captures the essence of relaxed luxury.
            </p>
            <p>
              From the moment you arrive, Villa Amore envelops you in an atmosphere of calm sophistication. 
              The open-concept living spaces invite the outdoors in through large glass doors that frame sweeping ocean and jungle views. 
              The heart of the home is the expansive terrace — featuring a private infinity pool, sun loungers, shaded lounge area, 
              and an al fresco dining space complete with a professional-grade outdoor grill. 
              Whether you’re enjoying a leisurely breakfast, lounging by the pool, or sharing sunset cocktails, 
              every space is designed for connection and tranquility.
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
        <p className="mt-2 text-slate-600">1 King Bed </p>
         <p className="mt-2 text-slate-600">Ensuite bathroom </p>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-6 md:p-7 transition duration-300 hover:shadow-md">
        <h3 className="font-medium text-slate-900">Bedroom 2</h3>
        <p className="mt-2 text-slate-600">1 King Bed</p>
         <p className="mt-2 text-slate-600">Ensuite bathroom </p>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-6 md:p-7 transition duration-300 hover:shadow-md">
        <h3 className="font-medium text-slate-900">Bedroom 3</h3>
        <p className="mt-2 text-slate-600">2 Queen Beds plus 2 Twin Beds</p>
         <p className="mt-2 text-slate-600">Ensuite bathroom </p>
      </div>

      <div className="rounded-2xl border border-slate-200/80 bg-white p-6 md:p-7 transition duration-300 hover:shadow-md">
        <h3 className="font-medium text-slate-900">Bedroom 4</h3>
        <p className="mt-2 text-slate-600">2 Queen Beds</p>
         <p className="mt-2 text-slate-600">Ensuite bathroom </p>
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
      <li>Daily cleaning</li>
      <li>Breakfast preparation (Cost of food not included)</li>
      <li>Concierge services</li>
      <li>Premier Golf Membership</li>
      <li>6 seater golf cart</li>
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
          <li>Panoramic Ocean Views</li>
          <li>Private Pool</li>
          <li>Alfresco Dining</li>
        </ul>
      </div>

      <div>
        <h4 className="font-medium text-slate-900">Comfort</h4>
        <ul className="mt-4 space-y-2 text-slate-600">
          <li>Air Conditioning</li>
          <li>High speed Internet & WiFi</li>
          <li>Towels Provided</li>
          <li>Linens Provided</li>
          <li>Basic soaps and shampoo</li>
          <li>Hair dryer</li>
          <li>Toilet paper</li>
          <li>Washer & Dryer</li>
        </ul>
      </div>

      <div>
        <h4 className="font-medium text-slate-900">Entertainment & Health</h4>
        <ul className="mt-4 space-y-2 text-slate-600">
          <li>Hot tub</li>
          <li>Smart TV</li>
          <li>Sonos sound system</li>
        </ul>
      </div>

     <div>
        <h4 className="font-medium text-slate-900">Pool & Spa facilities</h4>
        <ul className="mt-4 space-y-2 text-slate-600">
          <li>BBQ/Grill</li>
          <li>Sun Loungers</li>
        </ul>
      </div>
      
    </div>
  </div>
</section>

    
      {/* AVAILABILITY */}
<section className="py-16 md:py-24 bg-white">
  <div className="mx-auto max-w-[1100px] px-6 md:px-10">
    <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
      Availability
    </h2>

    <div className="mt-12 grid md:grid-cols-2 gap-16 text-[15px]">
      
      <div>
        <h3 className="font-medium text-slate-900 mb-6">April 2026</h3>
        <div className="grid grid-cols-7 gap-2 text-center text-slate-600">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="py-2 border border-slate-200">
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium text-slate-900 mb-6">May 2026</h3>
        <div className="grid grid-cols-7 gap-2 text-center text-slate-600">
          {Array.from({ length: 31 }, (_, i) => (
            <div key={i} className="py-2 border border-slate-200">
              {i + 1}
            </div>
          ))}
        </div>
      </div>

    </div>

    <p className="mt-8 text-[13px] text-slate-500">
      Calendar shown for reference. Final availability confirmed upon request.
    </p>
  </div>
</section>

        {/* RATES */}
<section className="py-12 md:py-16 bg-slate-50">
  <div className="mx-auto max-w-[1100px] px-6 md:px-10">
    <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
      Seasonal Rates
    </h2>

    <div className="mt-6 divide-y divide-slate-200 text-[15px]">
      <div className="flex justify-between py-4">
        <span>Low Season (May 1st to Oct 31st)</span>
        <span>$1,800 USD per night</span>
      </div>

      <div className="flex justify-between py-4">
        <span>High Season (Nov 1st to April 30th)</span>
        <span>$2,200 USD per night</span>
      </div>
      
      <div className="flex justify-between py-4">
        <span>Easter / Thanksgiving</span>
        <span>$3,600 USD per night</span>
      </div>

      <div className="flex justify-between py-4">
        <span>Christmas </span>
        <span>$5,000 USD per night</span>
      </div>
      
      <div className="flex justify-between py-4">
        <span>New Year</span>
        <span>$6,500 USD per night</span>
      </div>
    </div>

          {/* IMPORTANT: ul NOT inside p */}
       <ul className="mt-6 space-y-3 text-[12px] text-slate-600 list-disc pl-5">
         <li>
    There is an extra fee of $100 USD per night for any additional person after 8 guests (Except on peak weeks)
  </li>
  <li>
    The rental of the property requires a refundable Security Deposit equivalent to one night.
  </li>
  <li>
    Taxes: 16% VAT + 5% tourism tax may apply.
  </li>
  <li>
    Service fee may apply.
  </li>
  <li>
    Rates are quoted per night and in USD.
  </li>
  <li>
    Rates do not include the cost of Food and Beverage.
  </li>
  <li>
    Rates do not include Staff Gratuities, recommended at 10% to 15% of the reservation pre-tax total.
  </li>
  <li>
    Rates are subject to change without notice.
  </li>
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

