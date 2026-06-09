import { LocalizedText, text } from "@/lib/i18n-types";

export type InfoItem = {
  label: LocalizedText;
  value: LocalizedText;
};

export type ExperienceOption = {
  title: LocalizedText;
  description: LocalizedText;
  bestFor: LocalizedText;
  duration: LocalizedText;
  experience: LocalizedText;
  whatToExpect: LocalizedText;
  whatToBring: LocalizedText;
  goodToKnow?: LocalizedText;
};

export type Activity = {
  title: LocalizedText;
  slug: string;
  image: string;
  description: LocalizedText;
  overview: LocalizedText;
  standardInfo: InfoItem[];
  customInfo: InfoItem[];
  whatToExpect: LocalizedText;
  whatToBring: LocalizedText;
  gallery: string[];
  tags: LocalizedText[];
  experienceOptions: ExperienceOption[];
};

export type DiscoverCategory = {
  title: LocalizedText;
  slug: string;
  image: string;
  heroImage: string;
  description: LocalizedText;
  activities: Activity[];
};

function option(value: ExperienceOption): ExperienceOption {
  return value;
}

function createActivity({
  title,
  slug,
  image,
  heroImage,
  description,
  overview,
  bestFor,
  duration,
  seasonality,
  tags,
  notes,
  whatToExpect,
  whatToBring,
  experienceOptions,
}: {
  title: LocalizedText;
  slug: string;
  image: string;
  heroImage: string;
  description: LocalizedText;
  overview: LocalizedText;
  bestFor: LocalizedText;
  duration: LocalizedText;
  seasonality: LocalizedText;
  tags: LocalizedText[];
  notes: LocalizedText;
  whatToExpect: LocalizedText;
  whatToBring: LocalizedText;
  experienceOptions: ExperienceOption[];
}): Activity {
  return {
    title,
    slug,
    image,
    description,
    overview,
    standardInfo: [
      { label: text("Best For", "Ideal Para"), value: bestFor },
      { label: text("Typical Duration", "Duración Habitual"), value: duration },
      { label: text("Seasonality", "Temporada"), value: seasonality },
    ],
    customInfo: [
      { label: text("Good to Know", "Bueno Saber"), value: notes },
      {
        label: text("Tags", "Etiquetas"),
        value: text(
          tags.map((tag) => tag.en).join(", "),
          tags.map((tag) => tag.es).join(", ")
        ),
      },
    ],
    whatToExpect,
    whatToBring,
    gallery: [image, heroImage],
    tags,
    experienceOptions,
  };
}

const oceanImage = "/discover-punta-mita/ocean-water-activities.jpg";
const oceanHero = "/discover-punta-mita/heroes/ocean-water-activities-hero.jpg";

const wellnessImage = "/discover-punta-mita/luxury-relaxation.jpg";
const wellnessHero = "/discover-punta-mita/heroes/luxury-relaxation-hero.jpg";

const sportsImage = "/discover-punta-mita/golf-sports.jpg";
const sportsHero = "/discover-punta-mita/heroes/golf-sports-hero.jpg";

const beachClubImage = "/discover-punta-mita/beach-clubs-day-clubs.jpg";
const beachClubHero = "/discover-punta-mita/heroes/beach-clubs-day-clubs-hero.jpg";

const foodImage = "/discover-punta-mita/food-dining-experiences.jpg";
const foodHero = "/discover-punta-mita/heroes/food-dining-experiences-hero.jpg";

const nightlifeImage = "/discover-punta-mita/nightlife-parties.jpg";
const nightlifeHero = "/discover-punta-mita/heroes/nightlife-parties-hero.jpg";

const destinationsImage = "/discover-punta-mita/nearby-destinations-day-trips.jpg";
const destinationsHero =
  "/discover-punta-mita/heroes/nearby-destinations-day-trips-hero.jpg";

const seasonalImage = "/discover-punta-mita/seasonal-experiences.jpg";
const seasonalHero = "/discover-punta-mita/heroes/seasonal-experiences-hero.jpg";

const vipImage = "/discover-punta-mita/high-end-vip-experiences.jpg";
const vipHero = "/discover-punta-mita/heroes/high-end-vip-experiences-hero.jpg";

