<template>
  <section class="section">
    <div class="container project-page">
      <div class="project-hero">
        <p class="page-label">PROJECT DETAIL</p>
        <h1>RIVM Beweegvriendelijk</h1>
        <p class="page-text">
          This project is a frontend-focused platform built around the idea of a
          movement-friendly environment. Instead of building a traditional backend-heavy
          application, this project focused on structuring the frontend properly and
          managing data in a clear way through stores. The goal was to create an
          interface that feels organized, maintainable, and easy to work with while
          supporting a real user-facing platform.
        </p>
        <p class="page-text">
          A deployed version of the project is available online, and the source code is
          hosted in the GitHub repository linked below.
        </p>

        <div class="hero-actions">
          <a
              href="https://github.com/MichaelShaker/mca-beweegvriendelijk-Deploy"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
          >
            Open Repository
          </a>

          <a
              href="https://michaelshaker.github.io/mca-beweegvriendelijk-Deploy/"
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
            I worked on the frontend structure, state handling, and overall application
            flow, with a strong focus on clarity and maintainability.
          </p>
        </article>

        <article class="card info-card">
          <span class="info-label">Stack</span>
          <h3>Vue, JavaScript, stores</h3>
          <p>
            The project was built around a frontend architecture that uses stores for
            state management instead of relying on a heavy backend setup.
          </p>
        </article>

        <article class="card info-card">
          <span class="info-label">Focus</span>
          <h3>State management and structure</h3>
          <p>
            A big part of the project was making sure the application stayed organized
            by handling shared data in a structured and reusable way.
          </p>
        </article>
      </div>

      <div class="content-layout">
        <div class="content-main">
          <div class="page-block">
            <h2>Project goal</h2>
            <p>
              The goal of this project was to build a digital platform connected to the
              theme of a movement-friendly environment. My work focused on the frontend
              side of the system, where the challenge was not just to make pages look
              good, but to make the application logic understandable and consistent.
            </p>
            <p>
              Because the project worked with stores, an important part of the design
              was deciding how shared state should flow through the application. That
              helped create a cleaner structure and made different parts of the platform
              easier to connect.
            </p>
          </div>

          <div class="page-block">
            <h2>How the project was built</h2>
            <p>
              I approached the project by thinking about structure first. Instead of
              letting every component manage its own disconnected logic, I worked with
              stores so shared data could be handled more centrally. That made the
              application easier to reason about and helped prevent the frontend from
              becoming messy as the project grew.
            </p>
            <p>
              This also improved reusability. Components could stay more focused on
              presentation and interaction, while the store layer handled shared state
              and application flow in a more organized way.
            </p>
          </div>

          <div class="page-block">
            <h2>Technical thinking</h2>
            <p>
              One of the main lessons in this project was learning that frontend work is
              not only about building screens. Good frontend development also depends on
              how data moves through the application, how state is managed, and how easy
              it is to maintain the project later.
            </p>
            <p>
              Working with stores made that very visible. It pushed me to think more
              carefully about architecture, separation of responsibilities, and how to
              keep the codebase understandable as more features are added.
            </p>
          </div>

          <div class="page-block">
            <h2>Challenges</h2>
            <p>
              One challenge was keeping the project structured while still continuing to
              build features. Frontend projects can quickly become difficult to manage
              when too much logic is scattered across components.
            </p>
            <p>
              Another challenge was deciding what belongs inside components and what
              should be handled through stores. Finding that balance was important for
              keeping the project clean and scalable.
            </p>
          </div>

          <div class="page-block">
            <h2>What I learned</h2>
            <p>
              This project helped me improve my frontend architecture skills and my
              understanding of state management. It taught me how important stores can
              be for keeping an application organized, especially when multiple parts of
              the interface depend on the same data.
            </p>
            <p>
              It also strengthened my ability to think beyond individual pages and work
              more on application structure as a whole.
            </p>
          </div>

          <div class="page-block">
            <h2>Future improvements</h2>
            <ul class="project-list">
              <li>Refine the store structure even further.</li>
              <li>Improve component reusability across the platform.</li>
              <li>Add stronger user feedback and validation flows.</li>
              <li>Continue improving maintainability as the project grows.</li>
            </ul>
          </div>
        </div>

        <aside class="content-side">
          <div class="card side-card">
            <h3>Project summary</h3>
            <ul class="project-list compact">
              <li>Frontend platform for a movement-friendly concept</li>
              <li>Built with Vue and JavaScript</li>
              <li>Uses stores for shared state management</li>
              <li>Focused on clarity and maintainability</li>
            </ul>
          </div>

          <div class="card side-card">
            <h3>Key takeaway</h3>
            <p>
              This project strengthened my understanding of frontend architecture and
              showed me how important good state management is for building a clean and
              scalable application.
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