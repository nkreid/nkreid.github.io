---
layout: landmark
title: "Landmark Learning Hub"
permalink: /landmark/
hide_page_title: true
hide_page_subtitle: true
toc: false
---

<div class="landing-grid">
  <a class="landing-card" href="/landmark/paper-review/">
    <h2>Paper Review</h2>
    <p>Browse landmark trials grouped by service line. Jump straight to condensed study pages for fast refreshers or conference prep.</p>
    <span class="cta">Explore papers →</span>
  </a>
  <a class="landing-card" href="/landmark/topic-review/">
    <h2>Topic Review</h2>
    <p>Use the ABSITE table of contents to launch polished study notes. Clean, continuous Markdown keeps the focus on high-yield facts.</p>
    <span class="cta">Open the outline →</span>
  </a>
  <a class="landing-card" href="/landmark/case-prep/">
    <h2>Case Prep</h2>
    <p>Drill operative strategy with structured briefs covering anatomy, simplified steps, and quick pimp questions for common cases.</p>
    <span class="cta">Prep for Cases →</span>
  </a>
</div>

<style>
.landing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.75rem;
  margin-top: 0;
}

.landing-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 10px 28px rgba(12,44,71,0.12);
  border: 1px solid rgba(12,44,71,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.landing-card h2 {
  margin: 0;
  font-size: 1.6rem;
}

.landing-card p {
  margin: 0;
  line-height: 1.6;
}

.landing-card .cta {
  font-weight: 700;
  color: #2D5652;
}

.landing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(12,44,71,0.18);
}

@media (max-width: 900px) {
  .landing-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .landing-grid {
    grid-template-columns: 1fr;
  }
}
</style>
