import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main>

      <section className="relative">
        <Image
          src="/properties/las-palmas-28.jpg"
          alt="Las Palmas 28"
          width={2000}
          height={1300}
          style={{ width: "100%", height: "auto" }}
          priority
        />
        <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur px-4 py-2 rounded-md text-sm font-medium tracking-wide text-slate-900">
          From $2,900 USD per night
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[900px] px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-slate-900">
            Las Palmas 28
          </h1>
          <p className="mt-2 text-[18px] text-slate-900/70">
            Punta Mita, Mexico
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[900px] px-6 text-[18px] leading-[1.7] text-slate-900/75">
          Placeholder overview text. Replace with refined description of the residence and atmosphere.
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-10">
          <Image
            src="/properties/las-palmas-28.jpg"
            alt=""
            width={2000}
            height={1300}
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src="/properties/las-palmas-28.jpg"
            alt=""
            width={2000}
            height={1300}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[900px] px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
            Seasonal Rates
          </h2>

          <div className="mt-8 divide-y divide-slate-200">
            <div className="flex justify-between py-4">
              <span>Low Season</span>
              <span>From $2,900</span>
            </div>
            <div className="flex justify-between py-4">
              <span>High Season</span>
              <span>From $5,200</span>
            </div>
            <div className="flex justify-between py-4">
              <span>Holiday</span>
              <span>From $7,800</span>
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Rates subject to change and availability.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[900px] px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-slate-900">
            Interested in this residence?
          </h2>
          <p className="mt-4 text-slate-600">
            We’re happy to provide availability and further details.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-900/40 px-6 text-[15px] font-medium text-slate-900 transition hover:bg-slate-900/[0.03]"
            >
              Inquire About This Property
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
