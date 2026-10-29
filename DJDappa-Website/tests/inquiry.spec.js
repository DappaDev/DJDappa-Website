import { test, expect } from "@playwright/test";
import { buildInquirySubject, buildInquiryText, buildMailto, formatDate, validateInquiry, EMPTY_INQUIRY } from "../src/lib/inquiry.js";
import { pageFromHash } from "../src/hooks/pageFromHash.js";

test.describe("inquiry helpers (unit)", () => {
  const full = { name: "Jamie", email: "jamie@example.com", date: "2027-06-12", guests: "150", venue: "Red Rocks", vibe: "Wedding & afterparty" };

  test("formats dates as MM/DD/YYYY", () => {
    expect(formatDate("2027-06-12")).toBe("06/12/2027");
    expect(formatDate("")).toBe("");
  });

  test("validation", () => {
    expect(Object.keys(validateInquiry(EMPTY_INQUIRY)).sort()).toEqual(["date", "email", "name"]);
    expect(validateInquiry({ ...full, email: "nope" }).email).toBeTruthy();
    expect(validateInquiry(full)).toEqual({});
  });

  test("subject, body and mailto", () => {
    expect(buildInquirySubject(full)).toBe("Booking inquiry — 06/12/2027 — Jamie");
    expect(buildInquiryText(full)).toContain("Venue: Red Rocks");
    expect(buildInquiryText(EMPTY_INQUIRY)).toContain("Guest count: -");
    const url = buildMailto(full);
    expect(url.startsWith("mailto:book@djdappa.com?subject=")).toBe(true);
    expect(url).not.toContain(" "); // fully encoded
    expect(decodeURIComponent(url)).toContain("Wedding & afterparty");
  });

  test("hash routing", () => {
    expect(pageFromHash("#weddings")).toBe("weddings");
    expect(pageFromHash("#/Contact")).toBe("contact");
    expect(pageFromHash("")).toBe("home");
    expect(pageFromHash("#nope")).toBe("home");
  });
});
