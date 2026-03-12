<script setup>
const skillGroups = [
  {
    title: 'Frontend',
    description: 'Building clean and responsive user interfaces with a strong focus on usability.',
    items: ['Vue', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    description: 'Creating structured logic, APIs, and scalable application foundations.',
    items: ['Java', 'Spring Boot', 'Node.js', 'SQL'],
  },
  {
    title: 'AI',
    description: 'Working on data-driven and computer vision projects with practical applications.',
    items: ['Python', 'NumPy', 'OpenCV', 'TensorFlow'],
  },
]
</script>

<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <div class="skills-heading">
        <p class="skills-label">TECH STACK</p>
        <h2 class="section-title">Skills that support the projects I build.</h2>
        <p class="skills-text">
          My work combines frontend development, backend logic, and artificial intelligence.
          These are the main technologies I use to build structured and practical software.
        </p>
      </div>

      <div class="skills-grid">
        <article
            v-for="group in skillGroups"
            :key="group.title"
            class="card skill-card"
        >
          <div class="skill-card-top">
            <h3>{{ group.title }}</h3>
          </div>

          <p class="skill-description">
            {{ group.description }}
          </p>

          <div class="skill-tags">
            <span
                v-for="item in group.items"
                :key="item"
                class="skill-tag"
            >
              {{ item }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding-top: 90px;
  padding-bottom: 100px;
}

.skills-heading {
  max-width: 760px;
  margin-bottom: 42px;
}

.skills-label {
  margin: 0 0 14px;
  color: #818cf8;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
}

.skills-text {
  margin-top: 18px;
  max-width: 680px;
  color: #cbd5e1;
  font-size: 1.04rem;
  line-height: 1.8;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.skill-card {
  padding: 26px;
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}

.skill-card:hover {
  transform: translateY(-6px);
  border-color: rgba(99, 102, 241, 0.24);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.22);
}

.skill-card-top h3 {
  margin: 0;
  color: white;
  font-size: 1.45rem;
  font-weight: 700;
}

.skill-description {
  margin-top: 16px;
  color: #94a3b8;
  line-height: 1.7;
  min-height: 84px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.skill-tag {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #dbeafe;
  font-size: 0.86rem;
  font-weight: 600;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.skill-card:hover .skill-tag {
  transform: translateY(-2px);
  border-color: rgba(99, 102, 241, 0.22);
  background: rgba(99, 102, 241, 0.08);
}

@media (max-width: 950px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-description {
    min-height: auto;
  }
}
</style>