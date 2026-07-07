# Working notes for Claude sessions

**Purpose:** ramp any new Claude session on this repo in under a minute. Read this first, then look at the gold-standard files below, then start work.

---

## Who this is for

**Neil "Koby" Reid** — PGY-1 general surgery resident. Rotations across:

- Baylor University Medical Center (**BUMC**) Dallas
- **JPS** Health Network, Fort Worth
- Baylor Scott & White **Waxahachie**

Cofounder of Austere Surgical LLC (that site lives in a separate repo — see `github.com/austeresurgical/austeresurgical.github.io`, not here). The old `/austeresurgical` mini-site inside *this* repo has been retired to redirect-only pages pointing at `austeresurgical.com`; leave them alone unless asked.

**Weekly cadence.** The pattern going forward is one focused session per week aligned with his program's didactics. Opener will typically be something like *"This week is X, saw these cases, focus on Y."* Follow the workflow at the bottom of this file.

---

## Repo layout (the parts that matter)

```
Landmark/
  case-prep/surgeries/     # one file per operation
  topic-review/topics/     # one file per ABSITE-organized topic
  paper-review/papers/     # landmark trial writeups (WikiJournalClub-style)
  _templates/              # starter templates for each of the above
absite_companion_md_jekyll/  # raw PDF-extracted ABSITE material — source for topic-review polish
_layouts/landmark.html     # the single layout everything uses
assets/                    # CSS, images, PDFs
```

Everything user-facing uses `layout: landmark` in the frontmatter. The old `topic-review` layout was retired.

---

## Gold-standard exemplars

When building a new page, open one of these first and match its structure. Don't invent new patterns.

**Case-prep gold standards:**

- `Landmark/case-prep/surgeries/mals.md` — the original canonical shape (2-approach comparison).
- `Landmark/case-prep/surgeries/inguinal-hernia.md` — canonical anatomy-heavy page + must-watch video + PDF source references.
- `Landmark/case-prep/surgeries/low-anterior-resection.md` — robotic-primary workflow with laparoscopic + open as shorter parallel sections; template dictation block; must-watch video.
- `Landmark/case-prep/surgeries/wedge-gastrectomy.md` — robotic-primary, technique-forward (specific port map + stapler loads + closure).
- `Landmark/case-prep/surgeries/lumpectomy-slnb.md` — combined-operation page with a large domain-specific deep-dive section (localization methods).

**Topic-review gold standards:**

- `Landmark/topic-review/topics/hernias.md` — the reference structure for topic reviews.
- `Landmark/topic-review/topics/stomach.md` — same structure with additional deep sections (GIST, NET) demonstrating how to extend.
- `Landmark/topic-review/topics/breast.md` — same, with a domain-specific subsection pattern.

**Paper-review gold standard:**

- `Landmark/paper-review/papers/stitch.md` — WikiJournalClub-style paper writeup.

---

## Conventions we've settled on

### Structure

**Case-prep files, in this order:**

1. Frontmatter (layout, title, permalink, redirect_from, optionally `pdf:` to a source PDF).
2. Intro blockquote (framing + primary approach + cross-links).
3. Optional callout cards (must-watch video, VUMC suggested reading, op-note template).
4. Procedure Snapshot (bulleted).
5. Step Workflow — primary approach as numbered list with sub-bullets. Alternate approaches as shorter parallel sections.
6. Rapid-Fire Questions.
7. Critical Anatomy.
8. Informed Consent Highlights.
9. Post-Op Considerations.
10. Clinical Pearls.
11. Quick Reference Table (comparison across approaches, if relevant).
12. Quick-Reference Cards (collapsible `<details>` cards with a port map / mental checklist / bail-out plan / attending prefs).
13. Related Case Preps / Related Topic Reviews / Related Landmark Papers.
14. Suggested Reading (VUMC etc., when applicable).
15. References.

**Topic-review files, in this order:**

1. Frontmatter.
2. Intro blockquote.
3. Sections by disease process — anatomy first, then walk through the differential.
4. Rapid-Fire Questions.
5. Quick Reference Table(s).
6. Quick-Reference Cards.
7. Related Case Preps.
8. Suggested Reading.
9. References.
10. Figures (embedded from `absite_companion_md_jekyll/images/`).

### Language and naming

- **"Rapid-Fire Questions"** — never "Pimp Questions". Site-wide rename already done.
- **Specimen orientation: short → superior, long → lateral.** Never "12 o'clock." Two sutures.
- **Robotic-primary** when relevant, with laparoscopic + open as shorter parallel sections. Don't repeat the whole workflow for each; just note the deltas.
- Cross-link liberally: every case prep should point at its topic review and vice versa.

### Markup / CSS patterns

- **Quick Reference Table** — wrap `<table class="qr-table">` in `<div class="qr-table-wrap">` so it scrolls horizontally on mobile. Styles are scoped per-file (there's no shared stylesheet). Copy the block from any polished page.
- **Quick-Reference Cards** — `<details class="qr-card">` inside `<div class="quick-cards">`, with `.kv` list rows. Same scoped-CSS pattern.
- **Callout cards** (video, PDF, "must watch") — inline `<div>` with brand colors: navy `#0C2C47`, green `#2D5652`, yellow `#E2A54D`, aqua `#97D3CD`, mint `#E4F2EA`, cream `#FCFBF4`. See any recent page for the pattern.
- Frontmatter's `pdf:` field auto-renders a green "Read More from the Source PDF" button at the top of the page. Point it at either a local `/assets/pdfs/foo.pdf` or an external URL (VUMC).

### External resources

- **VUMC Global Surgical Atlas** (`www.vumc.org/global-surgical-atlas`) — open-access step-level chapters (CC BY-SA 3.0). When VUMC has a relevant chapter, link it via `pdf:` frontmatter + an inline "Suggested Reading" callout. Never host locally — always outbound link with author attribution.
- **`absite_companion_md_jekyll/*.md`** — the raw ABSITE-extracted markdown. Use it as source material for topic-review polish. Preserve all the clinical facts; restructure and add the polish sections above.

### Deployment

- Site is a Jekyll GitHub Pages site at `nkreid.com` (custom domain via CNAME).
- Koby pushes from his Mac. The sandbox mount reflects his Mac's git state live — `git status` in the sandbox is the truth.
- **Don't append "push when ready" reminders** to responses unless there's actually something unpushed. Check `git status` before mentioning it.

---

## Workflow to expect

**Opener from Koby:** short — "this week is X, saw these cases."

**Response pattern:**

1. Audit current state — check the relevant topic file and case-prep files. What's polished, what's stub, what's raw ABSITE dump?
2. Ask 1-2 targeted clarifying questions if the scope is unclear (specific angle he wants, which cases to prioritize, whether to leave stubs alone).
3. Build or polish. One session = one topic review + 2-3 case preps is a reasonable weekly slice.
4. Commit with a descriptive multi-paragraph message.
5. Report what was done. Don't dress it up.

**When creating a new page:** always open the closest gold-standard file first, mirror its structure, then vary the content. Don't reinvent the layout.

**Stubs to know about:** ~30 case-prep pages are still 35-45 line templates. They can be built out over time. Full inventory can be seen with `wc -l Landmark/case-prep/surgeries/*.md | sort -n`.

---

*Last updated: aligned to master `4a7b46f` — after the breast rewrites, VUMC references, and short-sup / long-lat orientation standardization.*
