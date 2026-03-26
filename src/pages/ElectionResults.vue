<script setup>
</script>
<template>
  <section class="section">
    <div class="container project-page">
      <div class="project-hero">
        <p class="page-label">PROJECT DETAIL</p>
        <h1>Election Data Platform</h1>
        <p class="page-text">
          This project is a full-stack election data platform focused on presenting
          Dutch election results in an interactive, structured, and accessible way.
          The platform uses official government data from the 2023 Dutch parliamentary
          elections and transforms it into a user-friendly web application.

          In addition to visualizing election results, the platform also includes a
          community forum where users can discuss results and share perspectives.
          The goal of the project was not only to display data, but to make complex
          public information easier to explore, understand, and interact with.
        </p>

        <div class="hero-actions">
          <a
              href="https://gitlab.fdmci.hva.nl/shakerm/election"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
          >
            Open Repository
          </a>

          <router-link to="/" class="btn-secondary">
            Back to Home
          </router-link>
        </div>
      </div>

      <div class="project-grid">
        <article class="card info-card">
          <span class="info-label">Role</span>
          <h3>Full-stack development</h3>
          <p>
            I contributed to both the frontend and overall application structure,
            focusing on usability, data presentation, and integrating different
            parts of the system into one cohesive platform.
          </p>
        </article>

        <article class="card info-card">
          <span class="info-label">Stack</span>
          <h3>Vue, JavaScript, API, Backend</h3>
          <p>
            The platform is built with a Vue-based frontend and a backend that
            handles data processing, API communication, and user interaction such
            as the forum system.
          </p>
        </article>

        <article class="card info-card">
          <span class="info-label">Focus</span>
          <h3>Data visualization and accessibility</h3>
          <p>
            The main focus was transforming complex election datasets into clear,
            interactive, and accessible visual representations.
          </p>
        </article>
      </div>

      <div class="content-layout">
        <div class="content-main">
          <div class="page-block">
            <h2>Project overview</h2>
            <p>
              The Election Data Platform was developed to make official election
              results more accessible and understandable for a broad audience.
              Public datasets can often be difficult to interpret, so this project
              focused on converting raw election data into an intuitive and
              interactive web experience.
            </p>
            <p>
              The platform supports both casual users and more engaged users by
              combining clear data presentation with additional features such as
              a community discussion forum.
            </p>
          </div>

          <div class="page-block">
            <h2>How the project was built</h2>
            <p>
              The application follows a full-stack architecture with a clear
              separation between frontend and backend. The frontend was built
              using Vue, allowing for a modular, component-based structure that
              improves maintainability and scalability.
            </p>
            <p>
              The backend handles data processing, API endpoints, and user-related
              features such as authentication and forum interaction. Election data
              is retrieved from official Dutch government sources and processed
              before being presented in the interface.
            </p>
          </div>

          <div class="page-block">
            <h2>Key features</h2>
            <ul class="project-list">
              <li>Interactive visualizations of election results</li>
              <li>Integration of official Dutch government datasets</li>
              <li>Community forum with user interaction</li>
              <li>Structured and accessible data presentation</li>
              <li>Full-stack architecture with frontend and backend</li>
            </ul>
          </div>

          <div class="page-block">
            <h2>Design and thought process</h2>
            <p>
              A key challenge in this project was handling large and complex
              datasets while keeping the interface simple and intuitive. The focus
              was on guiding users through the data without overwhelming them.
            </p>
            <p>
              Decisions around layout, filtering, and interaction were made with
              usability in mind. The goal was to allow users to quickly understand
              election outcomes while still providing deeper insights for those
              who want to explore further.
            </p>
          </div>

          <div class="page-block">
            <h2>What I learned</h2>
            <p>
              This project strengthened my understanding of full-stack development,
              especially in connecting frontend interfaces with backend systems
              and external data sources. I improved my ability to structure
              applications, work with APIs, and present complex data in a clear way.
            </p>
            <p>
              It also highlighted the importance of user-centered design when
              working with public data, where clarity and accessibility are just
              as important as functionality.
            </p>
          </div>

          <div class="page-block">
            <h2>Challenges</h2>
            <p>
              The main challenge was managing complex election data while keeping
              the application understandable and well-structured. Another challenge
              was integrating multiple features such as data visualization and
              user interaction into one consistent platform.
            </p>
          </div>

          <div class="page-block">
            <h2>Future improvements</h2>
            <ul class="project-list">
              <li>More advanced filtering and data exploration tools</li>
              <li>Improved visualizations and analytics</li>
              <li>Enhanced forum features and moderation tools</li>
              <li>Support for multiple election datasets</li>
            </ul>
          </div>
        </div>

        <aside class="content-side">
          <div class="card side-card">
            <h3>Project summary</h3>
            <ul class="project-list compact">
              <li>Full-stack election data platform</li>
              <li>Uses official Dutch government data</li>
              <li>Interactive visualizations + forum</li>
              <li>Built with Vue and backend API</li>
            </ul>
          </div>

          <div class="card side-card">
            <h3>Key takeaway</h3>
            <p>
              This project taught me how to turn complex datasets into a usable
              and interactive application while combining technical development
              with user-focused design.
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

@media (max-width: 950px) {
  .project-grid,
  .content-layout {
    grid-template-columns: 1fr;
  }
}
</style>