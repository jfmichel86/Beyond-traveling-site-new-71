// One place for the WhatsApp number and the prefilled messages.
export const WHATSAPP_NUMBER = "523313619889";

export type WaAudience = "owner" | "guest";

export const WA_MESSAGES: Record<WaAudience, { en: string; es: string }> = {
  owner: {
    en: "Hello! I'd like to talk about managing my property in Punta Mita.",
    es: "¡Hola! Me gustaría hablar sobre la administración de mi propiedad en Punta Mita.",
  },
  guest: {
    en: "Hello! I'd like to ask about staying at one of your villas in Punta Mita.",
    es: "¡Hola! Me gustaría preguntar por una estancia en una de sus villas en Punta Mita.",
  },
};

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
