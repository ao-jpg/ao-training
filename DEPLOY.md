# Deploying the AO Clinical Training Manual

Three systems, each doing the one thing it is good at.

    GitHub Pages  →  hosts the HTML, CSS, JS, and photos
    Google Drive  →  hosts the large videos
    Google Sites  →  wraps the whole thing for your team

---

## STEP 1 — Put the manual on GitHub Pages

1. Go to github.com and sign in. Click **+** (top right) → **New repository**.
2. Name it `ao-training`. Set it to **Public** (Pages requires public on the free plan).
   Do NOT check "Add a README". Click **Create repository**.
3. On the empty repo page click **uploading an existing file**.
4. Open your `ao-training` folder in File Explorer. Select everything INSIDE it
   (index.html, days.js, all day-XX.html, and the assets, img, video, thumbs folders)
   and drag it into the browser window. Folder structure is preserved.
   - Files over 25 MB will fail here. Use GitHub Desktop for those, or move them to Drive.
5. Scroll down, click **Commit changes**.
6. Click **Settings** (top of repo) → **Pages** (left sidebar).
7. Under "Build and deployment", Source = **Deploy from a branch**, Branch = **main**,
   folder = **/ (root)**. Click **Save**.
8. Wait 1–2 minutes, then refresh. Your URL appears at the top:

       https://YOURUSERNAME.github.io/ao-training/

   Open it. The hub page should load with all six day cards.

**Updating later:** to change a file, open it in the repo, click the pencil icon, edit,
commit. To add a new day, use **Add file → Upload files** again. Changes go live in
about a minute.

---

## STEP 2 — Put the videos on Google Drive

1. In Drive, make a folder: **AO Training Videos**.
2. Upload your compressed MP4s into it.
3. Decide the sharing level for the FOLDER (right-click → Share):

   - **No patients on camera** → "Anyone with the link" → Viewer.
     Plays for everyone, no sign-in needed.

   - **Any patient visible or named** → restrict to your practice's Google Workspace
     domain, or share with named staff only.
     Plays only for a signed-in team member. Everyone else sees an error.
     This is the option that keeps clinical footage off the public internet.

4. Get each file's ID: right-click the video → **Share** → **Copy link**. You get:

       https://drive.google.com/file/d/1AbC2dEfG3hIjK4LmN5oPqR/view?usp=sharing
                                      └──────── this part is the ID ────────┘

   The ID is everything between `/d/` and `/view`.

---

## STEP 3 — Point the manual at the Drive videos

In the day page, find the video block you want to move to Drive. Replace this:

    <figure>
      <video controls preload="metadata" ...>
        <source src="video/day1-ortho-language.mp4" type="video/mp4" onerror="mediaPending(this)">
      </video>
      <figcaption><span class="medialabel">Watch first</span>Caption text.</figcaption>
    </figure>

with this:

    <figure>
      <div class="drive-video" data-id="1AbC2dEfG3hIjK4LmN5oPqR"
           data-title="Orthodontic Language in 5 Minutes"></div>
      <figcaption><span class="medialabel">Watch first</span>Caption text.</figcaption>
    </figure>

That is the whole change. Paste the ID, keep the caption. The responsive sizing,
the aspect ratio, and the fallback panel are all handled for you.

If you leave `data-id="PASTE_FILE_ID"`, the page shows the normal "not yet added"
placeholder, so you can stub out videos before you have shot them.

Commit the edited file to GitHub. Live in about a minute.

---

## STEP 4 — Embed in Google Sites

1. Open your site in Google Sites. Add a new page, e.g. **Clinical Training**.
2. Right panel → **Insert** → **Embed**.
3. Choose the **By URL** tab (NOT "Embed code").
4. Paste your Pages URL: `https://YOURUSERNAME.github.io/ao-training/`
5. Click **Insert**. Drag the frame to full page width and stretch the height to
   roughly **900 px**. The manual scrolls inside its own frame.
6. **Publish**.

---

## Two things to know about the embedded version

**Checkbox progress may not save inside the Sites frame.**
Browsers isolate storage for content inside a frame from another site. Safari in
particular may block it entirely. If you want her checkboxes to persist reliably,
give her the direct Pages URL as a phone bookmark and use the Sites page as the
front door for everyone else.

**Drive videos sit in a frame inside a frame.**
GitHub Pages inside Google Sites inside your browser, with the Drive player nested
in that. It generally works, but test one video in the finished Sites page on an
iPhone, an Android phone, and an operatory monitor before training day. Fullscreen
is the thing most likely to misbehave.

---

## Quick reference

| Task | Where you do it |
|---|---|
| Fix a typo | GitHub, edit the file, commit |
| Add a new day | Upload `day-07.html`, then set `ready: true` in `days.js` |
| Add a photo | Upload to `img/` with the filename from SHOT-LIST.md |
| Add a short video | Compress, upload to `video/` |
| Add a long video | Upload to Drive, paste the ID into a `drive-video` block |
| Change how it looks | Edit `assets/manual.css` once; all days update |
