<script setup>
import { RouterLink } from 'vue-router'

const projects = [
  {
    number: '01',
    title: 'License Plate Recognition AI',
    description:
        'AI model that detects license plates from video frames using computer vision and deep learning.',
    tech: ['Python', 'OpenCV', 'AI'],
    repo: 'https://gitlab.fdmci.hva.nl/applied-artificial-intelligence/2024-2025-semester-2/projecten/faawoodeedaa97',
    host: 'GitLab',
    details: '/project/license-plate',
  },
  {
    number: '02',
    title: 'Election Results Website',
    description:
        'A web platform for displaying election results with clear visual presentation and user interaction.',
    tech: ['Vue', 'JavaScript', 'API'],
    repo: 'https://gitlab.fdmci.hva.nl/semester-3-hbo-ict/onderwijs/student-projecten/2024-2025/out-p-se-ti/semester-1/qeekoohootoo75',
    host: 'GitLab',
    details: '/project/election-results',
  },
  {
    number: '03',
    title: 'Beweegvriendelijk Backend',
    description:
        'Backend system supporting a platform focused on movement-friendly environments.',
    tech: ['Java', 'Spring Boot', 'API'],
    repo: 'https://github.com/MichaelShaker/mca-beweegvriendelijk-Deploy',
    host: 'GitHub',
    details: '/project/beweegvriendelijk',
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
          These projects reflect my work in web development,
          backend systems, and artificial intelligence.
          Each project links directly to its repository
          and a detailed project page.
        </p>
      </div>

      <div class="projects-grid">

        <article
            v-for="project in projects"
            :key="project.title"
            class="project-card"
        >

          <div class="project-accent"></div>

          <div class="project-visual">
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
                  :href="project.repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="project-link"
              >
                View Repository ↗
              </a>

              <RouterLink
                  :to="project.details"
                  class="project-link secondary-link"
              >
                View Details →
              </RouterLink>

            </div>

          </div>

        </article>

      </div>

    </div>
  </section>
</template>

<style scoped>

.projects-heading{
  max-width:760px;
  margin-bottom:40px;
}

.projects-label{
  margin-bottom:12px;
  color:#818cf8;
  font-size:0.8rem;
  font-weight:700;
  letter-spacing:0.22em;
}

.projects-text{
  margin-top:18px;
  max-width:680px;
  color:#cbd5e1;
  line-height:1.8;
}

.projects-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:26px;
}

.project-card{
  position:relative;
  overflow:hidden;
  border-radius:24px;

  background:linear-gradient(
      180deg,
      rgba(15,23,42,0.92),
      rgba(2,6,23,0.96)
  );

  border:1px solid rgba(148,163,184,0.1);

  transition:
      transform .25s ease,
      border-color .25s ease,
      box-shadow .25s ease;
}

.project-card:hover{
  transform:translateY(-6px);
  border-color:rgba(99,102,241,0.25);
  box-shadow:0 20px 45px rgba(0,0,0,.25);
}

.project-accent{
  height:3px;
  background:linear-gradient(
      90deg,
      #6366f1,
      #8b5cf6,
      #3b82f6
  );
}

.project-visual{
  position:relative;
  height:160px;
  padding:20px;

  background:
      radial-gradient(circle at top left,#6366f133,transparent 40%),
      linear-gradient(135deg,#1e293b,#020617);

  border-bottom:1px solid rgba(255,255,255,0.06);
}

.project-number{
  position:absolute;
  left:20px;
  bottom:15px;

  font-size:2.8rem;
  font-weight:800;

  color:rgba(255,255,255,0.08);
}

.project-host{
  position:absolute;
  top:18px;
  right:18px;

  padding:6px 10px;
  border-radius:999px;

  background:rgba(255,255,255,0.06);
  border:1px solid rgba(255,255,255,0.08);

  font-size:0.75rem;
  font-weight:700;
  letter-spacing:0.06em;
}

.project-content{
  padding:24px;
}

.project-content h3{
  margin:0;
  font-size:1.35rem;
  color:white;
}

.project-description{
  margin-top:14px;
  color:#94a3b8;
  line-height:1.7;
}

.project-tags{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
  margin-top:18px;
}

.project-tag{
  padding:7px 12px;
  border-radius:999px;

  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.06);

  font-size:0.82rem;
  font-weight:600;
}

.project-footer{
  margin-top:24px;
  padding-top:18px;

  border-top:1px solid rgba(255,255,255,0.06);

  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  gap:12px;
}

.project-link{
  text-decoration:none;
  font-weight:700;
  font-size:0.9rem;
  color:white;

  transition:.2s;
}

.project-link:hover{
  color:#a5b4fc;
}

.secondary-link{
  color:#a5b4fc;
}

@media(max-width:1000px){

  .projects-grid{
    grid-template-columns:1fr;
  }

}

</style>