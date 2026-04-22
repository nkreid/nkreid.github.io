# nkreid.github.io

Personal site, Austere Surgical landing page, and NKR Landmark study
resource for surgery residents and medical students.

Built on Jekyll. Originally bootstrapped from
[Beautiful Jekyll](https://beautifuljekyll.com) by Dean Attali (MIT
licensed — see `LICENSE`).

## Structure

- **NKR Portfolio** — `/`, `aboutme`, `consulting`, `projects`, ...
- **Austere Surgical** — `/austeresurgical` and sub-pages (own custom domain)
- **NKR Landmark** — `/Landmark` study site
  - `paper-review/` — WikiJournalClub-style summaries (no PDFs, copyright)
  - `topic-review/` — ABSITE-focused topic notes + common pimp questions
  - `case-prep/surgeries/` — operative prep briefs (see
    `case-prep/surgeries/mals.md` for the canonical format)

## Running locally

```
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. (Safari auto-upgrades `localhost`
to HTTPS in some versions — use Chrome/Firefox or a private window
if you hit a TLS handshake error.)

The site targets Jekyll 3.x on Ruby 4.0.x. A few stdlib gems
(`base64`, `csv`, `bigdecimal`, `logger`, `ostruct`) are pinned in
the `Gemfile` because Ruby 3.4+ removed them from the default set
and Jekyll 3.x still requires them. These can be dropped when the
site moves to Jekyll 4.x.

## License

Site content: all rights reserved by Neil Koby Reid.
Theme scaffolding (layouts, includes, CSS originally from Beautiful
Jekyll): MIT — see `LICENSE`.
