export const LEADS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxttybw_XIo9bl_AGiOOdWR__mXup2TP_3xjLc0gy0UGTPATrYHO8rZN3ZB2lioKNCF/exec";

export async function submitLead(args: {
  email: string;
  page: string;
  dateIso?: string;
}) {
  const { email, page, dateIso = new Date().toISOString() } = args;

  await fetch(LEADS_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      page,
      data: dateIso,
    }),
  });
}

