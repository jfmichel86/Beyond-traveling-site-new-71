import Link from "next/link";
import Image from "next/image";

type CardProps = {
  src: string
  title: string
  slug: string
  description: string
}

function Card({ src, title, slug, description }: CardProps) {
  return (
    <Link href={`/properties/${slug}`} className="block group">
      <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition duration-300 group-hover:shadow-lg group-hover:-translate-y-[2px]">
        <div className="overflow-hidden">
          <Image
            src={src}
            alt={title}
            width={2000}
            height={1300}
    className="w-full h-auto transition duration-700 group-hover:scale-[1.04]"
  />
</div>
        <div className="p-6 bg-white">
          <h3 className="font-serif text-2xl leading-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700">{title}</h3>
          <p className="mt-3 text-[15px] leading-[1.6] text-slate-600">
          {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function Properties() {
  return (
    <main>
      <section className="bg-white">
        <div className="py-16 md:py-24 mx-auto max-w-[760px] px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.08] text-slate-900 max-w-[800px] mx-auto">
            Homes We Currently Look After
          </h1>
          <p className="mt-6 text-[17px] leading-[1.75] text-slate-900/70">
            Each property you see here is personally managed and closely overseen.
            We don’t list properties we don’t manage—and we don’t manage more than we can handle well.
          </p>
        </div>
      </section>
      
<div className="mx-auto max-w-[1100px] px-6">
  <div className="border-t border-slate-200" />
</div>
      
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid md:grid-cols-2 gap-10">
<Card
  src="/properties/villa-amore.jpg"
  title="Villa Amore"
  slug="villa-amore"
  description="Ocean-view villa in Punta Mita with private pool, daily service, and access to premier beach clubs."
/>

<Card
  src="/properties/villa-llamas.jpg"
  title="Villa Llamas"
  slug="villa-llamas"
  description="Spacious coastal home designed for relaxed stays, with open living areas and seamless indoor-outdoor flow."
/>

<Card
  src="/properties/villa-brezza.jpg"
  title="Villa Brezza"
  slug="villa-brezza"
  description="Contemporary villa with clean architectural lines, ocean views, and thoughtfully designed living spaces."
/>

<Card
  src="/properties/las-palmas-28.jpg"
  title="Las Palmas 28"
  slug="las-palmas-28"
  description="Comfortable villa within Punta Mita, offering privacy, convenience, and close access to golf and beach clubs."
/>
          </div>
        </div>
      </section>
      
<section className="py-28 bg-slate-50">
  <div className="mx-auto max-w-[900px] px-6 text-center">
    <h2 className="font-serif text-2xl md:text-3xl text-slate-900 leading-snug">
      Our portfolio grows through trust and referrals—not volume.
    </h2>
  </div>
</section>
     
    </main>
  );
}
