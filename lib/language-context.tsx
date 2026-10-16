"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { isEsPath, stripEs, withEs } from "@/lib/locale";

type Language = "en" | "es";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

const es: Record<string, string> = {
  // Header / navigation
  "HOME": "INICIO",
  "SERVICES": "SERVICIOS",
  "PROPERTIES": "PROPIEDADES",
  "ABOUT": "NOSOTROS",
  "CONTACT": "CONTACTO",
  "Home": "Inicio",
  "Services": "Servicios",
  "Properties": "Propiedades",
  "Discover": "Descubre",
  "About": "Nosotros",
  "Contact": "Contacto",
  "All rights reserved": "Todos los derechos reservados",
  "Beyond Traveling home": "Inicio de Beyond Traveling",
  "Open menu": "Abrir menú",
  "Close menu": "Cerrar menú",
  "Close menu overlay": "Cerrar menú",
  "Luxury Property Management in Punta Mita": "Administración de Propiedades de Lujo en Punta Mita",
  "Property Management Services in Punta Mita": "Servicios de Administración de Propiedades en Punta Mita",
  "Luxury Rental Properties in Punta Mita": "Propiedades de Renta de Lujo en Punta Mita",
  "Property Management Team in Punta Mita": "Equipo de Administración de Propiedades en Punta Mita",
  "Contact Property Management Punta Mita": "Contacto de Administración de Propiedades en Punta Mita",

  // Footer
  "Guides": "Guías",
  "Property Management": "Administración de Propiedades",
  "Luxury Rentals": "Rentas de Lujo",
  "Villa Management": "Administración de Villas",
  "Property management and luxury rentals in Punta Mita.":
    "Administración de propiedades y rentas de lujo en Punta Mita.",
  "Hands-on service, local expertise, and direct communication.":
    "Servicio cercano, experiencia local y comunicación directa.",
  "WhatsApp Us": "Escríbenos por WhatsApp",
  "Explore": "Explorar",
  "We respond within 1 hour during the day.": "Respondemos en menos de 1 hora durante el día.",
  "No long-term contracts. Cancel anytime with 30 days’ notice.": "Sin contratos a largo plazo. Cancela cuando quieras con 30 días de aviso.",
  "No hidden fees — ever.": "Sin cargos ocultos, nunca.",
  "Get in touch": "Ponte en Contacto",
  "Punta Mita Guides": "Guías de Punta Mita",
  "Collaborate": "Colaborar",
  "Partner With Us": "Asóciate con Nosotros",
  "Work With Us": "Trabaja con Nosotros",
  "FAQ": "Preguntas Frecuentes",
  "Terms & Conditions": "Términos y Condiciones",
  "Cancellation Policy": "Política de Cancelación",
  "Privacy Policy": "Política de Privacidad",
  "All rights reserved.": "Todos los derechos reservados.",
  "Punta Mita, Nayarit, Mexico": "Punta Mita, Nayarit, México",
  "Concierge Service": "Servicio de Concierge",
  "Vacation Rental Management": "Administración de Rentas Vacacionales",
  "Full-Service Management": "Administración Integral",
  "Manage Your Property": "Administra Tu Propiedad",
  "Book a Stay": "Reserva Tu Estancia",
  "View Services": "Ver Servicios",

  // Shared CTAs
  "Talk With Us About Your Property": "Hablemos de Tu Propiedad",
  "Contact Us": "Contáctanos",

  // Home
  "Property Management in Punta Mita": "Administración de Propiedades en Punta Mita",
  "Luxury Property Management in Punta Mita.": "Administración de Propiedades de Lujo en Punta Mita.",
  "Done Personally. Done Right.": "Personal. Cercana. Bien Hecha.",
  "See How We Work": "Ver Cómo Trabajamos",
  "Clear pricing": "Precios claros",
  "Property care": "Cuidado de la propiedad",
  "Are there hidden fees?": "¿Hay cargos ocultos?",
  "Where do you work?": "¿Dónde trabajan?",
  "We focus on Punta Mita and nearby luxury homes in Riviera Nayarit.":
    "Nos enfocamos en Punta Mita y casas de lujo cercanas en Riviera Nayarit.",
  "Let’s See If We’re a Good Fit": "Veamos Si Somos el Equipo Adecuado",

  // Services
  "See What’s Included": "Ver Qué Incluye",
  "Our": "Nuestro",
  "Approach": "Enfoque",
  "Our Approach": "Nuestro Enfoque",
  "This is someone’s home, not just an asset": "Esta es la casa de alguien, no solo un activo",
  "Decisions affect comfort, costs, and rental results": "Las decisiones afectan la comodidad, los costos y los resultados en renta",
  "See Who You’ll Be Dealing With": "Ve Con Quién Vas a Tratar",
  "Property Care": "Cuidado de la Propiedad",
  "& Maintenance": "y Mantenimiento",
  "We keep a close eye on the home, coordinate trusted local vendors, and handle the practical work that protects the property over time.":
    "Mantenemos una supervisión cercana de la casa, coordinamos proveedores locales de confianza y nos encargamos del trabajo práctico que protege la propiedad con el tiempo.",
  "Guest Communication": "Comunicación con Huéspedes",
  "& Coordination": "y Coordinación",
  "Guests remember how quickly they are helped. We support the stay with clear communication, arrival coordination, and local availability when needed.":
    "Los huéspedes recuerdan qué tan rápido se les atiende. Apoyamos la estancia con comunicación clara, coordinación de llegadas y disponibilidad local cuando se necesita.",
  "Cleaning": "Limpieza",
  "& Readiness": "y Preparación",
  "A luxury stay depends on details. We coordinate cleaning, supplies, laundry, and property readiness so the home feels cared for between stays.":
    "Una estancia de lujo depende de los detalles. Coordinamos limpieza, insumos, lavandería y preparación para que la casa se sienta cuidada entre estancias.",
  "Financial Clarity": "Claridad Financiera",
  "& Reporting": "y Reportes",
  "Owners should understand what is being spent, why it matters, and how the home is performing. We keep reporting clear and decisions transparent.":
    "Los propietarios deben entender en qué se está gastando, por qué importa y cómo está funcionando la casa. Mantenemos los reportes claros y las decisiones transparentes.",
  "Transparent accounting": "Contabilidad transparente",

  // Properties
  "Each property here is personally managed and closely overseen. We do not list homes we do not manage — and we do not manage more than we can handle well.":
    "Cada propiedad aquí es administrada personalmente y supervisada de cerca. No mostramos casas que no administramos, y no administramos más de lo que podemos atender bien.",
  "Ocean-view villa in Punta Mita with private pool, daily service, and access to premier beach clubs.":
    "Villa con vista al mar en Punta Mita, alberca privada, servicio diario y acceso a clubes de playa premium.",
  "Spacious coastal home designed for relaxed stays, with open living areas and seamless indoor-outdoor flow.":
    "Casa costera amplia diseñada para estancias relajadas, con espacios abiertos y una conexión natural entre interior y exterior.",
  "Contemporary villa with clean architectural lines, ocean views, and thoughtfully designed living spaces.":
    "Villa contemporánea con líneas arquitectónicas limpias, vistas al mar y espacios cuidadosamente diseñados.",
  "Comfortable villa within Punta Mita, offering privacy, convenience, and close access to golf and beach clubs.":
    "Villa cómoda dentro de Punta Mita, con privacidad, conveniencia y acceso cercano a golf y clubes de playa.",

  // Discover page
  "Discover Punta Mita": "Descubre Punta Mita",
  "Discover Punta Mita.": "Descubre Punta Mita.",
  "We’ll help you plan the good parts.": "Te ayudamos a planear lo mejor de tu estancia.",
  "Private ocean days, wellness, beach clubs, golf, chef-led dining, family adventures, nightlife, and special moments arranged around the way you want to enjoy your stay.":
    "Días privados en el mar, bienestar, clubes de playa, golf, cenas con chef, aventuras familiares, vida nocturna y momentos especiales organizados alrededor de la forma en que quieres disfrutar tu estancia.",
  "Ask Us to Plan Your Stay": "Pídenos Ayuda Para Planear Tu Estancia",
  "View Experiences": "Ver Experiencias",
  "Experiences": "Experiencias",
  "Curated for the way you want to experience Punta Mita":
    "Pensado para la forma en que quieres vivir Punta Mita",

  // Discover categories
  "Ocean & Water": "Océano y Agua",
  "Private yacht days, surf experiences, ocean adventures, fishing, wildlife, and water activities around Punta Mita.":
    "Días privados en yate, surf, aventuras en el mar, pesca, vida silvestre y actividades acuáticas alrededor de Punta Mita.",
  "Wellness, Relaxation & Beach Lifestyle": "Bienestar, Relajación y Vida de Playa",
  "In-villa spa, wellness, ritual experiences, private beach setups, sunset dinners, and relaxed luxury moments.":
    "Spa en villa, bienestar, experiencias rituales, montajes privados en playa, cenas al atardecer y momentos de lujo relajado.",
  "Golf, Sports & Adventure": "Golf, Deportes y Aventura",
  "Golf, racket sports, fitness, adventure tours, hiking, horseback riding, polo, and equestrian experiences.":
    "Golf, deportes de raqueta, fitness, tours de aventura, senderismo, paseos a caballo, polo y experiencias ecuestres.",
  "Beach Clubs & Day Clubs": "Clubes de Playa y Day Clubs",
  "Curated beach club experiences in Punta Mita and select destination beach clubs for guests looking for a more social or party atmosphere.":
    "Experiencias en clubes de playa en Punta Mita y clubes seleccionados para huéspedes que buscan un ambiente más social o de fiesta.",
  "Food & Dining": "Gastronomía y Cenas",
  "Private chef experiences, Punta Mita restaurants, agave tastings, mixology, farm-to-table, and culinary experiences.":
    "Experiencias con chef privado, restaurantes en Punta Mita, catas de agave, mixología, farm-to-table y experiencias culinarias.",
  "Nightlife & Entertainment": "Vida Nocturna y Entretenimiento",
  "Private villa parties, entertainment, poker nights, casino experiences, curated nights out, and signature dinner shows.":
    "Fiestas privadas en villa, entretenimiento, noches de póker, experiencias de casino, salidas organizadas y cenas espectáculo.",
  "Nearby Destinations & Day Trips": "Destinos Cercanos y Day Trips",
  "Seasonal & Special Events": "Temporadas y Eventos Especiales",
  "Punta Mita seasonal events, holidays, golf events, polo season, fishing tournaments, and private celebrations.":
    "Eventos de temporada en Punta Mita, días festivos, golf, temporada de polo, torneos de pesca y celebraciones privadas.",
  "High-End / VIP Experiences": "Experiencias High-End / VIP",

  // About
  "Who We Are": "Quiénes Somos",
  "Who We Are.": "Quiénes Somos.",
  "About Beyond Traveling": "Acerca de Beyond Traveling",
  "People You Can Actually Reach.": "Personas Con Las Que Sí Puedes Hablar.",

  // Home page (how it works, villas)
  "The house and the rental business, handled by one team in one report. Most owners who want to be fully hands-off choose this.":
    "La casa y el negocio de renta, a cargo de un solo equipo y en un solo reporte. La mayoría de los propietarios que quieren desentenderse por completo eligen esta opción.",
  "How It Works":
    "Cómo Funciona",
  "Getting Started": "Empezar",
  "Is Simple.": "Es Sencillo.",
  "We talk.":
    "Platicamos.",
  "A conversation about your home, how you use it, and what you need.":
    "Una conversación sobre tu casa, cómo la usas y qué necesitas.",
  "You get a proposal.":
    "Recibes una propuesta.",
  "A clear quote built around your property and the services you choose.":
    "Una cotización clara, hecha a la medida de tu propiedad y los servicios que elijas.",
  "We take over.":
    "Nosotros nos encargamos.",
  "Once you’re happy, we handle the day-to-day and keep you informed.":
    "Cuando estés conforme, nos encargamos del día a día y te mantenemos informado.",
  "Every home is different, so we start with a conversation and prepare a proposal built around your property.":
    "Cada casa es diferente, por eso empezamos con una conversación y preparamos una propuesta a la medida de tu propiedad.",
  "Homes We Manage":
    "Casas Que Administramos",
  "The Homes in Our Care,":
    "Las Casas a Nuestro Cuidado,",
  "Ready to Welcome Guests.":
    "Listas para Recibir Huéspedes.",
  "Each one is personally managed by our team and available to book for your stay in Punta Mita.":
    "Cada una es administrada personalmente por nuestro equipo y está disponible para tu estancia en Punta Mita.",

  "Luxury Home Specialists": "Especialistas en Casas de Lujo",
  "Local Punta Mita Experts": "Expertos Locales en Punta Mita",
  "Bilingual Team": "Equipo Bilingüe",
  "Property Inspections & Maintenance": "Inspecciones y Mantenimiento de la Propiedad",
  "Reliable Vendor Network": "Red de Proveedores Confiables",
  "Monthly Property Reports": "Reportes Mensuales de la Propiedad",

  "A bilingual, locally based team serving homeowners in Punta Mita since 2023. We provide Property Management, Vacation Rental Management, Home Watch, Concierge Service.":
    "Un equipo bilingüe y local que atiende a propietarios en Punta Mita desde 2023. Ofrecemos Administración de Propiedades, Administración de Rentas Vacacionales, Home Watch, Servicio de Concierge.",

  "No. Our fees are straightforward, and we don’t benefit when your expenses go up.":
    "No. Nuestras tarifas son claras y no nos beneficiamos cuando tus gastos aumentan.",
  "Rentals, or only maintenance?": "¿Rentas, o solo mantenimiento?",
  "Both. Guest communication and rental performance, alongside the upkeep that protects the property.":
    "Ambos. Comunicación con los huéspedes y desempeño de la renta, junto con el mantenimiento que protege la propiedad.",
  "Do you take every property?": "¿Aceptan todas las propiedades?",
  "No. We work with a limited number of homeowners on purpose, to stay closely involved.":
    "No. Trabajamos con un número limitado de propietarios a propósito, para mantenernos muy involucrados.",

  "Your Home,": "Tu Casa,",
  "Cared For Like It’s Ours.": "Cuidada Como Si Fuera Nuestra.",
  "Why Owners Choose Us": "Por Qué Nos Eligen los Propietarios",

  // Spanish audit — home, services, about, FAQ, contact, shared UI
  "Locally Based. Personally Run.":
    "Con Base Local. Atención Personal.",
  "What We Do":
    "Qué Hacemos",
  "Occupied by guests or standing empty, the same team looks after every detail — inspections, upkeep, communication, and care.":
    "Con huéspedes o con la casa vacía, el mismo equipo cuida cada detalle: inspecciones, mantenimiento, comunicación y atención.",
  "Which Service":
    "¿Qué Servicio",
  "Is Right for Your Home?":
    "Es Ideal para Tu Casa?",
  "Each one covers a different part of the job — combine what you need, or let one team handle everything.":
    "Cada uno cubre una parte distinta del trabajo: combina lo que necesites o deja que un solo equipo se encargue de todo.",
  "Swipe to compare →":
    "Desliza para comparar →",
  "Property Management and Vacation Rental Management cover different parts of the job and can be booked separately — Full-Service Management is simply the two together.":
    "La Administración de Propiedades y la Administración de Rentas Vacacionales cubren partes distintas del trabajo y pueden contratarse por separado; la Administración Integral es simplemente las dos juntas.",
  "See All FAQs →":
    "Ver Todas las Preguntas →",
  "If you want a team that actually answers, stays involved, and treats your home like it matters, let’s talk.":
    "Si buscas un equipo que de verdad responde, se mantiene involucrado y trata tu casa como si importara, platiquemos.",
  "Have a question first? See common questions.":
    "¿Tienes una pregunta antes? Consulta las preguntas frecuentes.",
  "We don’t “manage” homes — we look after them, with you.":
    "No «administramos» casas: las cuidamos, contigo.",
  "Luxury Punta Mita terrace cared for by Beyond Traveling":
    "Terraza de lujo en Punta Mita cuidada por Beyond Traveling",
  "Luxury property management in Punta Mita":
    "Administración de propiedades de lujo en Punta Mita",
  "For Vacant Homes":
    "Para Casas Vacías",
  "For Every Stay":
    "Para Cada Estancia",
  "Guests & Bookings":
    "Huéspedes y Reservaciones",
  "Property Only":
    "Solo la Propiedad",
  "Most Complete":
    "Lo Más Completo",
  "Scheduled Property Visits & Inspections":
    "Visitas e Inspecciones Programadas de la Propiedad",
  "Photo-Documented Visit Reports":
    "Reportes de Visita con Fotografías",
  "Arrival Prep & Guest Concierge":
    "Preparación de Llegada y Concierge para Huéspedes",
  "Guest Communication During Stays":
    "Comunicación con Huéspedes Durante la Estancia",
  "Booking & Revenue Management":
    "Gestión de Reservaciones e Ingresos",
  "Vendor Coordination & Oversight":
    "Coordinación y Supervisión de Proveedores",
  "Bill Pay & Financial Administration":
    "Pago de Cuentas y Administración Financiera",
  "Monthly Owner Reporting":
    "Reporte Mensual para el Propietario",
  "Scheduled visits and photo-documented checks for homes standing empty between guest stays.":
    "Visitas programadas y revisiones con fotografías para casas vacías entre estancias de huéspedes.",
  "Explore Home Watch":
    "Conoce Home Watch",
  "Arrival prep and anything a stay requires, arranged directly for you in English or Spanish.":
    "Preparación de llegada y todo lo que requiera una estancia, organizado directamente para ti en inglés o español.",
  "Explore Concierge Service":
    "Conoce el Servicio de Concierge",
  "Vacation Rental":
    "Renta Vacacional",
  "Listings, pricing, and every guest conversation — the entire rental business, run for you. Bookable on its own.":
    "Anuncios, precios y cada conversación con los huéspedes: todo el negocio de renta, operado por nosotros. Se puede contratar por separado.",
  "Explore Vacation Rental Management":
    "Conoce la Administración de Rentas Vacacionales",
  "Maintenance, vendors, and bills for the house itself — you keep the guests and the calendar. Bookable on its own.":
    "Mantenimiento, proveedores y pagos de la casa misma; tú conservas a los huéspedes y el calendario. Se puede contratar por separado.",
  "Explore Property Management":
    "Conoce la Administración de Propiedades",
  "Explore Full-Service Management":
    "Conoce la Administración Integral",
  "Hello! I’d like to talk about managing my property in Punta Mita.":
    "¡Hola! Me gustaría platicar sobre la administración de mi propiedad en Punta Mita.",
  "Villa Brezza, a Beyond Traveling property in Punta Mita":
    "Villa Brezza, una propiedad de Beyond Traveling en Punta Mita",
  "We work with a limited number of homeowners, so we can stay closely involved — getting to know you, your home, and your priorities, whether that’s preserving the property, stronger rental performance, or both.":
    "Trabajamos con un número limitado de propietarios para mantenernos muy involucrados: conocerte a ti, tu casa y tus prioridades, ya sea conservar la propiedad, mejorar el desempeño de la renta, o ambas.",
  "Always Reachable":
    "Siempre Disponibles",
  "No Lock-In":
    "Sin Contratos Forzosos",
  "Transparent Pricing":
    "Precios Transparentes",
  "Our Story":
    "Nuestra Historia",
  "Bright, open living room of a Punta Mita villa with sliding glass doors to the terrace and garden":
    "Sala amplia y luminosa de una villa en Punta Mita con puertas de vidrio corredizas hacia la terraza y el jardín",
  "The Day-to-Day Care":
    "El Cuidado Diario",
  "Your Property Needs.":
    "Que Tu Propiedad Necesita.",
  "Without the Distance.":
    "Sin la Distancia.",
  "Clear communication, thoughtful property care, reliable guest support, transparent reporting — and no hidden fees.":
    "Comunicación clara, cuidado atento de la propiedad, apoyo confiable a los huéspedes, reportes transparentes y sin cargos ocultos.",
  "Doing the Right Things Consistently — and Being Available When It Matters":
    "Hacer lo Correcto con Constancia y Estar Disponibles Cuando Importa",
  "If you want a team that knows your home, answers directly, and keeps costs clear, let’s talk.":
    "Si buscas un equipo que conozca tu casa, responda directamente y mantenga los costos claros, platiquemos.",
  "Being present, paying attention, and making practical decisions before small issues become bigger ones.":
    "Estar presentes, poner atención y tomar decisiones prácticas antes de que los problemas pequeños se hagan grandes.",
  "This is someone’s home, not just an asset. Decisions affect comfort, costs, and rental results — responsiveness matters as much as execution.":
    "Esta es la casa de alguien, no solo un activo. Las decisiones afectan la comodidad, los costos y los resultados de renta; la capacidad de respuesta importa tanto como la ejecución.",
  "Regular inspections · Preventive maintenance · Trusted local vendors":
    "Inspecciones periódicas · Mantenimiento preventivo · Proveedores locales de confianza",
  "Fast, personal responses · Check-in coordination · On-call during stays":
    "Respuestas rápidas y personales · Coordinación de check-in · Disponibles durante las estancias",
  "Cleaning quality control · Supply management · Pre-arrival preparation":
    "Control de calidad de la limpieza · Manejo de insumos · Preparación previa a la llegada",
  "Clear owner reports · Transparent accounting · No hidden fees":
    "Reportes claros para el propietario · Contabilidad transparente · Sin cargos ocultos",
  "Frequently Asked Questions":
    "Preguntas Frecuentes",
  "Questions Owners":
    "Preguntas Que los Propietarios",
  "Usually Ask Us First.":
    "Suelen Hacernos Primero.",
  "A few honest answers before we talk. Anything not covered here is easiest to work through in a short conversation.":
    "Unas cuantas respuestas honestas antes de platicar. Lo que no esté aquí es más fácil de resolver en una conversación breve.",
  "Still Have a Question?":
    "¿Aún Tienes Alguna Pregunta?",
  "The fastest answers come from a short conversation about your property specifically.":
    "Las respuestas más rápidas salen de una conversación breve sobre tu propiedad en particular.",
  "Will I deal with one person, or a system?":
    "¿Voy a tratar con una persona o con un sistema?",
  "You deal with people. We keep communication direct and avoid passing your home through layers of staff — you always know who is caring for your property, what’s happening day to day, and why decisions are being made.":
    "Tratas con personas. Mantenemos la comunicación directa y no pasamos tu casa por capas de personal: siempre sabes quién cuida tu propiedad, qué pasa día a día y por qué se toman las decisiones.",
  "No. Our fees are straightforward, and we actively look for ways to save you money — avoiding unnecessary maintenance and managing cleaning and supplies efficiently. We don’t inflate costs, and we don’t benefit when your expenses go up.":
    "No. Nuestras tarifas son claras y buscamos activamente formas de ahorrarte dinero: evitamos mantenimiento innecesario y manejamos la limpieza y los insumos de forma eficiente. No inflamos los costos y no nos beneficiamos cuando tus gastos suben.",
  "Do you handle rentals, or only maintenance?":
    "¿Manejan las rentas o solo el mantenimiento?",
  "Both. We help with guest communication, property readiness, local coordination, and the details that support stronger rental performance — alongside the maintenance and oversight that protect the property itself.":
    "Ambos. Nos encargamos de la comunicación con los huéspedes, la preparación de la propiedad, la coordinación local y los detalles que impulsan un mejor desempeño de la renta, junto con el mantenimiento y la supervisión que protegen la propiedad misma.",
  "How available are you, really?":
    "¿Qué tan disponibles están, en realidad?",
  "We live and work in Punta Mita, close to every home we manage. That means fast responses to guests, quick action when something needs attention, and real relationships with local vendors — not a \"we’ll check on that Monday\" mentality.":
    "Vivimos y trabajamos en Punta Mita, cerca de cada casa que administramos. Eso significa respuestas rápidas a los huéspedes, acción inmediata cuando algo requiere atención y relaciones reales con proveedores locales; nada de una mentalidad de «lo revisamos el lunes».",
  "Do you take on every property that asks?":
    "¿Aceptan todas las propiedades que lo solicitan?",
  "No. We work with a limited number of homeowners on purpose, so we can stay closely involved with each home rather than spreading ourselves across a large portfolio.":
    "No. Trabajamos con un número limitado de propietarios a propósito, para mantenernos muy involucrados con cada casa en lugar de dispersarnos en un portafolio grande.",
  "How Can We":
    "¿En Qué Podemos",
  "Help?":
    "Ayudarte?",
  "Whether you own a property in Punta Mita or are planning a stay, we are happy to help. No pressure, no sales pitch.":
    "Ya seas dueño de una propiedad en Punta Mita o estés planeando una estancia, con gusto te ayudamos. Sin presión y sin discurso de ventas.",
  "Contact options":
    "Opciones de contacto",
  "Not Sure Where to Start?":
    "¿No Sabes por Dónde Empezar?",
  "Send us a message on WhatsApp and we will point you to the right person.":
    "Envíanos un mensaje por WhatsApp y te canalizamos con la persona indicada.",
  "For property owners":
    "Para propietarios",
  "Talk with us about managing your home in Punta Mita: property care, guest support and rental results, with clear pricing and no hidden fees.":
    "Platica con nosotros sobre la administración de tu casa en Punta Mita: cuidado de la propiedad, atención a huéspedes y resultados de renta, con precios claros y sin cargos ocultos.",
  "Talk about your property":
    "Platícanos de tu propiedad",
  "For guests":
    "Para huéspedes",
  "Ask about availability and rates for Villa Amore, Villa Brezza, Villa Llamas or Las Palmas 28. We reply to you personally.":
    "Consulta disponibilidad y tarifas de Villa Amore, Villa Brezza, Villa Llamas o Las Palmas 28. Te respondemos personalmente.",
  "Request your dates":
    "Solicita tus fechas",
  "Agent or travel advisor?":
    "¿Agente o asesor de viajes?",
  "Partner with us":
    "Colabora con nosotros",
  "Looking to join our team or offer a service?":
    "¿Quieres unirte a nuestro equipo u ofrecer un servicio?",
  "Work with us":
    "Trabaja con nosotros",
  "We keep communication simple and direct. Tell us a little about your property and what you are looking for.":
    "Mantenemos la comunicación simple y directa. Cuéntanos un poco sobre tu propiedad y lo que buscas.",
  "We read your message carefully.":
    "Leemos tu mensaje con atención.",
  "We reply directly, usually by email or WhatsApp.":
    "Te respondemos directamente, normalmente por correo o WhatsApp.",
  "If it makes sense, we schedule a simple conversation.":
    "Si tiene sentido, agendamos una conversación sencilla.",
  "Tell Us About Your Property":
    "Cuéntanos de Tu Propiedad",
  "For Property Owners":
    "Para Propietarios",
  "Let’s Have a":
    "Platiquemos",
  "Select":
    "Seleccionar",
  "I manage it myself":
    "Yo la administro",
  "I work with another company":
    "Trabajo con otra empresa",
  "New property, not rented yet":
    "Propiedad nueva, aún sin rentar",
  "Something else":
    "Otra situación",
  "Where is your property?":
    "¿Dónde está tu propiedad?",
  "e.g. Punta Mita, Porta Fortuna, Las Palmas":
    "p. ej. Punta Mita, Porta Fortuna, Las Palmas",
  "Tell us what you are looking for, or what has not been working with your current setup.":
    "Cuéntanos qué buscas o qué no ha funcionado con tu esquema actual.",
  "We would be glad to work with agencies, travel agents and rental agents who want to offer their guests a villa in Punta Mita, backed by a team that answers personally.":
    "Con gusto trabajamos con agencias, agentes de viajes y agentes de renta que quieran ofrecer a sus huéspedes una villa en Punta Mita, respaldados por un equipo que responde personalmente.",
  "What to Include":
    "Qué Incluir",
  "A short email is enough to start. It helps us to know a little about you:":
    "Basta un correo breve para empezar. Nos ayuda saber un poco sobre ti:",
  "Write to Us":
    "Escríbenos",
  "Selecting the address opens your email app with a short template ready to fill in.":
    "Al seleccionar la dirección se abre tu aplicación de correo con una plantilla breve lista para completar.",
  "View Our Properties":
    "Ver Nuestras Propiedades",
  "all contact options":
    "todas las opciones de contacto",
  "Partnership inquiry":
    "Consulta de colaboración",
  "Agency / company:":
    "Agencia / empresa:",
  "Markets or regions you work with:":
    "Mercados o regiones con los que trabajas:",
  "How you would like to collaborate:":
    "Cómo te gustaría colaborar:",
  "Thank you!":
    "¡Gracias!",
  "For Agents & Partners":
    "Para Agentes y Socios",
  "Let’s Work":
    "Trabajemos",
  "Your name, and your agency or company":
    "Tu nombre y tu agencia o empresa",
  "Your website or portfolio":
    "Tu sitio web o portafolio",
  "The markets or regions you work with, and the guests you serve":
    "Los mercados o regiones con los que trabajas y los huéspedes que atiendes",
  "How you would like to collaborate":
    "Cómo te gustaría colaborar",
  "Which of our properties interest you":
    "Cuáles de nuestras propiedades te interesan",
  "Your Home, Checked On.":
    "Tu Casa, Revisada.",
  "Even When No One Is There.":
    "Aun Cuando Nadie Está.",
  "Homes in Punta Mita don’t stay still while they’re empty — humidity, storms, pests, and small leaks keep working. Home Watch puts a trusted local set of eyes on the property on a regular schedule, with photos after every visit so you always know where things stand.":
    "Las casas en Punta Mita no se detienen cuando están vacías: la humedad, las tormentas, las plagas y las fugas pequeñas siguen trabajando. Home Watch pone un par de ojos locales de confianza en la propiedad con una frecuencia regular, con fotografías después de cada visita para que siempre sepas cómo van las cosas.",
  "Quiet Punta Mita villa looked after between stays by Beyond Traveling":
    "Villa tranquila en Punta Mita cuidada entre estancias por Beyond Traveling",
  "For owners whose home sits empty between their own visits — and who want to know, not wonder.":
    "Para propietarios cuya casa permanece vacía entre sus visitas, y que quieren saber, no preguntarse.",
  "No guests, no rental calendar. Just consistent oversight so small issues are caught before they turn into expensive ones.":
    "Sin huéspedes y sin calendario de renta. Solo supervisión constante para detectar los problemas pequeños antes de que se vuelvan costosos.",
  "Scheduled Visits":
    "Visitas Programadas",
  "Regular walk-throughs on a schedule agreed with you, plus extra checks after heavy rain or storms.":
    "Recorridos periódicos en un calendario acordado contigo, más revisiones extra después de lluvias fuertes o tormentas.",
  "Property Inspections":
    "Inspecciones de la Propiedad",
  "Doors, windows, plumbing, air conditioning, pool, and grounds checked against a consistent list every visit.":
    "Puertas, ventanas, plomería, aire acondicionado, alberca y áreas exteriores revisados con una lista constante en cada visita.",
  "Photo-Documented Reports":
    "Reportes con Fotografías",
  "A dated report with photos after each visit, so you can see the home’s condition from anywhere.":
    "Un reporte fechado con fotografías después de cada visita, para que veas el estado de la casa desde cualquier lugar.",
  "Issue Flagging":
    "Aviso de Problemas",
  "Anything that needs attention is reported to you right away, with a clear recommendation on next steps.":
    "Todo lo que requiera atención se te reporta de inmediato, con una recomendación clara de los siguientes pasos.",
  "We meet at the property, learn its quirks, and agree on a visit schedule.":
    "Nos reunimos en la propiedad, conocemos sus particularidades y acordamos un calendario de visitas.",
  "Regular Visits":
    "Visitas Periódicas",
  "We check the home on schedule and after weather events.":
    "Revisamos la casa según el calendario y después de eventos climáticos.",
  "Visit Reports":
    "Reportes de Visita",
  "You receive photos and notes after every visit — no chasing for updates.":
    "Recibes fotografías y notas después de cada visita; sin tener que pedir actualizaciones.",
  "Concierge Service · Punta Mita":
    "Servicio de Concierge · Punta Mita",
  "Every Stay Arranged.":
    "Cada Estancia Organizada.",
  "Before You Even Arrive.":
    "Incluso Antes de Que Llegues.",
  "Whether it’s you, your family, or your guests arriving, Concierge Service handles the details that make a stay feel effortless — the home ready on arrival, the right reservations made, and a local, bilingual team on call throughout.":
    "Seas tú, tu familia o tus huéspedes quienes lleguen, el Servicio de Concierge se encarga de los detalles que hacen que una estancia se sienta sin esfuerzo: la casa lista a la llegada, las reservaciones correctas y un equipo local bilingüe disponible en todo momento.",
  "Luxury Punta Mita terrace prepared for arriving guests":
    "Terraza de lujo en Punta Mita preparada para recibir huéspedes",
  "For owners and guests who want the stay itself handled — without handing over the whole property.":
    "Para propietarios y huéspedes que quieren que se encarguen de la estancia misma, sin entregar toda la propiedad.",
  "Use it for your own visits, or alongside your own rental setup. Arranged directly, in English or Spanish.":
    "Úsalo en tus propias visitas o junto con tu esquema de renta. Se organiza directamente, en inglés o español.",
  "Arrival Preparation":
    "Preparación de Llegada",
  "The home opened, cleaned, stocked, and ready — groceries, flowers, and preferences taken care of before arrival.":
    "La casa abierta, limpia, abastecida y lista: despensa, flores y preferencias atendidas antes de la llegada.",
  "Reservations & Experiences":
    "Reservaciones y Experiencias",
  "Restaurants, golf, boat trips, spa days, and private chefs booked with local partners we know and trust.":
    "Restaurantes, golf, paseos en lancha, días de spa y chefs privados reservados con socios locales que conocemos y en quienes confiamos.",
  "Airport transfers and drivers coordinated so the trip starts the moment you land.":
    "Traslados del aeropuerto y choferes coordinados para que el viaje empiece desde que aterrizas.",
  "On-Call During the Stay":
    "Disponibles Durante la Estancia",
  "Fast, personal responses throughout the stay — whatever comes up, someone local answers.":
    "Respuestas rápidas y personales durante toda la estancia: pase lo que pase, alguien local contesta.",
  "Tell Us the Plan":
    "Cuéntanos el Plan",
  "Dates, guests, preferences — share what you know and we fill in the rest.":
    "Fechas, huéspedes, preferencias: comparte lo que sepas y nosotros completamos el resto.",
  "We Arrange It":
    "Nosotros lo Organizamos",
  "Arrival prep, bookings, and transfers confirmed ahead of time.":
    "Preparación de llegada, reservaciones y traslados confirmados con anticipación.",
  "We Stay Available":
    "Seguimos Disponibles",
  "On call during the stay, in English or Spanish.":
    "Disponibles durante la estancia, en inglés o español.",
  "Vacation Rental Management · Punta Mita":
    "Administración de Rentas Vacacionales · Punta Mita",
  "The Rental Business,":
    "El Negocio de Renta,",
  "Run for You.":
    "Operado por Nosotros.",
  "Renting a luxury home well takes more than a listing. Vacation Rental Management covers the guest side of the business — how the home is presented and priced, every inquiry and booking, and the experience guests have from first message to check-out.":
    "Rentar bien una casa de lujo requiere más que un anuncio. La Administración de Rentas Vacacionales cubre el lado del huésped del negocio: cómo se presenta y se fija el precio de la casa, cada consulta y reservación, y la experiencia de los huéspedes desde el primer mensaje hasta el check-out.",
  "Luxury vacation rental villa in Punta Mita managed by Beyond Traveling":
    "Villa de lujo en renta vacacional en Punta Mita administrada por Beyond Traveling",
  "For owners who want strong rental results without answering guest messages themselves.":
    "Para propietarios que quieren buenos resultados de renta sin contestar ellos mismos los mensajes de los huéspedes.",
  "We run the bookings, guests, and calendar. Upkeep of the house itself can stay with you — or add Property Management for both.":
    "Nosotros llevamos las reservaciones, los huéspedes y el calendario. El mantenimiento de la casa puede quedar contigo, o puedes agregar la Administración de Propiedades para ambos.",
  "Listings & Presentation":
    "Anuncios y Presentación",
  "Listings written and maintained so the home is shown the way it deserves to be seen.":
    "Anuncios redactados y mantenidos para que la casa se muestre como merece verse.",
  "Pricing & Bookings":
    "Precios y Reservaciones",
  "Rates adjusted to season and demand, with inquiries, bookings, and the calendar managed end to end.":
    "Tarifas ajustadas según la temporada y la demanda, con consultas, reservaciones y calendario manejados de principio a fin.",
  "Every guest conversation handled — before arrival, during the stay, and after check-out.":
    "Cada conversación con los huéspedes atendida: antes de la llegada, durante la estancia y después del check-out.",
  "Arrival & Guest Concierge":
    "Llegada y Concierge para Huéspedes",
  "Check-in coordination, arrival prep, and concierge requests handled for every booking.":
    "Coordinación de check-in, preparación de llegada y solicitudes de concierge atendidas en cada reservación.",
  "Clear monthly reports on bookings, revenue, and costs — no hidden fees.":
    "Reportes mensuales claros de reservaciones, ingresos y costos, sin cargos ocultos.",
  "Review the Home":
    "Revisión de la Casa",
  "We look at the property, its rental history, and your goals.":
    "Revisamos la propiedad, su historial de renta y tus objetivos.",
  "Set Up & Launch":
    "Puesta en Marcha",
  "Listings, pricing, and the calendar set up — or taken over from your current setup.":
    "Anuncios, precios y calendario configurados, o retomados de tu esquema actual.",
  "Run & Report":
    "Operación y Reportes",
  "We manage bookings and guests, and report to you every month.":
    "Administramos reservaciones y huéspedes, y te reportamos cada mes.",
  "Property Management · Punta Mita":
    "Administración de Propiedades · Punta Mita",
  "The House Itself,":
    "La Casa Misma,",
  "Looked After Properly.":
    "Cuidada como Se Debe.",
  "Property Management takes care of the physical home and the administration behind it — inspections, preventive maintenance, trusted local vendors, and the bills that keep everything running. You keep control of guests and the calendar; we keep the house in excellent condition.":
    "La Administración de Propiedades se encarga de la casa física y de la administración que la respalda: inspecciones, mantenimiento preventivo, proveedores locales de confianza y los pagos que mantienen todo funcionando. Tú conservas el control de los huéspedes y el calendario; nosotros mantenemos la casa en excelentes condiciones.",
  "Well-maintained luxury home in Punta Mita":
    "Casa de lujo bien mantenida en Punta Mita",
  "For owners who handle their own guests — or don’t rent at all — but want the house in expert hands.":
    "Para propietarios que manejan a sus propios huéspedes, o que no rentan, pero quieren la casa en manos expertas.",
  "Booking and guest communication stay with you. Add Vacation Rental Management any time to hand over both.":
    "Las reservaciones y la comunicación con los huéspedes siguen contigo. Agrega la Administración de Rentas Vacacionales cuando quieras para entregar ambas.",
  "Inspections & Visits":
    "Inspecciones y Visitas",
  "Scheduled visits with photo-documented reports, so you always know the home’s condition.":
    "Visitas programadas con reportes con fotografías, para que siempre conozcas el estado de la casa.",
  "Preventive Maintenance":
    "Mantenimiento Preventivo",
  "Pool, gardens, air conditioning, and systems kept on a maintenance plan — not fixed only when they fail.":
    "Alberca, jardines, aire acondicionado y sistemas con un plan de mantenimiento, no reparados solo cuando fallan.",
  "Vendor Coordination":
    "Coordinación de Proveedores",
  "Trusted local vendors scheduled, supervised, and held to the standard your home requires.":
    "Proveedores locales de confianza programados, supervisados y sujetos al estándar que tu casa requiere.",
  "Bill Pay & Administration":
    "Pago de Cuentas y Administración",
  "Utilities, HOA, staff, and service invoices handled on your behalf, with every expense accounted for.":
    "Servicios, cuotas de la asociación, personal y facturas de servicio atendidos por ti, con cada gasto registrado.",
  "One clear monthly report covering visits, work completed, and spending.":
    "Un reporte mensual claro con visitas, trabajos realizados y gastos.",
  "Property Review":
    "Revisión de la Propiedad",
  "We walk the home, document its systems, and note what needs attention.":
    "Recorremos la casa, documentamos sus sistemas y anotamos lo que requiere atención.",
  "A maintenance schedule and vendor setup agreed with you.":
    "Un calendario de mantenimiento y un esquema de proveedores acordados contigo.",
  "Ongoing Oversight":
    "Supervisión Continua",
  "Visits, upkeep, and bills handled, reported monthly.":
    "Visitas, mantenimiento y pagos atendidos, con reporte mensual.",
  "Property Management and Vacation Rental Management, combined into one team and one report.":
    "Administración de Propiedades y Administración de Rentas Vacacionales, combinadas en un solo equipo y un solo reporte.",
  "Full-Service Management · Punta Mita":
    "Administración Integral · Punta Mita",
  "The House and the Rental Business.":
    "La Casa y el Negocio de Renta.",
  "One Team, One Report.":
    "Un Equipo, un Reporte.",
  "Full-Service Management combines Property Management and Vacation Rental Management — maintenance, vendors, and bills, plus the bookings, guests, and calendar, handled by the same team. Most owners who want to be fully hands-off land here.":
    "La Administración Integral combina la Administración de Propiedades y la Administración de Rentas Vacacionales: mantenimiento, proveedores y pagos, además de las reservaciones, los huéspedes y el calendario, a cargo del mismo equipo. La mayoría de los propietarios que quieren desentenderse por completo terminan aquí.",
  "Luxury Punta Mita villa under full-service management by Beyond Traveling":
    "Villa de lujo en Punta Mita con administración integral de Beyond Traveling",
  "For owners who want to be fully hands-off — and still know exactly what’s happening.":
    "Para propietarios que quieren desentenderse por completo, y aun así saber exactamente qué está pasando.",
  "One team looks after the home and the rental business, so nothing falls between two providers.":
    "Un solo equipo cuida la casa y el negocio de renta, para que nada se quede entre dos proveedores.",
  "Everything in Property Management":
    "Todo lo de la Administración de Propiedades",
  "Inspections, photo reports, preventive maintenance, vendor coordination, and bill pay.":
    "Inspecciones, reportes con fotografías, mantenimiento preventivo, coordinación de proveedores y pago de cuentas.",
  "Everything in Vacation Rental Management":
    "Todo lo de la Administración de Rentas Vacacionales",
  "Listings, pricing, bookings, and every guest conversation from inquiry to check-out.":
    "Anuncios, precios, reservaciones y cada conversación con los huéspedes, desde la consulta hasta el check-out.",
  "Each stay prepared and supported by the same team that maintains the home.":
    "Cada estancia preparada y atendida por el mismo equipo que mantiene la casa.",
  "One Monthly Report":
    "Un Reporte Mensual",
  "Property care, rental performance, and spending — together in a single, clear report.":
    "Cuidado de la propiedad, desempeño de la renta y gastos, juntos en un solo reporte claro.",
  "Property Management and Vacation Rental Management can also be booked separately — Full-Service Management is simply the two together.":
    "La Administración de Propiedades y la Administración de Rentas Vacacionales también pueden contratarse por separado; la Administración Integral es simplemente las dos juntas.",
  "Property & Rental Review":
    "Revisión de la Propiedad y la Renta",
  "We assess the home, its rental performance, and your goals.":
    "Evaluamos la casa, su desempeño de renta y tus objetivos.",
  "Maintenance plan, vendors, listings, and calendar set up in one go.":
    "Plan de mantenimiento, proveedores, anuncios y calendario configurados de una sola vez.",
  "One Team, Ongoing":
    "Un Equipo, de Forma Continua",
  "We run the house and the rental business, reported monthly.":
    "Administramos la casa y el negocio de renta, con reporte mensual.",
  "Or call +52 33 1361 9889":
    "O llámanos al +52 33 1361 9889",
  "What’s Included":
    "Qué Incluye",
  "Other Services":
    "Otros Servicios",
  "Let’s Talk About Your Home":
    "Hablemos de Tu Casa",
  "is the right fit.":
    "es la opción ideal.",
  "Who It’s For":
    "Para Quién Es",
  "Featured Property":
    "Propiedad Destacada",
  "View Property →":
    "Ver Propiedad →",
  "Quiet Boutique":
    "Boutique Tranquila",
  "Comparison of Beyond Traveling’s five services and what each includes":
    "Comparación de los cinco servicios de Beyond Traveling y lo que incluye cada uno",
  "Feature":
    "Característica",
  "Owners:":
    "Propietarios:",
  "Reservations:":
    "Reservaciones:",

  "No pressure. No sales pitch. Whether you’re actively looking for a new team or just want to understand your options, we’re happy to talk. You can also explore how we work on our":
    "Sin presión y sin discurso de ventas. Ya sea que estés buscando activamente un nuevo equipo o solo quieras conocer tus opciones, con gusto platicamos. También puedes conocer cómo trabajamos en nuestra página de",
  "Looking to stay, or to have your own property managed? Head to":
    "¿Quieres hospedarte o que administremos tu propiedad? Consulta",
  "Tell us about the property and what you need. We’ll tell you honestly whether":
    "Cuéntanos sobre la propiedad y lo que necesitas. Te diremos con honestidad si",
  "A luxury property in Punta Mita cared for by Beyond Traveling":
    "Propiedad de lujo en Punta Mita cuidada por Beyond Traveling",
  "Some owners care most about preserving the property. Others want stronger rental performance. Most want both.":
    "Algunos propietarios se preocupan sobre todo por conservar la propiedad. Otros quieren un mejor desempeño de la renta. La mayoría quiere ambas cosas.",
  "A luxury villa in Punta Mita managed by Beyond Traveling":
    "Villa de lujo en Punta Mita administrada por Beyond Traveling",
  "A luxury rental villa in Punta Mita managed by Beyond Traveling":
    "Villa de lujo en renta en Punta Mita administrada por Beyond Traveling",

  // Spanish audit — legal pages, properties, reservations, work with us
  "Legal":
    "Legal",
  "How deposits, cancellations, and date changes work for reservations booked directly with Beyond Traveling.":
    "Cómo funcionan los depósitos, las cancelaciones y los cambios de fecha en las reservaciones hechas directamente con Beyond Traveling.",
  "Last updated: September 2026":
    "Última actualización: septiembre de 2026",
  "Once your dates are confirmed, a property is held exclusively for you — so a cancellation affects both the homeowner and other guests who may have wanted those same dates. This policy is meant to be fair to everyone involved. If your situation is unusual, reach out directly; we review requests individually.":
    "Una vez confirmadas tus fechas, la propiedad se aparta exclusivamente para ti, por lo que una cancelación afecta tanto al propietario como a otros huéspedes que pudieron querer esas mismas fechas. Esta política busca ser justa para todos los involucrados. Si tu situación es poco común, escríbenos directamente; revisamos cada solicitud de manera individual.",
  "This policy applies to reservations booked directly with Beyond Traveling. Bookings made through a third-party platform such as Airbnb or Vrbo follow that platform’s own cancellation terms instead.":
    "Esta política aplica a las reservaciones hechas directamente con Beyond Traveling. Las reservaciones realizadas a través de plataformas de terceros, como Airbnb o Vrbo, se rigen por los términos de cancelación de esa plataforma.",
  ". The remaining balance is due 90 days before arrival. Bookings made within 90 days of check-in require payment in full at the time of booking.":
    ". El saldo restante vence 90 días antes de la llegada. Las reservaciones hechas dentro de los 90 días previos al check-in requieren el pago total al momento de reservar.",
  "Refunds on amounts paid follow the schedule below, based on how far in advance we receive your written cancellation:":
    "Los reembolsos de los montos pagados siguen el calendario siguiente, según con cuánta anticipación recibamos tu cancelación por escrito:",
  "Refunds are issued to your original payment method within 15 business days of receiving your written cancellation.":
    "Los reembolsos se realizan al método de pago original dentro de los 15 días hábiles posteriores a recibir tu cancelación por escrito.",
  "We’re happy to accommodate one complimentary date change per reservation, provided it’s requested at least 90 days before arrival and new dates are available within the same calendar year. Rate differences between your original and new dates may apply. Requests made within 90 days of arrival are treated as a cancellation under the terms above.":
    "Con gusto aceptamos un cambio de fecha sin costo por reservación, siempre que se solicite con al menos 90 días de anticipación a la llegada y las nuevas fechas estén disponibles dentro del mismo año calendario. Puede aplicar una diferencia de tarifa entre tus fechas originales y las nuevas. Las solicitudes hechas dentro de los 90 días previos a la llegada se tratan como una cancelación conforme a los términos anteriores.",
  "If a natural disaster, government travel restriction, or similarly extraordinary event directly affects Punta Mita or your ability to travel, we’ll do our best to offer a 12-month rebooking credit rather than apply the standard cancellation terms above. This applies only when the circumstance is in effect immediately before or during your stay; if it resolves before your arrival, our standard cancellation terms apply. Each situation is reviewed individually.":
    "Si un desastre natural, una restricción gubernamental de viaje o un evento extraordinario similar afecta directamente a Punta Mita o tu posibilidad de viajar, haremos lo posible por ofrecerte un crédito de reprogramación de 12 meses en lugar de aplicar los términos estándar de cancelación. Esto aplica solo cuando la circunstancia esté vigente inmediatamente antes o durante tu estancia; si se resuelve antes de tu llegada, aplican nuestros términos estándar. Cada situación se revisa de forma individual.",
  "We recommend purchasing travel insurance at the time of booking to protect against cancellation costs from illness, injury, or unexpected changes to your travel plans.":
    "Recomendamos contratar un seguro de viaje al momento de reservar, para protegerte de los costos de cancelación por enfermedad, lesión o cambios inesperados en tus planes de viaje.",
  "No refund is issued for early departure or if you do not arrive for a confirmed reservation.":
    "No se realiza reembolso por salida anticipada ni si no te presentas a una reservación confirmada.",
  ". We’ll confirm receipt within 24 hours along with the terms that apply to your reservation.":
    ". Confirmaremos la recepción en un plazo de 24 horas, junto con los términos que aplican a tu reservación.",
  "Considering an unusual situation?":
    "¿Tienes una situación poco común?",
  "Reach out directly — we review circumstances individually and would rather talk it through than leave you guessing.":
    "Escríbenos directamente: revisamos cada circunstancia de forma individual y preferimos platicarlo contigo que dejarte con dudas.",
  "A 50% deposit secures your dates at the time of booking, in addition to the refundable security deposit described in our":
    "Un depósito del 50% asegura tus fechas al momento de reservar, además del depósito de seguridad reembolsable descrito en nuestros",
  "Send cancellation or date-change requests in writing to":
    "Envía por escrito las solicitudes de cancelación o cambio de fechas a",
  "or via WhatsApp at":
    "o por WhatsApp al",
  "Deposit & Payment Schedule":
    "Depósito y Calendario de Pagos",
  "Cancellation Windows & Refunds":
    "Plazos de Cancelación y Reembolsos",
  "90+ days before arrival":
    "90 o más días antes de la llegada",
  "100% refund, less a 5% processing fee":
    "Reembolso del 100%, menos una comisión de procesamiento del 5%",
  "60–89 days before arrival":
    "60 a 89 días antes de la llegada",
  "50% refund, less a 5% processing fee":
    "Reembolso del 50%, menos una comisión de procesamiento del 5%",
  "Within 60 days of arrival":
    "Dentro de los 60 días previos a la llegada",
  "Date Changes":
    "Cambios de Fecha",
  "Force Majeure & Extraordinary Circumstances":
    "Fuerza Mayor y Circunstancias Extraordinarias",
  "Travel Insurance":
    "Seguro de Viaje",
  "No-Shows & Early Departure":
    "Inasistencia y Salida Anticipada",
  "How to Cancel or Change a Reservation":
    "Cómo Cancelar o Cambiar una Reservación",
  "Terms &":
    "Términos y",
  "Conditions.":
    "Condiciones.",
  "The terms below apply whenever you browse this website, submit an inquiry, or book a property with Beyond Traveling.":
    "Los siguientes términos aplican cada vez que navegas este sitio web, envías una consulta o reservas una propiedad con Beyond Traveling.",
  "By using this website or submitting an inquiry, you agree to the terms below. Our":
    "Al usar este sitio web o enviar una consulta, aceptas los siguientes términos. Nuestra",
  "are incorporated into these terms by reference.":
    "se incorporan a estos términos por referencia.",
  "Beyond Traveling is a luxury property management and vacation rental company based in Punta Mita, Nayarit, México. We represent privately owned villas and act as booking agents and on-site coordinators on behalf of homeowners; ownership of each property remains with its respective owner.":
    "Beyond Traveling es una empresa de administración de propiedades de lujo y rentas vacacionales con sede en Punta Mita, Nayarit, México. Representamos villas de propiedad privada y actuamos como agentes de reservación y coordinadores en sitio en nombre de los propietarios; la propiedad de cada inmueble pertenece a su respectivo dueño.",
  "Rates and availability shown on this site are provisional. A booking is only confirmed once we’ve issued written confirmation and received your deposit. A refundable security deposit equivalent to one night’s rental applies to all reservations, and any additional house rules specific to a property are shared with you in your booking confirmation.":
    "Las tarifas y la disponibilidad que se muestran en este sitio son provisionales. Una reservación solo se confirma cuando emitimos una confirmación por escrito y recibimos tu depósito. A todas las reservaciones se aplica un depósito de seguridad reembolsable equivalente a una noche de renta, y cualquier regla adicional de la casa específica de cada propiedad se te comparte en tu confirmación de reservación.",
  "Rates are quoted per night in US dollars and are subject to change without notice until a booking is confirmed. Photos are representative and may vary slightly from current conditions. 16% VAT and 5% tourism tax may apply, and staff gratuities of 10–15% of the pre-tax reservation total are customary. Rates do not include food, beverage, or fees for guests beyond your confirmed occupancy.":
    "Las tarifas se cotizan por noche en dólares estadounidenses y están sujetas a cambio sin previo aviso hasta que se confirme una reservación. Las fotografías son representativas y pueden variar ligeramente respecto de las condiciones actuales. Pueden aplicar 16% de IVA y 5% de impuesto al turismo, y es costumbre dejar una propina al personal de entre 10% y 15% del total de la reservación antes de impuestos. Las tarifas no incluyen alimentos, bebidas ni cargos por huéspedes adicionales a la ocupación confirmada.",
  "Please treat each property with the same care you’d give your own home — respecting occupancy limits, house rules, and local laws. Events or gatherings beyond your confirmed guest count require our prior written consent, and pets are only permitted with advance written approval. Significant violations of house rules may result in your stay being ended without refund.":
    "Te pedimos tratar cada propiedad con el mismo cuidado que darías a tu propia casa, respetando los límites de ocupación, las reglas de la casa y las leyes locales. Los eventos o reuniones que excedan el número de huéspedes confirmado requieren nuestro consentimiento previo por escrito, y las mascotas solo se permiten con aprobación previa por escrito. Las violaciones graves a las reglas de la casa pueden dar lugar a que tu estancia termine sin reembolso.",
  "Guests use pools, ocean access, and other property amenities at their own risk. To the fullest extent permitted by law, Beyond Traveling and the homeowners we represent are not liable for injury, loss, or damage arising from your stay, except where caused by our own negligence. We recommend all guests carry travel insurance.":
    "Los huéspedes usan las albercas, el acceso al mar y otras amenidades de la propiedad bajo su propio riesgo. En la medida máxima permitida por la ley, Beyond Traveling y los propietarios a quienes representamos no son responsables por lesiones, pérdidas o daños derivados de tu estancia, salvo cuando sean causados por nuestra propia negligencia. Recomendamos que todos los huéspedes cuenten con seguro de viaje.",
  "All text, photography, and design on this website belong to Beyond Traveling or are used with permission from homeowners and photographers. Please don’t reproduce or repurpose this content without our written consent.":
    "Todo el texto, la fotografía y el diseño de este sitio web pertenecen a Beyond Traveling o se usan con permiso de los propietarios y fotógrafos. Te pedimos no reproducir ni reutilizar este contenido sin nuestro consentimiento por escrito.",
  "These Terms are governed by the laws of México and the state of Nayarit, whose courts have jurisdiction over any dispute arising from your use of this site or a reservation made with us.":
    "Estos Términos se rigen por las leyes de México y del estado de Nayarit, cuyos tribunales tienen jurisdicción sobre cualquier controversia derivada del uso de este sitio o de una reservación hecha con nosotros.",
  "We may update these Terms from time to time; the date at the top of this page reflects the most recent revision. The Terms in effect at the time you book apply to that reservation.":
    "Podemos actualizar estos Términos de vez en cuando; la fecha en la parte superior de esta página refleja la revisión más reciente. Los Términos vigentes al momento de tu reservación son los que aplican a esa reservación.",
  "Have a question before you book?":
    "¿Tienes una pregunta antes de reservar?",
  "We’re happy to walk through the details with you directly.":
    "Con gusto revisamos los detalles contigo directamente.",
  "and":
    "y",
  "Questions about these Terms can be sent to":
    "Las preguntas sobre estos Términos pueden enviarse a",
  "Booking Process":
    "Proceso de Reservación",
  "Rates, Taxes & Availability":
    "Tarifas, Impuestos y Disponibilidad",
  "Guest Conduct & Property Use":
    "Conducta de los Huéspedes y Uso de la Propiedad",
  "Liability & Assumption of Risk":
    "Responsabilidad y Asunción de Riesgos",
  "Website Content & Intellectual Property":
    "Contenido del Sitio y Propiedad Intelectual",
  "Governing Law":
    "Ley Aplicable",
  "Changes to These Terms":
    "Cambios a Estos Términos",
  "How we collect, use, and protect the information you share with us.":
    "Cómo recopilamos, usamos y protegemos la información que compartes con nosotros.",
  "We collect the information you choose to share with us — your name, email, phone number, and details about your travel plans or property — when you reach out through our contact form or WhatsApp. We do not collect payment card information through this website.":
    "Recopilamos la información que decides compartir con nosotros (tu nombre, correo, teléfono y detalles sobre tus planes de viaje o tu propiedad) cuando nos contactas a través de nuestro formulario de contacto o WhatsApp. No recopilamos información de tarjetas de pago a través de este sitio web.",
  "Submitting our contact form opens WhatsApp with your message pre-filled; your details aren’t stored in a server database on our end, and the message is handled the same way as any other conversation you’d start with us directly.":
    "Al enviar nuestro formulario de contacto se abre WhatsApp con tu mensaje ya escrito; tus datos no se almacenan en una base de datos de nuestro servidor, y el mensaje se maneja igual que cualquier otra conversación que inicies directamente con nosotros.",
  "We use the details you share to respond to your inquiry, prepare quotes, and coordinate bookings — and, only if you’d like, to send occasional updates about properties and availability. We don’t use your information to make automated decisions about you, and we never sell your personal information to third parties.":
    "Usamos los datos que compartes para responder a tu consulta, preparar cotizaciones y coordinar reservaciones y, solo si lo deseas, para enviarte novedades ocasionales sobre propiedades y disponibilidad. No usamos tu información para tomar decisiones automatizadas sobre ti y nunca vendemos tu información personal a terceros.",
  "When you book a property, we share the necessary details with the relevant homeowner or on-site team so your stay can be confirmed and coordinated. We do not share your information with advertisers or data brokers.":
    "Cuando reservas una propiedad, compartimos los datos necesarios con el propietario o el equipo en sitio correspondiente para que tu estancia pueda confirmarse y coordinarse. No compartimos tu información con anunciantes ni corredores de datos.",
  "We use Google Analytics to understand how visitors use this site, such as which pages are viewed, the type of device, and general location. It does not identify you personally, and we do not use advertising cookies or share this data for advertising. You can block analytics cookies in your browser settings at any time.":
    "Usamos Google Analytics para entender cómo los visitantes usan este sitio, por ejemplo qué páginas se ven, el tipo de dispositivo y la ubicación general. No te identifica personalmente, y no usamos cookies de publicidad ni compartimos estos datos con fines publicitarios. Puedes bloquear las cookies de analítica en la configuración de tu navegador en cualquier momento.",
  "We may update this policy periodically as our practices evolve. The date at the top of this page reflects the most recent revision.":
    "Podemos actualizar esta política periódicamente conforme evolucionen nuestras prácticas. La fecha en la parte superior de esta página refleja la revisión más reciente.",
  "Have a question about your data?":
    "¿Tienes una pregunta sobre tus datos?",
  "We’re glad to answer directly — just reach out.":
    "Con gusto te respondemos directamente; solo escríbenos.",
  "Under Mexican data protection law, you have the right to Access, Rectify, Cancel, or Object to the use of your personal information. To exercise any of these rights, contact us at":
    "Conforme a la ley mexicana de protección de datos, tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al uso de tu información personal. Para ejercer cualquiera de estos derechos, contáctanos en",
  "and we’ll respond within a reasonable timeframe.":
    "y responderemos en un plazo razonable.",
  "Questions about your privacy can be sent to":
    "Las preguntas sobre tu privacidad pueden enviarse a",
  "Information We Collect":
    "Información que Recopilamos",
  "How Our Contact Form Works":
    "Cómo Funciona Nuestro Formulario de Contacto",
  "How We Use Your Information":
    "Cómo Usamos Tu Información",
  "Sharing Your Information":
    "Cómo Compartimos Tu Información",
  "Cookies & Analytics":
    "Cookies y Analítica",
  "Your Rights (ARCO)":
    "Tus Derechos (ARCO)",
  "Changes to This Policy":
    "Cambios a Esta Política",
  "Managed Properties in Punta Mita":
    "Propiedades Administradas en Punta Mita",
  "Homes We Currently":
    "Casas que Cuidamos",
  "Look After.":
    "Actualmente.",
  "Our Portfolio Grows Through Trust and Referrals — Not Volume":
    "Nuestro Portafolio Crece por Confianza y Recomendaciones, No por Volumen",
  "If you are looking for a team that will know your home, answer directly, and care about rental results, let’s talk.":
    "Si buscas un equipo que conozca tu casa, responda directamente y se preocupe por los resultados de renta, platiquemos.",
  "properties":
    "propiedades",
  "Reservations":
    "Reservaciones",
  "We reply within an hour during the day, so you are never waiting long for an answer.":
    "Respondemos en menos de una hora durante el día, para que nunca esperes mucho una respuesta.",
  "We check availability for your dates.":
    "Revisamos la disponibilidad para tus fechas.",
  "We reply on WhatsApp with options and rates.":
    "Te respondemos por WhatsApp con opciones y tarifas.",
  "We help you arrange the details of your stay.":
    "Te ayudamos a organizar los detalles de tu estancia.",
  "Request Your Dates":
    "Solicita Tus Fechas",
  "Tell us when you would like to visit and who is traveling. We will reply personally with availability and rates. Still choosing? Browse our":
    "Cuéntanos cuándo te gustaría visitarnos y quiénes viajan. Te respondemos personalmente con disponibilidad y tarifas. ¿Aún estás eligiendo? Explora nuestras",
  "For Guests":
    "Para Huéspedes",
  "Select a villa":
    "Selecciona una villa",
  "Not sure yet, help me choose":
    "Aún no lo sé, ayúdenme a elegir",
  "Number of guests":
    "Número de huéspedes",
  "This opens WhatsApp with your request ready to send.":
    "Esto abre WhatsApp con tu solicitud lista para enviar.",
  "15 or more":
    "15 o más",
  "Check-out must be after check-in.":
    "El check-out debe ser posterior al check-in.",
  "Which villa?":
    "¿Qué villa?",
  "Anything we should know?":
    "¿Algo que debamos saber?",
  "Flexible dates, a special occasion, or anything you would like us to arrange.":
    "Fechas flexibles, una ocasión especial o cualquier cosa que quieras que organicemos.",
  "Please include":
    "Por favor incluye",
  "Whether you would like to join our team or offer your services to our guests and our properties, we would like to hear from you.":
    "Ya sea que quieras unirte a nuestro equipo u ofrecer tus servicios a nuestros huéspedes y propiedades, nos encantaría saber de ti.",
  "Or write to":
    "O escribe a",
  "Job inquiry":
    "Consulta de empleo",
  "Role you are interested in:":
    "Puesto que te interesa:",
  "Experience and languages:":
    "Experiencia e idiomas:",
  "Link to your CV or portfolio:":
    "Enlace a tu CV o portafolio:",
  "Service provider inquiry":
    "Consulta de proveedor de servicios",
  "Name and company:":
    "Nombre y empresa:",
  "Service you offer:":
    "Servicio que ofreces:",
  "Area you cover:":
    "Zona que cubres:",
  "Website or portfolio:":
    "Sitio web o portafolio:",
  "Staff & Vendors":
    "Personal y Proveedores",
  "Join Our Team":
    "Únete a Nuestro Equipo",
  "If you would like to work with us in property management, rentals, or on-site and guest-service roles, send us your details. We will be in touch if there is a fit.":
    "Si te gustaría trabajar con nosotros en administración de propiedades, rentas o puestos en sitio y de atención a huéspedes, envíanos tus datos. Te contactaremos si hay una coincidencia.",
  "Your name and contact details":
    "Tu nombre y datos de contacto",
  "The role you are interested in":
    "El puesto que te interesa",
  "Your experience and the languages you speak":
    "Tu experiencia y los idiomas que hablas",
  "A link to your CV or portfolio":
    "Un enlace a tu CV o portafolio",
  "Email Your Details":
    "Envía Tus Datos por Correo",
  "Offer Your Services":
    "Ofrece Tus Servicios",
  "If you provide a service our guests or our properties could benefit from, tell us what you do and where you work.":
    "Si ofreces un servicio del que nuestros huéspedes o nuestras propiedades podrían beneficiarse, cuéntanos a qué te dedicas y dónde trabajas.",
  "Your name and company":
    "Tu nombre y tu empresa",
  "The service you offer":
    "El servicio que ofreces",
  "The area you cover":
    "La zona que cubres",
  "Email Your Proposal":
    "Envía Tu Propuesta por Correo",
  "Check-in from 3:00 pm · Check-out by 11:00 am":
    "Check-in desde las 3:00 pm · Check-out a más tardar a las 11:00 am",
  "Early check-in and late check-out available on request (subject to availability)":
    "Check-in temprano y check-out tardío disponibles bajo solicitud (sujetos a disponibilidad)",
  "Concierge will greet you on arrival and walk you through the property":
    "El concierge te recibirá a tu llegada y te acompañará en un recorrido por la propiedad",
  "90+ days before arrival: 100% refund, less a 5% processing fee":
    "90 o más días antes de la llegada: reembolso del 100%, menos una comisión de procesamiento del 5%",
  "60–89 days before arrival: 50% refund, less a 5% processing fee":
    "60 a 89 días antes de la llegada: reembolso del 50%, menos una comisión de procesamiento del 5%",
  "Within 60 days of arrival: no refund":
    "Dentro de los 60 días previos a la llegada: sin reembolso",
  "One date change allowed at no fee if requested 90+ days before arrival":
    "Un cambio de fecha sin costo si se solicita con 90 o más días de anticipación a la llegada",
  "No refund for no-shows or early departures":
    "Sin reembolso por inasistencia o salida anticipada",
  "Read the full cancellation policy":
    "Lee la política de cancelación completa",
  "Check-In & Check-Out":
    "Check-In y Check-Out",
  "Additional Rules":
    "Reglas Adicionales",
  "Explore the Communities":
    "Explora las Comunidades",
  "Staff":
    "Personal",
  "At a glance":
    "De un vistazo",
  "Golf carts":
    "Carritos de golf",
  "For use throughout the community":
    "Para uso en toda la comunidad",
  "Membership":
    "Membresía",
  "Check-in / out":
    "Check-in / out",
  "Early / late on request":
    "Temprano / tarde bajo solicitud",
  "Sleeping arrangements":
    "Distribución de habitaciones",
  "Bedroom configuration":
    "Configuración de recámaras",
  "What this place offers":
    "Lo que ofrece este lugar",
  "Amenities":
    "Amenidades",
  "Your household team":
    "Tu equipo de la casa",
  "Staff & Services":
    "Personal y Servicios",
  "Pricing":
    "Precios",
  "Please Inquire":
    "Consulta Disponibilidad",
  "This property is offered on a private, by-inquiry basis. Rates are tailored to your dates and group — reach out and we’ll provide a personalized quote within 24 hours.":
    "Esta propiedad se ofrece de forma privada y por consulta. Las tarifas se adaptan a tus fechas y a tu grupo: escríbenos y te daremos una cotización personalizada en 24 horas.",
  "WhatsApp us":
    "Escríbenos por WhatsApp",
  "Send an email":
    "Envía un correo",
  "Rates":
    "Tarifas",
  "Season":
    "Temporada",
  "Rate / night (USD)":
    "Tarifa / noche (USD)",
  "Min. stay":
    "Estancia mín.",
  "Taxes: 16% VAT + 5% tourism tax may apply":
    "Impuestos: pueden aplicar 16% de IVA + 5% de impuesto al turismo",
  "Service fee may apply":
    "Puede aplicar un cargo por servicio",
  "Rates are quoted per night and in USD":
    "Las tarifas se cotizan por noche y en USD",
  "Rates do not include the cost of Food and Beverage":
    "Las tarifas no incluyen el costo de alimentos y bebidas",
  "Rates do not include Staff Gratuities, recommended at 10% to 15% of the reservation pre-tax total":
    "Las tarifas no incluyen propinas al personal, recomendadas del 10% al 15% del total de la reservación antes de impuestos",
  "Rates are subject to change without notice":
    "Las tarifas están sujetas a cambio sin previo aviso",
  "Before you book":
    "Antes de reservar",
  "Rules & Policies":
    "Reglas y Políticas",
  "Staff working hours: 8 am to 4 pm":
    "Horario del personal: de 8 am a 4 pm",
  "Security deposit equivalent to one night is required (Refunded after departure inspection)":
    "Se requiere un depósito de seguridad equivalente a una noche (se reembolsa tras la inspección de salida)",
  "Where you’ll be":
    "Dónde estarás",
  "Location":
    "Ubicación",
  "You may also like":
    "También te puede gustar",
  "More Beyond Traveling Villas":
    "Más Villas de Beyond Traveling",
  "View all properties":
    "Ver todas las propiedades",
  "About this":
    "Acerca de",
  "1 King bed · 2 Queen bed":
    "1 cama King · 2 camas Queen",

  // Spanish audit — villa booking widget and amenity labels
  "All contact options": "Todas las opciones de contacto",
  "Page sections": "Secciones de la página",
  "Starting from": "Desde",
  "Check Availability": "Consultar Disponibilidad",
  "Check availability": "Consultar disponibilidad",
  "Rates available upon request": "Tarifas disponibles bajo solicitud",
  "Travel dates": "Fechas de viaje",
  "Clear dates": "Borrar fechas",
  "Send an email instead": "Mejor enviar un correo",
  "Availability confirmed within 24 hours. No payment until you’re ready to book.": "Disponibilidad confirmada en 24 horas. No se paga nada hasta que estés listo para reservar.",
  "Pricing by Season": "Precios por Temporada",
  "Concierge & Experiences": "Concierge y Experiencias",
  "Exceptional Value": "Valor Excepcional",
  "Available Dates": "Fechas Disponibles",
  "Essential Features": "Características Esenciales",
  "High Speed Internet & WiFi": "Internet de Alta Velocidad y WiFi",
  "Washing Machine": "Lavadora",
  "Clothes Dryer": "Secadora",
  "First-Aid Kit": "Botiquín de Primeros Auxilios",
  "Kitchen & Dining": "Cocina y Comedor",
  "Coffee Grinder": "Molino de Café",
  "Coffee Maker": "Cafetera",
  "Nespresso Coffee Machine": "Máquina de Café Nespresso",
  "Wine Cellar": "Cava de Vinos",
  "Basketball Court": "Cancha de Basquetbol",
  "Bocce Ball Court": "Cancha de Bochas",
  "Bowling Alley": "Boliche",
  "Cinema Room": "Sala de Cine",
  "Golf Simulator": "Simulador de Golf",
  "Gym / Fitness Room": "Gimnasio / Sala de Ejercicio",
  "High End Golf Clubs": "Palos de Golf de Alta Gama",
  "Media Room": "Sala Multimedia",
  "Pickleball Court": "Cancha de Pickleball",
  "Ping Pong Table": "Mesa de Ping Pong",
  "Pool Table": "Mesa de Billar",
  "Putting Green": "Green de Práctica",
  "Satellite & Cable TV": "TV Satelital y por Cable",
  "Shuffleboard Table": "Mesa de Shuffleboard",
  "SONOS Sound System": "Sistema de Sonido SONOS",
  "Sound System": "Sistema de Sonido",
  "Tennis Court": "Cancha de Tenis",
  "Video Games": "Videojuegos",
  "Beach Chairs": "Sillas de Playa",
  "Outdoor Features": "Áreas Exteriores",
  "Boat / Yacht": "Lancha / Yate",
  "Boogie Boards": "Tablas de Bodyboard",
  "Paddle Boards": "Tablas de Paddle",
  "Snorkel Equipment": "Equipo de Snorkel",
  "Surf Boards": "Tablas de Surf",
  "Pool & Spa Facilities": "Alberca y Spa",
  "Alfresco Palapa Roof": "Palapa al Aire Libre",
  "BBQ / Grill": "Asador / Parrilla",
  "Heated Infinity Pool": "Alberca Infinita con Calefacción",
  "Heated Pool": "Alberca con Calefacción",
  "Private Spa": "Spa Privado",
  "Steam Room": "Cuarto de Vapor",
  "Volleyball Pool": "Alberca de Voleibol",
  "Computer Monitor": "Monitor de Computadora",
  "Desk Chair": "Silla de Escritorio",
  "Communal Heated Pool": "Alberca Comunitaria con Calefacción",
  "Community Amenities": "Amenidades de la Comunidad",
  "Shared Gym": "Gimnasio Compartido",
  "Ground Floor Bedroom": "Recámara en Planta Baja",
  "Wheelchair Accessible": "Accesible para Silla de Ruedas",
  "Golf Course": "Campo de Golf",
  "Ocean View": "Vista al Mar",
  "Golf Course View": "Vista al Campo de Golf",
  "Nature View": "Vista a la Naturaleza",
  "Communal Pool": "Alberca Comunitaria",
  "Outdoor Shower": "Regadera Exterior",
  "Double Shower": "Regadera Doble",
  "Sous Chef / Chef Assistant": "Sous Chef / Asistente de Chef",
  "Waiter / Server": "Mesero",
  "Daily Cleaning": "Limpieza Diaria",
  "Linen Changes": "Cambio de Blancos",
  "Turndown Service": "Servicio de Turndown",
  "Menu Planning": "Planeación de Menús",
  "Meal Preparation": "Preparación de Alimentos",
  "Kitchen Assistance": "Apoyo en Cocina",
  "Table Service": "Servicio en Mesa",
  "Beverage Service": "Servicio de Bebidas",
  "Personalized Guest Attention": "Atención Personalizada al Huésped",
  "Activity Bookings": "Reservación de Actividades",
  "Restaurant Reservations": "Reservaciones en Restaurantes",
  "Transportation Arrangements": "Arreglos de Transporte",
  "Meal & Beverage Table Service": "Servicio de Alimentos y Bebidas en Mesa",
  "Cocktail Preparation": "Preparación de Cocteles",
  "Bar Service": "Servicio de Bar",
  "Sport Membership": "Membresía Deportiva",

  "See Our Homes":
    "Ver Nuestras Casas",
  "Our homes are taking a moment to load. Please refresh the page in a minute, or contact us and we’ll send you the details directly.":
    "Nuestras casas tardan un momento en cargar. Actualiza la página en un minuto o contáctanos y te enviamos los detalles directamente.",
  "Low-rise residences on the 7th and 8th fairways of the Bahia course — four-bedroom homes with a private plunge pool on every terrace, an easy walk to Pacífico Beach Club.":
    "Residencias de baja altura en los fairways 7 y 8 del campo Bahia: casas de cuatro recámaras con alberca de inmersión privada en cada terraza, a unos pasos del Pacífico Beach Club.",
  "Condos within El Encanto, most looking out over the Pacifico course’s fairways or the community’s lakes rather than the ocean.":
    "Condominios dentro de El Encanto, la mayoría con vista a los fairways del campo Pacifico o a los lagos de la comunidad, más que al océano.",
  "Standalone villas within El Encanto — the community’s only ocean-facing homes, each with a private pool, moments from Sufi Ocean Club.":
    "Villas independientes dentro de El Encanto: las únicas casas de la comunidad con vista al mar, cada una con alberca privada, a un momento de Sufi Ocean Club.",
  "Private villas and residences inside the Four Seasons Resort grounds, with full access to the hotel’s dining, spa, and daily service standards.":
    "Villas y residencias privadas dentro de los terrenos del Four Seasons Resort, con acceso completo a los restaurantes, el spa y los estándares de servicio diario del hotel.",
  "Punta Mita’s only true beachfront condo community — low-rise buildings around a communal infinity pool, with direct beach access and Pacifico fairway views.":
    "La única comunidad de condominios realmente frente a la playa en Punta Mita: edificios de baja altura alrededor de una alberca infinita común, con acceso directo a la playa y vista a los fairways del campo Pacifico.",
  "Large private lots on Litibu Bay, each with its own custom-built villa — no two homes alike, from the footprint to the architecture.":
    "Grandes terrenos privados en la bahía de Litibú, cada uno con su propia villa construida a la medida: no hay dos casas iguales, desde la huella hasta la arquitectura.",
  "A single matched collection of villas in Iyari, all sharing the same architecture and layout — four bedrooms, a private plunge pool, and access to the community’s cabana on Playa Iyari.":
    "Una colección homogénea de villas en Iyari, todas con la misma arquitectura y distribución: cuatro recámaras, alberca de inmersión privada y acceso a la cabaña de la comunidad en Playa Iyari.",
  "Home sites sold individually across Kupuri — every villa custom-built and different from the next, a short walk from Kupuri Beach Club’s sushi counter, Ka restaurant, and treehouse spa.":
    "Terrenos que se venden por separado en todo Kupuri: cada villa se construye a la medida y es distinta de la siguiente, a corta distancia del sushi bar, el restaurante Ka y el spa en la casa del árbol de Kupuri Beach Club.",
  "A single matched collection of condos within Kupuri, all built to the same design, a short walk from Kupuri Beach Club.":
    "Una colección homogénea de condominios dentro de Kupuri, todos construidos con el mismo diseño, a corta distancia de Kupuri Beach Club.",
  "Oceanfront lots on the peninsula’s western tip next to the St. Regis, each with 270-degree ocean views and a second, separately gated entrance.":
    "Terrenos frente al mar en el extremo occidental de la península, junto al St. Regis, cada uno con vistas al océano de 270 grados y una segunda entrada independiente con acceso controlado.",
  "Contemporary homes built around the golf course’s interior lagoons, with cantilevered rooflines and floor-to-ceiling glass framing the water on both sides.":
    "Casas contemporáneas construidas alrededor de las lagunas interiores del campo de golf, con techos en voladizo y cristal del piso al techo que enmarca el agua por ambos lados.",
  "An ultra-private enclave at the peninsula’s edge, named for the Marietas Islands visible from nearly every residence — three- and four-bedroom homes with sweeping sunset ocean views.":
    "Un enclave ultra privado en el borde de la península, nombrado por las Islas Marietas visibles desde casi todas las residencias: casas de tres y cuatro recámaras con amplias vistas al océano y al atardecer.",
  "Houses in Las Palmas’ original phase, nearly all facing the golf course — three and four bedroom homes sharing a similar architectural style.":
    "Casas de la fase original de Las Palmas, casi todas frente al campo de golf: casas de tres y cuatro recámaras con un estilo arquitectónico similar.",
  "Larger four-bedroom villas than Las Palmas’ original phase, set back among dense tropical planting rather than facing a view — nearly all built to the same architecture and layout.":
    "Villas de cuatro recámaras más grandes que las de la fase original de Las Palmas, ubicadas entre vegetación tropical densa en lugar de frente a una vista: casi todas con la misma arquitectura y distribución.",
  "A boutique condo community on the Pacifico course’s 14th fairway, centered on twin communal pools linked by a 160-meter saltwater swimming canal.":
    "Una comunidad boutique de condominios en el fairway 14 del campo Pacifico, con dos albercas comunes unidas por un canal de natación de agua salada de 160 metros.",
  "Punta Mita’s newest hillside community, on Careyeros hill, with homesites looking out over the entire peninsula, the Four Seasons, and the Tail of the Whale.":
    "La comunidad en ladera más nueva de Punta Mita, en el cerro Careyeros, con terrenos que miran a toda la península, el Four Seasons y la Cola de la Ballena.",
  "West-facing homes near the Pacifico course built for sunset — horizontal architecture and extensive glazing framing the Pacific’s golden hour, moments from Sea Breeze Beach Club.":
    "Casas orientadas al oeste cerca del campo Pacifico, pensadas para el atardecer: arquitectura horizontal y amplios ventanales que enmarcan la hora dorada del Pacífico, a un momento de Sea Breeze Beach Club.",
  "Porta Fortuna’s original ocean-facing villas, in two rows — first-row homes sit beachfront with five real bedrooms, second-row villas hold four bedrooms and their own ocean views, both a short walk from Sufi Ocean Club.":
    "Las villas originales de Porta Fortuna frente al mar, en dos filas: las de primera fila están frente a la playa con cinco recámaras reales; las de segunda fila tienen cuatro recámaras y su propia vista al mar; ambas a corta distancia de Sufi Ocean Club.",
  "The newest villas in Porta Fortuna — a matched set of four-plus-bedroom homes facing the golf course, sharing a consistent layout and architecture.":
    "Las villas más nuevas de Porta Fortuna: un conjunto homogéneo de casas de cuatro o más recámaras frente al campo de golf, con distribución y arquitectura consistentes.",
  "Three-bedroom casitas within Porta Fortuna built for quiet — private pool, ocean and golf views, and a short walk to Sufi Ocean Club’s fire pit and restaurant.":
    "Casitas de tres recámaras dentro de Porta Fortuna, pensadas para la tranquilidad: alberca privada, vistas al mar y al campo de golf, y a corta distancia del fogatero y el restaurante de Sufi Ocean Club.",
  "One of Punta Mita’s original beachfront communities — some of the peninsula’s largest oceanfront estates, set in mature tropical gardens near the Pacifico course.":
    "Una de las comunidades frente a la playa originales de Punta Mita: algunas de las propiedades frente al mar más grandes de la península, rodeadas de jardines tropicales maduros cerca del campo Pacifico.",
  "Punta Mita’s newest enclave, at the peninsula’s southern point, built for sunset views with modern, smart-home-equipped three- and four-bedroom residences.":
    "El enclave más nuevo de Punta Mita, en el extremo sur de la península, pensado para disfrutar el atardecer, con residencias modernas de tres y cuatro recámaras equipadas con domótica.",
  "Condos by architects Sordo Madaleno, set directly in front of the La Lancha surf break with views of the Marietas Islands and Banderas Bay, steps from El Surf Club.":
    "Condominios de los arquitectos Sordo Madaleno, justo frente a la ola de La Lancha, con vistas a las Islas Marietas y la Bahía de Banderas, a pasos de El Surf Club.",
  "Estates set between the Bahia fairways and the open Pacific, most with a private infinity pool angled toward the water — no two homes alike.":
    "Propiedades entre los fairways del campo Bahia y el océano Pacífico abierto, la mayoría con alberca infinita privada orientada hacia el agua: no hay dos casas iguales.",
  "Hillside homes above the golf courses, each with floor-to-ceiling glass, a private pool, and sweeping views over the Pacific and both fairways below.":
    "Casas en ladera sobre los campos de golf, cada una con cristal del piso al techo, alberca privada y amplias vistas al Pacífico y a ambos fairways abajo.",
  "A beachfront enclave with its own private beach club, pools, and spa — residences range from garden villas to rooftop penthouses, all oceanfront.":
    "Un enclave frente a la playa con su propio beach club privado, albercas y spa: las residencias van desde villas con jardín hasta penthouses en azotea, todas frente al mar.",
  "A secluded, quiet enclave with spa-style finishes and generous grounds on three- and four-bedroom homes.":
    "Un enclave tranquilo y reservado con acabados estilo spa y amplios terrenos, con casas de tres y cuatro recámaras.",
  "Large home sites in Las Palmas, sold as lots rather than finished houses — every future villa here will be custom-built and different from its neighbors.":
    "Grandes terrenos en Las Palmas, que se venden como lotes y no como casas terminadas: cada futura villa será construida a la medida y distinta de sus vecinas.",
  "Oceanfront homes between the Pacific and the golf course fairways, many with cliffside infinity pools — no two residences built alike.":
    "Casas frente al mar entre el Pacífico y los fairways del campo de golf, muchas con albercas infinitas sobre el acantilado: no hay dos residencias iguales.",
  "6 or more":
    "6 o más",
  "Included":
    "Incluido",
  "Not included":
    "No incluido",
  "Language":
    "Idioma",
  "Transparency":
    "Transparencia",
  "Direct":
    "Directo",
  "Conversation.":
    "sin Compromiso.",
  "Plan Your":
    "Planea Tu",
  "Stay.":
    "Estancia.",
  "Together.":
    "Juntos.",
  "Careers":
    "Empleo",
  "Vendors":
    "Proveedores",
  "Guide":
    "Guía",
  "Please Review":
    "Por Favor Revisa",
  "These details help us keep the service clear, flexible, and easy to coordinate before and during your stay.":
    "Estos detalles nos ayudan a que el servicio sea claro, flexible y fácil de coordinar antes y durante tu estancia.",
  "← Back to":
    "← Volver a",
  "No refund":
    "Sin reembolso",
  "Overview":
    "Resumen",
  "Rooms":
    "Habitaciones",
  "Show more":
    "Ver más",
  "Show less":
    "Ver menos",
  "Show fewer amenities":
    "Ver menos amenidades",
  "Photo gallery":
    "Galería de fotos",
  "Previous photo":
    "Foto anterior",
  "Next photo":
    "Foto siguiente",
  "Close":
    "Cerrar",
  "Open":
    "Abrir",
  "Select dates":
    "Elige fechas",
  "Select guests":
    "Elige huéspedes",
  "Done":
    "Listo",
  "Clear":
    "Limpiar",
  "Adults":
    "Adultos",
  "Children":
    "Niños",
  "Infants":
    "Bebés",
  "Ages 13+":
    "13 años o más",
  "Ages 2–13":
    "2 a 13 años",
  "Ages 0–1":
    "0 a 1 año",
  "Condo":
    "Condominio",
  "Direct beach access":
    "Acceso directo a la playa",
  "Oceanfront community":
    "Comunidad frente al mar",
  "On the golf course":
    "Sobre el campo de golf",
  "No pets allowed":
    "No se permiten mascotas",
  "Pets welcome":
    "Se aceptan mascotas",
  "No smoking":
    "No se permite fumar",
  "Smoking permitted outdoors":
    "Se permite fumar al aire libre",
  "No parties or events":
    "No se permiten fiestas ni eventos",
  "Small gatherings allowed":
    "Se permiten reuniones pequeñas",
  "Up to":
    "Hasta",
  "hot tub":
    "jacuzzi",
  "outdoor shower":
    "regadera exterior",
  "double shower":
    "regadera doble",
  "Walk-Through":
    "Recorrido Inicial",
  "Transportation":
    "Transporte",
  "Care Plan":
    "Plan de Cuidado",
  "Onboarding":
    "Incorporación",
  "Safe":
    "Caja fuerte",
  "Foosball":
    "Futbolito",
  "Games":
    "Juegos",
  "Pétanque":
    "Petanca",
  "Yoga Room":
    "Sala de Yoga",
  "Bicycles":
    "Bicicletas",
  "Kayaks":
    "Kayaks",
  "Firepit":
    "Fogatero",
  "Hot Tub":
    "Jacuzzi",
  "Jacuzzi":
    "Jacuzzi",
  "Wet Bar":
    "Bar Húmedo",
  "Office":
    "Oficina",
  "Desk":
    "Escritorio",
  "Printer":
    "Impresora",
  "Foosball Table (Shared)":
    "Mesa de Futbolito (Compartida)",
  "Ping Pong Table (Shared)":
    "Mesa de Ping Pong (Compartida)",
  "Elevator":
    "Elevador",
  "Accessibility":
    "Accesibilidad",
  "Oceanfront":
    "Frente al Mar",
  "Beachfront":
    "Frente a la Playa",
  "Hillside":
    "En Ladera",
  "Lake View":
    "Vista al Lago",
  "Full/Double":
    "Matrimonial",
  "Twin":
    "Individual",
  "Bunk":
    "Litera",
  "Sofa Bed":
    "Sofá Cama",
  "Housekeeper":
    "Ama de Llaves",
  "Cook":
    "Cocinero(a)",
  "Butler":
    "Mayordomo",
  "Laundry":
    "Lavandería",
  "Dinner":
    "Cena",
  "Sauna":
    "Sauna",
  "Cornhole":
    "Cornhole",
  "Croquet":
    "Croquet",
  "Piano":
    "Piano",
  "Bar":
    "Bar",
  "Chef":
    "Chef",
  "Bartender":
    "Bartender",
  "Golf Membership":
    "Membresía de Golf",
  "King bed":
    "Cama king",
  "Queen bed":
    "Cama queen",
  "Full bed":
    "Cama matrimonial",
  "Twin bed":
    "Cama individual",
  "Single bed":
    "Cama individual",
  "Double bed":
    "Cama matrimonial",
  "Bunk bed":
    "Litera",
  "Sofa bed":
    "Sofá cama",
  "Crib":
    "Cuna",
  "Trundle bed":
    "Cama nido",
  "Nespresso Machine":
    "Máquina Nespresso",
  "Cards / Poker Table":
    "Mesa de Cartas / Póker",
  "Scrabble Table":
    "Mesa de Scrabble",
  "Private Vehicle":
    "Vehículo Privado",
  "Cold Water Tub":
    "Tina de Agua Fría",
  "Electric Massage Bed":
    "Cama de Masaje Eléctrica",
  "Infrared Room":
    "Sala de Infrarrojos",
  "Foosball Table":
    "Mesa de Futbolito",
  "Driver":
    "Chofer",
  "Babysitter":
    "Niñera",
  "Groundskeeper":
    "Jardinero",
  "Security":
    "Seguridad",
  "Grocery Shopping":
    "Compra de Víveres",
  "All Meals":
    "Todas las Comidas",
  "Custom Menus":
    "Menús a la Medida",
  "Family Villa":
    "Villa Familiar",
  "Family Villas":
    "Villas Familiares",
  "Ocean view":
    "Vista al mar",
  "Golf course view":
    "Vista al campo de golf",
  "Lake view":
    "Vista al lago",
  "Golf course":
    "Campo de golf",
  "Private pool":
    "Alberca privada",
  "Communal pool":
    "Alberca común",
  "Punta de Mita Area":
    "Zona de Punta de Mita",
  "Golf Villas":
    "Villas de Golf",
  "Wellness & Beach Lifestyle":
    "Bienestar y Vida de Playa",
  "Sports & Adventure":
    "Deportes y Aventura",
  "High-End & VIP":
    "Alta Gama y VIP",
  "Destination Guides":
    "Guías del Destino",
  "Villas & Living":
    "Villas y Estilo de Vida",
  "Local Culture":
    "Cultura Local",
  "Planning & Tips":
    "Planeación y Consejos",
  "Limited-Time Offer":
    "Oferta por Tiempo Limitado",
  "Last-Minute Deal":
    "Oferta de Último Minuto",
  "Property of the Month":
    "Propiedad del Mes",
  "Villa Llamas is designed for easy days outdoors, with wide covered terraces, a private pool, generous lounge areas, and green views across the golf course. The main living spaces open fully to the terrace, creating a relaxed flow between the sofa lounge, dining area, kitchen, pool deck, and garden.":
    "Villa Llamas está pensada para disfrutar días tranquilos al aire libre, con amplias terrazas techadas, alberca privada, generosas áreas de descanso y vistas verdes al campo de golf. Los espacios principales se abren por completo a la terraza, creando un flujo relajado entre la sala, el comedor, la cocina, el área de la alberca y el jardín.",
  "Outside, guests can enjoy shaded seating, sun loungers with umbrellas, an outdoor dining area, and a covered bar with grill. The pool sits alongside a broad lawn and tropical landscaping, offering a calm setting for mornings in the sun, afternoon swims, and evenings by the water.":
    "Afuera, los huéspedes pueden disfrutar de asientos con sombra, camastros con sombrillas, un comedor al aire libre y un bar techado con asador. La alberca se encuentra junto a un amplio jardín y vegetación tropical, un entorno tranquilo para las mañanas de sol, los chapuzones de la tarde y las noches junto al agua.",
  "Inside, the home feels bright and comfortable, with an open living room, large dining table, modern kitchen, and soft natural textures throughout. Bedrooms are spacious and peaceful, with a mix of king, double-bed, and bunk accommodations visible in the photos. Several rooms connect to terraces or garden views, adding to the indoor-outdoor feeling of the house.":
    "Por dentro, la casa se siente luminosa y cómoda, con una sala abierta, una gran mesa de comedor, una cocina moderna y texturas naturales y suaves en todos los espacios. Las recámaras son amplias y tranquilas, con una combinación de camas king, matrimoniales y literas que se aprecian en las fotos. Varias habitaciones se conectan con terrazas o vistas al jardín, lo que refuerza la sensación de vivir entre el interior y el exterior.",
  "Bathrooms are clean and airy, with glass showers, stone finishes, and in one suite, a freestanding bathtub beside large windows. From the upper level and aerial views, the villa also enjoys glimpses of the bay and surrounding Punta Mita landscape.":
    "Los baños son limpios y espaciosos, con regaderas de cristal, acabados de piedra y, en una de las suites, una tina independiente junto a grandes ventanales. Desde el nivel superior y en las vistas aéreas, la villa también ofrece vistazos de la bahía y del paisaje de Punta Mita.",
  "A welcoming Punta Mita villa with bright indoor-outdoor living, a private pool, shaded terraces, and views across the golf course toward the bay.":
    "Una acogedora villa en Punta Mita con vida luminosa entre interior y exterior, alberca privada, terrazas con sombra y vistas al campo de golf hacia la bahía.",
  "Private pool, open-air terraces, golf course greenery, and distant ocean views.":
    "Alberca privada, terrazas al aire libre, áreas verdes del campo de golf y vistas lejanas al océano.",
  "This ocean-view villa brings together wide terraces, soft indoor spaces, and a relaxed connection to the surrounding landscape. The main living area opens completely to the outdoor terrace, creating an easy flow between the lounge, dining spaces, pool, and shaded seating areas.":
    "Esta villa con vista al mar combina amplias terrazas, espacios interiores suaves y una conexión relajada con el paisaje que la rodea. La sala principal se abre por completo a la terraza exterior, creando un flujo natural entre la sala, los comedores, la alberca y las áreas de descanso con sombra.",
  "Outside, the villa offers several places to enjoy the day: a private pool facing the bay, lounge chairs for sun-filled afternoons, covered sitting areas, an outdoor dining table, and a grill area with ocean and green hillside views. A lower terrace with a hammock and lounge seating adds a quiet place to unwind with the breeze and surrounding nature.":
    "Afuera, la villa ofrece varios lugares para disfrutar el día: una alberca privada frente a la bahía, camastros para las tardes soleadas, áreas techadas para sentarse, un comedor al aire libre y una zona de asador con vistas al océano y a las colinas verdes. Una terraza inferior con hamaca y asientos de descanso añade un rincón tranquilo para relajarse con la brisa y la naturaleza.",
  "Inside, the home feels bright and calm, with comfortable sofas, a generous dining area, and a well-equipped kitchen with a large island and breakfast stools. The bedrooms are spacious and restful, with ocean or garden views, soft neutral tones, and direct access to terraces in several rooms. Bathrooms include double vanities, walk-in showers, and soaking tubs in select spaces.":
    "Por dentro, la casa se siente luminosa y serena, con sofás cómodos, un amplio comedor y una cocina bien equipada con una gran isla y bancos para el desayuno. Las recámaras son espaciosas y relajantes, con vistas al océano o al jardín, tonos neutros suaves y acceso directo a las terrazas en varias de ellas. Los baños cuentan con lavabos dobles, regaderas amplias y tinas de remojo en algunos espacios.",
  "Designed for gathering, resting, and enjoying the view, this villa is ideal for days that move easily from morning coffee by the water to long outdoor meals, pool time, and peaceful evenings overlooking the coast.":
    "Diseñada para reunirse, descansar y disfrutar de la vista, esta villa es ideal para días que pasan con naturalidad del café de la mañana junto al agua a largas comidas al aire libre, tiempo en la alberca y tardes tranquilas con vista a la costa.",
  "A warm coastal villa with sweeping ocean views, a private pool, open-air dining, spacious bedrooms, and inviting terraces made for slow days together.":
    "Una cálida villa costera con amplias vistas al océano, alberca privada, comedor al aire libre, recámaras espaciosas y terrazas acogedoras pensadas para días tranquilos en compañía.",
  "Ocean views, private pool, open terraces, and relaxed indoor-outdoor living.":
    "Vistas al océano, alberca privada, terrazas abiertas y una vida relajada entre interior y exterior.",
  "Casa Paraiso offers an inviting beachfront stay where the home opens directly toward the sand, the pool, and the calm blue water beyond. A wide lawn connects the house to the beach, creating an easy flow between lounging under the shade, swimming, gathering outdoors, and stepping into the sand.":
    "Casa Paraiso ofrece una estancia frente a la playa donde la casa se abre directamente hacia la arena, la alberca y las tranquilas aguas azules más allá. Un amplio jardín conecta la casa con la playa, creando un flujo natural entre descansar a la sombra, nadar, reunirse al aire libre y pisar la arena.",
  "The outdoor spaces are designed for long, relaxed days together. A private pool and spa sit beside sun loungers, umbrellas, and a covered terrace with generous seating, dining, and an outdoor grill area. From morning coffee to sunset meals, the setting keeps the ocean in view while offering plenty of shaded areas for comfort.":
    "Los espacios exteriores están diseñados para días largos y relajados en compañía. Una alberca y un spa privados se encuentran junto a camastros, sombrillas y una terraza techada con amplios asientos, comedor y zona de asador. Del café de la mañana a las cenas al atardecer, el entorno mantiene el océano a la vista y ofrece muchas áreas de sombra para estar cómodo.",
  "Inside, the home feels warm and open, with high wood ceilings, soft natural tones, and large sliding doors that bring in light and connect the living and dining areas to the terrace. The main gathering space includes a long dining table, comfortable lounge seating, and views that draw the eye straight out to the beach.":
    "Por dentro, la casa se siente cálida y abierta, con techos altos de madera, tonos naturales suaves y grandes puertas corredizas que dejan entrar la luz y conectan la sala y el comedor con la terraza. El espacio principal de reunión incluye una larga mesa de comedor, cómodos asientos de sala y vistas que llevan la mirada directamente hacia la playa.",
  "Bedrooms continue the relaxed coastal feel, with soft textiles, natural textures, seating areas, and views toward the garden, pool, or ocean. Several rooms open toward outdoor spaces, while bathrooms feature stone, wood, glass showers, and calm details that add to the sense of rest.":
    "Las recámaras continúan con el ambiente costero y relajado, con textiles suaves, texturas naturales, áreas de descanso y vistas al jardín, la alberca o el océano. Varias habitaciones se abren hacia espacios exteriores, y los baños combinan piedra, madera, regaderas de cristal y detalles serenos que aportan una sensación de descanso.",
  "With beachfront access visible from the home, a large lawn, private pool, shaded terraces, and welcoming interiors, Porta Fortuna A1 is made for guests who want to spend their days moving easily between the water, the beach, and comfortable shared spaces.":
    "Con acceso a la playa visible desde la casa, un gran jardín, alberca privada, terrazas con sombra e interiores acogedores, Porta Fortuna A1 está hecha para quienes quieren pasar sus días moviéndose con naturalidad entre el agua, la playa y cómodos espacios compartidos.",
  "Casa Paraiso is a beachfront home with a private pool, spacious lawn, shaded terraces, and warm indoor-outdoor spaces made for relaxed days by the sea.":
    "Casa Paraiso es una casa frente a la playa con alberca privada, amplio jardín, terrazas con sombra y cálidos espacios entre interior y exterior, hechos para días relajados junto al mar.",
  "Beachfront living with a private pool, open-air terraces, and calm ocean views.":
    "Vida frente a la playa con alberca privada, terrazas al aire libre y tranquilas vistas al océano.",
  "This inviting Punta Mita home opens to peaceful golf course views, lush palms, and a relaxed outdoor setting designed for easy days in the sun. The terrace brings together a private pool, shaded lounge areas, an outdoor dining space, barbecue area, sun loungers, and soft seating overlooking the fairway.":
    "Esta acogedora casa de Punta Mita se abre a tranquilas vistas del campo de golf, palmeras exuberantes y un entorno exterior relajado, pensado para días fáciles bajo el sol. La terraza reúne alberca privada, áreas de descanso con sombra, un comedor al aire libre, zona de asador, camastros y asientos suaves con vista al fairway.",
  "Inside, Las Palmas 28 feels bright and calm, with high ceilings, soft neutral tones, and wide glass doors that connect the living room, dining area, and kitchen to the outdoors. The main living space offers comfortable seating, a TV area, and views toward the terrace and greenery, creating a natural flow for spending time together throughout the day.":
    "Por dentro, Las Palmas 28 se siente luminosa y serena, con techos altos, tonos neutros suaves y amplias puertas de cristal que conectan la sala, el comedor y la cocina con el exterior. El espacio principal ofrece asientos cómodos, un área de TV y vistas hacia la terraza y la vegetación, creando un flujo natural para pasar el día juntos.",
  "The bedrooms continue the same relaxed feel, with light-filled spaces, warm wood details, and direct access to balconies, patios, or garden views. One bedroom opens to a covered balcony with seating and views over the palms and golf course, while others offer easy access to outdoor sitting areas. Bathrooms include clean finishes, double vanities in some spaces, walk-in showers, and an open-air bathtub surrounded by tropical plants.":
    "Las recámaras mantienen el mismo ambiente relajado, con espacios llenos de luz, detalles de madera cálida y acceso directo a balcones, patios o vistas al jardín. Una recámara se abre a un balcón techado con asientos y vistas a las palmeras y al campo de golf, mientras que otras tienen fácil acceso a áreas exteriores para sentarse. Los baños incluyen acabados limpios, lavabos dobles en algunos espacios, regaderas amplias y una tina al aire libre rodeada de plantas tropicales.",
  "With its private pool, generous terraces, courtyard details, and calm fairway setting, this home is well suited for guests who want a comfortable stay surrounded by greenery, outdoor living, and the easy rhythm of Punta Mita.":
    "Con su alberca privada, amplias terrazas, detalles de patio y un tranquilo entorno junto al fairway, esta casa es ideal para quienes buscan una estancia cómoda rodeada de vegetación, vida al aire libre y el ritmo tranquilo de Punta Mita.",
  "A warm Punta Mita retreat with open indoor-outdoor living, a private pool, golf course views, shaded terraces, and relaxed spaces for gathering or unwinding.":
    "Un cálido refugio en Punta Mita con vida abierta entre interior y exterior, alberca privada, vistas al campo de golf, terrazas con sombra y espacios relajados para reunirse o descansar.",
  "Golf course views, private pool, open-air living, and lush tropical surroundings.":
    "Vistas al campo de golf, alberca privada, vida al aire libre y un exuberante entorno tropical.",
  "Villa Brezza brings together open indoor spaces, shaded terraces, and a generous outdoor setting designed for relaxed days with family and friends. The home opens toward the pool, lawn, and golf course views, creating an easy connection between the living room, dining areas, outdoor lounge, and sun deck.":
    "Villa Brezza combina espacios interiores abiertos, terrazas con sombra y un generoso entorno exterior, pensados para días relajados en familia y con amigos. La casa se abre hacia la alberca, el jardín y las vistas al campo de golf, creando una conexión natural entre la sala, los comedores, el área de descanso exterior y el solárium.",
  "The main social areas feel bright and spacious, with large sliding doors that invite natural light and allow the interiors to flow directly outside. Guests can gather around the indoor dining table, enjoy the comfortable living room, or step onto the covered terrace for outdoor meals, casual lounging, and time by the grill and bar area.":
    "Las áreas sociales principales se sienten luminosas y amplias, con grandes puertas corredizas que dejan entrar la luz natural y permiten que los interiores fluyan directamente hacia el exterior. Los huéspedes pueden reunirse en torno a la mesa del comedor interior, disfrutar de la cómoda sala o salir a la terraza techada para comer al aire libre, descansar con calma y pasar tiempo junto al asador y el bar.",
  "Outside, Villa Brezza offers a private pool, sun loungers with umbrellas, hammocks, a fire pit seating area, and wide green spaces that look across the golf course. The upper terrace adds another quiet place to sit and take in the open views toward the mountains, treetops, and distant ocean.":
    "Afuera, Villa Brezza ofrece alberca privada, camastros con sombrillas, hamacas, un área con fogatero y asientos, y amplios espacios verdes con vista al campo de golf. La terraza superior añade otro rincón tranquilo para sentarse y disfrutar de las vistas abiertas hacia las montañas, las copas de los árboles y el océano a lo lejos.",
  "The home has 4 bedrooms, plus an additional bedroom next to the laundry room that is suitable for staff. Bedrooms are calm and inviting, with soft neutral tones, wood details, TVs, seating areas, and large windows or terrace access in several rooms. Bathrooms are spacious and bright, with glass showers, stone finishes, double vanities in several suites, and freestanding tubs in select bathrooms.":
    "La casa tiene 4 recámaras, más una recámara adicional junto al cuarto de lavado, adecuada para el personal. Las recámaras son tranquilas y acogedoras, con tonos neutros suaves, detalles de madera, televisiones, áreas de descanso y grandes ventanas o acceso a la terraza en varias de ellas. Los baños son amplios y luminosos, con regaderas de cristal, acabados de piedra, lavabos dobles en varias suites y tinas independientes en algunos baños.",
  "Villa Brezza is a bright Punta Mita home with open living spaces, a private pool, garden lounges, and terraces overlooking the golf course.":
    "Villa Brezza es una luminosa casa en Punta Mita con espacios de vida abiertos, alberca privada, áreas de descanso en el jardín y terrazas con vista al campo de golf.",
  "Private pool, shaded terraces, golf course views, and relaxed indoor-outdoor living.":
    "Alberca privada, terrazas con sombra, vistas al campo de golf y vida relajada entre interior y exterior.",
  "Master Bedroom":
    "Recámara Principal",
  "Bedroom 5":
    "Recámara 5",
  "Bedroom 6":
    "Recámara 6",
  "Bedroom 7":
    "Recámara 7",
  "Bedroom 8":
    "Recámara 8",
  "Bedroom 9":
    "Recámara 9",
  "Bedroom 10":
    "Recámara 10",
  "Thanksgiving":
    "Día de Acción de Gracias",
  "Easter":
    "Semana Santa",
  "Spring Break":
    "Spring Break",
  "Villa":
    "Villa",
  // About page (team section)
  "Let’s See If We’re the Right People for Your Home": "Veamos Si Somos las Personas Adecuadas para Tu Hogar",
  "Beyond Traveling is a Punta Mita property management and luxury rental company, founded in 2023 by a local team that believes in personal, present, and honest care for your home.":
    "Beyond Traveling es una empresa de administración de propiedades y rentas de lujo en Punta Mita, fundada en 2023 por un equipo local que cree en un cuidado personal, presente y honesto de tu hogar.",
  "We started this after seeing how disconnected owners felt from the people managing their homes.":
    "Empezamos esto al ver lo desconectados que se sentían los propietarios de quienes administraban sus casas.",
  "Left waiting for updates, unclear about costs, unsure who was actually looking after the property. Our goal was simple: work that feels direct and genuinely involved.":
    "Esperando noticias, sin claridad sobre los costos, sin saber quién cuidaba realmente la propiedad. Nuestra meta era simple: un trabajo directo y verdaderamente involucrado.",
  "Since 2023, we have kept the team small on purpose. You know who looks after your home, and you can reach them directly.":
    "Desde 2023 hemos mantenido el equipo pequeño a propósito. Sabes quién cuida tu casa y puedes comunicarte directamente con esa persona.",
  "Browse Our Villas":
    "Conoce Nuestras Villas",
  "What We Believe":
    "En Qué Creemos",
  "Clear pricing and no hidden fees, so you always know where your money goes.":
    "Precios claros y sin cargos ocultos, para que siempre sepas a dónde va tu dinero.",
  "A quick answer when you reach out. We reply within one hour during the day.":
    "Una respuesta rápida cuando nos escribes. Respondemos en menos de una hora durante el día.",
  "Local Presence":
    "Presencia Local",
  "We are based in Punta Mita and take on a limited number of properties, so each one gets real attention.":
    "Estamos en Punta Mita y administramos un número limitado de propiedades, para que cada una reciba atención real.",
  "You deal with the people who run your property, never a call center.":
    "Tratas con las personas que administran tu propiedad, nunca con un call center.",
  "Meet the Team":
    "Conoce al Equipo",
  "A small team, on purpose. These are the people you will talk to.":
    "Un equipo pequeño, a propósito. Estas son las personas con las que hablarás.",
  "Co-Founder & General Manager":
    "Cofundador y Gerente General",
  "Co-Founder & Guest Experience Manager":
    "Cofundadora y Gerente de Experiencia del Huésped",
  "Operations Manager":
    "Gerente de Operaciones",
  "Rentals & Admin Coordinator": "Coordinadora de Rentas y Administración",
  "Rentals, online presence, owner reporting, and finance & administration.": "Rentas, presencia en línea, reportes a propietarios, finanzas y administración.",
  "Guest experience, rentals, and client acquisition.": "Experiencia del huésped, rentas y captación de clientes.",
  "Property operations, maintenance oversight, and staff management.": "Operación de propiedades, supervisión de mantenimiento y gestión del personal.",
  "Rental coordination, concierge support, and back-office administration.": "Coordinación de rentas, apoyo al concierge y administración de oficina.",
  "A More Personal Approach": "Un Enfoque Más Personal",
  "See How We Manage Properties": "Ver Cómo Administramos Propiedades",
  "Let’s Talk": "Hablemos",

  // Contact
  "Contact Beyond Traveling": "Contacta a Beyond Traveling",
  "No pressure. No sales pitch.": "Sin presión. Sin discurso de venta.",
  "page.": ".",
  "Get in Touch": "Ponte en Contacto",
  "Email": "Correo",
  "Phone / WhatsApp": "Teléfono / WhatsApp",
  "What happens next?": "¿Qué pasa después?",
  "Name": "Nombre",
  "Your name": "Tu nombre",
  "you@example.com": "tu@correo.com",
  "Message": "Mensaje",
  "Send via WhatsApp": "Enviar por WhatsApp",
  "This opens WhatsApp with your message ready to send.":
    "Esto abre WhatsApp con tu mensaje listo para enviar.",

  // Property detail pages
  "Interested in this residence?": "¿Te interesa esta residencia?",
  "We’re happy to provide availability and further details.": "Con gusto te compartimos disponibilidad y más detalles.",
  "Starting at": "Desde",
  "Starting at {property.startingPrice}": "Desde {property.startingPrice}",
  "Inquire About This Property": "Consultar Esta Propiedad",
  "Room Arrangement": "Distribución de Habitaciones",
  "Bedroom 1": "Recámara 1",
  "Bedroom 2": "Recámara 2",
  "Bedroom 3": "Recámara 3",
  "Bedroom 4": "Recámara 4",
  "Extra Bedroom": "Recámara Extra",
  "Extra bedroom": "Recámara extra",
  "1 King Bed": "1 Cama King",
  "2 Queen Beds": "2 Camas Queen",
  "2 Queen Beds plus 2 Twin Beds": "2 Camas Queen y 2 Camas Individuales",
  "1 Twin Bunk Beds": "1 Litera Individual",
  "One Single Bed": "Una Cama Individual",
  "2 Full size Beds plus 2 Twin Beds": "2 Camas Matrimoniales y 2 Camas Individuales",
  "Ensuite bathroom": "Baño en suite",
  "Staff and Amenities": "Personal y Amenidades",
  "Daily cleaning": "Limpieza diaria",
  "Breakfast preparation (Cost of food not included)": "Preparación de desayuno (costo de alimentos no incluido)",
  "Concierge services": "Servicios de concierge",
  "Premier Golf Membership": "Membresía Premier de Golf",
  "6 seater golf cart": "Carrito de golf para 6 personas",
  "Villa Features": "Características de la Villa",
  "Key Features": "Características Principales",
  "Panoramic Ocean Views": "Vistas Panorámicas al Mar",
  "Partial Ocean Views": "Vistas Parciales al Mar",
  "Golf Course Views": "Vistas al Campo de Golf",
  "Private Pool": "Alberca Privada",
  "Alfresco Dining": "Comedor al Aire Libre",
  "Fire pit": "Fire pit",
  "Comfort": "Comodidad",
  "Air Conditioning": "Aire Acondicionado",
  "High speed Internet & WiFi": "Internet de Alta Velocidad y WiFi",
  "Towels Provided": "Toallas Incluidas",
  "Linens Provided": "Ropa de Cama Incluida",
  "Basic soaps and shampoo": "Jabones básicos y shampoo",
  "Hair dryer": "Secadora de pelo",
  "Toilet paper": "Papel higiénico",
  "Washer & Dryer": "Lavadora y Secadora",
  "Entertainment & Health": "Entretenimiento y Bienestar",
  "Hot tub": "Jacuzzi",
  "Smart TV": "Smart TV",
  "Sonos sound system": "Sistema de sonido Sonos",
  "Premium sound system": "Sistema de sonido premium",
  "Pool & Spa facilities": "Alberca y Spa",
  "BBQ/Grill": "Asador/Parrilla",
  "Sun Loungers": "Camastros",
  "Availability": "Disponibilidad",
  "Calendar shown for reference. Final availability confirmed upon request.":
    "Calendario mostrado como referencia. La disponibilidad final se confirma al solicitarla.",
  "Seasonal Rates": "Tarifas por Temporada",
  "Low Season": "Temporada Baja",
  "High Season": "Temporada Alta",
  "Holiday": "Festivos",
  "Low Season (May 1st to Oct 31st)": "Temporada Baja (1 de mayo al 31 de octubre)",
  "High Season (Nov 1st to April 30th)": "Temporada Alta (1 de noviembre al 30 de abril)",
  "Easter / Thanksgiving": "Semana Santa / Thanksgiving",
  "Christmas": "Navidad",
  "New Year": "Año Nuevo",
  "Rates are quoted per night and in USD.": "Las tarifas son por noche y en USD.",
  "Rates are subject to change without notice.": "Las tarifas están sujetas a cambio sin previo aviso.",
  "Rates subject to change and availability.": "Tarifas sujetas a cambio y disponibilidad.",
  "Rates do not include the cost of Food and Beverage.": "Las tarifas no incluyen alimentos y bebidas.",
  "Rates do not include Staff Gratuities, recommended at 10% to 15% of the reservation pre-tax total.":
    "Las tarifas no incluyen propinas para el personal; se recomienda entre 10% y 15% del total de la reservación antes de impuestos.",
  "Taxes: 16% VAT + 5% tourism tax may apply.": "Impuestos: puede aplicar 16% de IVA + 5% de impuesto turístico.",
  "Service fee may apply.": "Puede aplicar cargo por servicio.",
  "The rental of the property requires a refundable Security Deposit equivalent to one night.":
    "La renta de la propiedad requiere un depósito de seguridad reembolsable equivalente a una noche.",
  "There is an extra fee of $70 USD per night for any additional person after 9 guests (Except on peak weeks)":
    "Hay un cargo extra de $70 USD por noche por cada persona adicional después de 9 huéspedes (excepto en semanas pico)",
  "There is an extra fee of $100 USD per night for any additional person after 9 guests (Except on peak weeks)":
    "Hay un cargo extra de $100 USD por noche por cada persona adicional después de 9 huéspedes (excepto en semanas pico)",
  "There is an extra fee of $100 USD per night for any additional person after 8 guests (Except on peak weeks)":
    "Hay un cargo extra de $100 USD por noche por cada persona adicional después de 8 huéspedes (excepto en semanas pico)",
  "There is an extra fee of $80 USD per night for any additional person after 8 guests (Except on peak weeks)":
    "Hay un cargo extra de $80 USD por noche por cada persona adicional después de 8 huéspedes (excepto en semanas pico)",
  
  "Ready to Check Availability?": "¿Listo para Revisar Disponibilidad?",
  "Send us a message and we’ll confirm availability and details shortly.":
    "Envíanos un mensaje y confirmaremos disponibilidad y detalles pronto.",
  "From $2,900": "Desde $2,900",
  "From $5,200": "Desde $5,200",
  "From $7,800": "Desde $7,800",
  "Punta Mita, Mexico": "Punta Mita, México",

  // Property detail descriptions
  "Villa Amore is a stunning four-bedroom sanctuary located in Punta Mita’s exclusive Iyari community. This exquisite 2 level villa features unobstructed views of the Pacific Ocean, providing a serene and picturesque backdrop for your getaway. Every living space is meticulously crafted to enhance relaxation and provide ultimate comfort, ensuring an unforgettable stay. With daily service, ocean views, and access to Punta Mita’s premier golf and beach clubs, Villa Amore captures the essence of relaxed luxury.":
    "Villa Amore es un espectacular refugio de cuatro recámaras ubicado en la exclusiva comunidad de Iyari en Punta Mita. Esta exquisita villa de dos niveles cuenta con vistas despejadas al Océano Pacífico, creando un entorno sereno y memorable para tu estancia. Cada espacio está cuidadosamente diseñado para favorecer la relajación y ofrecer el máximo confort. Con servicio diario, vistas al mar y acceso a los principales clubes de golf y playa de Punta Mita, Villa Amore captura la esencia del lujo relajado.",
  "From the moment you arrive, Villa Amore envelops you in an atmosphere of calm sophistication. The open-concept living spaces invite the outdoors in through large glass doors that frame sweeping ocean and jungle views. The heart of the home is the expansive terrace — featuring a private infinity pool, sun loungers, shaded lounge area, and an al fresco dining space complete with a professional-grade outdoor grill. Whether you’re enjoying a leisurely breakfast, lounging by the pool, or sharing sunset cocktails, every space is designed for connection and tranquility.":
    "Desde el momento en que llegas, Villa Amore te envuelve en una atmósfera de sofisticación tranquila. Los espacios abiertos integran el exterior a través de grandes puertas de cristal que enmarcan vistas al mar y a la selva. El corazón de la casa es la amplia terraza, con alberca infinita privada, camastros, sala sombreada y comedor al aire libre con asador profesional. Ya sea para disfrutar un desayuno sin prisa, descansar junto a la alberca o compartir cocteles al atardecer, cada espacio está diseñado para la conexión y la tranquilidad.",
  "Villa Brezza is a refined five-bedroom retreat inside the exclusive Porta Fortuna community in Punta Mita. Steps from Sufi Beach Club, this stylish villa blends the comfort of a private home with the luxury of resort living — complete with daily cleaning service, private cook, golf privileges, and breathtaking golf-course views.":
    "Villa Brezza es un elegante refugio de cinco recámaras dentro de la exclusiva comunidad de Porta Fortuna en Punta Mita. A unos pasos de Sufi Beach Club, esta villa combina la comodidad de una casa privada con el lujo de vivir como en resort, incluyendo limpieza diaria, cocinera privada, privilegios de golf y hermosas vistas al campo de golf.",
  "Villa Brezza surrounds you with calm sophistication. Natural textures, soft tones, and open design create an effortless flow between indoor and outdoor living. The spacious terrace is the heart of the home — featuring a shimmering private pool, comfortable loungers, hammocks, and a shaded dining area that overlooks the manicured fairways":
    "Villa Brezza te rodea de una sofisticación tranquila. Texturas naturales, tonos suaves y un diseño abierto crean una conexión fluida entre interior y exterior. La amplia terraza es el corazón de la casa, con alberca privada, camastros cómodos, hamacas y un comedor sombreado con vista a los fairways perfectamente cuidados.",
  "Villa Llamas is a warm and elegant five-bedroom retreat nestled inside Punta Mita’s exclusive Porta Fortuna community. Just steps from Sufi Beach Club, this stylish villa offers a perfect balance between relaxed coastal living and modern luxury — with spacious indoor-outdoor areas, daily service, and access to Punta Mita’s premier golf and beach clubs.":
    "Villa Llamas es un refugio cálido y elegante de cinco recámaras dentro de la exclusiva comunidad de Porta Fortuna en Punta Mita. A unos pasos de Sufi Beach Club, esta villa ofrece un equilibrio perfecto entre vida costera relajada y lujo moderno, con amplios espacios interiores y exteriores, servicio diario y acceso a los principales clubes de golf y playa de Punta Mita.",
  "From the moment you step inside, Villa Llamas welcomes you with an atmosphere of comfort and connection. The open design fills the home with natural light and gentle breezes, blending soft tones, natural wood, and elegant furnishings. The expansive terrace overlooks the lush golf course, featuring a serene private pool, comfortable loungers, and a shaded outdoor dining area — the perfect setting for lazy mornings and sunset gatherings.":
    "Desde el momento en que entras, Villa Llamas te recibe con una atmósfera de comodidad y conexión. Su diseño abierto llena la casa de luz natural y brisas suaves, combinando tonos cálidos, madera natural y mobiliario elegante. La amplia terraza mira hacia el campo de golf y cuenta con alberca privada, camastros cómodos y un comedor exterior sombreado: el escenario perfecto para mañanas tranquilas y reuniones al atardecer.",
  "Las Palmas 28, a warm and elegant three-bedroom residence, is located within the Las Palmas community of Punta Mita. Thoughtfully designed for comfort and relaxed coastal living, this inviting home is ideal for families or small groups seeking privacy, daily service, and access to Punta Mita’s world-class beach clubs and amenities.":
    "Las Palmas 28 es una residencia cálida y elegante de tres recámaras ubicada dentro de la comunidad Las Palmas en Punta Mita. Diseñada cuidadosamente para la comodidad y una vida costera relajada, esta casa es ideal para familias o grupos pequeños que buscan privacidad, servicio diario y acceso a los clubes de playa y amenidades de primer nivel de Punta Mita.",
  "Las Palmas 28 offers a serene and effortless stay, where natural textures, soft neutral tones, and open spaces create an atmosphere of calm from the moment you arrive. The home flows seamlessly between indoor and outdoor living, with comfortable seating areas, shaded terraces, and views of lush tropical surroundings":
    "Las Palmas 28 ofrece una estancia tranquila y sencilla, donde las texturas naturales, los tonos neutros suaves y los espacios abiertos crean una sensación de calma desde el momento en que llegas. La casa conecta de forma natural los espacios interiores y exteriores, con áreas cómodas para descansar, terrazas sombreadas y vistas a un entorno tropical lleno de vegetación.",

  // Missing translations from current polished pages

  // Services page current hero/cards

  // About page current value cards

  // Property detail pricing values
  "$1,100 USD per night": "$1,100 USD por noche",
  "$1,600 USD per night": "$1,600 USD por noche",
  "$1,800 USD per night": "$1,800 USD por noche",
  "$2,100 USD per night": "$2,100 USD por noche",
  "$2,200 USD per night": "$2,200 USD por noche",
  "$2,700 USD per night": "$2,700 USD por noche",
  "$3,000 USD per night": "$3,000 USD por noche",
  "$3,500 USD per night": "$3,500 USD por noche",
  "$3,600 USD per night": "$3,600 USD por noche",
  "$4,000 USD per night": "$4,000 USD por noche",
  "$4,500 USD per night": "$4,500 USD por noche",
  "$5,000 USD per night": "$5,000 USD por noche",
  "$6,500 USD per night": "$6,500 USD por noche",

  "April 2026": "Abril 2026",
  "May 2026": "Mayo 2026",

  // Las Palmas 28 property detail page

  // Alt text / accessibility labels from current pages
  "Luxury property management in Punta Mita for high-end vacation homes":
    "Administración de propiedades de lujo en Punta Mita para casas vacacionales de alto nivel",

  "Homeowner and property management team discussing a luxury home in Punta Mita":
    "Propietario y equipo de administración hablando sobre una casa de lujo en Punta Mita",

  "Clear property management pricing for luxury homes in Punta Mita":
    "Precios claros de administración de propiedades para casas de lujo en Punta Mita",

  "Luxury villa management services in Punta Mita":
    "Servicios de administración de villas de lujo en Punta Mita",

  "Local property management team available in Punta Mita":
    "Equipo local de administración de propiedades disponible en Punta Mita",

  "Beyond Traveling team discussing property management for a luxury home in Punta Mita":
    "Equipo de Beyond Traveling hablando sobre la administración de una casa de lujo en Punta Mita",

  "Property care and maintenance for a luxury home in Punta Mita":
    "Cuidado y mantenimiento de una casa de lujo en Punta Mita",

  "Guest communication and coordination for a Punta Mita rental property":
    "Comunicación y coordinación con huéspedes para una propiedad en renta en Punta Mita",

  "Cleaning and readiness for a luxury vacation rental in Punta Mita":
    "Limpieza y preparación para una propiedad vacacional de lujo en Punta Mita",

  "Financial clarity and reporting for Punta Mita property management":
    "Claridad financiera y reportes para administración de propiedades en Punta Mita",

  "Beyond Traveling team member walking through a luxury property in Punta Mita":
    "Miembro del equipo de Beyond Traveling recorriendo una propiedad de lujo en Punta Mita",

  "Beyond Traveling team member speaking with a local property vendor in Punta Mita":
    "Miembro del equipo de Beyond Traveling hablando con un proveedor local en Punta Mita",

  // Alt text — real property photography (replaced staged/AI imagery)
  "Private pool and calm outdoor living space at a Beyond Traveling managed home in Punta Mita":
    "Alberca privada y espacio exterior tranquilo en una casa administrada por Beyond Traveling en Punta Mita",

  "Well-maintained outdoor kitchen and living space at a luxury villa managed by Beyond Traveling":
    "Cocina exterior y espacio de estar bien cuidados en una villa de lujo administrada por Beyond Traveling",

  "Luxury home in Punta Mita cared for by the local Beyond Traveling team":
    "Casa de lujo en Punta Mita cuidada por el equipo local de Beyond Traveling",

  "Luxury villa with private pool cared for by Beyond Traveling in Punta Mita":
    "Villa de lujo con alberca privada cuidada por Beyond Traveling en Punta Mita",

  "Bright, open dining space in a Punta Mita home managed by Beyond Traveling":
    "Espacio de comedor amplio y luminoso en una casa de Punta Mita administrada por Beyond Traveling",

  "Covered terrace and pool at a luxury villa managed by Beyond Traveling in Punta Mita":
    "Terraza techada y alberca en una villa de lujo administrada por Beyond Traveling en Punta Mita",

  "Well-maintained pool and outdoor living space at a luxury home in Punta Mita":
    "Alberca y espacio exterior bien cuidados en una casa de lujo en Punta Mita",

  "Outdoor living and dining space prepared for guests at a Punta Mita rental property":
    "Espacio de estar y comedor exterior preparado para huéspedes en una propiedad de renta en Punta Mita",

  "Pristine, freshly prepared bathroom in a luxury vacation rental in Punta Mita":
    "Baño impecable y recién preparado en una propiedad vacacional de lujo en Punta Mita",

  "Bright, well-kept kitchen and dining space in a Punta Mita home managed by Beyond Traveling":
    "Cocina y comedor luminosos y bien cuidados en una casa de Punta Mita administrada por Beyond Traveling",

  // Attributes / alt / aria-label examples
  "View Villa Amore": "Ver Villa Amore",
  "View Villa Llamas": "Ver Villa Llamas",
  "View Villa Brezza": "Ver Villa Brezza",
  "View Las Palmas 28": "Ver Las Palmas 28",
  "Explore Ocean & Water experiences in Punta Mita":
    "Explorar experiencias de Océano y Agua en Punta Mita",
  "Explore Wellness, Relaxation & Beach Lifestyle experiences in Punta Mita":
    "Explorar experiencias de Bienestar, Relajación y Vida de Playa en Punta Mita",
  "Explore Golf, Sports & Adventure experiences in Punta Mita":
    "Explorar experiencias de Golf, Deportes y Aventura en Punta Mita",
  "Explore Beach Clubs & Day Clubs experiences in Punta Mita":
    "Explorar experiencias de Clubes de Playa y Day Clubs en Punta Mita",
  "Explore Food & Dining experiences in Punta Mita":
    "Explorar experiencias de Gastronomía y Cenas en Punta Mita",
  "Explore Nightlife & Entertainment experiences in Punta Mita":
    "Explorar experiencias de Vida Nocturna y Entretenimiento en Punta Mita",
  "Explore Nearby Destinations & Day Trips experiences in Punta Mita":
    "Explorar experiencias de Destinos Cercanos y Day Trips en Punta Mita",
  "Explore Seasonal & Special Events experiences in Punta Mita":
    "Explorar experiencias de Temporadas y Eventos Especiales en Punta Mita",
  "Explore High-End / VIP Experiences experiences in Punta Mita":
    "Explorar experiencias High-End / VIP en Punta Mita",

  "Luxury Rentals in Punta Mita": "Rentas de Lujo en Punta Mita",
  "Punta Mita is one of the most exclusive destinations in Mexico, known for its private villas, oceanfront properties, and high-end guest experiences. Luxury rentals in Punta Mita require careful management, attention to detail, and a consistent approach to guest experience.":
    "Punta Mita es uno de los destinos más exclusivos de México, conocido por sus villas privadas, propiedades frente al mar y experiencias de alto nivel. Las rentas de lujo en Punta Mita requieren una administración cuidadosa, atención al detalle y un enfoque constante en la experiencia del huésped.",
  "What Defines a Luxury Rental": "Qué Define una Renta de Lujo",
  "Luxury rentals are not just about the property itself. They involve service, preparation, and coordination. Every stay must meet expectations from arrival to departure.":
    "Las rentas de lujo no se tratan solo de la propiedad en sí. Implican servicio, preparación y coordinación. Cada estancia debe cumplir expectativas desde la llegada hasta la salida.",
  "Managing Rentals in Punta Mita": "Administrar Rentas en Punta Mita",
  "Managing luxury rentals in Punta Mita includes handling bookings, coordinating cleaning and maintenance, and ensuring that each guest has a seamless experience throughout their stay while maintaining the property at a high standard.":
    "Administrar rentas de lujo en Punta Mita incluye gestionar reservaciones, coordinar limpieza y mantenimiento, y asegurar que cada huésped tenga una experiencia fluida durante su estancia, manteniendo la propiedad en un alto estándar.",
  "A Local, Hands-On Approach": "Un Enfoque Local y Cercano",
  "Being present in Punta Mita allows for faster response times, better coordination, and a more personalized approach to both homeowners and guests.":
    "Estar presentes en Punta Mita permite responder más rápido, coordinar mejor y ofrecer un enfoque más personalizado tanto para propietarios como para huéspedes.",
  "View Properties": "Ver Propiedades",
  "Talk With Us": "Hablemos",

  "Managing a property in Punta Mita requires more than coordination. It requires local presence, responsiveness, and a clear understanding of how luxury homes operate in a rental environment. Our property management services in Punta Mita are designed to keep homes well maintained while ensuring a smooth and high-quality guest experience.":
    "Administrar una propiedad en Punta Mita requiere más que coordinación. Requiere presencia local, capacidad de respuesta y una comprensión clara de cómo operan las casas de lujo en un entorno de renta. Nuestros servicios de administración están diseñados para mantener las casas en excelente estado y asegurar una experiencia fluida y de alta calidad para los huéspedes.",
  "Why Property Management in Punta Mita Is Different":
    "Por Qué la Administración de Propiedades en Punta Mita es Diferente",
  "Punta Mita is a unique market where expectations are high and response times matter. Homes are not only valuable assets, but also rental properties that require constant attention, maintenance, and guest coordination.":
    "Punta Mita es un mercado único donde las expectativas son altas y los tiempos de respuesta importan. Las casas no solo son activos valiosos, también son propiedades en renta que requieren atención constante, mantenimiento y coordinación con huéspedes.",
  "What Good Property Management Includes":
    "Qué Incluye una Buena Administración de Propiedades",
  "Effective property management in Punta Mita goes beyond maintenance. It includes overseeing daily operations, coordinating guest stays, managing cleaning and readiness, and ensuring that the property remains in excellent condition at all times while performing well as a rental property.":
    "Una administración efectiva en Punta Mita va más allá del mantenimiento. Incluye supervisar la operación diaria, coordinar estancias de huéspedes, gestionar limpieza y preparación, y asegurar que la propiedad se mantenga en excelente estado mientras funciona bien como propiedad en renta.",
  "At Beyond Traveling, we work closely with a limited number of homeowners. This allows us to stay involved, respond quickly, and treat each home with the level of care it deserves.":
    "En Beyond Traveling trabajamos de cerca con un número limitado de propietarios. Esto nos permite mantenernos involucrados, responder rápido y tratar cada casa con el nivel de cuidado que merece.",
  "Explore Our Services": "Explora Nuestros Servicios",

  "Villa Management in Punta Mita": "Administración de Villas en Punta Mita",
  "Managing a villa in Punta Mita requires constant oversight. From maintenance to guest coordination, every detail impacts the value and performance of the property. Our villa management services in Punta Mita are designed to maintain each property at a high standard while ensuring smooth operations and guest experience.":
    "Administrar una villa en Punta Mita requiere supervisión constante. Desde el mantenimiento hasta la coordinación con huéspedes, cada detalle impacta el valor y el desempeño de la propiedad. Nuestros servicios de administración de villas están diseñados para mantener cada propiedad en un alto estándar y asegurar una operación fluida y una buena experiencia para los huéspedes.",
  "Maintaining High-End Villas": "Mantener Villas de Alto Nivel",
  "Villas must be maintained at a high standard at all times. This includes regular inspections, quick repairs, and coordination with trusted local vendors.":
    "Las villas deben mantenerse en un alto estándar en todo momento. Esto incluye inspecciones regulares, reparaciones rápidas y coordinación con proveedores locales de confianza.",
  "Rental Performance and Operations": "Desempeño en Rentas y Operación",
  "Villa management also includes optimizing rentals, managing bookings, and ensuring that each guest experience meets expectations.":
    "La administración de villas también incluye optimizar rentas, gestionar reservaciones y asegurar que cada experiencia de huésped cumpla expectativas.",
   "Direct Communication With Owners": "Comunicación Directa con Propietarios",
  "Clear and direct communication allows owners to stay informed and confident that their property is being properly managed.":
    "La comunicación clara y directa permite que los propietarios se mantengan informados y tranquilos de que su propiedad está siendo administrada correctamente.",
    "Explore Services": "Explorar Servicios",

  // Villa Dining Menu
  "Villa Dining Menu": "Menú de Villa",
  "Villa Dining Menu | Beyond Traveling": "Menú de Villa | Beyond Traveling",
  "Private villa dining menu with fresh breakfast, lunch, private dinners, children’s menu, and desserts.":
    "Menú privado de villa con desayuno fresco, lunch, cenas privadas, menú infantil y postres.",

  "Fresh Breakfast, Lunch": "Desayuno Fresco, Lunch",
  "& Private Dinners at Home.": "y Cenas Privadas en Casa.",
  "Enjoy relaxed, freshly prepared meals from the comfort of your private villa.":
    "Disfruta comidas frescas y relajadas desde la comodidad de tu villa privada.",

  "Service Overview": "Resumen del Servicio",
  "Freshly prepared meals, arranged around your stay":
    "Comidas preparadas al momento, organizadas alrededor de tu estancia",
  "Breakfast preparation is included with your rental; however, the cost of groceries and ingredients is not included.":
    "La preparación del desayuno está incluida con tu renta; sin embargo, el costo de los alimentos, compras e ingredientes no está incluido.",
  "Lunch and dinner preparation may be arranged upon request for an additional service cost. All meals are prepared using groceries purchased for your stay, based on your group size, selected dishes, and preferences.":
    "La preparación de lunch y cena puede organizarse bajo solicitud con un costo adicional de servicio. Todas las comidas se preparan con los alimentos comprados para tu estancia, según el tamaño de tu grupo, los platillos seleccionados y tus preferencias.",

  "Menu Categories": "Categorías del Menú",
  "Choose the service you would like to explore":
    "Elige el servicio que quieres explorar",
  "Browse breakfast, lunch, private dinner, children’s options, and desserts.":
    "Explora desayuno, lunch, cena privada, opciones para niños y postres.",
  "View dishes": "Ver platillos",

  "Important Service Details": "Detalles Importantes del Servicio",
  "Breakfast preparation is included with your rental.":
    "La preparación del desayuno está incluida con tu renta.",
  "The cost of groceries, food, beverages, and ingredients is not included.":
    "El costo de alimentos, bebidas, compras e ingredientes no está incluido.",
  "All groceries required to prepare your selected meals will be charged separately at the end of your stay.":
    "Todos los alimentos necesarios para preparar los platillos seleccionados se cobrarán por separado al final de tu estancia.",
  "A 15% shopping fee applies to the total grocery receipts.":
    "Se aplica un cargo de compras del 15% sobre el total de los recibos de supermercado.",
  "Lunch and dinner preparation may be arranged upon request for an additional service cost.":
    "La preparación de lunch y cena puede organizarse bajo solicitud con un costo adicional de servicio.",
  "Menus can be customized with advance notice.":
    "Los menús pueden personalizarse con aviso previo.",
  "Leftover groceries remain at the villa and are not deducted from the final grocery bill.":
    "Los alimentos sobrantes permanecen en la villa y no se descuentan de la cuenta final de supermercado.",
  "Please let us know in advance if you have allergies, dietary restrictions, children’s preferences, or special requests.":
    "Por favor avísanos con anticipación si tienes alergias, restricciones alimenticias, preferencias para niños o solicitudes especiales.",

  "← Back to Villa Dining Menu": "← Volver al Menú de Villa",
  "← Back to Breakfast": "← Volver a Desayuno",
  "← Back to Lunch": "← Volver a Lunch",
  "← Back to Private Dinner at Home": "← Volver a Cena Privada en Casa",
  "← Back to Children’s Favorites": "← Volver a Favoritos para Niños",
  "← Back to Desserts": "← Volver a Postres",

  "Breakfast": "Desayuno",
  "Preparation Included with Your Rental": "Preparación Incluida con Tu Renta",
  "Each morning, our housekeeper can prepare a fresh villa breakfast with seasonal fruit, juice, coffee, yogurt, and granola, plus a daily selection of savory and sweet dishes. Please note that breakfast preparation is included, but the cost of all food, groceries, and ingredients used for breakfast is charged separately.":
    "Cada mañana, nuestra housekeeper puede preparar un desayuno fresco en la villa con fruta de temporada, jugo, café, yogurt y granola, además de una selección diaria de platillos salados y dulces. La preparación del desayuno está incluida, pero el costo de todos los alimentos, compras e ingredientes utilizados para el desayuno se cobra por separado.",

  "Daily Breakfast Includes": "El Desayuno Diario Incluye",
  "Fresh morning essentials prepared at the villa using groceries purchased for your stay.":
    "Básicos frescos de la mañana preparados en la villa con los alimentos comprados para tu estancia.",
  "Fresh Seasonal Fruit Platter": "Plato de Fruta Fresca de Temporada",
  "A fresh selection of seasonal fruit prepared each morning.":
    "Una selección fresca de fruta de temporada preparada cada mañana.",
  "Fresh Orange Juice or Green Juice": "Jugo de Naranja Fresco o Jugo Verde",
  "Fresh juice served with breakfast, based on availability and preference.":
    "Jugo fresco servido con el desayuno, según disponibilidad y preferencia.",
  "Coffee and Creamer": "Café y Crema",
  "Morning coffee service with creamer.":
    "Servicio de café por la mañana con crema.",
  "Granola and Yogurt": "Granola y Yogurt",
  "A light breakfast option served with yogurt and granola.":
    "Una opción ligera de desayuno servida con yogurt y granola.",

  "Savory Breakfast Options": "Opciones Saladas de Desayuno",
  "Mexican classics, eggs, toasts, and warm breakfast dishes prepared fresh in the villa.":
    "Clásicos mexicanos, huevos, toasts y platillos calientes de desayuno preparados al momento en la villa.",
  "Red or Green Chilaquiles with Eggs or Chicken":
    "Chilaquiles Rojos o Verdes con Huevo o Pollo",
  "Crispy tortilla chips with salsa, crema, cheese, and eggs or chicken.":
    "Totopos crujientes con salsa, crema, queso y huevo o pollo.",
  "Huevos Rancheros": "Huevos Rancheros",
  "Fried eggs served with ranchero sauce, beans, and tortillas.":
    "Huevos estrellados servidos con salsa ranchera, frijoles y tortillas.",
  "Huevos a la Mexicana": "Huevos a la Mexicana",
  "Scrambled eggs with tomato, onion, and chile.":
    "Huevos revueltos con jitomate, cebolla y chile.",
  "Eggs Any Style": "Huevos al Gusto",
  "Scrambled, fried, omelette, or egg whites.":
    "Revueltos, estrellados, omelette o claras.",
  "Breakfast Burrito": "Burrito de Desayuno",
  "Flour tortilla filled with eggs and chorizo.":
    "Tortilla de harina rellena de huevo y chorizo.",
  "Molletes": "Molletes",
  "Toasted bread with refried beans, melted cheese, and pico de gallo.":
    "Pan tostado con frijoles refritos, queso derretido y pico de gallo.",
  "Enfrijoladas": "Enfrijoladas",
  "Tortillas dipped in creamy bean sauce, filled with egg, cheese, or chicken.":
    "Tortillas bañadas en salsa cremosa de frijol, rellenas de huevo, queso o pollo.",
  "Quesadillas": "Quesadillas",
  "Fresh tortillas with Oaxaca cheese, mushrooms, vegetables, or chicken.":
    "Tortillas frescas con queso Oaxaca, champiñones, vegetales o pollo.",
  "Avocado Toast": "Avocado Toast",
  "Toasted bread with avocado, olive oil, and fresh toppings.":
    "Pan tostado con aguacate, aceite de oliva y toppings frescos.",
  "Smoked Salmon Toast or Bagel": "Toast o Bagel de Salmón Ahumado",
  "Served with cream cheese, capers, and herbs.":
    "Servido con queso crema, alcaparras y hierbas.",

  "Sweet Breakfast Options": "Opciones Dulces de Desayuno",
  "Sweet morning favorites served with fruit, maple syrup, berries, yogurt, or toppings.":
    "Favoritos dulces de la mañana servidos con fruta, miel maple, frutos rojos, yogurt o toppings.",
  "Pancakes": "Hot Cakes",
  "Served with maple syrup and fresh fruit.":
    "Servidos con miel maple y fruta fresca.",
  "Waffles": "Waffles",
  "Served with maple syrup, Nutella, or berries.":
    "Servidos con miel maple, Nutella o frutos rojos.",
  "French Toast": "Pan Francés",
  "Served with maple syrup and seasonal fruit.":
    "Servido con miel maple y fruta de temporada.",
  "Oatmeal Bowl": "Bowl de Avena",
  "With seeds, berries, banana, and honey.":
    "Con semillas, frutos rojos, plátano y miel.",
  "Tropical Yogurt Parfait": "Parfait Tropical de Yogurt",
  "Greek yogurt, granola, honey, and seasonal fruit.":
    "Yogurt griego, granola, miel y fruta de temporada.",
  "Açaí or Smoothie Bowl": "Bowl de Açaí o Smoothie",
  "Blended fruit bowl with granola, coconut, banana, and berries.":
    "Bowl de fruta licuada con granola, coco, plátano y frutos rojos.",
  "Sweet Bagel": "Bagel Dulce",
  "With cream cheese and jam.":
    "Con queso crema y mermelada.",

  "Lunch": "Lunch",
  "Fresh, Casual & Perfect for Villa Days":
    "Fresco, Casual y Perfecto para Días en la Villa",
  "Lunch may be arranged upon request for an additional preparation/service cost. The cost of groceries and ingredients is charged separately.":
    "El lunch puede organizarse bajo solicitud con un costo adicional de preparación/servicio. El costo de alimentos e ingredientes se cobra por separado.",

  "Starters & Sides": "Entradas y Guarniciones",
  "Easy villa lunch additions for sharing by the pool or pairing with main dishes.":
    "Opciones sencillas para compartir junto a la alberca o acompañar platillos principales.",
  "Guacamole and Pico de Gallo": "Guacamole y Pico de Gallo",
  "Fresh guacamole served with pico de gallo.":
    "Guacamole fresco servido con pico de gallo.",
  "Cheese and Arrachera Nachos": "Nachos con Queso y Arrachera",
  "Nachos with cheese and arrachera.":
    "Nachos con queso y arrachera.",
  "Grilled Vegetables": "Vegetales a la Parrilla",
  "Seasonal vegetables prepared on the grill.":
    "Vegetales de temporada preparados a la parrilla.",
  "Mexican Rice": "Arroz Mexicano",
  "Classic Mexican rice served as a side.":
    "Arroz mexicano clásico servido como guarnición.",
  "Refried or Whole Beans": "Frijoles Refritos o de la Olla",
  "Beans prepared refried or whole.":
    "Frijoles preparados refritos o enteros.",
  "French Fries": "Papas a la Francesa",
  "Crispy fries for a casual villa lunch.":
    "Papas crujientes para un lunch casual en la villa.",
  "Seasonal Vegetable Crudités with House Dip":
    "Crudités de Vegetales de Temporada con Dip de la Casa",
  "Fresh vegetables served with house dip.":
    "Vegetales frescos servidos con dip de la casa.",

  "Salads": "Ensaladas",
  "Fresh, simple salads for lighter lunches or as a side to seafood and tacos.":
    "Ensaladas frescas y sencillas para lunches ligeros o como acompañamiento de mariscos y tacos.",
  "Caesar Salad": "Ensalada César",
  "Classic Caesar with romaine, parmesan, and dressing.":
    "César clásica con lechuga romana, parmesano y aderezo.",
  "Caprese Salad": "Ensalada Caprese",
  "Tomato, mozzarella, basil, and olive oil.":
    "Jitomate, mozzarella, albahaca y aceite de oliva.",
  "Mixed Green Salad": "Ensalada Verde Mixta",
  "Fresh greens with seasonal vegetables.":
    "Hojas verdes frescas con vegetales de temporada.",
  "Citrus Salad": "Ensalada Cítrica",
  "Fresh greens with citrus, avocado, and light vinaigrette.":
    "Hojas verdes con cítricos, aguacate y vinagreta ligera.",
  "Greek Salad with Grilled Shrimp": "Ensalada Griega con Camarón a la Parrilla",
  "Cucumber, tomato, olives, cheese, and grilled shrimp.":
    "Pepino, jitomate, aceitunas, queso y camarón a la parrilla.",

  "Fresh Coastal Options": "Opciones Frescas del Mar",
  "Fresh ceviches, aguachiles, tostadas, and coastal dishes for warm villa days.":
    "Ceviches frescos, aguachiles, tostadas y platillos costeros para días cálidos en la villa.",
  "Vallarta-Style Fish Ceviche": "Ceviche de Pescado Estilo Vallarta",
  "Fresh fish marinated in lime juice with vegetables.":
    "Pescado fresco marinado en limón con vegetales.",
  "Shrimp Ceviche": "Ceviche de Camarón",
  "Shrimp with lime, tomato, onion, cilantro, and cucumber.":
    "Camarón con limón, jitomate, cebolla, cilantro y pepino.",
  "Green or Black Aguachile": "Aguachile Verde o Negro",
  "Shrimp marinated in spicy lime sauce.":
    "Camarón marinado en salsa picante de limón.",
  "Tuna Sashimi": "Sashimi de Atún",
  "Fresh tuna with ponzu-style sauce.":
    "Atún fresco con salsa estilo ponzu.",
  "Tuna Tostadas": "Tostadas de Atún",
  "Crispy tostadas with fresh tuna, avocado, cucumber, and spicy mayo.":
    "Tostadas crujientes con atún fresco, aguacate, pepino y mayo spicy.",
  "Fish Tostadas": "Tostadas de Pescado",
  "Fresh fish ceviche over crispy tostadas with avocado and salsa.":
    "Ceviche de pescado fresco sobre tostadas crujientes con aguacate y salsa.",

  "Lunch Mains": "Platos Fuertes de Lunch",
  "Tacos, tostadas, bowls, fajitas, sandwiches, and familiar villa lunch favorites.":
    "Tacos, tostadas, bowls, fajitas, sándwiches y favoritos casuales para lunch en la villa.",
  "Baja Fish or Shrimp Tacos": "Tacos Baja de Pescado o Camarón",
  "Breaded fish or shrimp in homemade corn tortillas with cabbage, salsa, and chipotle dressing.":
    "Pescado o camarón empanizado en tortillas de maíz hechas en casa con col, salsa y aderezo de chipotle.",
  "Grilled Fish Tacos": "Tacos de Pescado a la Parrilla",
  "A lighter option with avocado, cabbage, and house salsa.":
    "Una opción más ligera con aguacate, col y salsa de la casa.",
  "Shrimp Gobernador Tacos": "Tacos Gobernador de Camarón",
  "Shrimp with melted cheese, peppers, and onions.":
    "Camarón con queso derretido, pimientos y cebolla.",
  "Mexican Tacos": "Tacos Mexicanos",
  "Arrachera, pastor, or chicken served in homemade corn tortillas.":
    "Arrachera, pastor o pollo servidos en tortillas de maíz hechas en casa.",
  "Chicken Tinga Tostadas": "Tostadas de Tinga de Pollo",
  "Crispy tostadas with shredded chicken in tomato-chipotle sauce, lettuce, cream, and cheese.":
    "Tostadas crujientes con pollo deshebrado en salsa de jitomate y chipotle, lechuga, crema y queso.",
  "Fajitas": "Fajitas",
  "Beef, chicken, shrimp, or mixed fajitas with homemade tortillas.":
    "Fajitas de res, pollo, camarón o mixtas con tortillas hechas en casa.",
  "Mexican Bowl": "Bowl Mexicano",
  "Rice, beans, grilled chicken or shrimp, avocado, pico de gallo, corn, and salsa.":
    "Arroz, frijoles, pollo o camarón a la parrilla, aguacate, pico de gallo, elote y salsa.",
  "Club Sandwich or Turkey Panini": "Club Sándwich o Panini de Pavo",
  "A simple, familiar option for casual lunches.":
    "Una opción sencilla y familiar para lunches casuales.",

  "Private Dinner at Home": "Cena Privada en Casa",
  "Relaxed Villa Dining After a Day in Punta Mita":
    "Cena Relajada en la Villa Después de un Día en Punta Mita",
  "Dinner may be arranged upon request for an additional preparation/service cost. The cost of groceries and ingredients is charged separately.":
    "La cena puede organizarse bajo solicitud con un costo adicional de preparación/servicio. El costo de alimentos e ingredientes se cobra por separado.",

  "Mexican Favorites": "Favoritos Mexicanos",
  "Comforting Mexican dishes prepared at home for a relaxed villa dinner.":
    "Platillos mexicanos reconfortantes preparados en casa para una cena relajada en la villa.",
  "Chicken Mole Enchiladas": "Enchiladas de Pollo con Mole",
  "Corn tortillas filled with chicken and topped with mole sauce, sesame, crema, and queso fresco.":
    "Tortillas de maíz rellenas de pollo, bañadas con mole, ajonjolí, crema y queso fresco.",
  "Mexican Antojitos": "Antojitos Mexicanos",
  "Sopes, enchiladas, tostadas, huaraches, or flautas with chicken tinga, pork, or beef.":
    "Sopes, enchiladas, tostadas, huaraches o flautas con tinga de pollo, cerdo o res.",
  "Cochinita Pibil Tacos": "Tacos de Cochinita Pibil",
  "Slow-cooked Yucatán-style pork with pickled onion and habanero salsa.":
    "Cerdo estilo Yucatán cocinado lentamente con cebolla encurtida y salsa de habanero.",
  "Stuffed Poblano Peppers": "Chiles Poblanos Rellenos",
  "Poblano peppers filled with cheese, beef, chicken, or vegetables.":
    "Chiles poblanos rellenos de queso, res, pollo o vegetales.",
  "Arrachera Dinner Plate": "Plato de Arrachera para Cena",
  "Grilled arrachera with guacamole, beans, grilled onions, tortillas, and salsa.":
    "Arrachera a la parrilla con guacamole, frijoles, cebollitas asadas, tortillas y salsa.",
  "Chicken in Creamy Poblano Sauce": "Pollo en Salsa Cremosa de Poblano",
  "Served with rice and vegetables.":
    "Servido con arroz y vegetales.",

  "Seafood & Grill": "Mariscos y Parrilla",
  "Fresh fish, shrimp, zarandeado-style seafood, and grilled dishes.":
    "Pescado fresco, camarón, mariscos estilo zarandeado y platillos a la parrilla.",
  "Catch of the Day with Garlic Butter": "Pesca del Día con Mantequilla de Ajo",
  "Fresh fish served with rice, grilled vegetables, and house salsa.":
    "Pescado fresco servido con arroz, vegetales a la parrilla y salsa de la casa.",
  "Pescado a la Veracruzana": "Pescado a la Veracruzana",
  "Fish with tomato, olives, capers, peppers, and herbs.":
    "Pescado con jitomate, aceitunas, alcaparras, pimientos y hierbas.",
  "Fish to Taste": "Pescado al Gusto",
  "Prepared garlic-style, diabla-style, or breaded.":
    "Preparado al ajo, a la diabla o empanizado.",
  "Shrimp to Taste": "Camarones al Gusto",
  "Prepared garlic-style, coconut, diabla-style, mummy-style or breaded.":
    "Preparados al ajo, con coco, a la diabla, momia o empanizados.",
  "Zarandeado-Style Seafood": "Mariscos Estilo Zarandeado",
  "Fish, shrimp, octopus, or mixed seafood prepared zarandeado-style.":
    "Pescado, camarón, pulpo o mariscos mixtos preparados estilo zarandeado.",
  "Garlic Fish Fillet or Shrimp": "Filete de Pescado o Camarón al Ajo",
  "Served with white rice, sauces, and garlic bread.":
    "Servido con arroz blanco, salsas y pan de ajo.",
  "Grilled Platter": "Parrillada",
  "Grilled chicken, arrachera, and chorizo with homemade corn tortillas.":
    "Pollo, arrachera y chorizo a la parrilla con tortillas de maíz hechas en casa.",

  "Pasta & Comfort Dishes": "Pastas y Platillos Casuales",
  "Casual dinner options including pasta, seafood pasta, fajitas, and burgers.":
    "Opciones casuales de cena, incluyendo pasta, pasta con mariscos, fajitas y hamburguesas.",
  "Pasta": "Pasta",
  "Marinara, Alfredo, bolognese, mushroom, or shrimp.":
    "Marinara, Alfredo, boloñesa, champiñones o camarón.",
  "Seafood Pasta": "Pasta con Mariscos",
  "Pasta with shrimp, fish, or mixed seafood in garlic, tomato, or creamy sauce.":
    "Pasta con camarón, pescado o mariscos mixtos en salsa de ajo, tomate o crema.",
  "Burgers": "Hamburguesas",
  "Available upon request for casual dinners.":
    "Disponibles bajo solicitud para cenas casuales.",

  "Children’s Favorites": "Favoritos para Niños",
  "Familiar Favorites for Younger Guests":
    "Favoritos Familiares para los Más Pequeños",
  "Familiar dishes can be prepared for children or guests who prefer relaxed, casual meals.":
    "Se pueden preparar platillos familiares para niños o huéspedes que prefieren comidas relajadas y casuales.",
  "Familiar favorites for younger guests and relaxed villa meals.":
    "Favoritos familiares para los más pequeños y comidas relajadas en la villa.",
  "Chicken Tenders": "Tiras de Pollo",
  "A simple, familiar option for children.":
    "Una opción sencilla y familiar para niños.",
  "Chicken Nuggets": "Nuggets de Pollo",
  "A casual children’s favorite.":
    "Un favorito casual para niños.",
  "Cheese Quesadillas": "Quesadillas de Queso",
  "Fresh tortillas with melted cheese.":
    "Tortillas frescas con queso derretido.",
  "Crispy fries served as a simple side.":
    "Papas crujientes servidas como guarnición sencilla.",
  "Pasta with Butter, Tomato Sauce, or Alfredo":
    "Pasta con Mantequilla, Salsa de Tomate o Alfredo",
  "Simple pasta prepared with butter, tomato sauce, or Alfredo.":
    "Pasta sencilla preparada con mantequilla, salsa de tomate o Alfredo.",
  "Mini Pancakes": "Mini Hot Cakes",
  "Small pancakes for children or light breakfast requests.":
    "Hot cakes pequeños para niños o desayunos ligeros.",
  "Fruit Plate": "Plato de Fruta",
  "Fresh seasonal fruit served simply.":
    "Fruta fresca de temporada servida de forma sencilla.",
  "Turkey and Cheese Wrap": "Wrap de Pavo y Queso",
  "A simple wrap with turkey and cheese.":
    "Un wrap sencillo con pavo y queso.",
  "Banana, Strawberry, and Nutella Wrap": "Wrap de Plátano, Fresa y Nutella",
  "A sweet wrap with banana, strawberry, and Nutella.":
    "Un wrap dulce con plátano, fresa y Nutella.",

  "Desserts": "Postres",
  "Sweet Finishes for Villa Meals": "Finales Dulces para Comidas en la Villa",
  "Desserts may be arranged as part of lunch or dinner service, depending on your selected menu and preferences.":
    "Los postres pueden organizarse como parte del servicio de lunch o cena, según tu menú seleccionado y preferencias.",
  "Classic sweet options to finish a villa lunch or dinner.":
    "Opciones dulces clásicas para terminar un lunch o cena en la villa.",
  "Vanilla Flan with Caramel Sauce": "Flan de Vainilla con Caramelo",
  "Classic vanilla flan served with caramel sauce.":
    "Flan clásico de vainilla servido con caramelo.",
  "Churros with Chocolate Sauce": "Churros con Salsa de Chocolate",
  "Warm churros served with chocolate sauce.":
    "Churros calientes servidos con salsa de chocolate.",
  "Crepes with Cajeta and Strawberries": "Crepas con Cajeta y Fresas",
  "Crepes served with cajeta and strawberries.":
    "Crepas servidas con cajeta y fresas.",
  "Brownie with Vanilla Ice Cream": "Brownie con Helado de Vainilla",
  "Warm brownie served with vanilla ice cream.":
    "Brownie caliente servido con helado de vainilla.",
  "Apple Pie": "Pay de Manzana",
  "Classic apple pie.": "Pay de manzana clásico.",
  "Cheesecake": "Cheesecake",
  "Classic cheesecake.": "Cheesecake clásico.",
  "Chocolate Lava Cake": "Pastel Lava de Chocolate",
  "Warm chocolate lava cake.": "Pastel lava de chocolate caliente.",
  "Cajeta Lava Cake": "Pastel Lava de Cajeta",
  "Warm cajeta lava cake.": "Pastel lava de cajeta caliente.",
  "Premium Assorted Ice Cream": "Selección de Helado Premium",
  "A selection of premium ice cream.":
    "Una selección de helado premium.",

};

