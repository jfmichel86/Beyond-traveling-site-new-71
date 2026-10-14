// Tiny stand-in for @sanity/image-url's builder (same chainable API:
// urlFor(img).width(800).height(600).quality(85).url()), so the villa
// components ported from Mexican Reserve work without extra npm packages.
import { SANITY_DATASET, SANITY_PROJECT_ID } from "@/lib/sanity";

type Img = { asset?: { _ref?: string }; hotspot?: { x: number; y: number } } | undefined | null;

class Builder {
  private w?: number;
  private h?: number;
  private q?: number;
  constructor(private img: Img) {}
  width(n: number) { this.w = n; return this; }
  height(n: number) { this.h = n; return this; }
  quality(n: number) { this.q = n; return this; }
  url(): string {
    const ref = this.img?.asset?._ref;
    if (!ref) return "";
    const [, id, dims, ext] = ref.split("-");
    const u = new URL(`https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dims}.${ext}`);
    u.searchParams.set("auto", "format");
    if (this.w) u.searchParams.set("w", String(this.w));
    if (this.h) u.searchParams.set("h", String(this.h));
    if (this.q) u.searchParams.set("q", String(this.q));
    if (this.w && this.h) {
      u.searchParams.set("fit", "crop");
      const hs = this.img?.hotspot;
      if (hs) {
        u.searchParams.set("crop", "focalpoint");
        u.searchParams.set("fp-x", hs.x.toFixed(3));
        u.searchParams.set("fp-y", hs.y.toFixed(3));
      }
    } else {
      u.searchParams.set("fit", "max");
    }
    return u.toString();
  }
}

export const urlFor = (img: Img) => new Builder(img);
