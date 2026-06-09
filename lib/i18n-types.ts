export type Language = "en" | "es";

export type LocalizedText = {
  en: string;
  es: string;
};

export function text(en: string, es: string): LocalizedText {
  return { en, es };
}

export function getText(value: string | LocalizedText, language: Language): string {
  if (typeof value === "string") return value;
  return value[language] || value.en;
}
