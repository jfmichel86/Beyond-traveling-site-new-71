/** Build a mailto: link with a subject and a multi-line body. */
export const mailtoUrl = (email: string, subject: string, bodyLines: string[]) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
