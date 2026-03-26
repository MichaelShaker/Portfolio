<script setup>
import { RouterLink } from 'vue-router'

const projects = [
  {
    number: '01',
    title: 'License Plate Recognition AI',
    description:
        'AI model that detects license plates in video and outputs timestamps in JSON so editors can quickly find and blur plates.',
    tech: ['Python', 'OpenCV', 'AI'],
    demo: `${import.meta.env.BASE_URL}documents/propedeuse-diploma.pdf`,
    host: 'GitLab',
    details: '/project/license-plate',
  },
  {
    number: '02',
    title: 'Election Results Website',
    description:
        'A web platform for displaying election results with filtering, interaction, and clear data presentation.',
    tech: ['Vue', 'JavaScript', 'API'],
    repo: 'https://gitlab.fdmci.hva.nl/shakerm/election',
    host: 'GitLab',
    details: '/project/election-results',
  },
  {
    number: '03',
    title: 'Beweegvriendelijk Platform',
    description:
        'Frontend platform built with structured state management using stores, focused on clarity and maintainability.',
    tech: ['Vue', 'JavaScript', 'Stores'],
    repo: 'https://github.com/MichaelShaker/mca-beweegvriendelijk-Deploy',
    live: 'https://michaelshaker.github.io/mca-beweegvriendelijk-Deploy/',
    host: 'GitHub',
    details: '/project/beweegvriendelijk',
  },
  {
    number: '04',
    title: 'Koptisch Begraafplaats Website',
    description:
        'A website developed for a Coptic cemetery, providing clear structure and accessible information for visitors.',
    tech: ['Vue', 'JavaScript'],
    repo: 'https://github.com/MichaelShaker/koptisch-begraafplaats',
    live: 'https://michaelshaker.github.io/koptisch-begraafplaats/',
    host: 'GitHub',
    details: '/project/koptisch',
  },
]
</script>

<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <div class="projects-heading">
        <p class="projects-label">PROJECTS</p>
        <h2 class="section-title projects-title">
          Selected work I want to showcase.
        </h2>

        <p class="projects-text">
          These projects reflect my work in AI, frontend development, and real-world applications.
          Each project includes details and, where available, a repository, live site, or demo.
        </p>
      </div>

      <div class="projects-grid">
        <article
            v-for="project in projects"
            :key="project.title"
            class="project-card"
        >
          <div class="project-accent"></div>

          <div class="project-header">
            <span class="project-number">{{ project.number }}</span>
            <span class="project-host">{{ project.host }}</span>
          </div>

          <div class="project-content">
            <h3>{{ project.title }}</h3>

            <p class="project-description">
              {{ project.description }}
            </p>

            <div class="project-tags">
              <span
                  v-for="item in project.tech"
                  :key="item"
                  class="project-tag"
              >
                {{ item }}
              </span>
            </div>

            <div class="project-footer">
              <a
                  v-if="project.repo"
                  :href="project.repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link"
              >
                Repository ↗
              </a>

              <a
                  v-if="project.live"
                  :href="project.live"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link secondary-link"
              >
                Live Site →
              </a>

              <a
                  v-else-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link secondary-link"
              >
                Demo Video →
              </a>

              <RouterLink
                  :to="project.details"
                  class="project-link secondary-link"
              >
                Details →
              </RouterLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-heading {
  max-width: 760px;
  margin-bottom: 40px;
}

.projects-label {
  margin-bottom: 12px;
  color: #818cf8;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.22em;
}

.projects-text {
  margin-top: 18px;
  max-width: 680px;
  color: #cbd5e1;
  line-height: 1.8;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}

.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.92), rgba(2, 6, 23, 0.96));
  border: 1px solid rgba(148, 163, 184, 0.1);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(99, 102, 241, 0.25);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
}

.project-accent {
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6, #3b82f6);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 24px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.project-number {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1;
  color: rgba(255, 255, 255, 0.1);
}

.project-host {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.75rem;
  font-weight: 700;
  color: #e2e8f0;
}

.project-content {
  padding: 24px;
}

.project-content h3 {
  margin: 0;
  font-size: 1.35rem;
  color: white;
  line-height: 1.3;
}

.project-description {
  margin-top: 14px;
  color: #94a3b8;
  line-height: 1.7;
  min-height: 110px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.project-tag {
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 0.82rem;
  font-weight: 600;
  color: #e2e8f0;
}

.project-footer {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.project-link {
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92rem;
  color: white;
  transition: color 0.2s ease;
}

.project-link:hover {
  color: #a5b4fc;
}

.secondary-link {
  color: #a5b4fc;
}

@media (max-width: 1000px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-description {
    min-height: unset;
  }
}
</style>