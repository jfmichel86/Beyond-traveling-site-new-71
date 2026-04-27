"use client";

import React from "react";

type Language = "en" | "es";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

const es: Record<string, string> = {
  "HOME": "INICIO",
  "SERVICES": "SERVICIOS",
  "PROPERTIES": "PROPIEDADES",
  "ABOUT": "NOSOTROS",
  "CONTACT": "CONTACTO",
  "Home": "Inicio",
  "Services": "Servicios",
  "Properties": "Propiedades",
  "About": "Nosotros",
  "Contact": "Contacto",
  "Navigation": "Navegación",
  "All rights reserved": "Todos los derechos reservados",

  "Property Management in Punta Mita": "Administración de Propiedades en Punta Mita",
  "Done Personally. Done Right.": "Personal. Cercana. Bien Hecha.",
  "We work directly with homeowners to care for their homes, respond quickly to guests, and manage rentals thoughtfully—without hidden fees or distance from your property.": 
    "Trabajamos directamente con propietarios para cuidar sus casas, responder rápidamente a los huéspedes y administrar las rentas con criterio, sin cargos ocultos ni distancia con tu propiedad.",
  "Discover How We Work": "Descubre Cómo Trabajamos",
  "Talk With Us About Your Property": "Hablemos de Tu Propiedad",
  "A More Personal Way to Manage Your Home": "Una Forma Más Personal de Administrar Tu Casa",
  "Beyond Traveling isn’t built like a traditional property management company.": "Beyond Traveling no está construido como una empresa tradicional de administración de propiedades.",
  "We’re a small, hands-on team that works closely with a limited number of homeowners. That allows us to stay available, respond quickly, and treat each property with the attention it deserves—not as a number, but as someone’s home.": 
   "Somos un equipo pequeño y cercano que trabaja de forma directa con un número limitado de propietarios. Eso nos permite estar disponibles, responder rápido y tratar cada propiedad con la atención que merece: no como un número, sino como la casa de alguien.",
  "When owners work with us, they work with people, not a system.": 
  "Cuando los propietarios trabajan con nosotros, trabajan con personas, no con un sistema.",
  "We Don’t “Manage” Homes.": "No Solo “Administramos” Casas.",
  "We Look After Them With You": "Las Cuidamos Contigo",
  "Good property management feels like teamwork.": "Una buena administración se siente como trabajo en equipo.",
  "We get to know you, your home, and your priorities. Some owners care most about preserving the property. Others want strong rental performance. 
    Most want both. Our role is to align with you, communicate clearly, and make decisions as if the home were our own.": 
    "Nos tomamos el tiempo de conocer tu casa, tus prioridades y la forma en que quieres manejarla. Algunos propietarios buscan solamente conservar la propiedad en perfecto estado. Otros buscan un buen desempeño en rentas. La mayoría quiere ambas cosas. Nuestro papel es alinearnos contigo, comunicarnos con claridad y tomar decisiones como si la casa fuera nuestra.",
  "You’ll always know:": "Siempre sabrás:",
  "Who is taking care of your property": "Quién está cuidando tu propiedad",
  "What’s happening day to day": "Qué está pasando día a día",
  "Why decisions are being made": "Por qué se toman ciertas decisiones",
  "And you’ll always be able to reach us.": "Y siempre podrás comunicarte con nosotros.",
  "Clear Pricing.": "Precios Claros.",
  "No Surprises": "Sin Sorpresas",
  "Many owners come to us after feeling frustrated by unclear charges or constantly rising costs.": 
    "Muchos propietarios llegan con nosotros después de sentirse frustrados por cargos poco claros o costos que suben constantemente.",
  "We believe trust starts with transparency.": 
    "Creemos que la confianza empieza con la transparencia.",
  "Our fees are straightforward, and we actively look for ways to save owners money, including:": 
    "Nuestros honorarios son claros, y buscamos activamente formas de ahorrar dinero a los propietarios, incluyendo:",
  "Avoiding unnecessary maintenance work": "Evitar trabajos de mantenimiento innecesarios",
  "Managing cleaning and supplies efficiently": "Administrar limpieza e insumos de forma eficiente",
  "Being thoughtful about operational and fiscal decisions": "Tomar decisiones operativas y fiscales con cuidado",
  "We don’t inflate costs—and we don’t benefit when expenses go up.": "No inflamos costos, y no nos beneficiamos cuando los gastos aumentan.",
  "How Our Management Works": "Cómo Funciona Nuestra Administración",
  "What We Take Care Of": "De Qué Nos Encargamos",
  "So you don’t have to worry about the day-to-day.": "Para que no tengas que preocuparte por el día a día.",
  "Regular maintenance and oversight": "Mantenimiento regular y supervisión",
  "Fast, personal response to guest inquiries": "Respuesta rápida y personal a consultas de huéspedes",
  "Guest coordination and concierge support": "Coordinación de huéspedes y apoyo de concierge",
  "Cleaning and property readiness": "Limpieza y preparación de la propiedad",
  "Accounting, reporting, and owner updates": "Contabilidad, reportes y actualizaciones para propietarios",
  "Most importantly: we stay involved.": "Lo más importante: seguimos involucrados.",
  "We don’t disappear after onboarding, and we don’t hand your property off to layers of staff.": "No desaparecemos después del inicio, y no dejamos tu propiedad en manos de múltiples capas de personal .",
  "We’re Here.": "Estamos Aquí.",
  "And We Answer": "Y Respondemos",
  "We live and work in Punta Mita, and we’re close to the homes we manage.": "Vivimos y trabajamos en Punta Mita, cerca de las casas que administramos.",
  "That means:": "Eso significa:",
  "Faster responses to guests": "Respuestas más rápidas a los huéspedes",
  "Quick action when something needs attention": "Acción rápida cuando algo requiere atención",
  "Real relationships with local vendors": "Relaciones reales con proveedores locales",
  "No “we’ll check on that Monday” mentality": "Nada de “lo revisamos el lunes”",
  "Good rentals depend on responsiveness.": "El buen desempeño en rentas depende de la capacidad de respuesta.",
  "Good ownership depends on availability.": "Una buena experiencia como propietario depende de la disponibilidad.",
  "We take both seriously.": "Nos tomamos ambas cosas en serio.",
  "Let’s See If We’re a Good Fit": "Veamos Si Somos el Equipo Adecuado",
  "If you’re looking for a team that will actually answer, stay involved, and treat your home with respect, we’d be happy to talk.": "Si buscas un equipo que realmente responda, se mantenga involucrado y trate tu casa con respeto, con gusto hablamos contigo.",
  "No pressure. Just a conversation.": "Sin presión. Solo una conversación.",
  "Contact Us": "Contáctanos",

  "Who We Are": "Quiénes Somos",
  "Beyond Traveling was created by people who believe property management works best when it’s personal, present, and honest.": "Beyond Traveling fue creado por personas que creen que la administración de propiedades funciona mejor cuando es personal, presente y honesta.",
  "Our Story.": "Nuestra Historia.",
  "A More Personal Approach": "Un Enfoque Más Personal",
  "We started this project after seeing how often homeowners felt disconnected from the people managing their homes.": "Comenzamos este proyecto al ver con qué frecuencia los propietarios se sentían desconectados de las personas que administraban sus casas.",
  "Our goal was simple: create a way of working that feels direct, transparent, and genuinely involved in the day-to-day of each property.": "Nuestro objetivo fue simple: crear una forma de trabajar directa, transparente y realmente involucrada en el día a día de cada propiedad.",
  "Our Philosophy": "Nuestra Filosofía",
  "Integrity and care guide every decision we make.": "La integridad y el cuidado guían cada decisión que tomamos.",
  "We believe:": "Creemos que:",
  "• Transparency builds trust": "• La transparencia construye confianza",
  "• Availability prevents problems": "• La disponibilidad previene problemas",
  "• Long-term relationships matter more than fast growth": "• Las relaciones a largo plazo importan más que el crecimiento rápido",
  "What Makes Us Different:": "Qué Nos Hace Diferentes:",
  "• Local presence in Punta Mita": "• Presencia local en Punta Mita",
  "• Limited number of properties": "• Número limitado de propiedades",
  "• Direct communication with owners": "• Comunicación directa con propietarios",
  "• Real accountability": "• Responsabilidad real",
  "Let’s Talk": "Hablemos",

  "How We Take Care of Your Property": "Cómo Cuidamos Tu Propiedad",
  "We focus on the details that make ownership easier and rentals perform better—while keeping communication clear and costs under control.": "Nos enfocamos en los detalles que hacen más fácil ser propietario y ayudan a que las rentas funcionen mejor, manteniendo la comunicación clara y los costos bajo control.",
  "Our": "Nuestro",
  "Approach": "Enfoque",
  "We manage each property with care, consistency, and direct communication. Our approach is built around the idea that a home should feel well looked after, whether the owner is nearby or away.": "Administramos cada propiedad con cuidado, consistencia y comunicación directa. Nuestro enfoque parte de la idea de que una casa debe sentirse bien atendida, ya sea que el propietario esté cerca o fuera.",
  "— This is someone’s home": "— Esta es la casa de alguien",
  "— Decisions affect both comfort and finances": "— Las decisiones afectan tanto la comodidad como las finanzas",
  "— Responsiveness matters as much as execution": "— La capacidad de respuesta importa tanto como la ejecución",
  "Property Care": "Cuidado de la Propiedad",
  "& Maintenance": "y Mantenimiento",
  "— Regular inspections and oversight": "— Inspecciones regulares y supervisión",
  "— Preventive maintenance to avoid larger issues": "— Mantenimiento preventivo para evitar problemas mayores",
  "— Coordination with trusted local vendors": "— Coordinación con proveedores locales de confianza",
  "Guest Communication": "Comunicación con Huéspedes",
  "& Coordination": "y Coordinación",
  "— Fast, personal responses to inquiries": "— Respuestas rápidas y personales a consultas",
  "— Clear check-in and stay coordination": "— Coordinación clara de llegada y estancia",
  "— On-call availability during stays": "— Disponibilidad durante las estancias",
  "Cleaning": "Limpieza",
  "& Readiness": "y Preparación",
  "— Cleaning coordination and quality control": "— Coordinación de limpieza y control de calidad",
  "— Property readiness between stays": "— Preparación de la propiedad entre estancias",
  "— Supply management without overbuying": "— Manejo de insumos sin compras excesivas",
  "Financial Clarity": "Claridad Financiera",
  "& Reporting": "y Reportes",
  "— Transparent accounting": "— Contabilidad transparente",
  "— Clear, understandable reports": "— Reportes claros y fáciles de entender",
  "— Thoughtful fiscal coordination when needed": "— Coordinación fiscal cuidadosa cuando se requiera",
  "Good management isn’t about doing more. It’s about doing the right things consistently and being available when it matters.": "Una buena administración no se trata de hacer más. Se trata de hacer lo correcto de forma constante y estar disponible cuando importa.",
  "Start a Conversation": "Iniciar una Conversación",

  "Homes We Currently Look After": "Casas Que Actualmente Administramos",
  "Each property you see here is personally managed and closely overseen. We don’t list properties we don’t manage—and we don’t manage more than we can handle well.": "Cada propiedad que ves aquí es administrada personalmente y supervisada de cerca. No mostramos propiedades que no administramos, y no administramos más de lo que podemos atender bien.",
  "Our portfolio grows through trust and referrals—not volume.": "Nuestro portafolio crece por confianza y recomendaciones, no por volumen.",
  "From $2,900": "Desde $2,900",
  "From $5,200": "Desde $5,200",
  "From $7,800": "Desde $7,800",
  "Punta Mita, Mexico": "Punta Mita, México",

  "Let’s Have a Conversation": "Hablemos",
  "Whether you’re actively looking for a new management team or just want to understand your options, we’re happy to talk.": "Ya sea que estés buscando activamente un nuevo equipo de administración o simplemente quieras conocer tus opciones, con gusto hablamos contigo.",
  "Get in Touch": "Ponte en Contacto",
  "We keep communication simple and direct. You can reach us through any of the options below.": "Mantenemos la comunicación simple y directa. Puedes contactarnos por cualquiera de las opciones siguientes.",
  "Email: contact@beyondtraveling.com": "Correo: contact@beyondtraveling.com",
  "Phone / WhatsApp: +52 33 1361 9889": "Teléfono / WhatsApp: +52 33 1361 9889",
  "We’ll get back to you as soon as possible.": "Te responderemos lo antes posible.",
  "No Pressure. No Sales Pitch": "Sin Presión. Sin Discurso de Venta",
  "Just an honest conversation about your property.": "Solo una conversación honesta sobre tu propiedad.",
  "Message us on WhatsApp": "Escríbenos por WhatsApp",
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
  "Calendar shown for reference. Final availability confirmed upon request.": "Calendario mostrado como referencia. La disponibilidad final se confirma al solicitarla.",
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
  "Rates do not include Staff Gratuities, recommended at 10% to 15% of the reservation pre-tax total.": "Las tarifas no incluyen propinas para el personal; se recomienda entre 10% y 15% del total de la reservación antes de impuestos.",
  "Taxes: 16% VAT + 5% tourism tax may apply.": "Impuestos: puede aplicar 16% de IVA + 5% de impuesto turístico.",
  "Service fee may apply.": "Puede aplicar cargo por servicio.",
  "The rental of the property requires a refundable Security Deposit equivalent to one night.": "La renta de la propiedad requiere un depósito de seguridad reembolsable equivalente a una noche.",
  "There is an extra fee of $70 USD per night for any additional person after 9 guests (Except on peak weeks)": "Hay un cargo extra de $70 USD por noche por cada persona adicional después de 9 huéspedes (excepto en semanas pico)",
  "There is an extra fee of $100 USD per night for any additional person after 9 guests (Except on peak weeks)": "Hay un cargo extra de $100 USD por noche por cada persona adicional después de 9 huéspedes (excepto en semanas pico)",
  "There is an extra fee of $100 USD per night for any additional person after 8 guests (Except on peak weeks)": "Hay un cargo extra de $100 USD por noche por cada persona adicional después de 8 huéspedes (excepto en semanas pico)",
  "Ready to Check Availability?": "¿Listo para Revisar Disponibilidad?",
  "Send us a message and we’ll confirm availability and details shortly.": "Envíanos un mensaje y confirmaremos disponibilidad y detalles pronto.",

  "Villa Amore is a stunning four-bedroom sanctuary located in Punta Mita’s exclusive Iyari community. This exquisite 2 level villa features unobstructed views of the Pacific Ocean, providing a serene and picturesque backdrop for your getaway. Every living space is meticulously crafted to enhance relaxation and provide ultimate comfort, ensuring an unforgettable stay. With daily service, ocean views, and access to Punta Mita’s premier golf and beach clubs, Villa Amore captures the essence of relaxed luxury.": "Villa Amore es un espectacular refugio de cuatro recámaras ubicado en la exclusiva comunidad de Iyari en Punta Mita. Esta exquisita villa de dos niveles cuenta con vistas despejadas al Océano Pacífico, creando un entorno sereno y memorable para tu estancia. Cada espacio está cuidadosamente diseñado para favorecer la relajación y ofrecer el máximo confort. Con servicio diario, vistas al mar y acceso a los principales clubes de golf y playa de Punta Mita, Villa Amore captura la esencia del lujo relajado.",
  "From the moment you arrive, Villa Amore envelops you in an atmosphere of calm sophistication. The open-concept living spaces invite the outdoors in through large glass doors that frame sweeping ocean and jungle views. The heart of the home is the expansive terrace — featuring a private infinity pool, sun loungers, shaded lounge area, and an al fresco dining space complete with a professional-grade outdoor grill. Whether you’re enjoying a leisurely breakfast, lounging by the pool, or sharing sunset cocktails, every space is designed for connection and tranquility.": "Desde el momento en que llegas, Villa Amore te envuelve en una atmósfera de sofisticación tranquila. Los espacios abiertos integran el exterior a través de grandes puertas de cristal que enmarcan vistas al mar y a la selva. El corazón de la casa es la amplia terraza, con alberca infinita privada, camastros, sala sombreada y comedor al aire libre con asador profesional. Ya sea para disfrutar un desayuno sin prisa, descansar junto a la alberca o compartir cocteles al atardecer, cada espacio está diseñado para la conexión y la tranquilidad.",
  "Villa Brezza is a refined five-bedroom retreat inside the exclusive Porta Fortuna community in Punta Mita. Steps from Sufi Beach Club, this stylish villa blends the comfort of a private home with the luxury of resort living — complete with daily cleaning service, private cook, golf privileges, and breathtaking golf-course views.": "Villa Brezza es un elegante refugio de cinco recámaras dentro de la exclusiva comunidad de Porta Fortuna en Punta Mita. A unos pasos de Sufi Beach Club, esta villa combina la comodidad de una casa privada con el lujo de vivir como en resort, incluyendo limpieza diaria, cocinera privada, privilegios de golf y hermosas vistas al campo de golf.",
  "Villa Brezza surrounds you with calm sophistication. Natural textures, soft tones, and open design create an effortless flow between indoor and outdoor living. The spacious terrace is the heart of the home — featuring a shimmering private pool, comfortable loungers, hammocks, and a shaded dining area that overlooks the manicured fairways": "Villa Brezza te rodea de una sofisticación tranquila. Texturas naturales, tonos suaves y un diseño abierto crean una conexión fluida entre interior y exterior. La amplia terraza es el corazón de la casa, con alberca privada, camastros cómodos, hamacas y un comedor sombreado con vista a los fairways perfectamente cuidados.",
  "Villa Llamas is a warm and elegant five-bedroom retreat nestled inside Punta Mita’s exclusive Porta Fortuna community. Just steps from Sufi Beach Club, this stylish villa offers a perfect balance between relaxed coastal living and modern luxury — with spacious indoor-outdoor areas, daily service, and access to Punta Mita’s premier golf and beach clubs.": "Villa Llamas es un refugio cálido y elegante de cinco recámaras dentro de la exclusiva comunidad de Porta Fortuna en Punta Mita. A unos pasos de Sufi Beach Club, esta villa ofrece un equilibrio perfecto entre vida costera relajada y lujo moderno, con amplios espacios interiores y exteriores, servicio diario y acceso a los principales clubes de golf y playa de Punta Mita.",
  "From the moment you step inside, Villa Llamas welcomes you with an atmosphere of comfort and connection. The open design fills the home with natural light and gentle breezes, blending soft tones, natural wood, and elegant furnishings. The expansive terrace overlooks the lush golf course, featuring a serene private pool, comfortable loungers, and a shaded outdoor dining area — the perfect setting for lazy mornings and sunset gatherings.": "Desde el momento en que entras, Villa Llamas te recibe con una atmósfera de comodidad y conexión. Su diseño abierto llena la casa de luz natural y brisas suaves, combinando tonos cálidos, madera natural y mobiliario elegante. La amplia terraza mira hacia el campo de golf y cuenta con alberca privada, camastros cómodos y un comedor exterior sombreado: el escenario perfecto para mañanas tranquilas y reuniones al atardecer.",
  "Placeholder overview text. Replace with refined description of the residence and atmosphere.": "Texto descriptivo pendiente. Reemplazar con una descripción refinada de la residencia y su ambiente."
};

const normalize = (value: string) => value.replace(/\s+/g, " ").trim();
const originalText = new WeakMap<Text, string>();

function translateDocument(language: Language) {
  if (typeof document === "undefined") return;

  document.documentElement.lang = language;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName.toLowerCase();
      if (["script", "style", "noscript", "textarea", "input"].includes(tag)) return NodeFilter.FILTER_REJECT;
      if (!normalize(node.textContent || "")) return NodeFilter.FILTER_REJECT;
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
    if (node.textContent !== nextText) node.textContent = nextText;
  });
}

function LanguageDomTranslator({ language }: { language: Language }) {
  React.useEffect(() => {
    translateDocument(language);

    const observer = new MutationObserver(() => translateDocument(language));
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [language]);

  return null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("en");

  React.useEffect(() => {
    const saved = window.localStorage.getItem("bt-language");
    if (saved === "en" || saved === "es") setLanguageState(saved);
  }, []);

  const setLanguage = React.useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    if (typeof window !== "undefined") window.localStorage.setItem("bt-language", nextLanguage);
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
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
