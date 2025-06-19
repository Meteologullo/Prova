# spiaggia-cam – Cloudflare Worker

Serve sempre l'ultima foto della webcam Ecowitt HP‑10 senza CORS
né chiavi API. Parametri (`authorize`, `device_id`) sono già inseriti.

## Deploy rapido

1. Fai **fork o clone** di questo repo su GitHub.
2. Vai in **Cloudflare → Workers & Pages → Create application → Connect to Git**.
3. Seleziona il repository e conferma **Deploy**.
4. L'URL finale sarà `https://spiaggia-cam.<random>.workers.dev`.

Oppure zippa la cartella e trascinala su
<https://dash.cloudflare.com/deploy>.

Dentro `src/index.js` puoi cambiare i due parametri se un giorno cambiano.
