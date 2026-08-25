/* Alexandria Orthodontics - Clinical Training Manual
   Shared behavior for the hub page and all day pages. */

(function () {
  "use strict";

  const STORE = "ao-training-progress";

  function load() {
    try { return JSON.parse(localStorage.getItem(STORE) || "{}"); }
    catch (e) { return {}; }
  }
  function save(data) {
    try { localStorage.setItem(STORE, JSON.stringify(data)); } catch (e) { /* private mode */ }
  }

  /* ---------------- hub page ---------------- */

  function buildHub(mount) {
    if (typeof TRAINING_DAYS === "undefined") return;
    const progress = load();
    let currentWeek = null;
    let cards = null;

    TRAINING_DAYS.forEach(function (d) {
      if (d.week !== currentWeek) {
        const h = document.createElement("div");
        h.className = "weeklabel";
        h.textContent = d.week;
        mount.appendChild(h);
        cards = document.createElement("div");
        cards.className = "daycards";
        mount.appendChild(cards);
        currentWeek = d.week;
      }

      const done = progress["day" + d.n] && progress["day" + d.n].complete;
      const el = document.createElement(d.ready ? "a" : "div");
      el.className = "daycard" + (d.ready ? "" : " pending");
      if (d.ready) el.href = d.file;

      const pill = !d.ready
        ? '<span class="pill soon">Coming soon</span>'
        : done
          ? '<span class="pill done">Complete</span>'
          : '<span class="pill ready">Ready</span>';

      el.innerHTML =
        '<div class="row"><span class="n">Day ' + String(d.n).padStart(2, "0") + '</span>' +
        pill + '<span class="date">' + d.date + '</span></div>' +
        '<h3>' + d.title + '</h3>' +
        '<p>' + d.blurb + '</p>';

      cards.appendChild(el);
    });
  }

  /* ---------------- day page ---------------- */

  function wireChecklist(box) {
    const dayKey = "day" + (box.dataset.day || "0");
    const boxes = box.querySelectorAll('input[type=checkbox]');
    const bar = box.querySelector(".progressbar div");
    const txt = box.querySelector(".progresstext");
    const progress = load();
    const state = progress[dayKey] || { items: {}, complete: false };

    function render() {
      let done = 0;
      boxes.forEach(function (cb) { if (cb.checked) done++; });
      const pct = boxes.length ? Math.round((done / boxes.length) * 100) : 0;
      if (bar) bar.style.width = pct + "%";
      if (txt) txt.textContent = done + " of " + boxes.length + " complete";
      state.complete = boxes.length > 0 && done === boxes.length;
    }

    boxes.forEach(function (cb, i) {
      const key = cb.id || ("i" + i);
      cb.checked = !!state.items[key];
      cb.addEventListener("change", function () {
        state.items[key] = cb.checked;
        const p = load();
        p[dayKey] = state;
        save(p);
        render();
      });
    });

    render();
  }

  function wirePager(nav) {
    if (typeof TRAINING_DAYS === "undefined") return;
    const n = parseInt(nav.dataset.day, 10);
    const prev = TRAINING_DAYS.find(function (d) { return d.n === n - 1; });
    const next = TRAINING_DAYS.find(function (d) { return d.n === n + 1; });

    let html = "";
    html += (prev && prev.ready)
      ? '<a href="' + prev.file + '"><span class="dir">Previous</span>Day ' + prev.n + ': ' + prev.title + '</a>'
      : '<span class="disabled"><span class="dir">Previous</span>' + (prev ? 'Day ' + prev.n : 'Start of training') + '</span>';
    html += (next && next.ready)
      ? '<a class="next" href="' + next.file + '"><span class="dir">Next</span>Day ' + next.n + ': ' + next.title + '</a>'
      : '<span class="disabled" style="text-align:right;margin-left:auto;"><span class="dir">Next</span>' + (next ? 'Day ' + next.n + ' coming soon' : 'End of training') + '</span>';

    nav.innerHTML = html;
  }

  /* ---------------- init ---------------- */

  document.addEventListener("DOMContentLoaded", function () {
    const hub = document.getElementById("hub");
    if (hub) buildHub(hub);

    document.querySelectorAll(".checklist[data-day]").forEach(wireChecklist);
    document.querySelectorAll(".pager[data-day]").forEach(wirePager);
  });
})();

/* Graceful media fallback: swaps a missing image or video for a labelled
   placeholder instead of a broken icon. Drop the real file in with the
   matching name and it appears automatically. */
function mediaPending(el) {
  const fig = el.closest("figure") || el.parentElement;
  const holder = el.tagName === "SOURCE" ? el.parentElement : el;
  const kind = holder.dataset.kind || (holder.tagName === "VIDEO" ? "Video" : "Photo");
  const title = holder.dataset.title || "Media coming soon";
  const note = holder.dataset.note || "";
  const file = holder.dataset.file || (holder.getAttribute("src") || "");

  const div = document.createElement("div");
  div.className = "pending-media";
  div.innerHTML =
    '<span class="pm-kind">' + kind + " · not yet added</span>" +
    '<span class="pm-title">' + title + "</span>" +
    (note ? '<span class="pm-note">' + note + "</span>" : "") +
    (file ? '<span class="pm-file">' + file + "</span>" : "");

  holder.replaceWith(div);
  if (fig) fig.classList.add("has-pending");
}
window.mediaPending = mediaPending;

/* ---------------------------------------------------------------
   Google Drive video helper.

   Instead of pasting a whole iframe, write:

     <figure>
       <div class="drive-video" data-id="PASTE_FILE_ID" data-len="6:40"></div>
       <figcaption><span class="medialabel">Watch</span>Caption here.</figcaption>
     </figure>

   Leave data-id empty or set it to PENDING and the page shows the
   normal "not yet added" placeholder instead of a broken frame.
   --------------------------------------------------------------- */
(function () {
  function buildDriveVideos() {
    document.querySelectorAll(".drive-video").forEach(function (el) {
      if (el.dataset.built) return;
      var id = (el.dataset.id || "").trim();

      if (!id || id === "PASTE_FILE_ID" || id === "PENDING") {
        el.className = "pending-media";
        el.innerHTML =
          '<span class="pm-kind">Video · not yet added</span>' +
          '<span class="pm-title">' + (el.dataset.title || "Drive video") + "</span>" +
          (el.dataset.note ? '<span class="pm-note">' + el.dataset.note + "</span>" : "") +
          '<span class="pm-file">Drive file ID not set</span>';
        el.dataset.built = "1";
        return;
      }

      var wrap = document.createElement("div");
      wrap.className = "driveframe";
      wrap.innerHTML =
        '<iframe src="https://drive.google.com/file/d/' + id + '/preview" ' +
        'allow="autoplay" allowfullscreen loading="lazy"></iframe>';
      el.replaceWith(wrap);
    });
  }
  document.addEventListener("DOMContentLoaded", buildDriveVideos);
  window.buildDriveVideos = buildDriveVideos;
})();
