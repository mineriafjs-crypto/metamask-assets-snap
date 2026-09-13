# SELEMAN Assets (MetaMask Snap)

SIP-29 Snap that supplies **asset metadata, fiat prices, market data, and historical
series** for chain `eip155:73571` to MetaMask Tokens.

## npm (allowlist target)

| Field | Value |
| --- | --- |
| Package | [`@oman2026/metamask-assets-snap`](https://www.npmjs.com/package/@oman2026/metamask-assets-snap) |
| Version | `1.0.3` |
| Snap ID | `npm:@oman2026/metamask-assets-snap` |
| Manifest shasum | `ThmPwfyU8tA1EVcoPa+R1HJts7gf1DMlUnWfEGD3PQs=` |
| Icon | Official SELEMAN blue triangle (`images/icon.svg`, same as `/icons/smn.png`) |
| Source repo | https://github.com/mineriafjs-crypto/metamask-assets-snap |
| platformVersion | `12.0.0` |

## Permissions (`snap.manifest.json`)

- `endowment:network-access`
- `endowment:assets` — scope `eip155:73571`
- `snap_getPreferences`

No key-management permissions (`snap_getBip32Entropy`, `snap_manageAccounts`, etc.).

## Public product URLs

- Brand / product: https://seleman.monarcaproject.com
- Snap page: https://seleman.monarcaproject.com/metamask

The Snap calls only these public SIP-29 backend routes (no API keys in the client):

- `POST /api/v1/metamask-snap/assets/lookup`
- `POST /api/v1/metamask-snap/assets/conversion`
- `POST /api/v1/metamask-snap/assets/historical`
- `POST /api/v1/metamask-snap/assets/market-data`

Base host: `https://seleman.monarcaproject.com`

## Build from this repository

```bash
npm install
npm run build
```

Requires Node.js 18+. Output: `dist/bundle.js` (shasum must match the table above after publish).

## Allowlist

This Snap uses permissions that are **not** on MetaMask’s open-permissions list, so
MetaMask Stable requires allowlisting. Use **MetaMask Flask** to test from npm before
allowlist approval.

- Docs: https://docs.metamask.io/snaps/how-to/get-allowlisted/
- Form: https://go.metamask.io/snaps-directory-request
- Install Flask: https://docs.metamask.io/snaps/get-started/install-flask/
- Snap Install Tester: https://montoya.github.io/snap-install-tester/

## License

MIT
