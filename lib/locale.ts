/** Helpers for the /es Spanish URL prefix (English stays un-prefixed). */

export const isEsPath = (pathname: string) =>
  pathname === "/es" || pathname.startsWith("/es/");

/** "/es/about" -> "/about", "/es" -> "/", "/about" -> "/about". */
export const stripEs = (pathname: string) =>
  pathname.replace(/^\/es(?=\/|$)/, "") || "/";

/** "/about" -> "/es/about", "/" -> "/es". */
export const withEs = (pathname: string) =>
  pathname === "/" ? "/es" : `/es${pathname}`;

/** Prefix an internal href with /es when the visitor is on the Spanish site. */
export function localizeHref(href: string, es: boolean): string {
  if (!es || !href.startsWith("/") || href.startsWith("//")) return href;
  const match = /^([^?#]*)(.*)$/.exec(href);
  const path = match ? match[1] : href;
  const rest = match ? match[2] : "";
  if (isEsPath(path)) return href;
  if (/^\/(api|_next)(\/|$)/.test(path)) return href;
  if (/\.[a-z0-9]+$/i.test(path)) return href; // files: images, pdfs, ...
  return withEs(path || "/") + rest;
}
