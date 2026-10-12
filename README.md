# recipe thing.

All your recipes in one place, written for your kitchen.

A phone-first web app: add recipes from a photo, a PDF, a link or pasted text, invent new ones with AI,
cook step by step with timers, and share recipes with friends who use the app.

## How it's built

- **`public/`**: the app itself (`index.html`, `app.js`, `app.css`), its home-screen icon and offline support.
- **`src/worker.js`**: the server, a Cloudflare Worker. It handles accounts, saves recipes,
  makes share codes, opens recipe links, and talks to Claude.
- **Database**: a small SQLite database inside a Cloudflare Durable Object. It's created automatically.
- **AI**: Claude Haiku through the Anthropic API (set in `wrangler.jsonc` as `AI_MODEL`).
  Daily limits per person and in total are set there too (`AI_DAILY_PER_USER`, `AI_DAILY_TOTAL`).

## Putting it online (one time)

1. **Claude API key**: at [console.anthropic.com](https://console.anthropic.com), add credit under Billing,
   set a monthly spend limit, then create a key under API Keys.
2. **Cloudflare**: sign up at [cloudflare.com](https://dash.cloudflare.com/sign-up) (free).
3. In Cloudflare, go to **Workers & Pages → Create → Import a repository**, connect GitHub and pick
   `recipe-thing`. Leave the build settings as they are (deploy command `npx wrangler deploy`) and deploy.
4. Open the new Worker → **Settings → Variables and Secrets → Add**:
   - `ANTHROPIC_API_KEY` (type **Secret**): your Claude API key.
   - `SIGNUP_CODE` (optional, **Secret**): if set, people need this code to make an account.
5. Open the `…workers.dev` link it gives you, make your account, and on iPhone tap
   **Share → Add to Home Screen**.

Every change pushed to the `main` branch on GitHub goes live by itself.

## Running it on a computer

```sh
npm install
echo "ANTHROPIC_API_KEY=sk-ant-..." > .dev.vars
npm run dev
```
