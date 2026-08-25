/* ===========================================================
   DAY MANIFEST
   The only file you edit to release a day or add a new one.
   Set ready:true and the hub page links to it.
   =========================================================== */

const TRAINING_DAYS = [

  // ---------- WEEK 1 ----------
  {
    n: 1, file: "day-01.html", date: "Wed, Aug 26",
    title: "Learning the Language of Orthodontics",
    blurb: "Directional terminology, bite relationships, Angle classification, and the four core treatment actions.",
    week: "Week 1 — Foundations of the Orthodontic Clinic",
    ready: true
  },
  {
    n: 2, file: "day-02.html", date: "Thu, Aug 27",
    title: "Tooth Identification, Braces & Clear Aligners",
    blurb: "The four quadrants, practice shorthand, patient orientation, and every component of both appliance systems.",
    week: "Week 1 — Foundations of the Orthodontic Clinic",
    ready: true
  },
  {
    n: 3, file: "day-03.html", date: "Fri, Aug 28",
    title: "Instruments & Common Appointments",
    blurb: "The eight core instruments, cutter safety, tray assembly, and the four appointment types.",
    week: "Week 1 — Foundations of the Orthodontic Clinic",
    ready: true
  },

  // ---------- WEEK 2 ----------
  {
    n: 4, file: "day-04.html", date: "Tue, Sep 1",
    title: "The Patient Experience & Ergonomics",
    blurb: "Reception-to-chair workflow, chairside scripting, neutral posture, and the 30-Second Reset.",
    week: "Week 2 — Patient Care, Records & Practical",
    ready: true
  },
  {
    n: 5, file: "day-05.html", date: "Wed, Sep 2",
    title: "Dolphin Management & Infection Control",
    blurb: "Treatment Cards, reading adjustment notes, aseptic classifications, and unidirectional sterilization flow.",
    week: "Week 2 — Patient Care, Records & Practical",
    ready: true
  },
  {
    n: 6, file: "day-06.html", date: "Thu, Sep 3",
    title: "Week 1 Practical: The Mock Patient",
    blurb: "Master check-off with a senior trainer, then the full mock adjustment scenario in Chair 6.",
    week: "Week 2 — Patient Care, Records & Practical",
    ready: true
  },

  // ---------- STILL TO WRITE ----------
  {
    n: 7, file: "day-07.html", date: "Fri, Sep 4",
    title: "Beginning Active Adjustments",
    blurb: "Week 2 clinical content. Not yet written.",
    week: "Week 2 — Patient Care, Records & Practical",
    ready: false
  }

];


/* ===========================================================
   GOOGLE DRIVE VIDEO IDs

   Paste the file ID between the quotes for each video.
   Leave it empty and the page shows a "not yet added" panel.

   To get an ID: in Drive, right-click the video, Share, Copy link.
   You get something like

     https://drive.google.com/file/d/1AbC2dEfG3hIjK4LmN5oPqR/view?usp=sharing
                                    └───────── the ID ─────────┘

   Copy only the part between /d/ and /view.
   =========================================================== */

const DRIVE_VIDEOS = {

  // ----- Day 1 -----
  "day1-ortho-language":      "1PtVcBM2Ouh6MSFnWz4_DlfIwvEZz2Hbc",

  // ----- Day 2 -----
  "day2-find-that-tooth":     "1YMPaqTnaofBR4BMvcd_nCn7nyIBYM2nD",
  "day2-braces-anatomy":      "1PQVT5lR3OCkGR9yOcXRYp_3QXLWk0qSD",
  "day2-aligner-anatomy":     "1VoIY784ADk-ZAQzwoRkMc9Qe9zOKWGsx",
  "day2-braces-vs-aligners":  "19YFmPvflM1cCuGmhZffF-qjbUFOvCLUd",

  // ----- Day 3 -----
  "day3-adjustment-tray":     "",
  "day3-which-instrument":    "",
  "day3-four-appointments":   "",

  // ----- Day 4 -----
  "day4-ao-greeting":         "",
  "day4-greeting-compare":    "",
  "day4-ergonomics":          "",
  "day4-bring-patient-to-you":"",

  // ----- Day 5 -----
  "day5-dolphin-tour":        "",
  "day5-reading-notes":       "",
  "day5-follow-an-instrument":"",
  "day5-clean-dirty-gloves":  ""

};
