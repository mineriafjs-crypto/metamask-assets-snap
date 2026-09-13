import type {
  OnAssetHistoricalPriceHandler,
  OnAssetsConversionHandler,
  OnAssetsLookupHandler,
  OnAssetsMarketDataHandler,
} from "@metamask/snaps-sdk";

/** Backend público SELEMAN (SIP-29 endowment:assets). */
const API_BASE = "https://seleman.monarcaproject.com";

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error(`SELEMAN snap API ${path} → ${res.status}`);
  }
  return (await res.json()) as T;
}

export const onAssetsLookup: OnAssetsLookupHandler = async ({ assets }) =>
  postJson("/api/v1/metamask-snap/assets/lookup", { assets });

export const onAssetsConversion: OnAssetsConversionHandler = async ({
  conversions,
}) => postJson("/api/v1/metamask-snap/assets/conversion", { conversions });

export const onAssetHistoricalPrice: OnAssetHistoricalPriceHandler = async ({
  from,
  to,
}) => postJson("/api/v1/metamask-snap/assets/historical", { from, to });

export const onAssetsMarketData: OnAssetsMarketDataHandler = async ({ assets }) =>
  postJson("/api/v1/metamask-snap/assets/market-data", { assets });
