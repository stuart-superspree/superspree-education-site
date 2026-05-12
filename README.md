# Connected Campus · Northbridge College

Superspree RouteLoop wayfinder demo. Single-file HTML app served by a tiny Express server. Deploys to Railway from GitHub in one click.

---

## What's in this repo

```
connected-campus/
├── public/
│   └── index.html          ← the app (renamed from connected-campus-v2.html)
├── server.js               ← Express server, ~30 lines
├── package.json            ← Node dependencies
├── railway.json            ← Railway build config
├── .gitignore
└── README.md               ← this file
```

---

## Deploy in 5 steps

### 1. Create the repo locally

```bash
mkdir connected-campus
cd connected-campus
mkdir public
```

Copy your files into the right places:

- Put `index.html` into `public/index.html` (this is your `connected-campus-v2.html`, just renamed)
- Put `server.js`, `package.json`, `railway.json`, `.gitignore`, `README.md` at the repo root

### 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Connected Campus demo"
git branch -M main
```

Then on GitHub (https://github.com/new):
- Create a new repository called `connected-campus`
- Leave it empty (don't add a README — you already have one)
- Copy the remote-add commands GitHub shows you, e.g.:

```bash
git remote add origin https://github.com/YOUR-USERNAME/connected-campus.git
git push -u origin main
```

### 3. Deploy to Railway

1. Go to https://railway.app and sign in (you can use your GitHub account)
2. Click **New Project** → **Deploy from GitHub repo**
3. If prompted, authorise Railway to read your GitHub repositories
4. Select your `connected-campus` repo
5. Railway auto-detects Node.js, reads `railway.json`, and starts deploying

Wait ~60 seconds for the build to finish.

### 4. Generate a public URL

By default Railway gives you an internal URL only. To make it publicly accessible:

1. In your Railway project, click your service (the rocket icon)
2. Go to the **Settings** tab
3. Under **Networking** → **Public Networking**, click **Generate Domain**
4. Railway gives you a URL like `connected-campus-production.up.railway.app`

That URL is live. Open it in any browser.

### 5. Test the simulated NFC tags

The app supports URL parameters to simulate NFC taps. Add `?tag=` to the URL:

- `https://your-app.up.railway.app/?tag=main-reception`
- `https://your-app.up.railway.app/?tag=library-entrance`
- `https://your-app.up.railway.app/?tag=canteen`
- `https://your-app.up.railway.app/?tag=science-block`
- `https://your-app.up.railway.app/?tag=sports-centre`
- `https://your-app.up.railway.app/?tag=block-b-l2`
- `https://your-app.up.railway.app/?tag=student-union`

You can also encode those URLs as QR codes for demos (free QR generators online accept any URL).

---

## Updating the app

After your initial deploy, every push to GitHub `main` triggers an automatic Railway redeploy. Workflow:

```bash
# edit public/index.html
git add public/index.html
git commit -m "Update: describe what changed"
git push
```

Railway picks up the push within a few seconds and rebuilds. Your URL stays the same.

---

## Custom domain (optional)

When you're ready to use a Superspree subdomain like `campus.superspree.io`:

1. In Railway: Settings → Networking → Custom Domain → add `campus.superspree.io`
2. Railway gives you a `CNAME` value
3. In your DNS provider (where superspree.io is registered): add a CNAME record pointing `campus` to that Railway value
4. SSL certificate auto-provisions in ~5 minutes

---

## Running locally (optional)

To preview the app on your machine before pushing:

```bash
npm install
npm start
```

Visit `http://localhost:3000`.

You'll need Node.js 18+ installed.

---

## Costs

- **GitHub**: free for public or private repos
- **Railway**: free tier gives 500 hours/month of execution time + $5 of usage credit. A single-file static app uses negligible resources — you can run this 24/7 for months on the free tier.

If usage grows, the Hobby tier is $5/month and the Pro tier is $20/month.

---

## Notes on Web NFC

The app supports the real **Web NFC API** on Android Chrome. For NFC to work on real devices:

- The site **must** be served over HTTPS (Railway does this automatically)
- The user must be on Android Chrome (iOS doesn't expose NFC to web apps)
- The NFC tags must encode a URL pointing to your deployed app

The demo URL parameters (`?tag=`) work everywhere and don't need NFC hardware — perfect for client pitches on any device.

---

**Superspree** · superspree.io · hello@superspree.io