export const discoverCategories: DiscoverCategory[] = [
  {
    title: text(`Ocean & Water`, `Océano y Agua`),
    slug: `ocean-water`,
    image: oceanImage,
    heroImage: oceanHero,
    description: text(`Private yacht days, surf experiences, ocean adventures, fishing, wildlife, and water activities around Punta Mita.`, `Días privados en yate, experiencias de surf, aventuras en el mar, pesca, vida silvestre y actividades acuáticas alrededor de Punta Mita.`),
    activities: [
      createActivity({
        title: text(`Private Yacht, Sailing & Marietas Days`, `Yates Privados, Veleros y Días en Marietas`),
        slug: `private-yacht-sailing-marietas-days`,
        image: oceanImage,
        heroImage: oceanHero,
        description: text(`Private boat, yacht, sailing, catamaran, Marietas, Hidden Beach, and luxury ocean-day experiences.`, `Experiencias de lancha privada, yate, velero, catamarán, Marietas, Playa Escondida y días de lujo en el mar.`),
        overview: text(`Private boat, yacht, sailing, catamaran, Marietas, Hidden Beach, and luxury ocean-day experiences. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Experiencias de lancha privada, yate, velero, catamarán, Marietas, Playa Escondida y días de lujo en el mar. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Ocean`, `Océano`),
        text(`Family-Friendly`, `Familiar`),
        text(`Romantic`, `Romántico`),
        text(`VIP`, `VIP`),
        text(`Adventure`, `Aventura`),
        text(`Seasonal`, `De Temporada`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Private Yacht Charter`, `Yate Privado`),
          description: text(`A carefully arranged private yacht charter experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de yate privado cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private yacht charter with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en yate privado, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Luxury Boat Day`, `Día en Lancha de Lujo`),
          description: text(`A carefully arranged luxury boat day experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de día en lancha de lujo cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on luxury boat day with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en día en lancha de lujo, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Sailing Trip`, `Paseo en Velero`),
          description: text(`A carefully arranged sailing trip experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de paseo en velero cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on sailing trip with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en paseo en velero, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Catamaran Sunset Cruise`, `Atardecer en Catamarán`),
          description: text(`A carefully arranged catamaran sunset cruise experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de atardecer en catamarán cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on catamaran sunset cruise with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en atardecer en catamarán, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Marietas Islands Tour`, `Tour a Islas Marietas`),
          description: text(`A carefully arranged marietas islands tour experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de tour a islas marietas cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on marietas islands tour with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en tour a islas marietas, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Hidden Beach Experience`, `Experiencia en Playa Escondida`),
          description: text(`A carefully arranged hidden beach experience experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de experiencia en playa escondida cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on hidden beach experience with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en experiencia en playa escondida, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Family Boat Day`, `Día Familiar en Barco`),
          description: text(`A carefully arranged family boat day experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de día familiar en barco cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on family boat day with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en día familiar en barco, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Yacht Proposal or Romantic Ocean Moment`, `Propuesta en Yate o Momento Romántico en el Mar`),
          description: text(`A carefully arranged yacht proposal or romantic ocean moment experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de propuesta en yate o momento romántico en el mar cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on yacht proposal or romantic ocean moment with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en propuesta en yate o momento romántico en el mar, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Surf Experiences`, `Experiencias de Surf`),
        slug: `surf-experiences`,
        image: oceanImage,
        heroImage: oceanHero,
        description: text(`Private surf lessons, surf safaris, La Lancha surf days, and surf-town experiences near Punta Mita.`, `Clases privadas de surf, surf safaris, días de surf en La Lancha y experiencias en pueblos surferos cerca de Punta Mita.`),
        overview: text(`Private surf lessons, surf safaris, La Lancha surf days, and surf-town experiences near Punta Mita. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Clases privadas de surf, surf safaris, días de surf en La Lancha y experiencias en pueblos surferos cerca de Punta Mita. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Ocean`, `Océano`),
        text(`Family-Friendly`, `Familiar`),
        text(`Adventure`, `Aventura`),
        text(`Sports`, `Deportes`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Private Surf Lesson`, `Clase Privada de Surf`),
          description: text(`A carefully arranged private surf lesson experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de clase privada de surf cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private surf lesson with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en clase privada de surf, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`La Lancha Surf Day`, `Día de Surf en La Lancha`),
          description: text(`A carefully arranged la lancha surf day experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de día de surf en la lancha cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on la lancha surf day with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en día de surf en la lancha, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Surf Safari`, `Surf Safari Privado`),
          description: text(`A carefully arranged private surf safari experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de surf safari privado cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private surf safari with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en surf safari privado, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Kid-Friendly Surf Session`, `Sesión de Surf Para Niños`),
          description: text(`A carefully arranged kid-friendly surf session experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de sesión de surf para niños cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on kid-friendly surf session with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en sesión de surf para niños, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Foil, Paddle & Kayak Experiences`, `Experiencias de Foil, Paddle y Kayak`),
        slug: `foil-paddle-kayak-experiences`,
        image: oceanImage,
        heroImage: oceanHero,
        description: text(`E-foil, wing-foil, paddleboarding, and kayaking for active guests looking for modern ocean sports.`, `E-foil, wing-foil, paddleboard y kayak para huéspedes activos que buscan deportes acuáticos modernos.`),
        overview: text(`E-foil, wing-foil, paddleboarding, and kayaking for active guests looking for modern ocean sports. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `E-foil, wing-foil, paddleboard y kayak para huéspedes activos que buscan deportes acuáticos modernos. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Ocean`, `Océano`),
        text(`Adventure`, `Aventura`),
        text(`Sports`, `Deportes`),
        text(`Family-Friendly`, `Familiar`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`E-Foil Lesson`, `Clase de E-Foil`),
          description: text(`A carefully arranged e-foil lesson experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de clase de e-foil cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on e-foil lesson with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en clase de e-foil, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Wing-Foil Session`, `Sesión de Wing-Foil`),
          description: text(`A carefully arranged wing-foil session experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de sesión de wing-foil cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on wing-foil session with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en sesión de wing-foil, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Paddleboarding`, `Paddleboard`),
          description: text(`A carefully arranged paddleboarding experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de paddleboard cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on paddleboarding with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en paddleboard, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Kayaking`, `Kayak`),
          description: text(`A carefully arranged kayaking experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de kayak cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on kayaking with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en kayak, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Underwater Exploration`, `Exploración Submarina`),
        slug: `underwater-exploration`,
        image: oceanImage,
        heroImage: oceanHero,
        description: text(`Snorkeling, scuba diving, freediving, and underwater exploration around Marietas and nearby ocean sites.`, `Snorkel, buceo, freediving y exploración submarina alrededor de Marietas y otros puntos cercanos.`),
        overview: text(`Snorkeling, scuba diving, freediving, and underwater exploration around Marietas and nearby ocean sites. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Snorkel, buceo, freediving y exploración submarina alrededor de Marietas y otros puntos cercanos. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Ocean`, `Océano`),
        text(`Wildlife`, `Vida Silvestre`),
        text(`Adventure`, `Aventura`),
        text(`Family-Friendly`, `Familiar`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Marietas Snorkeling`, `Snorkel en Marietas`),
          description: text(`A carefully arranged marietas snorkeling experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de snorkel en marietas cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on marietas snorkeling with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en snorkel en marietas, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Scuba Dive`, `Buceo Privado`),
          description: text(`A carefully arranged private scuba dive experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de buceo privado cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private scuba dive with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en buceo privado, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Freediving Experience`, `Experiencia de Freediving`),
          description: text(`A carefully arranged freediving experience experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de experiencia de freediving cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on freediving experience with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en experiencia de freediving, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Fishing & Spearfishing Experiences`, `Experiencias de Pesca y Spearfishing`),
        slug: `fishing-spearfishing-experiences`,
        image: oceanImage,
        heroImage: oceanHero,
        description: text(`Private sportfishing, spearfishing, deep-sea fishing, and sea-to-table fishing experiences.`, `Pesca deportiva privada, spearfishing, pesca de altura y experiencias sea-to-table.`),
        overview: text(`Private sportfishing, spearfishing, deep-sea fishing, and sea-to-table fishing experiences. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Pesca deportiva privada, spearfishing, pesca de altura y experiencias sea-to-table. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Ocean`, `Océano`),
        text(`Adventure`, `Aventura`),
        text(`Food`, `Gastronomía`),
        text(`Sports`, `Deportes`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Private Sportfishing`, `Pesca Deportiva Privada`),
          description: text(`A carefully arranged private sportfishing experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de pesca deportiva privada cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private sportfishing with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en pesca deportiva privada, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Spearfishing`, `Spearfishing`),
          description: text(`A carefully arranged spearfishing experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de spearfishing cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on spearfishing with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en spearfishing, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Sea-to-Table Fishing Experience`, `Experiencia de Pesca Sea-to-Table`),
          description: text(`A carefully arranged sea-to-table fishing experience experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de experiencia de pesca sea-to-table cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on sea-to-table fishing experience with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en experiencia de pesca sea-to-table, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Marine Wildlife & Conservation Experiences`, `Vida Marina y Conservación`),
        slug: `marine-wildlife-conservation-experiences`,
        image: oceanImage,
        heroImage: oceanHero,
        description: text(`Whale watching, wild marine-life tours, turtle releases, and conservation-focused experiences.`, `Avistamiento de ballenas, tours de vida marina, liberación de tortugas y experiencias enfocadas en conservación.`),
        overview: text(`Whale watching, wild marine-life tours, turtle releases, and conservation-focused experiences. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Avistamiento de ballenas, tours de vida marina, liberación de tortugas y experiencias enfocadas en conservación. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Ocean`, `Océano`),
        text(`Wildlife`, `Vida Silvestre`),
        text(`Family-Friendly`, `Familiar`),
        text(`Seasonal`, `De Temporada`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Private Whale Watching`, `Avistamiento Privado de Ballenas`),
          description: text(`A carefully arranged private whale watching experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de avistamiento privado de ballenas cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private whale watching with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en avistamiento privado de ballenas, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Wild Dolphin & Marine-Life Tour`, `Tour de Delfines Silvestres y Vida Marina`),
          description: text(`A carefully arranged wild dolphin & marine-life tour experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de tour de delfines silvestres y vida marina cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on wild dolphin & marine-life tour with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en tour de delfines silvestres y vida marina, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Turtle Release`, `Liberación de Tortugas`),
          description: text(`A carefully arranged turtle release experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de liberación de tortugas cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on turtle release with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en liberación de tortugas, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      })
    ],
  },
  {
    title: text(`Wellness, Relaxation & Beach Lifestyle`, `Bienestar, Relajación y Vida de Playa`),
    slug: `wellness-relaxation-beach-lifestyle`,
    image: wellnessImage,
    heroImage: wellnessHero,
    description: text(`In-villa spa, wellness, ritual experiences, private beach setups, sunset dinners, and relaxed luxury moments.`, `Spa en villa, experiencias de bienestar, rituales, montajes privados en playa, cenas al atardecer y momentos de lujo relajado.`),
    activities: [
      createActivity({
        title: text(`In-Villa Spa & Wellness`, `Spa y Bienestar en Villa`),
        slug: `in-villa-spa-wellness`,
        image: wellnessImage,
        heroImage: wellnessHero,
        description: text(`Spa treatments, massage, yoga, sound healing, breathwork, ice baths, and private wellness sessions at the villa.`, `Tratamientos de spa, masajes, yoga, sound healing, breathwork, baños de hielo y sesiones privadas de bienestar en la villa.`),
        overview: text(`Spa treatments, massage, yoga, sound healing, breathwork, ice baths, and private wellness sessions at the villa. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Tratamientos de spa, masajes, yoga, sound healing, breathwork, baños de hielo y sesiones privadas de bienestar en la villa. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Wellness`, `Bienestar`),
        text(`Relaxation`, `Relajación`),
        text(`Romantic`, `Romántico`),
        text(`Rainy Day`, `Día de Lluvia`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`In-Villa Massage & Spa Treatments`, `Masajes y Tratamientos de Spa en Villa`),
          description: text(`A carefully arranged in-villa massage & spa treatments experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de masajes y tratamientos de spa en villa cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on in-villa massage & spa treatments with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en masajes y tratamientos de spa en villa, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Yoga`, `Yoga Privado`),
          description: text(`A carefully arranged private yoga experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de yoga privado cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private yoga with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en yoga privado, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Sound Healing & Breathwork`, `Sound Healing y Breathwork`),
          description: text(`A carefully arranged sound healing & breathwork experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de sound healing y breathwork cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on sound healing & breathwork with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en sound healing y breathwork, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Cold Plunge & Recovery Session`, `Cold Plunge y Recuperación`),
          description: text(`A carefully arranged cold plunge & recovery session experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de cold plunge y recuperación cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on cold plunge & recovery session with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en cold plunge y recuperación, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Temazcal & Ritual Wellness`, `Temazcal y Bienestar Ritual`),
        slug: `temazcal-ritual-wellness`,
        image: wellnessImage,
        heroImage: wellnessHero,
        description: text(`Temazcal, cacao ceremonies, spiritual wellness, and ritual-style healing experiences.`, `Temazcal, ceremonias de cacao, bienestar espiritual y experiencias rituales.`),
        overview: text(`Temazcal, cacao ceremonies, spiritual wellness, and ritual-style healing experiences. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Temazcal, ceremonias de cacao, bienestar espiritual y experiencias rituales. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Wellness`, `Bienestar`),
        text(`Culture`, `Cultura`),
        text(`Relaxation`, `Relajación`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Temazcal Ceremony`, `Ceremonia de Temazcal`),
          description: text(`A carefully arranged temazcal ceremony experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de ceremonia de temazcal cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on temazcal ceremony with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en ceremonia de temazcal, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Cacao Ceremony`, `Ceremonia de Cacao`),
          description: text(`A carefully arranged cacao ceremony experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de ceremonia de cacao cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on cacao ceremony with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en ceremonia de cacao, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Ritual Wellness Evening`, `Noche de Bienestar Ritual`),
          description: text(`A carefully arranged ritual wellness evening experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de noche de bienestar ritual cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on ritual wellness evening with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en noche de bienestar ritual, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Private Beach Setups & Sunset Experiences`, `Montajes Privados en Playa y Atardeceres`),
        slug: `private-beach-setups-sunset-experiences`,
        image: wellnessImage,
        heroImage: wellnessHero,
        description: text(`Luxury picnics, sunset beach dinners, beach bonfires, cabana setups, and private sunset moments.`, `Picnics de lujo, cenas en la playa al atardecer, fogatas, cabañas y momentos privados frente al mar.`),
        overview: text(`Luxury picnics, sunset beach dinners, beach bonfires, cabana setups, and private sunset moments. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Picnics de lujo, cenas en la playa al atardecer, fogatas, cabañas y momentos privados frente al mar. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Romantic`, `Romántico`),
        text(`Relaxation`, `Relajación`),
        text(`Celebration`, `Celebración`),
        text(`Family-Friendly`, `Familiar`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Luxury Beach Picnic`, `Picnic de Lujo en Playa`),
          description: text(`A carefully arranged luxury beach picnic experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de picnic de lujo en playa cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on luxury beach picnic with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en picnic de lujo en playa, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Sunset Beach Dinner`, `Cena en Playa al Atardecer`),
          description: text(`A carefully arranged sunset beach dinner experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de cena en playa al atardecer cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on sunset beach dinner with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en cena en playa al atardecer, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Beach Bonfire`, `Fogata en la Playa`),
          description: text(`A carefully arranged beach bonfire experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de fogata en la playa cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on beach bonfire with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en fogata en la playa, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Cabana or Daybed Setup`, `Cabaña Privada o Daybed`),
          description: text(`A carefully arranged private cabana or daybed setup experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de cabaña privada o daybed cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private cabana or daybed setup with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en cabaña privada o daybed, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      })
    ],
  },
  {
    title: text(`Golf, Sports & Adventure`, `Golf, Deportes y Aventura`),
    slug: `golf-sports-adventure`,
    image: sportsImage,
    heroImage: sportsHero,
    description: text(`Golf, racket sports, fitness, adventure tours, hiking, horseback riding, polo, and equestrian experiences.`, `Golf, deportes de raqueta, fitness, tours de aventura, senderismo, paseos a caballo, polo y experiencias ecuestres.`),
    activities: [
      createActivity({
        title: text(`Punta Mita Golf Experiences`, `Experiencias de Golf en Punta Mita`),
        slug: `punta-mita-golf-experiences`,
        image: sportsImage,
        heroImage: sportsHero,
        description: text(`Punta Mita Golf Club, Pacifico, Bahia, Tail of the Whale, clinics, tournaments, and golf events.`, `Punta Mita Golf Club, Pacífico, Bahía, Tail of the Whale, clínicas, torneos y eventos de golf.`),
        overview: text(`Punta Mita Golf Club, Pacifico, Bahia, Tail of the Whale, clinics, tournaments, and golf events. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Punta Mita Golf Club, Pacífico, Bahía, Tail of the Whale, clínicas, torneos y eventos de golf. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Sports`, `Deportes`),
        text(`VIP`, `VIP`),
        text(`Family-Friendly`, `Familiar`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Pacifico or Bahia Golf Round`, `Ronda de Golf en Pacífico o Bahía`),
          description: text(`A carefully arranged pacifico or bahia golf round experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de ronda de golf en pacífico o bahía cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on pacifico or bahia golf round with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en ronda de golf en pacífico o bahía, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Tail of the Whale Experience`, `Experiencia Tail of the Whale`),
          description: text(`A carefully arranged tail of the whale experience experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de experiencia tail of the whale cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on tail of the whale experience with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en experiencia tail of the whale, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Golf Clinic`, `Clínica Privada de Golf`),
          description: text(`A carefully arranged private golf clinic experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de clínica privada de golf cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private golf clinic with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en clínica privada de golf, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Golf Tournament`, `Torneo Privado de Golf`),
          description: text(`A carefully arranged private golf tournament experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de torneo privado de golf cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private golf tournament with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en torneo privado de golf, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Racket Sports`, `Deportes de Raqueta`),
        slug: `racket-sports`,
        image: sportsImage,
        heroImage: sportsHero,
        description: text(`Tennis, pickleball, padel, private lessons, clinics, and friendly tournaments.`, `Tenis, pickleball, pádel, clases privadas, clínicas y torneos amistosos.`),
        overview: text(`Tennis, pickleball, padel, private lessons, clinics, and friendly tournaments. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Tenis, pickleball, pádel, clases privadas, clínicas y torneos amistosos. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Sports`, `Deportes`),
        text(`Family-Friendly`, `Familiar`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Private Tennis Lesson`, `Clase Privada de Tenis`),
          description: text(`A carefully arranged private tennis lesson experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de clase privada de tenis cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private tennis lesson with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en clase privada de tenis, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Pickleball Session`, `Sesión de Pickleball`),
          description: text(`A carefully arranged pickleball session experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de sesión de pickleball cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on pickleball session with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en sesión de pickleball, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Padel Match or Clinic`, `Partido o Clínica de Pádel`),
          description: text(`A carefully arranged padel match or clinic experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de partido o clínica de pádel cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on padel match or clinic with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en partido o clínica de pádel, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Racket Tournament`, `Torneo Privado de Raqueta`),
          description: text(`A carefully arranged private racket tournament experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de torneo privado de raqueta cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private racket tournament with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en torneo privado de raqueta, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Private Fitness & Recovery`, `Fitness Privado y Recuperación`),
        slug: `private-fitness-recovery`,
        image: sportsImage,
        heroImage: sportsHero,
        description: text(`Private training, beach workouts, boxing, pilates, mobility, recovery, and performance sessions.`, `Entrenamiento privado, workouts en playa, box, pilates, movilidad, recuperación y sesiones de performance.`),
        overview: text(`Private training, beach workouts, boxing, pilates, mobility, recovery, and performance sessions. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Entrenamiento privado, workouts en playa, box, pilates, movilidad, recuperación y sesiones de performance. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Wellness`, `Bienestar`),
        text(`Sports`, `Deportes`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Private Training Session`, `Entrenamiento Privado`),
          description: text(`A carefully arranged private training session experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de entrenamiento privado cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private training session with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en entrenamiento privado, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Boxing or Beach Training`, `Box o Entrenamiento en Playa`),
          description: text(`A carefully arranged boxing or beach training experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de box o entrenamiento en playa cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on boxing or beach training with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en box o entrenamiento en playa, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Pilates, Mobility or Stretch Session`, `Pilates, Movilidad o Stretching`),
          description: text(`A carefully arranged pilates, mobility or stretch session experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de pilates, movilidad o stretching cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on pilates, mobility or stretch session with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en pilates, movilidad o stretching, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Higuera Blanca Adventure Experiences`, `Aventuras en Higuera Blanca`),
        slug: `higuera-blanca-adventure-experiences`,
        image: sportsImage,
        heroImage: sportsHero,
        description: text(`ATV, RZR, zipline, canopy, and family adventure experiences close to Punta Mita.`, `ATV, RZR, tirolesa, canopy y aventuras familiares cerca de Punta Mita.`),
        overview: text(`ATV, RZR, zipline, canopy, and family adventure experiences close to Punta Mita. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `ATV, RZR, tirolesa, canopy y aventuras familiares cerca de Punta Mita. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Adventure`, `Aventura`),
        text(`Family-Friendly`, `Familiar`),
        text(`Sports`, `Deportes`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`ATV Tour`, `Tour en ATV`),
          description: text(`A carefully arranged atv tour experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de tour en atv cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on atv tour with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en tour en atv, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`RZR Adventure`, `Aventura en RZR`),
          description: text(`A carefully arranged rzr adventure experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de aventura en rzr cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on rzr adventure with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en aventura en rzr, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Zipline & Canopy Experience`, `Tirolesa y Canopy`),
          description: text(`A carefully arranged zipline & canopy experience experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de tirolesa y canopy cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on zipline & canopy experience with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en tirolesa y canopy, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Monkey Mountain & Guided Nature Hikes`, `Monkey Mountain y Caminatas Guiadas`),
        slug: `monkey-mountain-guided-nature-hikes`,
        image: sportsImage,
        heroImage: sportsHero,
        description: text(`Guided hikes, sunrise routes, nature walks, and scenic active experiences near Punta Mita.`, `Caminatas guiadas, rutas al amanecer, paseos de naturaleza y experiencias activas cerca de Punta Mita.`),
        overview: text(`Guided hikes, sunrise routes, nature walks, and scenic active experiences near Punta Mita. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Caminatas guiadas, rutas al amanecer, paseos de naturaleza y experiencias activas cerca de Punta Mita. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Adventure`, `Aventura`),
        text(`Wellness`, `Bienestar`),
        text(`Wildlife`, `Vida Silvestre`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Monkey Mountain Sunrise Hike`, `Caminata al Amanecer en Monkey Mountain`),
          description: text(`A carefully arranged monkey mountain sunrise hike experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de caminata al amanecer en monkey mountain cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on monkey mountain sunrise hike with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en caminata al amanecer en monkey mountain, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Guided Nature Walk`, `Caminata Privada Guiada en la Naturaleza`),
          description: text(`A carefully arranged private guided nature walk experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de caminata privada guiada en la naturaleza cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private guided nature walk with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en caminata privada guiada en la naturaleza, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Horseback, Polo & Equestrian Experiences`, `Paseos a Caballo, Polo y Experiencias Ecuestres`),
        slug: `horseback-polo-equestrian-experiences`,
        image: sportsImage,
        heroImage: sportsHero,
        description: text(`Beach horseback riding, polo brunch, polo lessons, and curated equestrian experiences.`, `Paseos a caballo en la playa, polo brunch, clases de polo y experiencias ecuestres.`),
        overview: text(`Beach horseback riding, polo brunch, polo lessons, and curated equestrian experiences. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Paseos a caballo en la playa, polo brunch, clases de polo y experiencias ecuestres. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Adventure`, `Aventura`),
        text(`Sports`, `Deportes`),
        text(`Family-Friendly`, `Familiar`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Beach Horseback Ride`, `Paseo a Caballo en Playa`),
          description: text(`A carefully arranged beach horseback ride experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de paseo a caballo en playa cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on beach horseback ride with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en paseo a caballo en playa, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Polo Brunch`, `Polo Brunch`),
          description: text(`A carefully arranged polo brunch experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de polo brunch cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on polo brunch with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en polo brunch, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Polo Lesson or Equestrian Session`, `Clase de Polo o Sesión Ecuestre`),
          description: text(`A carefully arranged polo lesson or equestrian session experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de clase de polo o sesión ecuestre cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on polo lesson or equestrian session with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en clase de polo o sesión ecuestre, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      })
    ],
  },
  {
    title: text(`Beach Clubs & Day Clubs`, `Clubes de Playa y Day Clubs`),
    slug: `beach-clubs-day-clubs`,
    image: beachClubImage,
    heroImage: beachClubHero,
    description: text(`Curated beach club experiences in Punta Mita and select destination beach clubs for guests looking for a more social or party atmosphere.`, `Experiencias seleccionadas en clubes de playa en Punta Mita y beach clubs de destino para huéspedes que buscan un ambiente más social o de fiesta.`),
    activities: [
      createActivity({
        title: text(`Punta Mita Beach Clubs`, `Clubes de Playa en Punta Mita`),
        slug: `punta-mita-beach-clubs`,
        image: beachClubImage,
        heroImage: beachClubHero,
        description: text(`A curated guide to the private and resort-style beach clubs inside Punta Mita, including Kupuri, Pacifico, Sufi, Sea Breeze, and El Surf Club.`, `Una guía seleccionada de clubes de playa privados y estilo resort dentro de Punta Mita, incluyendo Kupuri, Pacífico, Sufi, Sea Breeze y El Surf Club.`),
        overview: text(`A curated guide to the private and resort-style beach clubs inside Punta Mita, including Kupuri, Pacifico, Sufi, Sea Breeze, and El Surf Club. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Una guía seleccionada de clubes de playa privados y estilo resort dentro de Punta Mita, incluyendo Kupuri, Pacífico, Sufi, Sea Breeze y El Surf Club. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Relaxation`, `Relajación`),
        text(`Family-Friendly`, `Familiar`),
        text(`Food`, `Gastronomía`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Kupuri Beach Club`, `Kupuri Beach Club`),
          description: text(`A carefully arranged kupuri beach club experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de kupuri beach club cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on kupuri beach club with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en kupuri beach club, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Pacifico Beach Club`, `Pacifico Beach Club`),
          description: text(`A carefully arranged pacifico beach club experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de pacifico beach club cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on pacifico beach club with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en pacifico beach club, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Sufi Ocean Club`, `Sufi Ocean Club`),
          description: text(`A carefully arranged sufi ocean club experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de sufi ocean club cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on sufi ocean club with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en sufi ocean club, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Sea Breeze Beach Club`, `Sea Breeze Beach Club`),
          description: text(`A carefully arranged sea breeze beach club experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de sea breeze beach club cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on sea breeze beach club with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en sea breeze beach club, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`El Surf Club`, `El Surf Club`),
          description: text(`A carefully arranged el surf club experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de el surf club cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on el surf club with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en el surf club, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Party Beach Clubs`, `Beach Clubs de Fiesta`),
        slug: `party-beach-clubs`,
        image: beachClubImage,
        heroImage: beachClubHero,
        description: text(`High-energy beach club experiences for guests looking for music, boat access, social atmosphere, and a more festive day outside Punta Mita.`, `Experiencias de beach club con más energía para huéspedes que buscan música, acceso en barco, ambiente social y un día más festivo fuera de Punta Mita.`),
        overview: text(`High-energy beach club experiences for guests looking for music, boat access, social atmosphere, and a more festive day outside Punta Mita. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Experiencias de beach club con más energía para huéspedes que buscan música, acceso en barco, ambiente social y un día más festivo fuera de Punta Mita. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Nightlife`, `Vida Nocturna`),
        text(`Adults`, `Adultos`),
        text(`Celebration`, `Celebración`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Majahuitas Beach Club`, `Majahuitas Beach Club`),
          description: text(`A carefully arranged majahuitas beach club experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de majahuitas beach club cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on majahuitas beach club with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en majahuitas beach club, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Anima Beach Club`, `Anima Beach Club`),
          description: text(`A carefully arranged anima beach club experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de anima beach club cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on anima beach club with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en anima beach club, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Other Beach Clubs`, `Otros Beach Clubs`),
        slug: `other-beach-clubs`,
        image: beachClubImage,
        heroImage: beachClubHero,
        description: text(`Select beach-club and polo-club experiences outside Punta Mita, curated for guests who want a distinctive off-property outing.`, `Experiencias seleccionadas de beach club y polo club fuera de Punta Mita para huéspedes que buscan una salida distinta.`),
        overview: text(`Select beach-club and polo-club experiences outside Punta Mita, curated for guests who want a distinctive off-property outing. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Experiencias seleccionadas de beach club y polo club fuera de Punta Mita para huéspedes que buscan una salida distinta. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Relaxation`, `Relajación`),
        text(`Food`, `Gastronomía`),
        text(`Culture`, `Cultura`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Tierra Tropical Beach & Polo Club Day`, `Día en Tierra Tropical Beach & Polo Club`),
          description: text(`A carefully arranged tierra tropical beach & polo club day experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de día en tierra tropical beach & polo club cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on tierra tropical beach & polo club day with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en día en tierra tropical beach & polo club, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      })
    ],
  },
  {
    title: text(`Food & Dining`, `Gastronomía y Cenas`),
    slug: `food-dining`,
    image: foodImage,
    heroImage: foodHero,
    description: text(`Private chef experiences, Punta Mita restaurants, agave tastings, mixology, farm-to-table, and culinary experiences.`, `Experiencias con chef privado, restaurantes en Punta Mita, catas de agave, mixología, farm-to-table y experiencias culinarias.`),
    activities: [
      createActivity({
        title: text(`Private Chef & In-Villa Dining`, `Chef Privado y Cenas en Villa`),
        slug: `private-chef-in-villa-dining`,
        image: foodImage,
        heroImage: foodHero,
        description: text(`Private chefs, tasting menus, taco nights, sushi chefs, seafood bars, ceviche stations, and cooking classes at the villa.`, `Chefs privados, menús de degustación, noches de tacos, chefs de sushi, barras de mariscos, estaciones de ceviche y clases de cocina en la villa.`),
        overview: text(`Private chefs, tasting menus, taco nights, sushi chefs, seafood bars, ceviche stations, and cooking classes at the villa. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Chefs privados, menús de degustación, noches de tacos, chefs de sushi, barras de mariscos, estaciones de ceviche y clases de cocina en la villa. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Food`, `Gastronomía`),
        text(`Family-Friendly`, `Familiar`),
        text(`Romantic`, `Romántico`),
        text(`VIP`, `VIP`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Private Chef Dinner`, `Cena Privada con Chef`),
          description: text(`A carefully arranged private chef dinner experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de cena privada con chef cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private chef dinner with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en cena privada con chef, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Chef’s Tasting Menu`, `Menú de Degustación con Chef`),
          description: text(`A carefully arranged chef’s tasting menu experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de menú de degustación con chef cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on chef’s tasting menu with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en menú de degustación con chef, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Taco Night`, `Noche Privada de Tacos`),
          description: text(`A carefully arranged private taco night experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de noche privada de tacos cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private taco night with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en noche privada de tacos, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Seafood, Ceviche or Aguachile Bar`, `Barra de Mariscos, Ceviche o Aguachile`),
          description: text(`A carefully arranged seafood, ceviche or aguachile bar experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de barra de mariscos, ceviche o aguachile cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on seafood, ceviche or aguachile bar with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en barra de mariscos, ceviche o aguachile, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Sushi Chef`, `Chef Privado de Sushi`),
          description: text(`A carefully arranged private sushi chef experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de chef privado de sushi cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private sushi chef with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en chef privado de sushi, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Punta Mita Fine Dining & Oceanfront Restaurants`, `Fine Dining y Restaurantes Frente al Mar`),
        slug: `punta-mita-fine-dining-oceanfront-restaurants`,
        image: foodImage,
        heroImage: foodHero,
        description: text(`Fine dining, oceanfront restaurants, seafood experiences, and curated restaurant reservations around Punta Mita.`, `Fine dining, restaurantes frente al mar, experiencias de mariscos y reservaciones seleccionadas alrededor de Punta Mita.`),
        overview: text(`Fine dining, oceanfront restaurants, seafood experiences, and curated restaurant reservations around Punta Mita. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Fine dining, restaurantes frente al mar, experiencias de mariscos y reservaciones seleccionadas alrededor de Punta Mita. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Food`, `Gastronomía`),
        text(`Romantic`, `Romántico`),
        text(`VIP`, `VIP`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Punta Mita Fine Dining`, `Fine Dining en Punta Mita`),
          description: text(`A carefully arranged punta mita fine dining experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de fine dining en punta mita cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on punta mita fine dining with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en fine dining en punta mita, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Oceanfront Restaurant Experience`, `Restaurante Frente al Mar`),
          description: text(`A carefully arranged oceanfront restaurant experience experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de restaurante frente al mar cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on oceanfront restaurant experience with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en restaurante frente al mar, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Curated Local Favorite`, `Favorito Local Seleccionado`),
          description: text(`A carefully arranged curated local favorite experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de favorito local seleccionado cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on curated local favorite with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en favorito local seleccionado, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Agave, Mixology, Cigar & Farm-to-Table Experiences`, `Agave, Mixología, Puros y Farm-to-Table`),
        slug: `agave-mixology-cigar-farm-to-table-experiences`,
        image: foodImage,
        heroImage: foodHero,
        description: text(`Tequila, mezcal, raicilla, mixology, cigars, pairing dinners, Cachasol, and farm-to-table experiences.`, `Tequila, mezcal, raicilla, mixología, puros, cenas maridaje, Cachasol y experiencias farm-to-table.`),
        overview: text(`Tequila, mezcal, raicilla, mixology, cigars, pairing dinners, Cachasol, and farm-to-table experiences. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Tequila, mezcal, raicilla, mixología, puros, cenas maridaje, Cachasol y experiencias farm-to-table. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Food`, `Gastronomía`),
        text(`Adults`, `Adultos`),
        text(`Culture`, `Cultura`),
        text(`VIP`, `VIP`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Private Tequila, Mezcal or Raicilla Tasting`, `Cata Privada de Tequila, Mezcal o Raicilla`),
          description: text(`A carefully arranged private tequila, mezcal or raicilla tasting experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de cata privada de tequila, mezcal o raicilla cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private tequila, mezcal or raicilla tasting with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en cata privada de tequila, mezcal o raicilla, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`In-Villa Mixology Class`, `Clase de Mixología en Villa`),
          description: text(`A carefully arranged in-villa mixology class experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de clase de mixología en villa cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on in-villa mixology class with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en clase de mixología en villa, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Cigar & Spirits Evening`, `Noche de Puros y Destilados`),
          description: text(`A carefully arranged cigar & spirits evening experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de noche de puros y destilados cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on cigar & spirits evening with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en noche de puros y destilados, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Cachasol Farm-to-Table & Mixology Experience`, `Experiencia Farm-to-Table y Mixología en Cachasol`),
          description: text(`A carefully arranged cachasol farm-to-table & mixology experience experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de experiencia farm-to-table y mixología en cachasol cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on cachasol farm-to-table & mixology experience with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en experiencia farm-to-table y mixología en cachasol, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      })
    ],
  },
  {
    title: text(`Nightlife & Entertainment`, `Vida Nocturna y Entretenimiento`),
    slug: `nightlife-entertainment`,
    image: nightlifeImage,
    heroImage: nightlifeHero,
    description: text(`Private villa parties, entertainment, poker nights, casino experiences, curated nights out, and signature dinner shows.`, `Fiestas privadas en villa, entretenimiento, noches de póker, experiencias de casino, salidas organizadas y cenas show.`),
    activities: [
      createActivity({
        title: text(`Private Villa Parties & Entertainment`, `Fiestas Privadas y Entretenimiento en Villa`),
        slug: `private-villa-parties-entertainment`,
        image: nightlifeImage,
        heroImage: nightlifeHero,
        description: text(`Private villa parties, DJs, bartenders, mariachi, movie nights, family entertainment, and celebration setups.`, `Fiestas privadas en villa, DJs, bartenders, mariachi, noches de cine, entretenimiento familiar y montajes de celebración.`),
        overview: text(`Private villa parties, DJs, bartenders, mariachi, movie nights, family entertainment, and celebration setups. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Fiestas privadas en villa, DJs, bartenders, mariachi, noches de cine, entretenimiento familiar y montajes de celebración. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Nightlife`, `Vida Nocturna`),
        text(`Celebration`, `Celebración`),
        text(`VIP`, `VIP`),
        text(`Family-Friendly`, `Familiar`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Private DJ Villa Party`, `Fiesta Privada con DJ en Villa`),
          description: text(`A carefully arranged private dj villa party experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de fiesta privada con dj en villa cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private dj villa party with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en fiesta privada con dj en villa, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Bartender & Cocktail Night`, `Bartender Privado y Noche de Cocteles`),
          description: text(`A carefully arranged private bartender & cocktail night experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de bartender privado y noche de cocteles cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private bartender & cocktail night with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en bartender privado y noche de cocteles, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Mariachi Dinner`, `Cena Privada con Mariachi`),
          description: text(`A carefully arranged private mariachi dinner experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de cena privada con mariachi cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private mariachi dinner with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en cena privada con mariachi, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Movie Night or Family Entertainment`, `Noche Privada de Cine o Entretenimiento Familiar`),
          description: text(`A carefully arranged private movie night or family entertainment experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de noche privada de cine o entretenimiento familiar cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private movie night or family entertainment with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en noche privada de cine o entretenimiento familiar, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Poker & Casino Experiences`, `Experiencias de Póker y Casino`),
        slug: `poker-casino-experiences`,
        image: nightlifeImage,
        heroImage: nightlifeHero,
        description: text(`Private poker nights, casino-style villa evenings, and calendar-dependent poker tournaments nearby.`, `Noches privadas de póker, veladas estilo casino en villa y torneos cercanos sujetos a calendario.`),
        overview: text(`Private poker nights, casino-style villa evenings, and calendar-dependent poker tournaments nearby. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Noches privadas de póker, veladas estilo casino en villa y torneos cercanos sujetos a calendario. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Nightlife`, `Vida Nocturna`),
        text(`Adults`, `Adultos`),
        text(`Groups`, `Grupos`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Private Villa Poker Night`, `Noche Privada de Póker en Villa`),
          description: text(`A carefully arranged private villa poker night experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de noche privada de póker en villa cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private villa poker night with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en noche privada de póker en villa, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Casino Night`, `Noche Privada de Casino`),
          description: text(`A carefully arranged private casino night experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de noche privada de casino cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private casino night with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en noche privada de casino, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Poker Tournament in Bucerías`, `Torneo de Póker en Bucerías`),
          description: text(`A carefully arranged poker tournament in bucerías experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de torneo de póker en bucerías cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on poker tournament in bucerías with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en torneo de póker en bucerías, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Curated Nights Out`, `Salidas Nocturnas Curadas`),
        slug: `curated-nights-out`,
        image: nightlifeImage,
        heroImage: nightlifeHero,
        description: text(`Sayulita nightlife, live music, Zona Romántica bar crawls, VIP nightlife tables, rooftops, and cocktail-bar experiences.`, `Vida nocturna en Sayulita, música en vivo, bar crawls en Zona Romántica, mesas VIP, rooftops y coctelería.`),
        overview: text(`Sayulita nightlife, live music, Zona Romántica bar crawls, VIP nightlife tables, rooftops, and cocktail-bar experiences. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Vida nocturna en Sayulita, música en vivo, bar crawls en Zona Romántica, mesas VIP, rooftops y coctelería. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Nightlife`, `Vida Nocturna`),
        text(`Adults`, `Adultos`),
        text(`VIP`, `VIP`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Sayulita Night Out`, `Noche en Sayulita`),
          description: text(`A carefully arranged sayulita night out experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de noche en sayulita cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on sayulita night out with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en noche en sayulita, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Zona Romántica Bar Crawl`, `Bar Crawl en Zona Romántica`),
          description: text(`A carefully arranged zona romántica bar crawl experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de bar crawl en zona romántica cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on zona romántica bar crawl with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en bar crawl en zona romántica, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`VIP Nightclub Table`, `Mesa VIP en Nightclub`),
          description: text(`A carefully arranged vip nightclub table experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de mesa vip en nightclub cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on vip nightclub table with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en mesa vip en nightclub, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Signature Dinner Shows`, `Cena Show`),
        slug: `signature-dinner-shows`,
        image: nightlifeImage,
        heroImage: nightlifeHero,
        description: text(`Produced evening experiences that combine boat transfer, dinner, entertainment, and a memorable night out.`, `Experiencias nocturnas producidas que combinan traslado en barco, cena, entretenimiento y una noche memorable.`),
        overview: text(`Produced evening experiences that combine boat transfer, dinner, entertainment, and a memorable night out. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Experiencias nocturnas producidas que combinan traslado en barco, cena, entretenimiento y una noche memorable. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Nightlife`, `Vida Nocturna`),
        text(`Food`, `Gastronomía`),
        text(`Celebration`, `Celebración`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Rhythms of the Night`, `Rhythms of the Night`),
          description: text(`A carefully arranged rhythms of the night experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de rhythms of the night cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on rhythms of the night with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en rhythms of the night, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Special Dinner Show Experience`, `Experiencia Especial de Cena Show`),
          description: text(`A carefully arranged special dinner show experience experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de experiencia especial de cena show cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on special dinner show experience with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en experiencia especial de cena show, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      })
    ],
  },
  {
    title: text(`Nearby Destinations & Day Trips`, `Destinos Cercanos y Day Trips`),
    slug: `nearby-destinations-day-trips`,
    image: destinationsImage,
    heroImage: destinationsHero,
    description: text(`Curated nearby outings for guests who want to explore beyond Punta Mita without losing the ease of a luxury stay.`, `Salidas cercanas seleccionadas para huéspedes que quieren explorar más allá de Punta Mita sin perder la comodidad de una estancia de lujo.`),
    activities: [
      createActivity({
        title: text(`Sayulita & San Pancho Half-Day Experiences`, `Experiencias de Medio Día en Sayulita y San Pancho`),
        slug: `sayulita-san-pancho-half-day-experiences`,
        image: destinationsImage,
        heroImage: destinationsHero,
        description: text(`Curated half-day visits to Sayulita and San Pancho for surf, beach, boutiques, casual dining, and local atmosphere.`, `Visitas de medio día a Sayulita y San Pancho para surf, playa, boutiques, comida casual y ambiente local.`),
        overview: text(`Curated half-day visits to Sayulita and San Pancho for surf, beach, boutiques, casual dining, and local atmosphere. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Visitas de medio día a Sayulita y San Pancho para surf, playa, boutiques, comida casual y ambiente local. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Culture`, `Cultura`),
        text(`Food`, `Gastronomía`),
        text(`Family-Friendly`, `Familiar`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Sayulita Half-Day`, `Medio Día en Sayulita`),
          description: text(`A carefully arranged sayulita half-day experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de medio día en sayulita cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on sayulita half-day with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en medio día en sayulita, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`San Pancho Half-Day`, `Medio Día en San Pancho`),
          description: text(`A carefully arranged san pancho half-day experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de medio día en san pancho cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on san pancho half-day with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en medio día en san pancho, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Surf Town Shopping & Lunch`, `Shopping y Comida en Pueblo Surfero`),
          description: text(`A carefully arranged surf town shopping & lunch experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de shopping y comida en pueblo surfero cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on surf town shopping & lunch with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en shopping y comida en pueblo surfero, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`La Cruz & Bucerías Specialty Outings`, `Salidas Especiales a La Cruz y Bucerías`),
        slug: `la-cruz-bucerias-specialty-outings`,
        image: destinationsImage,
        heroImage: destinationsHero,
        description: text(`Nearby specialty outings for marina departures, waterfront dinners, casino evenings, poker, and tailored local plans.`, `Salidas cercanas para marina, cenas frente al agua, casino, póker y planes locales personalizados.`),
        overview: text(`Nearby specialty outings for marina departures, waterfront dinners, casino evenings, poker, and tailored local plans. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Salidas cercanas para marina, cenas frente al agua, casino, póker y planes locales personalizados. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Food`, `Gastronomía`),
        text(`Nightlife`, `Vida Nocturna`),
        text(`Culture`, `Cultura`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`La Cruz Marina Departure or Dinner`, `Salida o Cena en Marina La Cruz`),
          description: text(`A carefully arranged la cruz marina departure or dinner experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de salida o cena en marina la cruz cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on la cruz marina departure or dinner with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en salida o cena en marina la cruz, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Bucerías Casino or Poker Outing`, `Salida de Casino o Póker en Bucerías`),
          description: text(`A carefully arranged bucerías casino or poker outing experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de salida de casino o póker en bucerías cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on bucerías casino or poker outing with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en salida de casino o póker en bucerías, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Selected Bucerías or La Cruz Dinner`, `Cena Seleccionada en Bucerías o La Cruz`),
          description: text(`A carefully arranged selected bucerías or la cruz dinner experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de cena seleccionada en bucerías o la cruz cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on selected bucerías or la cruz dinner with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en cena seleccionada en bucerías o la cruz, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Las Caletas Day or Evening Excursion`, `Excursión de Día o Noche a Las Caletas`),
        slug: `las-caletas-day-evening-excursion`,
        image: destinationsImage,
        heroImage: destinationsHero,
        description: text(`A distinctive excursion for guests interested in Las Caletas, beach adventure, or the evening dinner show format.`, `Una excursión especial para huéspedes interesados en Las Caletas, aventura en playa o formato de cena show nocturna.`),
        overview: text(`A distinctive excursion for guests interested in Las Caletas, beach adventure, or the evening dinner show format. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Una excursión especial para huéspedes interesados en Las Caletas, aventura en playa o formato de cena show nocturna. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Adventure`, `Aventura`),
        text(`Food`, `Gastronomía`),
        text(`Family-Friendly`, `Familiar`),
        text(`Nightlife`, `Vida Nocturna`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Las Caletas Beach Day`, `Día de Playa en Las Caletas`),
          description: text(`A carefully arranged las caletas beach day experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de día de playa en las caletas cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on las caletas beach day with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en día de playa en las caletas, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Las Caletas Evening Experience`, `Experiencia Nocturna en Las Caletas`),
          description: text(`A carefully arranged las caletas evening experience experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de experiencia nocturna en las caletas cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on las caletas evening experience with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en experiencia nocturna en las caletas, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      })
    ],
  },
  {
    title: text(`Seasonal & Special Events`, `Temporadas y Eventos Especiales`),
    slug: `seasonal-special-events`,
    image: seasonalImage,
    heroImage: seasonalHero,
    description: text(`Punta Mita seasonal events, holidays, golf events, polo season, fishing tournaments, and private celebrations.`, `Eventos de temporada en Punta Mita, días festivos, golf, temporada de polo, torneos de pesca y celebraciones privadas.`),
    activities: [
      createActivity({
        title: text(`Punta Mita Seasonal Events & Holidays`, `Eventos de Temporada y Días Festivos en Punta Mita`),
        slug: `punta-mita-seasonal-events-holidays`,
        image: seasonalImage,
        heroImage: seasonalHero,
        description: text(`Gourmet & Golf, club events, holidays, New Year’s Eve, polo season, fishing tournaments, surf season, and seasonal celebrations.`, `Gourmet & Golf, eventos de club, días festivos, Año Nuevo, temporada de polo, torneos de pesca, temporada de surf y celebraciones.`),
        overview: text(`Gourmet & Golf, club events, holidays, New Year’s Eve, polo season, fishing tournaments, surf season, and seasonal celebrations. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Gourmet & Golf, eventos de club, días festivos, Año Nuevo, temporada de polo, torneos de pesca, temporada de surf y celebraciones. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`Seasonal`, `De Temporada`),
        text(`Celebration`, `Celebración`),
        text(`VIP`, `VIP`),
        text(`Family-Friendly`, `Familiar`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Punta Mita Gourmet & Golf`, `Punta Mita Gourmet & Golf`),
          description: text(`A carefully arranged punta mita gourmet & golf experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de punta mita gourmet & golf cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on punta mita gourmet & golf with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en punta mita gourmet & golf, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Holiday Villa Experiences`, `Experiencias de Días Festivos en Villa`),
          description: text(`A carefully arranged holiday villa experiences experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de experiencias de días festivos en villa cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on holiday villa experiences with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en experiencias de días festivos en villa, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`New Year’s Eve Yacht, Villa or Beach-Club Event`, `Evento de Año Nuevo en Yate, Villa o Beach Club`),
          description: text(`A carefully arranged new year’s eve yacht, villa or beach-club event experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de evento de año nuevo en yate, villa o beach club cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on new year’s eve yacht, villa or beach-club event with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en evento de año nuevo en yate, villa o beach club, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Seasonal Sports & Local Events`, `Deportes de Temporada y Eventos Locales`),
          description: text(`A carefully arranged seasonal sports & local events experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de deportes de temporada y eventos locales cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on seasonal sports & local events with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en deportes de temporada y eventos locales, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      })
    ],
  },
  {
    title: text(`High-End / VIP Experiences`, `Experiencias High-End / VIP`),
    slug: `high-end-vip-experiences`,
    image: vipImage,
    heroImage: vipHero,
    description: text(`Private aviation, scenic flights, celebrations, proposals, VIP hosting, security, drivers, and full-stay concierge planning.`, `Aviación privada, vuelos escénicos, celebraciones, propuestas, hosting VIP, seguridad, choferes y planeación concierge para toda la estancia.`),
    activities: [
      createActivity({
        title: text(`Private Aviation & Scenic Flights`, `Aviación Privada y Vuelos Escénicos`),
        slug: `private-aviation-scenic-flights`,
        image: vipImage,
        heroImage: vipHero,
        description: text(`Private aviation transfers, helicopter tours, scenic flights, and VIP arrival or departure logistics.`, `Traslados en aviación privada, tours en helicóptero, vuelos escénicos y logística VIP de llegada o salida.`),
        overview: text(`Private aviation transfers, helicopter tours, scenic flights, and VIP arrival or departure logistics. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Traslados en aviación privada, tours en helicóptero, vuelos escénicos y logística VIP de llegada o salida. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`VIP`, `VIP`),
        text(`Luxury`, `Lujo`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Private Aviation Transfer`, `Traslado en Aviación Privada`),
          description: text(`A carefully arranged private aviation transfer experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de traslado en aviación privada cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private aviation transfer with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en traslado en aviación privada, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Helicopter or Scenic Flight`, `Helicóptero o Vuelo Escénico`),
          description: text(`A carefully arranged helicopter or scenic flight experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de helicóptero o vuelo escénico cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on helicopter or scenic flight with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en helicóptero o vuelo escénico, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Luxury Celebrations & Proposals`, `Celebraciones de Lujo y Propuestas`),
        slug: `luxury-celebrations-proposals`,
        image: vipImage,
        heroImage: vipHero,
        description: text(`Proposal planning, photographers, videographers, yacht proposals, beach setups, birthdays, anniversaries, and celebration production.`, `Planeación de propuestas, fotógrafos, videógrafos, propuestas en yate, montajes en playa, cumpleaños, aniversarios y producción de celebraciones.`),
        overview: text(`Proposal planning, photographers, videographers, yacht proposals, beach setups, birthdays, anniversaries, and celebration production. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Planeación de propuestas, fotógrafos, videógrafos, propuestas en yate, montajes en playa, cumpleaños, aniversarios y producción de celebraciones. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`VIP`, `VIP`),
        text(`Romantic`, `Romántico`),
        text(`Celebration`, `Celebración`),
        text(`Luxury`, `Lujo`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Proposal Planning`, `Planeación de Propuesta`),
          description: text(`A carefully arranged proposal planning experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de planeación de propuesta cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on proposal planning with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en planeación de propuesta, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Birthday or Anniversary Production`, `Producción de Cumpleaños o Aniversario`),
          description: text(`A carefully arranged birthday or anniversary production experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de producción de cumpleaños o aniversario cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on birthday or anniversary production with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en producción de cumpleaños o aniversario, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Photographer or Content Creator`, `Fotógrafo Privado o Creador de Contenido`),
          description: text(`A carefully arranged private photographer or content creator experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de fotógrafo privado o creador de contenido cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private photographer or content creator with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en fotógrafo privado o creador de contenido, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Wedding-Weekend Activity Planning`, `Planeación de Actividades Para Fin de Semana de Boda`),
          description: text(`A carefully arranged wedding-weekend activity planning experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de planeación de actividades para fin de semana de boda cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on wedding-weekend activity planning with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en planeación de actividades para fin de semana de boda, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      }),
      createActivity({
        title: text(`Full-Stay Concierge & VIP Hosting`, `Concierge Para Toda la Estancia y Hosting VIP`),
        slug: `full-stay-concierge-vip-hosting`,
        image: vipImage,
        heroImage: vipHero,
        description: text(`Full itinerary design, private driver, bilingual host, security, reservations, activity planning, and VIP coordination.`, `Diseño de itinerario completo, chofer privado, host bilingüe, seguridad, reservaciones, planeación de actividades y coordinación VIP.`),
        overview: text(`Full itinerary design, private driver, bilingual host, security, reservations, activity planning, and VIP coordination. This activity can be adapted for families, couples, groups, celebrations, and guests who want a more personal way to experience Punta Mita.`, `Diseño de itinerario completo, chofer privado, host bilingüe, seguridad, reservaciones, planeación de actividades y coordinación VIP. Esta actividad puede adaptarse para familias, parejas, grupos, celebraciones y huéspedes que buscan una forma más personal de vivir Punta Mita.`),
        bestFor: text(`Families, couples, groups, celebrations, and guests who want a curated Punta Mita experience.`, `Familias, parejas, grupos, celebraciones y huéspedes que buscan una experiencia cuidadosamente organizada en Punta Mita.`),
        duration: text(`Usually flexible depending on the selected option and itinerary.`, `Normalmente flexible según la opción seleccionada y el itinerario.`),
        seasonality: text(`Available year-round unless noted; some experiences depend on weather, ocean conditions, permits, or seasonal calendars.`, `Disponible todo el año salvo indicación específica; algunas experiencias dependen del clima, condiciones del mar, permisos o calendarios de temporada.`),
        tags: [
        text(`VIP`, `VIP`),
        text(`Luxury`, `Lujo`),
        text(`Groups`, `Grupos`)
        ],
        notes: text(`We recommend confirming the best option based on your group size, preferred timing, transportation needs, and overall travel style.`, `Recomendamos confirmar la mejor opción según el tamaño del grupo, horario preferido, necesidades de transporte y estilo general del viaje.`),
        whatToExpect: text(`Expect a curated plan with clear recommendations, practical timing, and coordination adapted to your stay.`, `Espera un plan seleccionado con recomendaciones claras, horarios prácticos y coordinación adaptada a tu estancia.`),
        whatToBring: text(`Comfortable clothing, sun protection when relevant, and any personal items needed for the activity.`, `Ropa cómoda, protección solar cuando aplique y cualquier artículo personal necesario para la actividad.`),
        experienceOptions: [
        option({
          title: text(`Full Itinerary Design`, `Diseño de Itinerario Completo`),
          description: text(`A carefully arranged full itinerary design experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de diseño de itinerario completo cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on full itinerary design with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en diseño de itinerario completo, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Driver & Bilingual Host`, `Chofer Privado y Host Bilingüe`),
          description: text(`A carefully arranged private driver & bilingual host experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de chofer privado y host bilingüe cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private driver & bilingual host with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en chofer privado y host bilingüe, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`Private Security`, `Seguridad Privada`),
          description: text(`A carefully arranged private security experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de seguridad privada cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on private security with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en seguridad privada, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        }),
        option({
          title: text(`VIP Access & Reservation Coordination`, `Acceso VIP y Coordinación de Reservaciones`),
          description: text(`A carefully arranged vip access & reservation coordination experience designed around your group, timing, comfort level, and preferred style.`, `Una experiencia de acceso vip y coordinación de reservaciones cuidadosamente organizada según tu grupo, horario, nivel de comodidad y estilo preferido.`),
          bestFor: text(`Guests who want a polished, easy-to-plan experience with local guidance and clear expectations.`, `Huéspedes que buscan una experiencia bien organizada, fácil de planear, con guía local y expectativas claras.`),
          duration: text(`Timing varies depending on the experience and final itinerary.`, `La duración varía según la experiencia y el itinerario final.`),
          experience: text(`This option focuses on vip access & reservation coordination with coordination adapted to the season, availability, guest preferences, and the overall rhythm of the trip.`, `Esta opción se enfoca en acceso vip y coordinación de reservaciones, con coordinación adaptada a la temporada, disponibilidad, preferencias de los huéspedes y ritmo general del viaje.`),
          whatToExpect: text(`A smooth, curated experience with practical coordination, trusted local support, and details confirmed before the plan is finalized.`, `Una experiencia fluida y cuidadosamente seleccionada, con coordinación práctica, apoyo local de confianza y detalles confirmados antes de finalizar el plan.`),
          whatToBring: text(`Comfortable clothing, any personal essentials, and anything specific requested once the final plan is confirmed.`, `Ropa cómoda, artículos personales esenciales y cualquier cosa específica que se solicite una vez confirmado el plan final.`),
          goodToKnow: text(`Availability, timing, inclusions, and final recommendations may vary by season and group profile.`, `La disponibilidad, horarios, inclusiones y recomendaciones finales pueden variar según la temporada y el perfil del grupo.`),
        })
        ],
      })
    ],
  }
];

export function getDiscoverCategoryBySlug(slug: string) {
  return discoverCategories.find((category) => category.slug === slug);
}

export function getActivityBySlug(categorySlug: string, activitySlug: string) {
  const category = getDiscoverCategoryBySlug(categorySlug);
  return category?.activities.find((activity) => activity.slug === activitySlug);
}

