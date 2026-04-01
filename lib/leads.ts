export const LEADS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxeHM8Iej8BkpHeZawevZ6QVHDzrcuvRW-gKIpPdnMESOc-agLeL_OdXSEVHe-V1_ty/exec";

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

export async function submitContact(args: {
  nume: string;
  prenume: string;
  email: string;
  telefon: string;
  mesaj: string;
  pagina?: string;
}) {
  const { nume, prenume, email, telefon, mesaj, pagina = "programare" } = args;

  await fetch(LEADS_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "contact",
      nume,
      prenume,
      email,
      telefon,
      mesaj,
      pagina,
      data: new Date().toISOString(),
    }),
  });
}

