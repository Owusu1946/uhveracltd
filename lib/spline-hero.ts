import type { Application, SPEObject } from "@splinetool/runtime";

/** Matches common Spline floor / backdrop object names (not the knot mesh). */
const BACKDROP_NAME =
  /^(background|bg|plane(\s*\d+)?|floor|ground|grid|shadow\s*plane|backdrop)$/i;

const BACKDROP_PARTIAL = /(background\s*plane|floor\s*plane|ground\s*plane)/i;

function isBackdropObject(obj: SPEObject): boolean {
  const name = obj.name.trim();
  if (!name) return false;
  if (/knot|glass|torus|shape/i.test(name)) return false;
  return BACKDROP_NAME.test(name) || BACKDROP_PARTIAL.test(name);
}

/** Hide scene backdrop and blend the knot into the page background. */
export function configureHeroSplineScene(spline: Application) {
  spline.setBackgroundColor("transparent");

  for (const obj of spline.getAllObjects()) {
    if (isBackdropObject(obj)) {
      obj.hide();
    }
  }
}
