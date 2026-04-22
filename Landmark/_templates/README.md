# Landmark templates

Starting points for the three Landmark content types. Copy the
relevant file into its destination folder, rename to a kebab-case
slug, and fill in the sections.

The `_templates/` directory itself is ignored by Jekyll because it
starts with an underscore, so files here will not be published.

## Which template to use

| Content type | Template | Destination folder | Canonical example |
|--------------|----------|--------------------|-------------------|
| Operative prep brief | `case-prep.md` | `Landmark/case-prep/surgeries/` | `surgeries/mals.md` |
| ABSITE / PIMP topic review | `topic-review.md` | `Landmark/topic-review/topics/` | (none yet — these templates establish it) |
| Landmark paper review | `paper-review.md` | `Landmark/paper-review/papers/` | (none yet) |

## Conventions

- **Filename**: lowercase kebab-case, no spaces, no suffix
  (`whipple.md`, not `Whipple_Case_Prep.md`).
- **Permalink**: match the filename — `/landmark/<section>/<slug>/`.
- **TOC**: the landmark layout auto-generates a TOC from `h2` and
  `h3` headings on pages wider than 1024 px. Keep headings at `##`
  (for sections) and `###` (for sub-sections) so the TOC reads
  cleanly. Skip `#` inside the body — the layout renders the page
  title as `h1` already.
- **Citations**: use superscript digits in-line (`¹`, `²`, `³`) and
  a numbered `## References` section at the bottom. No PDFs for
  paper reviews (copyright).
- **Tables / cards**: the templates use scoped `<style>` blocks
  (`.qr-table`, `.quick-cards`) inline in each page. This pattern
  renders correctly without needing Tailwind or a compiled
  stylesheet. There's a `landmark.scss` file in `assets/css/` that
  predates this and is currently not loaded anywhere — future
  cleanup should either wire it into `_layouts/landmark.html` or
  delete it. For now, copy the `<style>` blocks from the templates
  verbatim and every Landmark page will look consistent.
