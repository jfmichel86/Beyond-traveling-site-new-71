"use client";

import React from "react";

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
  "DISCOVER": "DESCUBRIR",
  "ABOUT": "NOSOTROS",
  "CONTACT": "CONTACTO",
  "Home": "Inicio",
  "Services": "Servicios",
  "Properties": "Propiedades",
  "Discover": "Descubrir",
  "About": "Nosotros",
  "Contact": "Contacto",
  "Navigation": "Navegación",
  "All rights reserved": "Todos los derechos reservados",
  "Beyond Traveling home": "Inicio de Beyond Traveling",
  "Open menu": "Abrir menú",
  "Close menu": "Cerrar menú",
  "Close menu overlay": "Cerrar menú",

  // Footer
  "Guides": "Guías",
  "Property Management": "Administración de Propiedades",
  "Luxury Rentals": "Rentas de Lujo",
  "Villa Management": "Administración de Villas",
  "Property management and luxury rentals in Punta Mita. Hands-on service, local expertise, and direct communication.":
    "Administración de propiedades y rentas de lujo en Punta Mita. Servicio cercano, experiencia local y comunicación directa.",
  "WhatsApp Us": "Escríbenos por WhatsApp",
  "View Services": "Ver Servicios",

  // Shared CTAs
  "Talk With Us About Your Property": "Hablemos de Tu Propiedad",
  "Contact Us": "Contáctanos",
  "No pressure. Just a conversation.": "Sin presión. Solo una conversación.",
  "Send a Message": "Enviar Mensaje",

  // Home
  "Property Management in Punta Mita": "Administración de Propiedades en Punta Mita",
  "Punta Mita luxury property management": "Administración de propiedades de lujo en Punta Mita",
  "Luxury Property Management in Punta Mita.": "Administración de Propiedades de Lujo en Punta Mita.",
  "Done Personally. Done Right.": "Personal. Cercana. Bien Hecha.",
  "We work directly with homeowners to care for their homes, respond quickly to guests, and manage rentals thoughtfully—without hidden fees or distance from your property.":
    "Trabajamos directamente con propietarios para cuidar sus casas, responder rápidamente a los huéspedes y administrar las rentas con criterio, sin cargos ocultos ni distancia con tu propiedad.",
  "We look after luxury homes, support guests, and help owners protect their property and rental results — with clear pricing, direct communication, and no hidden fees.":
    "Cuidamos casas de lujo, atendemos a los huéspedes y ayudamos a los propietarios a proteger su propiedad y sus resultados en renta, con precios claros, comunicación directa y sin cargos ocultos.",
  "Discover How We Work": "Descubre Cómo Trabajamos",
  "See How We Work": "Ver Cómo Trabajamos",
  "Direct communication": "Comunicación directa",
  "You deal with people, not layers.": "Tratas con personas, no con capas de personal.",
  "Clear pricing": "Precios claros",
  "No hidden fees or vague charges.": "Sin cargos ocultos ni cobros poco claros.",
  "Rental-minded care": "Cuidado pensado para rentas",
  "Better stays help create better results.": "Mejores estancias ayudan a crear mejores resultados.",
  "A More Personal Way to Manage Your Home": "Una Forma Más Personal de Administrar Tu Casa",
  "Beyond Traveling isn’t built like a traditional property management company.":
    "Beyond Traveling no está construido como una empresa tradicional de administración de propiedades.",
  "We’re a small, hands-on team that works closely with a limited number of homeowners. That allows us to stay available, respond quickly, and treat each property with the attention it deserves—not as a number, but as someone’s home.":
    "Somos un equipo pequeño y cercano que trabaja de forma directa con un número limitado de propietarios. Eso nos permite estar disponibles, responder rápido y tratar cada propiedad con la atención que merece: no como un número, sino como la casa de alguien.",
  "We work closely with a limited number of homeowners so we can stay available, respond quickly, and treat each property with the attention it deserves — not as a number, but as someone’s home.":
    "Trabajamos de cerca con un número limitado de propietarios para poder estar disponibles, responder rápido y tratar cada propiedad con la atención que merece: no como un número, sino como la casa de alguien.",
  "When owners work with us, they work with people, not a system.":
    "Cuando los propietarios trabajan con nosotros, trabajan con personas, no con un sistema.",
  "We Don’t “Manage” Homes.": "No Solo “Administramos” Casas.",
  "We Look After Them With You": "Las Cuidamos Contigo",
  "We Look After Them With You.": "Las Cuidamos Contigo.",
  "Good property management feels like teamwork.": "Una buena administración se siente como trabajo en equipo.",
  "We get to know you, your home, and your priorities. Some owners care most about preserving the property. Others want strong rental performance. Most want both. Our role is to align with you, communicate clearly, and make decisions as if the home were our own.":
    "Nos tomamos el tiempo de conocer tu casa, tus prioridades y la forma en que quieres manejarla. Algunos propietarios buscan solamente conservar la propiedad en perfecto estado. Otros buscan un buen desempeño en rentas. La mayoría quiere ambas cosas. Nuestro papel es alinearnos contigo, comunicarnos con claridad y tomar decisiones como si la casa fuera nuestra.",
  "We get to know you, your home, and your priorities. Some owners care most about preserving the property. Others want stronger rental performance. Most want both.":
    "Nos tomamos el tiempo de conocer tu casa, tus prioridades y la forma en que quieres manejarla. Algunos propietarios buscan conservar la propiedad en excelente estado. Otros quieren un mejor desempeño en rentas. La mayoría quiere ambas cosas.",
  "Our role is to align with you, communicate clearly, and make thoughtful decisions day to day.":
    "Nuestro papel es alinearnos contigo, comunicarnos con claridad y tomar decisiones cuidadosas día a día.",
  "You’ll always know:": "Siempre sabrás:",
  "Who is taking care of your property": "Quién está cuidando tu propiedad",
  "What’s happening day to day": "Qué está pasando día a día",
  "Why decisions are being made": "Por qué se toman ciertas decisiones",
  "And you’ll always be able to reach us.": "Y siempre podrás comunicarte con nosotros.",
  "Clear Pricing.": "Precios Claros.",
  "No Surprises": "Sin Sorpresas",
  "No Surprises.": "Sin Sorpresas.",
  "Many owners come to us after feeling frustrated by unclear charges or constantly rising costs.":
    "Muchos propietarios llegan con nosotros después de sentirse frustrados por cargos poco claros o costos que suben constantemente.",
  "We believe trust starts with transparency.":
    "Creemos que la confianza empieza con la transparencia.",
  "Our fees are straightforward, and we actively look for ways to save owners money, including:":
    "Nuestros honorarios son claros, y buscamos activamente formas de ahorrar dinero a los propietarios, incluyendo:",
  "Avoiding unnecessary maintenance work": "Evitar trabajos de mantenimiento innecesarios",
  "Managing cleaning and supplies efficiently": "Administrar limpieza e insumos de forma eficiente",
  "Being thoughtful about operational and fiscal decisions": "Tomar decisiones operativas y fiscales con cuidado",
  "We don’t inflate costs—and we don’t benefit when expenses go up.":
    "No inflamos costos, y no nos beneficiamos cuando los gastos aumentan.",
  "We don’t inflate costs — and we don’t benefit when expenses go up.":
    "No inflamos costos, y no nos beneficiamos cuando los gastos suben.",
  "How Our Management Works": "Cómo Funciona Nuestra Administración",
  "What We Take Care Of": "De Qué Nos Encargamos",
  "So you don’t have to worry about the day-to-day.": "Para que no tengas que preocuparte por el día a día.",
  "Regular maintenance and oversight": "Mantenimiento regular y supervisión",
  "Fast, personal response to guest inquiries": "Respuesta rápida y personal a consultas de huéspedes",
  "Guest coordination and concierge support": "Coordinación de huéspedes y apoyo de concierge",
  "Cleaning and property readiness": "Limpieza y preparación de la propiedad",
  "Accounting, reporting, and owner updates": "Contabilidad, reportes y actualizaciones para propietarios",
  "Property care": "Cuidado de la propiedad",
  "Maintenance oversight, inspections, vendor coordination, and property readiness.":
    "Supervisión de mantenimiento, inspecciones, coordinación con proveedores y preparación de la propiedad.",
  "Guest support": "Atención a huéspedes",
  "Fast guest communication, arrival coordination, local help, and concierge support.":
    "Comunicación rápida con huéspedes, coordinación de llegadas, apoyo local y concierge.",
  "Housekeeping": "Limpieza",
  "Cleaning coordination, supplies, laundry, and pre-arrival preparation.":
    "Coordinación de limpieza, insumos, lavandería y preparación antes de llegadas.",
  "Owner updates": "Actualizaciones para propietarios",
  "Clear reporting, honest communication, and practical recommendations.":
    "Reportes claros, comunicación honesta y recomendaciones prácticas.",
  "Most importantly: we stay involved.": "Lo más importante: seguimos involucrados.",
  "We don’t disappear after onboarding, and we don’t hand your property off to layers of staff.":
    "No desaparecemos después del inicio, y no dejamos tu propiedad en manos de múltiples capas de personal.",
  "We don’t disappear after onboarding, and we don’t hand your property off to layers of staff .":
    "No desaparecemos después del inicio, y no dejamos tu propiedad en manos de múltiples capas de personal.",
  "We’re Here.": "Estamos Aquí.",
  "And We Answer": "Y Respondemos",
  "And We Answer.": "Y Respondemos.",
  "We live and work in Punta Mita, and we’re close to the homes we manage.":
    "Vivimos y trabajamos en Punta Mita, cerca de las casas que administramos.",
  "We live and work in Punta Mita, close to the homes we manage.":
    "Vivimos y trabajamos en Punta Mita, cerca de las casas que administramos.",
  "That means:": "Eso significa:",
  "That matters because good rentals depend on responsiveness, and good ownership depends on availability.":
    "Eso importa porque las buenas rentas dependen de la capacidad de respuesta, y una buena experiencia como propietario depende de la disponibilidad.",
  "Faster responses to guests": "Respuestas más rápidas a los huéspedes",
  "Quick action when something needs attention": "Acción rápida cuando algo requiere atención",
  "Real relationships with local vendors": "Relaciones reales con proveedores locales",
  "No “we’ll check on that Monday” mentality": "Nada de “lo revisamos el lunes”",
  "Good rentals depend on responsiveness.": "El buen desempeño en rentas depende de la capacidad de respuesta.",
  "Good ownership depends on availability.": "Una buena experiencia como propietario depende de la disponibilidad.",
  "We take both seriously.": "Nos tomamos ambas cosas en serio.",
  "We take both the home and the guest experience seriously.":
    "Nos tomamos en serio tanto la casa como la experiencia del huésped.",
  "Questions Owners Usually Ask": "Preguntas Que Suelen Hacer los Propietarios",
  "A few simple answers before we talk.": "Algunas respuestas simples antes de hablar.",
  "Do you handle rentals too?": "¿También manejan las rentas?",
  "Yes. We help with guest communication, property readiness, local coordination, and the details that support stronger rental performance.":
    "Sí. Ayudamos con la comunicación con huéspedes, preparación de la propiedad, coordinación local y los detalles que apoyan un mejor desempeño en rentas.",
  "Are there hidden fees?": "¿Hay cargos ocultos?",
  "No. Clear pricing is one of the main reasons owners work with us. We believe owners should understand what they are paying for and why.":
    "No. Los precios claros son una de las principales razones por las que los propietarios trabajan con nosotros. Creemos que los propietarios deben entender qué están pagando y por qué.",
  "Will I deal with one person or a system?": "¿Trataré con una persona o con un sistema?",
  "You deal with people. We keep communication direct and avoid passing your home through layers of staff.":
    "Tratas con personas. Mantenemos la comunicación directa y evitamos pasar tu casa por capas de personal.",
  "Where do you work?": "¿Dónde trabajan?",
  "We focus on Punta Mita and nearby luxury homes in Riviera Nayarit.":
    "Nos enfocamos en Punta Mita y casas de lujo cercanas en Riviera Nayarit.",
  "Let’s See If We’re a Good Fit": "Veamos Si Somos el Equipo Adecuado",
  "If you’re looking for a team that will actually answer, stay involved, and treat your home with respect, we’d be happy to talk.":
    "Si buscas un equipo que realmente responda, se mantenga involucrado y trate tu casa con respeto, con gusto hablamos contigo.",
  "If you’re looking for a team that will actually answer, stay involved, treat your home with respect, and care about rental results, we’d be happy to talk.":
    "Si buscas un equipo que realmente responda, se mantenga involucrado, trate tu casa con respeto y se preocupe por los resultados en renta, con gusto hablamos contigo.",

  // Services
  "How We Take Care of Your Property": "Cómo Cuidamos Tu Propiedad",
  "Property management services in Punta Mita": "Servicios de administración de propiedades en Punta Mita",
  "The day-to-day care your property needs.": "El cuidado diario que tu propiedad necesita.",
  "Without the distance or confusion.": "Sin distancia ni confusión.",
  "We provide full-service property management in Punta Mita, handling everything from guest experience and rentals to maintenance and day-to-day operations. Our focus is on keeping your home in excellent condition while maximizing performance and ensuring a smooth ownership experience.":
    "Ofrecemos administración integral de propiedades en Punta Mita, desde experiencia de huéspedes y rentas hasta mantenimiento y operación diaria. Nuestro enfoque es mantener tu casa en excelente estado, mejorar el desempeño y hacer más sencilla tu experiencia como propietario.",
  "We focus on the details that make ownership easier and rentals perform better—while keeping communication clear and costs under control.":
    "Nos enfocamos en los detalles que hacen más fácil ser propietario y ayudan a que las rentas funcionen mejor, manteniendo la comunicación clara y los costos bajo control.",
  "See What’s Included": "Ver Qué Incluye",
  "Owner clarity": "Claridad para propietarios",
  "Clear updates, reporting, pricing, and decisions.": "Actualizaciones claras, reportes, precios y decisiones.",
  "Our": "Nuestro",
  "Approach": "Enfoque",
  "Our Approach": "Nuestro Enfoque",
  "Our property management approach in Punta Mita is built on consistency, direct communication, and attention to detail. We make sure each home is properly maintained, guests are well taken care of, and owners always know what is happening with their property. You can also learn more about who you’ll be dealing with.":
    "Nuestro enfoque de administración en Punta Mita se basa en consistencia, comunicación directa y atención al detalle. Nos aseguramos de que cada casa esté bien mantenida, que los huéspedes estén bien atendidos y que los propietarios siempre sepan qué está pasando con su propiedad. También puedes conocer más sobre con quién vas a tratar.",
  "Good property management is not about making things sound complicated. It is about being present, paying attention, and making practical decisions before small issues become bigger ones.":
    "Una buena administración no se trata de hacer que todo suene complicado. Se trata de estar presentes, poner atención y tomar decisiones prácticas antes de que los problemas pequeños se vuelvan grandes.",
  "Owners work directly with people who know the home, understand the priorities, and can explain what is happening without vague answers or layers of staff.":
    "Los propietarios trabajan directamente con personas que conocen la casa, entienden las prioridades y pueden explicar lo que está pasando sin respuestas vagas ni capas de personal.",
  "This is someone’s home, not just an asset": "Esta es la casa de alguien, no solo un activo",
  "Decisions affect comfort, costs, and rental results": "Las decisiones afectan la comodidad, los costos y los resultados en renta",
  "Responsiveness matters as much as execution": "La capacidad de respuesta importa tanto como la ejecución",
  "See Who You’ll Be Dealing With": "Ve Con Quién Vas a Tratar",
  "— This is someone’s home": "— Esta es la casa de alguien",
  "— Decisions affect both comfort and finances": "— Las decisiones afectan tanto la comodidad como las finanzas",
  "— Responsiveness matters as much as execution": "— La capacidad de respuesta importa tanto como la ejecución",
  "Property Care": "Cuidado de la Propiedad",
  "& Maintenance": "y Mantenimiento",
  "Property Care & Maintenance": "Cuidado y Mantenimiento de la Propiedad",
  "We keep a close eye on the home, coordinate trusted local vendors, and handle the practical work that protects the property over time.":
    "Mantenemos una supervisión cercana de la casa, coordinamos proveedores locales de confianza y nos encargamos del trabajo práctico que protege la propiedad con el tiempo.",
  "Regular inspections and property oversight": "Inspecciones regulares y supervisión de la propiedad",
  "Preventive maintenance to avoid larger issues": "Mantenimiento preventivo para evitar problemas mayores",
  "Coordination with trusted local vendors": "Coordinación con proveedores locales de confianza",
  "Quick follow-up when something needs attention": "Seguimiento rápido cuando algo requiere atención",
  "— Regular inspections and oversight": "— Inspecciones regulares y supervisión",
  "— Preventive maintenance to avoid larger issues": "— Mantenimiento preventivo para evitar problemas mayores",
  "— Coordination with trusted local vendors": "— Coordinación con proveedores locales de confianza",
  "Guest Communication": "Comunicación con Huéspedes",
  "& Coordination": "y Coordinación",
  "Guest Communication & Coordination": "Comunicación y Coordinación con Huéspedes",
  "Guests remember how quickly they are helped. We support the stay with clear communication, arrival coordination, and local availability when needed.":
    "Los huéspedes recuerdan qué tan rápido se les atiende. Apoyamos la estancia con comunicación clara, coordinación de llegadas y disponibilidad local cuando se necesita.",
  "Fast, personal responses to guest inquiries": "Respuestas rápidas y personales a consultas de huéspedes",
  "Fast, personal responses to inquiries": "Respuestas rápidas y personales a consultas",
  "Clear check-in and stay coordination": "Coordinación clara de llegada y estancia",
  "On-call availability during stays": "Disponibilidad durante las estancias",
  "Concierge and local support coordination": "Coordinación de concierge y apoyo local",
  "— Fast, personal responses to inquiries": "— Respuestas rápidas y personales a consultas",
  "— Clear check-in and stay coordination": "— Coordinación clara de llegada y estancia",
  "— On-call availability during stays": "— Disponibilidad durante las estancias",
  "Cleaning": "Limpieza",
  "& Readiness": "y Preparación",
  "Cleaning & Readiness": "Limpieza y Preparación",
  "A luxury stay depends on details. We coordinate cleaning, supplies, laundry, and property readiness so the home feels cared for between stays.":
    "Una estancia de lujo depende de los detalles. Coordinamos limpieza, insumos, lavandería y preparación para que la casa se sienta cuidada entre estancias.",
  "Cleaning coordination and quality control": "Coordinación de limpieza y control de calidad",
  "Supply management without overbuying": "Manejo de insumos sin compras excesivas",
  "Laundry and pre-arrival preparation": "Lavandería y preparación antes de llegadas",
  "Property readiness between guest stays": "Preparación de la propiedad entre estancias",
  "Property readiness between stays": "Preparación de la propiedad entre estancias",
  "— Cleaning coordination and quality control": "— Coordinación de limpieza y control de calidad",
  "— Property readiness between stays": "— Preparación de la propiedad entre estancias",
  "— Supply management without overbuying": "— Manejo de insumos sin compras excesivas",
  "Financial Clarity": "Claridad Financiera",
  "& Reporting": "y Reportes",
  "Financial Clarity & Reporting": "Claridad Financiera y Reportes",
  "Owners should understand what is being spent, why it matters, and how the home is performing. We keep reporting clear and decisions transparent.":
    "Los propietarios deben entender en qué se está gastando, por qué importa y cómo está funcionando la casa. Mantenemos los reportes claros y las decisiones transparentes.",
  "Clear, understandable owner reports": "Reportes claros y fáciles de entender para propietarios",
  "Clear, understandable reports": "Reportes claros y fáciles de entender",
  "Transparent accounting and expense visibility": "Contabilidad transparente y visibilidad de gastos",
  "Transparent accounting": "Contabilidad transparente",
  "Thoughtful fiscal coordination when needed": "Coordinación fiscal cuidadosa cuando se requiera",
  "No hidden fees or inflated operating costs": "Sin cargos ocultos ni costos operativos inflados",
  "— Transparent accounting": "— Contabilidad transparente",
  "— Clear, understandable reports": "— Reportes claros y fáciles de entender",
  "— Thoughtful fiscal coordination when needed": "— Coordinación fiscal cuidadosa cuando se requiera",
  "Good management isn’t about doing more. It’s about doing the right things consistently and being available when it matters.":
    "Una buena administración no se trata de hacer más. Se trata de hacer lo correcto de forma constante y estar disponible cuando importa.",
  "Good management means doing the right things consistently — and being available when it matters.":
    "Una buena administración significa hacer lo correcto de forma constante y estar disponible cuando importa.",
  "If you want a team that knows your home, answers directly, cares about rental results, and keeps costs clear, we’d be happy to talk.":
    "Si quieres un equipo que conozca tu casa, responda directamente, se preocupe por los resultados en renta y mantenga los costos claros, con gusto hablamos contigo.",
  "Start a Conversation": "Iniciar una Conversación",

  // Properties
  "Homes We Currently Look After": "Casas Que Actualmente Administramos",
  "Managed properties in Punta Mita": "Propiedades administradas en Punta Mita",
  "Each property you see here is personally managed and closely overseen. We don’t list properties we don’t manage—and we don’t manage more than we can handle well.":
    "Cada propiedad que ves aquí es administrada personalmente y supervisada de cerca. No mostramos propiedades que no administramos, y no administramos más de lo que podemos atender bien.",
  "Each property here is personally managed and closely overseen. We do not list homes we do not manage — and we do not manage more than we can handle well.":
    "Cada propiedad aquí es administrada personalmente y supervisada de cerca. No mostramos casas que no administramos, y no administramos más de lo que podemos atender bien.",
  "Limited portfolio": "Portafolio limitado",
  "We only take on homes we can properly look after.": "Solo tomamos casas que podemos cuidar bien.",
  "Direct oversight": "Supervisión directa",
  "Owners work with people who know the property.": "Los propietarios trabajan con personas que conocen la propiedad.",
  "Guest experience and property care work together.": "La experiencia del huésped y el cuidado de la propiedad van de la mano.",
  "View property": "Ver propiedad",
  "Ocean-view villa in Punta Mita with private pool, daily service, and access to premier beach clubs.":
    "Villa con vista al mar en Punta Mita, alberca privada, servicio diario y acceso a clubes de playa premium.",
  "Spacious coastal home designed for relaxed stays, with open living areas and seamless indoor-outdoor flow.":
    "Casa costera amplia diseñada para estancias relajadas, con espacios abiertos y una conexión natural entre interior y exterior.",
  "Contemporary villa with clean architectural lines, ocean views, and thoughtfully designed living spaces.":
    "Villa contemporánea con líneas arquitectónicas limpias, vistas al mar y espacios cuidadosamente diseñados.",
  "Comfortable villa within Punta Mita, offering privacy, convenience, and close access to golf and beach clubs.":
    "Villa cómoda dentro de Punta Mita, con privacidad, conveniencia y acceso cercano a golf y clubes de playa.",
  "Our portfolio grows through trust and referrals—not volume.":
    "Nuestro portafolio crece por confianza y recomendaciones, no por volumen.",
  "Our portfolio grows through trust and referrals — not volume.":
    "Nuestro portafolio crece por confianza y recomendaciones, no por volumen.",
  "If you are looking for a team that will know your home, answer directly, protect the property, and care about rental results, we’d be happy to talk.":
    "Si buscas un equipo que conozca tu casa, responda directamente, proteja la propiedad y se preocupe por los resultados en renta, con gusto hablamos contigo.",

  // Discover page
  "Beyond Traveling Concierge": "Concierge de Beyond Traveling",
  "Discover Punta Mita": "Descubre Punta Mita",
  "Discover Punta Mita.": "Descubre Punta Mita.",
  "We’ll help you plan the good parts.": "Te ayudamos a planear lo mejor de tu estancia.",
  "A curated collection of private experiences, ocean days, wellness rituals, chef-led dining, golf, beach clubs, and special moments designed for guests staying in Punta Mita.":
    "Una selección de experiencias privadas, días en el mar, rituales de bienestar, cenas con chef, golf, clubes de playa y momentos especiales para huéspedes en Punta Mita.",
  "Private ocean days, wellness, beach clubs, golf, chef-led dining, family adventures, nightlife, and special moments arranged around the way you want to enjoy your stay.":
    "Días privados en el mar, bienestar, clubes de playa, golf, cenas con chef, aventuras familiares, vida nocturna y momentos especiales organizados alrededor de la forma en que quieres disfrutar tu estancia.",
  "Ask Us to Plan Your Stay": "Pídenos Ayuda Para Planear Tu Estancia",
  "View Experiences": "Ver Experiencias",
  "Local recommendations": "Recomendaciones locales",
  "Real options that make sense for your group.": "Opciones reales que tienen sentido para tu grupo.",
  "Easy planning": "Planeación fácil",
  "We help with the details before and during your stay.": "Te ayudamos con los detalles antes y durante tu estancia.",
  "Clear expectations": "Expectativas claras",
  "No vague suggestions. We explain what each experience is like.":
    "Sin recomendaciones vagas. Te explicamos cómo es cada experiencia.",
  "Experiences": "Experiencias",
  "Curated for the way you want to experience Punta Mita":
    "Pensado para la forma en que quieres vivir Punta Mita",
  "From private days on the water to quiet wellness rituals, family adventures, chef-prepared dinners, and once-in-a-trip celebrations, each category brings together the experiences most relevant to a luxury stay in Punta Mita.":
    "Desde días privados en el agua hasta rituales tranquilos de bienestar, aventuras familiares, cenas preparadas por chef y celebraciones especiales, cada categoría reúne experiencias relevantes para una estancia de lujo en Punta Mita.",
  "Choose a category below and explore the kinds of experiences we can help arrange. Some days are quiet and relaxed. Others are for celebrating. The point is to make the plan fit the people.":
    "Elige una categoría y explora los tipos de experiencias que podemos ayudarte a organizar. Algunos días son tranquilos y relajados. Otros son para celebrar. La idea es que el plan se adapte a las personas.",
  "Explore experiences": "Explorar experiencias",
  "Tell us what kind of stay you want. We’ll help shape the plan.":
    "Dinos qué tipo de estancia quieres. Te ayudamos a darle forma al plan.",
  "Whether you want a quiet villa dinner, a private yacht day, a family adventure, or a full itinerary, we’ll keep it practical, personal, and easy to understand.":
    "Ya sea que quieras una cena tranquila en la villa, un día privado en yate, una aventura familiar o un itinerario completo, lo mantenemos práctico, personal y fácil de entender.",

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
  "Curated nearby outings that are close enough or special enough to make sense for Punta Mita renters.":
    "Salidas cercanas organizadas que tienen sentido para huéspedes en Punta Mita por cercanía o por ser experiencias especiales.",
  "Seasonal & Special Events": "Temporadas y Eventos Especiales",
  "Punta Mita seasonal events, holidays, golf events, polo season, fishing tournaments, and private celebrations.":
    "Eventos de temporada en Punta Mita, días festivos, golf, temporada de polo, torneos de pesca y celebraciones privadas.",
  "High-End / VIP Experiences": "Experiencias High-End / VIP",
  "Private aviation, scenic flights, celebration proposals, VIP hosting, security, drivers, and full-stay concierge planning.":
    "Aviación privada, vuelos escénicos, propuestas especiales, atención VIP, seguridad, choferes y planeación concierge para toda la estancia.",

  // About
  "Who We Are": "Quiénes Somos",
  "Who We Are.": "Quiénes Somos.",
  "About Beyond Traveling": "Acerca de Beyond Traveling",
  "People You Can Actually Reach.": "Personas Con Las Que Sí Puedes Hablar.",
  "Beyond Traveling was created by people who believe property management works best when it’s personal, present, and honest.":
    "Beyond Traveling fue creado por personas que creen que la administración de propiedades funciona mejor cuando es personal, presente y honesta.",
  "Beyond Traveling was created by a local team focused on providing high-quality property management in Punta Mita. We believe management works best when it’s personal, present, and honest, with direct communication and consistent oversight of every property.":
    "Beyond Traveling fue creado por un equipo local enfocado en ofrecer administración de propiedades de alta calidad en Punta Mita. Creemos que la administración funciona mejor cuando es personal, presente y honesta, con comunicación directa y supervisión constante de cada propiedad.",
  "Beyond Traveling was created by a local team focused on personal, present, and honest property management in Punta Mita. We believe owners should know who is caring for their home, what is happening, and why decisions are being made.":
    "Beyond Traveling fue creado por un equipo local enfocado en una administración personal, presente y honesta en Punta Mita. Creemos que los propietarios deben saber quién cuida su casa, qué está pasando y por qué se toman ciertas decisiones.",
  "Clear accountability": "Responsabilidad clara",
  "No vague answers or disappearing after onboarding.": "Sin respuestas vagas ni desaparecer después del inicio.",
  "Our Story.": "Nuestra Historia.",
  "A More Personal Approach": "Un Enfoque Más Personal",
  "Our Story. A More Personal Approach.": "Nuestra Historia. Un Enfoque Más Personal.",
  "We started this project after seeing how often homeowners felt disconnected from the people managing their homes.":
    "Comenzamos este proyecto al ver con qué frecuencia los propietarios se sentían desconectados de las personas que administraban sus casas.",
  "We started this project after seeing how often homeowners felt disconnected from the people managing their homes in Punta Mita. Our goal is to provide a more reliable and hands-on property management experience, where owners feel informed and supported at all times. You can also learn more about how we manage properties on our Services.":
    "Comenzamos este proyecto después de ver cuántos propietarios se sentían desconectados de las personas que administraban sus casas en Punta Mita. Nuestro objetivo es ofrecer una experiencia de administración más confiable y cercana, donde los propietarios se sientan informados y apoyados en todo momento. También puedes conocer más sobre cómo administramos propiedades en nuestra página de Servicios.",
  "We started this project after seeing how often homeowners felt disconnected from the people managing their homes in Punta Mita. Too many owners were left waiting for updates, unclear about costs, or unsure who was actually looking after the property.":
    "Comenzamos este proyecto después de ver cuántos propietarios se sentían desconectados de las personas que administraban sus casas en Punta Mita. Muchos se quedaban esperando actualizaciones, sin claridad sobre costos o sin saber quién estaba realmente cuidando la propiedad.",
  "Our goal was simple: create a way of working that feels direct, transparent, and genuinely involved in the day-to-day of each property.":
    "Nuestro objetivo fue simple: crear una forma de trabajar directa, transparente y realmente involucrada en el día a día de cada propiedad.",
  "See How We Manage Properties": "Ver Cómo Administramos Propiedades",
  "Our Philosophy": "Nuestra Filosofía",
  "Integrity and care guide every decision we make.": "La integridad y el cuidado guían cada decisión que tomamos.",
  "Good management is not about making things complicated. It is about being present, communicating clearly, and doing the right things consistently.":
    "Una buena administración no se trata de hacer las cosas complicadas. Se trata de estar presentes, comunicar con claridad y hacer lo correcto de forma constante.",
  "We believe:": "Creemos que:",
  "What we believe:": "Lo que creemos:",
  "Transparency builds trust.": "La transparencia construye confianza.",
  "Availability prevents problems.": "La disponibilidad previene problemas.",
  "Long-term relationships matter more than fast growth.": "Las relaciones a largo plazo importan más que el crecimiento rápido.",
  "• Transparency builds trust": "• La transparencia construye confianza",
  "• Availability prevents problems": "• La disponibilidad previene problemas",
  "• Long-term relationships matter more than fast growth": "• Las relaciones a largo plazo importan más que el crecimiento rápido",
  "What Makes Us Different:": "Qué Nos Hace Diferentes:",
  "What makes us different:": "Qué nos hace diferentes:",
  "Local presence in Punta Mita.": "Presencia local en Punta Mita.",
  "A limited number of properties.": "Un número limitado de propiedades.",
  "Direct communication with owners.": "Comunicación directa con propietarios.",
  "Real accountability when something needs attention.": "Responsabilidad real cuando algo requiere atención.",
  "• Local presence in Punta Mita": "• Presencia local en Punta Mita",
  "• Limited number of properties": "• Número limitado de propiedades",
  "• Direct communication with owners": "• Comunicación directa con propietarios",
  "• Real accountability": "• Responsabilidad real",
  "Let’s Talk": "Hablemos",
  "Let’s see if we’re the right people for your home.":
    "Veamos si somos las personas adecuadas para tu casa.",
  "If you want direct communication, clear pricing, local oversight, and a team that stays involved, we’d be happy to talk.":
    "Si quieres comunicación directa, precios claros, supervisión local y un equipo que se mantenga involucrado, con gusto hablamos contigo.",

  // Contact
  "Let’s Have a Conversation": "Hablemos",
  "Let’s Have a Conversation.": "Hablemos.",
  "Contact Beyond Traveling": "Contacta a Beyond Traveling",
  "No pressure. No sales pitch.": "Sin presión. Sin discurso de venta.",
  "Whether you’re actively looking for a new management team or just want to understand your options, we’re happy to talk.":
    "Ya sea que estés buscando activamente un nuevo equipo de administración o simplemente quieras conocer tus opciones, con gusto hablamos contigo.",
  "Whether you’re actively looking for a new property management team in Punta Mita or just want to understand your options, we’re happy to talk. You can also explore how we work on our Services.":
    "Ya sea que estés buscando activamente un nuevo equipo de administración en Punta Mita o simplemente quieras entender tus opciones, con gusto hablamos contigo. También puedes explorar cómo trabajamos en nuestra página de Servicios.",
  "Whether you are actively looking for a new property management team in Punta Mita or just want to understand your options, we are happy to talk. You can also explore how we work on our":
    "Ya sea que estés buscando activamente un nuevo equipo de administración en Punta Mita o simplemente quieras entender tus opciones, con gusto hablamos contigo. También puedes explorar cómo trabajamos en nuestra página de",
  "page.": ".",
  "Get in Touch": "Ponte en Contacto",
  "We keep communication simple and direct. You can reach us through any of the options below.":
    "Mantenemos la comunicación simple y directa. Puedes contactarnos por cualquiera de las opciones siguientes.",
  "We keep communication simple and direct. Tell us a little about your property, what you are looking for, or what has not been working with your current setup.":
    "Mantenemos la comunicación simple y directa. Cuéntanos un poco sobre tu propiedad, lo que buscas o lo que no ha funcionado con tu esquema actual.",
  "Email": "Correo",
  "Phone / WhatsApp": "Teléfono / WhatsApp",
  "Email: contact@beyondtraveling.com": "Correo: contact@beyondtraveling.com",
  "Phone / WhatsApp: +52 33 1361 9889": "Teléfono / WhatsApp: +52 33 1361 9889",
  "We’ll get back to you as soon as possible.": "Te responderemos lo antes posible.",
  "What happens next?": "¿Qué pasa después?",
  "— We read your message carefully.": "— Leemos tu mensaje con atención.",
  "— We reply directly, usually by email or WhatsApp.": "— Respondemos directamente, normalmente por correo o WhatsApp.",
  "— If it makes sense, we schedule a simple conversation.": "— Si tiene sentido, agendamos una conversación simple.",
  "No Pressure. No Sales Pitch": "Sin Presión. Sin Discurso de Venta",
  "Just an honest conversation about your property.": "Solo una conversación honesta sobre tu propiedad.",
  "Message us on WhatsApp": "Escríbenos por WhatsApp",
  "A simple conversation is usually the best place to start.":
    "Una conversación simple suele ser el mejor punto de partida.",
  "We can talk about your home, your current setup, rental goals, communication, costs, and whether we are the right fit.":
    "Podemos hablar sobre tu casa, tu esquema actual, objetivos de renta, comunicación, costos y si somos el equipo adecuado.",
  "Name": "Nombre",
  "Your name": "Tu nombre",
  "you@example.com": "tu@correo.com",
  "Message": "Mensaje",
  "Tell us a little about your property or what you need help with.":
    "Cuéntanos un poco sobre tu propiedad o en qué necesitas ayuda.",
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
  "We manage luxury homes in Punta Mita with clear communication, thoughtful property care, reliable guest support, transparent reporting, and no hidden fees.":
    "Administramos casas de lujo en Punta Mita con comunicación clara, cuidado atento de la propiedad, apoyo confiable a huéspedes, reportes transparentes y sin cargos ocultos.",

  "Inspections, maintenance, vendors, and readiness.":
    "Inspecciones, mantenimiento, proveedores y preparación.",

  "Fast replies, arrivals, coordination, and local help.":
    "Respuestas rápidas, llegadas, coordinación y apoyo local.",

  // About page current value cards
  "Local presence": "Presencia local",

  "Owners deal with people, not layers.":
    "Los propietarios tratan con personas, no con capas de personal.",

  "We stay close to the homes we manage.":
    "Nos mantenemos cerca de las casas que administramos.",

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
  "Las Palmas 28, a warm and elegant three-bedroom residence, is located within the Las Palmas community of Punta Mita. Thoughtfully designed for comfort and relaxed coastal living, this inviting home is ideal for families or small groups seeking privacy, daily service, and access to Punta Mita’s world-class beach clubs and amenities.":
    "Las Palmas 28 es una residencia cálida y elegante de tres recámaras ubicada dentro de la comunidad Las Palmas en Punta Mita. Diseñada cuidadosamente para la comodidad y una vida costera relajada, esta casa es ideal para familias o grupos pequeños que buscan privacidad, servicio diario y acceso a los clubes de playa y amenidades de primer nivel de Punta Mita.",

  "Las Palmas 28 offers a serene and effortless stay, where natural textures, soft neutral tones, and open spaces create an atmosphere of calm from the moment you arrive. The home flows seamlessly between indoor and outdoor living, with comfortable seating areas, shaded terraces, and views of lush tropical surroundings":
    "Las Palmas 28 ofrece una estancia tranquila y sencilla, donde las texturas naturales, los tonos neutros suaves y los espacios abiertos crean una sensación de calma desde el momento en que llegas. La casa conecta de forma natural los espacios interiores y exteriores, con áreas cómodas para descansar, terrazas sombreadas y vistas a un entorno tropical lleno de vegetación.",

  "2 Full size Beds plus 2 Twin Beds":
    "2 Camas Matrimoniales y 2 Camas Individuales",

  "There is an extra fee of $80 USD per night for any additional person after 8 guests (Except on peak weeks)":
    "Hay un cargo extra de $80 USD por noche por cada persona adicional después de 8 huéspedes (excepto en semanas pico)",

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
    "Explorar experiencias High-End / VIP en Punta Mita"
};

const normalize = (value: string) => value.replace(/\s+/g, " ").trim();

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

        const translated = es[key];
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

    const translated = es[key];
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
  const [language, setLanguageState] = React.useState<Language>("en");

  React.useEffect(() => {
    const saved = window.localStorage.getItem("bt-language");

    if (saved === "en" || saved === "es") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = React.useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("bt-language", nextLanguage);
    }
  }, []);

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
