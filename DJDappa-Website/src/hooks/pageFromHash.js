import { PAGE_IDS } from "../data/site.js";

export const DEFAULT_PAGE = "home";

export function pageFromHash(hash) {
  const id = (hash || "").replace(/^#\/?/, "").toLowerCase();
  return PAGE_IDS.includes(id) ? id : DEFAULT_PAGE;
}
