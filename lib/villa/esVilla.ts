// Spanish versions of the villa-page pieces that are built from several parts
// in code (counts, joined lists, headings), which the word-for-word
// dictionary translator can't handle. Used by the property page when the
// visitor is on /es.

export const VIEW_LABELS_ES: Record<string, string> = {
  'ocean-view': 'Vista al mar',
  'golf-course-view': 'Vista al campo de golf',
  'lake-view': 'Vista al lago',
  oceanfront: 'Frente al mar',
  beachfront: 'Frente a la playa',
  'golf-course': 'Campo de golf',
  hillside: 'En ladera',
  'private-pool': 'Alberca privada',
  'communal-pool': 'Alberca común',
}

export const STAFF_NAMES_ES: Record<string, string> = {
  concierge: 'Concierge', housekeeper: 'Ama de llaves',
  chef: 'Chef', cook: 'Cocinero(a)', 'sous-chef': 'Sous chef / Asistente de chef',
  butler: 'Mayordomo', driver: 'Chofer', babysitter: 'Niñera',
  gardener: 'Jardinero', security: 'Seguridad',
  waiter: 'Mesero(a)', bartender: 'Bartender',
}

export const STAFF_SERVICE_LABELS_ES: Record<string, string> = {
  'daily-cleaning': 'Limpieza diaria',
  laundry: 'Lavandería',
  'linen-changes': 'Cambio de ropa de cama',
  'turndown-service': 'Servicio de turndown',
  'grocery-shopping': 'Compra de víveres',
  'activity-bookings': 'Reservación de actividades',
  'restaurant-reservations': 'Reservaciones en restaurantes',
  'transportation-arrangements': 'Organización de transporte',
  breakfast: 'Desayuno',
  lunch: 'Comida',
  dinner: 'Cena',
  'meal-preparation': 'Preparación de alimentos',
  'menu-planning': 'Planeación de menús',
  'kitchen-assistance': 'Apoyo en cocina',
  'all-meals': 'Todas las comidas',
  'custom-menus': 'Menús a la medida',
  'table-service': 'Servicio de mesa',
  'beverage-service': 'Servicio de bebidas',
  'guest-attention': 'Atención personalizada a huéspedes',
  'table-meal-service': 'Servicio de alimentos y bebidas en mesa',
  'cocktail-preparation': 'Preparación de cocteles',
  'bar-service': 'Servicio de bar',
}

const BATH_AMENITIES_ES: Record<string, string> = {
  'hot-tub': 'jacuzzi de hidromasaje',
  jacuzzi: 'jacuzzi',
  'outdoor-shower': 'regadera exterior',
  'double-shower': 'regadera doble',
}

const plural = (n: number, one: string, many: string) => (n === 1 ? one : many)

/** "1 cama king" / "2 camas queen" / "1 litera" … */
export function bedLabelEs(type: string, count: number): string {
  const camaAdj: Record<string, string> = {
    king: 'king', queen: 'queen', full: 'matrimonial', double: 'matrimonial', twin: 'individual', single: 'individual',
  }
  if (camaAdj[type]) return `${count} ${plural(count, 'cama', 'camas')} ${camaAdj[type]}`
  switch (type) {
    case 'bunk': return `${count} ${plural(count, 'litera', 'literas')}`
    case 'sofa-bed': return `${count} ${plural(count, 'sofá cama', 'sofás cama')}`
    case 'crib': return `${count} ${plural(count, 'cuna', 'cunas')}`
    case 'trundle': return `${count} ${plural(count, 'cama nido', 'camas nido')}`
    default: return `${count} ${type}`
  }
}

export function ensuiteEs(amenities: string[]): string {
  const ams = amenities.map((a) => BATH_AMENITIES_ES[a] || a)
  if (ams.length === 0) return 'Baño privado'
  if (ams.length === 1) return `Baño privado con ${ams[0]}`
  return `Baño privado con ${ams.slice(0, -1).join(', ')} y ${ams[ams.length - 1]}`
}

export function specsEs(bedrooms: number, bathrooms: number | undefined, maxAdults: number, childOnlyBeds?: number) {
  return {
    beds: `${bedrooms} ${plural(bedrooms, 'recámara', 'recámaras')}`,
    baths: bathrooms ? `${bathrooms} ${plural(bathrooms, 'baño', 'baños')}` : null,
    guests:
      `Hasta ${maxAdults} ${plural(maxAdults, 'adulto', 'adultos')}` +
      (childOnlyBeds ? ` + ${childOnlyBeds} ${plural(childOnlyBeds, 'niño', 'niños')}` : ''),
  }
}

export function cartLabelEs(six: number, four: number): string {
  const total = six + four
  if (!total) return ''
  const parts: string[] = []
  if (six) parts.push(`${six} de seis plazas`)
  if (four) parts.push(`${four} de cuatro plazas`)
  return `${total} ${plural(total, 'carrito', 'carritos')} de golf (${parts.join(' + ')})`
}

/** Heading above the description, e.g. "Villa con vista al mar". */
export function descHeadingEs(viewKey: string | undefined, commLabel: string | undefined, isCondo: boolean): string {
  const noun = isCondo ? 'Condominio' : 'Villa'
  const byView: Record<string, string> = {
    beachfront: `${noun} frente a la playa`,
    oceanfront: `${noun} frente al mar`,
    'golf-course-view': `${noun} en el campo de golf`,
    'golf-course': `${noun} en el campo de golf`,
    'ocean-view': `${noun} con vista al mar`,
    'lake-view': `${noun} con vista al lago`,
    hillside: `${noun} en ladera`,
  }
  if (viewKey && byView[viewKey]) return byView[viewKey]
  return commLabel ? `${noun} en ${commLabel}` : `${noun} de lujo`
}

export const nightsEs = (n: number) => `${n} ${plural(n, 'noche', 'noches')}`
