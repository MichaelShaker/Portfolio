<template>
  <section class="section">
    <div class="container project-page">
      <div class="project-hero">
        <p class="page-label">PROJECT DETAIL</p>
        <h1>Koptisch Begraafplaats Website</h1>
        <p class="page-text">
          This project is a website created for a Koptisch begraafplaats, with the
          goal of presenting important information in a clear, respectful, and
          accessible way. The focus of the project was not only on building a clean
          interface, but also on creating a digital space that feels organized and
          appropriate for the context of the website.
        </p>
        <p class="page-text">
          The website was designed to help visitors quickly find relevant
          information, navigate easily, and understand the available content without
          unnecessary complexity. In a project like this, clarity and structure are
          especially important because the subject matter requires a calm and
          reliable presentation.
        </p>

        <div class="hero-actions">
          <a
              href="https://github.com/MichaelShaker/koptisch-begraafplaats"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
          >
            Open Repository
          </a>

          <a
              href="https://michaelshaker.github.io/koptisch-begraafplaats/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
          >
            Visit Live Site
          </a>

          <router-link to="/" class="btn-secondary ghost-btn">
            Back to Home
          </router-link>
        </div>
      </div>

      <div class="project-grid">
        <article class="card info-card">
          <span class="info-label">Role</span>
          <h3>Frontend development</h3>
          <p>
            I worked on building the website structure, presentation, and user
            experience, with a strong focus on clarity and usability.
          </p>
        </article>

        <article class="card info-card">
          <span class="info-label">Stack</span>
          <h3>Vue, JavaScript</h3>
          <p>
            The project was built as a modern frontend application with a clean and
            structured interface.
          </p>
        </article>

        <article class="card info-card">
          <span class="info-label">Focus</span>
          <h3>Respectful and accessible presentation</h3>
          <p>
            The main focus was presenting information in a calm, understandable, and
            well-organized way.
          </p>
        </article>
      </div>

      <div class="content-layout">
        <div class="content-main">
          <div class="page-block">
            <h2>Project goal</h2>
            <p>
              The goal of this project was to build a website that makes information
              around the Koptisch begraafplaats easier to access and understand.
              Rather than creating something visually overloaded, the purpose was to
              provide a digital environment where visitors can navigate clearly and
              find what they need without confusion.
            </p>
            <p>
              Because the topic is sensitive and important, the website needed to
              feel reliable, respectful, and easy to use. That influenced both the
              design choices and the way the information was structured.
            </p>
          </div>

          <div class="page-block">
            <h2>How the project was built</h2>
            <p>
              I approached this project by focusing first on structure and
              readability. A website like this should not feel complicated, so the
              interface had to support simple navigation and a clear content flow.
            </p>
            <p>
              The frontend was built in a way that keeps the layout organized and
              maintainable. Different parts of the page were designed to guide users
              through the information step by step, instead of overwhelming them
              with too much content at once.
            </p>
          </div>

          <div class="page-block">
            <h2>Design and thought process</h2>
            <p>
              A key part of this project was understanding that design is not only
              about appearance, but also about tone and context. Since the website
              is connected to a cemetery, the presentation needed to feel calm and
              appropriate.
            </p>
            <p>
              That meant making deliberate choices around spacing, readability,
              structure, and content grouping. The goal was to create a website that
              feels clear and trustworthy while remaining simple for visitors to use.
            </p>
          </div>

          <div class="page-block">
            <h2>Challenges</h2>
            <p>
              One challenge was balancing simplicity with completeness. Important
              information has to be available, but the website should still feel
              clean and easy to navigate.
            </p>
            <p>
              Another challenge was making sure the digital presentation matched the
              seriousness of the subject. That required more careful design choices
              than a casual or purely commercial website would need.
            </p>
          </div>

          <div class="page-block">
            <h2>What I learned</h2>
            <p>
              This project helped me improve my frontend development skills,
              especially in structuring content clearly and building interfaces that
              match the context of the project. It showed me that a good website is
              not only technically correct, but also shaped by the audience and the
              purpose behind it.
            </p>
            <p>
              It also strengthened my understanding of user-centered design, where
              clarity, tone, and accessibility are just as important as the code.
            </p>
          </div>

          <div class="page-block">
            <h2>Future improvements</h2>
            <ul class="project-list">
              <li>Improve accessibility and navigation even further.</li>
              <li>Add clearer content sections where helpful.</li>
              <li>Refine the visual presentation for consistency.</li>
              <li>Expand the website if more visitor information is needed.</li>
            </ul>
          </div>
        </div>

        <aside class="content-side">
          <div class="card side-card">
            <h3>Project summary</h3>
            <ul class="project-list compact">
              <li>Website for a Koptisch begraafplaats</li>
              <li>Built with Vue and JavaScript</li>
              <li>Focused on clarity and respectful presentation</li>
              <li>Designed for accessibility and ease of use</li>
            </ul>
          </div>

          <div class="card side-card">
            <h3>Key takeaway</h3>
            <p>
              This project taught me how important it is to combine frontend
              development with the right tone, structure, and user experience for
              the context of the website.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-page {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.project-hero h1 {
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  line-height: 0.98;
  color: white;
  letter-spacing: -0.04em;
  max-width: 900px;
}

.page-label {
  margin: 0 0 14px;
  color: #a5b4fc;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
}

.page-text {
  margin-top: 22px;
  max-width: 820px;
  color: #cbd5e1;
  line-height: 1.85;
  font-size: 1.05rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.info-card {
  padding: 24px;
}

.info-label {
  display: inline-block;
  margin-bottom: 12px;
  color: #a5b4fc;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.info-card h3 {
  margin: 0 0 10px;
  color: white;
  font-size: 1.12rem;
}

.info-card p {
  margin: 0;
  color: #94a3b8;
  line-height: 1.7;
}

.content-layout {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 28px;
  align-items: start;
}

.content-main,
.content-side {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.page-block {
  padding: 28px 30px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.page-block h2,
.side-card h3 {
  margin: 0 0 14px;
  color: white;
}

.page-block p,
.side-card p {
  margin: 0 0 14px;
  color: #cbd5e1;
  line-height: 1.85;
}

.page-block p:last-child,
.side-card p:last-child {
  margin-bottom: 0;
}

.side-card {
  padding: 24px;
}

.project-list {
  margin: 0;
  padding-left: 18px;
  color: #cbd5e1;
  line-height: 1.8;
}

.project-list.compact li + li {
  margin-top: 8px;
}

.ghost-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

@media (max-width: 950px) {
  .project-grid,
  .content-layout {
    grid-template-columns: 1fr;
  }
}
</style>