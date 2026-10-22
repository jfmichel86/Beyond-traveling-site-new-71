// One place for the WhatsApp number and the prefilled messages.
export const WHATSAPP_NUMBER = "523313619889";

export type WaAudience = "owner" | "guest";

/** What the visitor is asking about. Owners are the default audience. */
export type WaTopic =
  | WaAudience
  | "discover"
  | "service"
  | "cancellation"
  | "terms"
  | "privacy";

type Msg = { en: string; es: string };

export const WA_MESSAGES: Record<Exclude<WaTopic, "service">, Msg> = {
  owner: {
    en: "Hello! I’d like to talk about managing my property in Punta Mita.",
    es: "¡Hola! Me gustaría hablar sobre la administración de mi propiedad en Punta Mita.",
  },
  guest: {
    en: "Hello! I’d like to ask about staying at one of your villas in Punta Mita.",
    es: "¡Hola! Me gustaría preguntar por una estancia en una de sus villas en Punta Mita.",
  },
  discover: {
    en: "Hello! I’m looking at experiences in Punta Mita and would like help planning my stay.",
    es: "¡Hola! Estoy viendo experiencias en Punta Mita y me gustaría recibir ayuda para planear mi estancia.",
  },
  cancellation: {
    en: "Hello! I have a question about your cancellation policy.",
    es: "¡Hola! Tengo una pregunta sobre su política de cancelación.",
  },
  terms: {
    en: "Hello! I have a question about your terms and conditions.",
    es: "¡Hola! Tengo una pregunta sobre sus términos y condiciones.",
  },
  privacy: {
    en: "Hello! I have a question about your privacy policy.",
    es: "¡Hola! Tengo una pregunta sobre su política de privacidad.",
  },
};

/** Message for a specific service page, e.g. "Home Watch". */
export const serviceMessage = (en: string, es: string): Msg => ({
  en: `Hello! I’m interested in ${en} for my property in Punta Mita.`,
  es: `¡Hola! Me interesa el servicio de ${es} para mi propiedad en Punta Mita.`,
});

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
