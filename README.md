# Cloudline

Scenario practice for the Salesforce Marketing Cloud Engagement Specialist exam.
About 200 original scenario questions across the five exam sections, a study mode
with instant explanations, and a 90-minute timed exam mode that draws 60 questions
weighted like the real exam (10/24/26/26/14%).

These are original practice items aligned to the public exam objectives. They
are not copies of real exam questions.

## Publish on GitHub Pages

The finished site is already built in the `docs/` folder. Nothing needs to be
installed.

1. Upload everything in this folder to a public GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**,
   pick `main` and the **`/docs`** folder, then click **Save**.
4. After a minute or two the site is live at
   `https://<your-username>.github.io/<repo-name>/`.

## Edit the questions

Questions live in `src/data/questions.ts`. After changing them, rebuild the site:

```bash
npm install
npm run build
```

This refreshes the `docs/` folder. Commit and push it, and the live site updates.

To try changes on your own computer first, run `npm run dev`.

## How it works

- Plain React app, built with Vite and Tailwind CSS. No server, no database,
  no sign-in.
- Quiz progress is saved only in the visitor's own browser.
- Fonts are bundled with the site, so it makes no requests to other websites.
