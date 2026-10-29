import { useCallback, useEffect, useState } from "react";
import { PAGE_IDS } from "../data/site.js";
import { DEFAULT_PAGE, pageFromHash } from "./pageFromHash.js";

/**
 * Tiny hash router: keeps the current page in the URL (#weddings) so links can be
 * shared, the browser back/forward buttons work, and a refresh keeps you on the page.
 */
export function useHashRoute() {
  const [page, setPage] = useState(() => pageFromHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setPage(pageFromHash(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = useCallback((id) => {
    const next = PAGE_IDS.includes(id) ? id : DEFAULT_PAGE;
    if (pageFromHash(window.location.hash) !== next || !window.location.hash) {
      window.location.hash = next;
    }
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return [page, navigate];
}