const normalize = (value: string) => value.replace(/\s+/g, " ").trim();

// Lookup ignores straight vs. curly apostrophes, so text coming from outside
// the code (e.g. villa descriptions in Sanity) still finds its translation.
const unifyApostrophes = (value: string) => value.replace(/[‘’']/g, "’");
const esLookup: Record<string, string> = {};
for (const [k, v] of Object.entries(es)) esLookup[unifyApostrophes(normalize(k))] = v;

const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();
const translatableAttributes = ["placeholder", "aria-label", "title", "alt"] as const;

function translateAttributes(language: Language) {
  document
    .querySelectorAll<HTMLElement>("[placeholder], [aria-label], [title], img[alt]")
    .forEach((element) => {
      let saved = originalAttributes.get(element);

      if (!saved) {
        saved = new Map<string, string>();
        originalAttributes.set(element, saved);
      }

      translatableAttributes.forEach((attribute) => {
        const current = element.getAttribute(attribute);
        if (!current) return;

        if (!saved.has(attribute)) saved.set(attribute, current);

        const original = saved.get(attribute) || "";
        const key = normalize(original);

        if (language === "en") {
          if (element.getAttribute(attribute) !== original) {
            element.setAttribute(attribute, original);
          }
          return;
        }

        const translated = esLookup[unifyApostrophes(key)];
        if (!translated) return;

        if (element.getAttribute(attribute) !== translated) {
          element.setAttribute(attribute, translated);
        }
      });
    });
}

function translateTextNodes(language: Language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;

      const tag = parent.tagName.toLowerCase();

      if (["script", "style", "noscript", "textarea", "input"].includes(tag)) {
        return NodeFilter.FILTER_REJECT;
      }

      if (!normalize(node.textContent || "")) {
        return NodeFilter.FILTER_REJECT;
      }

      // Text marked translate="no" is already in its final language.
      if (parent.closest('[translate="no"]')) return NodeFilter.FILTER_REJECT;

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);

  nodes.forEach((node) => {
    if (!originalText.has(node)) originalText.set(node, node.textContent || "");

    const original = originalText.get(node) || "";
    const key = normalize(original);

    if (language === "en") {
      if (node.textContent !== original) node.textContent = original;
      return;
    }

    const translated = esLookup[unifyApostrophes(key)];
    if (!translated) return;

    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    const nextText = `${leading}${translated}${trailing}`;

    if (node.textContent !== nextText) {
      node.textContent = nextText;
    }
  });
}

function translateDocument(language: Language) {
  if (typeof document === "undefined") return;

  document.documentElement.lang = language;

  translateAttributes(language);
  translateTextNodes(language);
}

function LanguageDomTranslator({ language }: { language: Language }) {
  React.useEffect(() => {
    translateDocument(language);

    const observer = new MutationObserver(() => translateDocument(language));

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...translatableAttributes],
    });

    return () => observer.disconnect();
  }, [language]);

  return null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const router = useRouter();

  // The URL is the source of truth: /es/... is Spanish, everything else is
  // English. This works during server rendering too, so Spanish pages ship
  // with Spanish hrefs, <html lang> and metadata.
  const language: Language = isEsPath(pathname) ? "es" : "en";

  const setLanguage = React.useCallback(
    (nextLanguage: Language) => {
      if (nextLanguage === language) return;
      const base = stripEs(pathname);
      const target = nextLanguage === "es" ? withEs(base) : base;
      const suffix =
        typeof window !== "undefined"
          ? window.location.search + window.location.hash
          : "";
      router.push(target + suffix, { scroll: false });
    },
    [language, pathname, router]
  );

  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
      <LanguageDomTranslator language={language} />
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
