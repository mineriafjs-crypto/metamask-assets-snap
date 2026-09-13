# MetaMask allowlist — public submission fields

Official form: https://go.metamask.io/snaps-directory-request  
Guide: https://docs.metamask.io/snaps/how-to/get-allowlisted/

| Form field | Public value |
| --- | --- |
| Snap name | SELEMAN Assets |
| Brand / website | https://seleman.monarcaproject.com |
| Snap website | https://seleman.monarcaproject.com/metamask |
| GitHub (source) | https://github.com/mineriafjs-crypto/metamask-assets-snap |
| npm package | https://www.npmjs.com/package/@oman2026/metamask-assets-snap |
| Snap ID | npm:@oman2026/metamask-assets-snap |
| Version | 1.0.3 |
| Manifest shasum | ThmPwfyU8tA1EVcoPa+R1HJts7gf1DMlUnWfEGD3PQs= |
| Icon | Official SELEMAN blue triangle (`images/icon.svg` = `/icons/smn.png`) |
| Permissions | endowment:network-access; endowment:assets (eip155:73571); snap_getPreferences |
| Key management audit | Not applicable (no entropy / account-management permissions) |

## Alignment (verified)

| Surface | Status |
| --- | --- |
| Local package.json / snap.manifest.json | 1.0.3 + triangle icon |
| npm latest | 1.0.3 |
| Letter-S circle icon | REMOVED (was 1.0.2 and earlier) |
| Dashboard Snap ID | `npm:@oman2026/metamask-assets-snap` |
| Dashboard retry flag | `seleman.mm.snapAsked.v7` |
| Q11 Flask UI Install Tester | NOT DONE — need Flask Web Store profile |
| Q12 Icon (SVG square) | Yes — official blue triangle |

Do **not** answer Yes on form Q11 until Flask UI install of `1.0.3` is proven via `wallet_getSnaps`.

Form version field must be **1.0.3** (not 1.0.2).
