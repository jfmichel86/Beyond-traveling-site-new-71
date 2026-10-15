'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { isEsPath } from '@/lib/locale'
import Link from "@/components/LocaleLink";
import Image from 'next/image'
import { urlFor } from '@/lib/villa/image'
import {
  Property, startingRate, totalGuests, formatPrice,
  communityLabel, allPhotos,
} from '@/lib/villa/utils'

interface Props {
  property: Property
}

const BED_SVG   = <svg viewBox="0 0 24 24"><path d="M2 7v13M22 7v13M2 16h20M2 10h20M6 10V7.5a2 2 0 014 0V10M14 10V7.5a2 2 0 014 0V10"/></svg>
const BATH_SVG  = <svg viewBox="0 0 24 24"><path d="M4 12h16v4a4 4 0 01-4 4H8a4 4 0 01-4-4v-4zM4 12V6a2 2 0 012-2h2a2 2 0 012 2v1"/></svg>
const GUEST_SVG = <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0112 0v2"/></svg>

export default function PropertyCard({ property: p }: Props) {
  const es     = isEsPath(usePathname() || '/')
  const rate   = startingRate(p)
  const guests = totalGuests(p)
  const slug   = p.slug
  const detailHref = `/properties/${slug}`
  const photos = allPhotos(p)

  const [photoIdx, setPhotoIdx] = useState(0)
  const movePhoto = (e: React.MouseEvent, dir: 1 | -1) => {
    e.preventDefault()
    e.stopPropagation()
    setPhotoIdx((i) => (i + dir + photos.length) % photos.length)
  }

  return (
    <Link href={detailHref} className="prop-card">
      <div className="prop-photo-wrap">
        <div className="prop-photos">
          {photos.length === 0 ? (
            <div className="prop-photo-placeholder" />
          ) : (
            photos.map((ph, i) => (
              <Image
                key={i}
                src={urlFor(ph).width(1300).height(867).quality(90).url()}
                alt={`${p.title} — ${es ? 'foto' : 'photo'} ${i + 1}`}
                fill
                quality={90}
                sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                className={`prop-photo${i === photoIdx ? ' car-active' : ''}`}
              />
            ))
          )}
        </div>

        {photos.length > 1 && (
          <>
            <button className="car-arrow car-prev" onClick={(e) => movePhoto(e, -1)} aria-label={es ? 'Foto anterior' : 'Previous photo'}>
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="car-arrow car-next" onClick={(e) => movePhoto(e, 1)} aria-label={es ? 'Foto siguiente' : 'Next photo'}>
              <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg>
            </button>
            <div className="car-dots">
              {photos.map((_, i) => (
                <span key={i} className={`car-dot${i === photoIdx ? ' car-dot-active' : ''}`} />
              ))}
            </div>
          </>
        )}


      </div>

      <div className="prop-body">
        <div className="prop-type">{communityLabel(p)}</div>
        <div className="prop-name-row">
          <div className="prop-name">{p.title}</div>
          {rate ? (
            <div className="prop-price">{es ? 'Desde' : 'From'} <strong>{formatPrice(rate)}</strong> <span>{es ? '/ noche' : '/ night'}</span></div>
          ) : null}
        </div>
        <div className="prop-amenities">
          <span className="prop-amenity">{BED_SVG}{es ? `${p.bedrooms} ${p.bedrooms !== 1 ? 'recámaras' : 'recámara'}` : `${p.bedrooms} bedroom${p.bedrooms !== 1 ? 's' : ''}`}</span>
          {p.bathrooms ? (
            <span className="prop-amenity">{BATH_SVG}{es ? `${p.bathrooms} ${p.bathrooms !== 1 ? 'baños' : 'baño'}` : `${p.bathrooms} bath${p.bathrooms !== 1 ? 's' : ''}`}</span>
          ) : null}
          <span className="prop-amenity">{GUEST_SVG}{es ? `${guests} huéspedes` : `${guests} guests`}</span>
        </div>
      </div>
    </Link>
  )
}
