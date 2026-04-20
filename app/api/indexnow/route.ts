import { NextResponse } from "next/server";

const INDEXNOW_KEY = "4b24feb9c2b3740b8e16c9561645c5c1";
const HOST = "totuldespreanxietate.ro";

const URLS = [
  `https://${HOST}`,
  `https://${HOST}/atac-de-panica`,
  `https://${HOST}/atac-de-panica/recunoaste`,
  `https://${HOST}/atac-de-panica/intelege`,
  `https://${HOST}/atac-de-panica/actioneaza`,
  `https://${HOST}/tipuri`,
  `https://${HOST}/tipuri/anxietate-sociala`,
  `https://${HOST}/tipuri/anxietate-generalizata`,
  `https://${HOST}/tipuri/tspt`,
  `https://${HOST}/tipuri/toc`,
  `https://${HOST}/tipuri/fobii-specifice`,
  `https://${HOST}/tipuri/fobii-specifice/fobie-de-sange`,
  `https://${HOST}/tipuri/fobii-specifice/claustrofobie`,
  `https://${HOST}/tipuri/fobii-specifice/fobie-de-animale`,
  `https://${HOST}/tipuri/fobii-specifice/fobie-de-zbor`,
  `https://${HOST}/tipuri/fobii-specifice/fobie-de-inaltime`,
  `https://${HOST}/tipuri/atac-de-panica`,
  `https://${HOST}/tipuri/atac-de-panica/simptome`,
  `https://${HOST}/tipuri/atac-de-panica/sau-infarct`,
  `https://${HOST}/tipuri/atac-de-panica/ce-sa-faci`,
  `https://${HOST}/tipuri/atac-de-panica/ce-vrea-sa-spuna-psihicul`,
  `https://${HOST}/tipuri/atac-de-panica/de-ce-se-intampla`,
  `https://${HOST}/tipuri/atac-de-panica/tratament`,
  `https://${HOST}/despre-daniel`,
  `https://${HOST}/programare`,
];

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${INDEXNOW_KEY}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: URLS,
  };

  const results = await Promise.allSettled([
    fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
    fetch("https://www.bing.com/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
  ]);

  const summary = results.map((r, i) => ({
    engine: i === 0 ? "indexnow.org" : "bing.com",
    status: r.status === "fulfilled" ? r.value.status : "failed",
  }));

  return NextResponse.json({
    submitted: URLS.length,
    engines: summary,
    timestamp: new Date().toISOString(),
  });
}
