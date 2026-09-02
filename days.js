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
    n: 7, file: "day-07.html", date: "Advanced",
    title: "Documentation & the Treatment Card",
    blurb: "Card setup, treatment notes, chart entries, next visit notes, tooth chart, GPS notes, and five practice scenarios.",
    week: "Autonomy Track — for techs already working chairside",
    ready: true
  },

  // ---------- HANDS-ON LESSONS ----------
  {
    n: 9, file: "lesson-03.html", date: "Lesson 3",
    title: "Operatory Setup, Seating, Ergonomics & Typodont Mechanics",
    blurb: "Three tray setups, the greeting and escort, the 30-Second Reset, and bench work on O-ties, steel ties, and power chain.",
    week: "Hands-On Lessons",
    ready: true
  },

  // ---------- CLINICAL PROTOCOLS ----------
  {
    n: 11, file: "oral-hygiene.html", date: "Protocol",
    title: "Oral Hygiene Evaluation & Documentation",
    blurb: "Where to look, how to grade, what to write in Dolphin, and the escalation ladder for persistent poor hygiene.",
    week: "Clinical Protocols",
    ready: true
  },
  {
    n: 12, file: "wire-progression.html", date: "Protocol",
    title: "Wire Progression — 24-Month Nonextraction",
    blurb: "Interactive flowchart of the nine-step pathway, both decision points, core rules, and the full appointment breakdown for each step.",
    week: "Clinical Protocols",
    ready: true
  },
  {
    n: 13, file: "lesson-04.html", date: "Lesson 4",
    title: "Working With Wires",
    blurb: "Cinched wires, seating difficult wires, safe distal cutting, lace, step-down bends, archwire coordination, and marking before bending.",
    week: "Hands-On Lessons",
    ready: true
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
  "day5-clean-dirty-gloves":  "",

  // ----- Documentation module -----
  "tx-card-intro-comprehensive":     "1P5dc7vbwflB8sJ90adk3mtbAeZSV_e2q",
  "tooth-chart-dentition-prescriptions": "1pNdqxmaKVi8ql0r-NJJxBSeCEr3IVHfJ",

  // ----- Lesson 3 (Drive: Video - Open / Day 3) -----
  "l3-adjustment-pack-setup":  "1fSpCYN2vd9tolGfVY-kqfRh7XRy3kAa6",   // Day 3 Adjustment pack Setup.mp4
  "l3-idb-setup":              "13_C0k26kDhJ-_4u8BLb2Amwe03-I7nr2",   // Day 3IDB SETUP final.mp4
  "l3-bonding-setup":          "1Vg88hSWUX3SV-mOwnF44PR8UQ3vXy7ZL",   // Day 3 Setup for bonding FINAL.mp4
  "l3-bringing-patient-back":  "1chziUc4X7q0XPOkrtm_XCYJ_ZmQwh5jQ",   // Day 3 Bringing patient back final.mp4
  "l3-posture":                "1FtJahDjOw4RDliZgEymKlsCQI81biEwE",   // Day 3 Posture Final.mp4
  "l3-finger-fulcrum":         "1_J9_4L6SzUVJI758bDdm-lRUE1AUjoay",   // day 3 Finger Fulcrum Final.mp4
  "l3-otie-placement":         "1TnJ40lQq6eYFh6gkvlk8myNBCzIXkWwx",   // Day 3 Otie placement 720.mp4
  "l3-removing-oties":         "1m5VADHz623Y7-FwEmVR_D1zN7QqYH66c",   // Day 3 Removing  Oties.mp4
  "l3-steel-ties":             "1BODc4KB2rJiQpGXywlo7jvCEXMPEoo8P",   // Day 3 Steel Ties.mp4
  "l3-removing-steel-ties":    "1OaZz0G8I8x2pCEGuyzGFM96Vo_LDKCa7",   // day 3 Removing Steel ties.mp4
  "l3-placing-pc":             "1f2L_H4aziLdQ8LWJ-Adx6EkeuZX93PPX",   // Day 3 Placing PC.mp4
  "l3-removing-pc":            "1d6yQIzyAh9yxOQHRasYnarB2L7GI0dJl",   // Day 3 Removing PC 720.mp4

  // ----- Clinical protocols -----
  "oh-check-summary":          "1y7-dvXrv2bJM9tJqcNS8jDFAH56ePsFC",
  "oh-four-instruments":       "1vRGFRrXnVHRdCsOv9qj-xj6ZETlHxH0J",

  // ----- Wire progression -----
  "wire-sequence-overview":    "1q4h98N_Ci-Dpy4u5RYSISaho61ei1qLd",

  // ----- Lesson 4 -----
  "l4-anterior-lace":          "",
  "l4-step-bends":             "",
  "l4-archwire-coordination":  "",
  "l4-marking-torque":         ""

};
