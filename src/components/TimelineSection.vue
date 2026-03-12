<script setup>
const timelineItems = [
  {
    year: '2022',
    title: 'HAVO Diploma',
    subtitle: 'Economics & Management',
    description:
        'Completed my HAVO diploma in Economics and Management. This gave me a strong base in structured thinking, problem solving, and communication.',
  },
  {
    year: '2023',
    title: 'Started HBO-ICT',
    subtitle: 'Hogeschool van Amsterdam',
    description:
        'Started my HBO-ICT journey and began building technical skills in software development, web technologies, and backend logic.',
  },
  {
    year: '2023',
    title: 'Freelance IT Work',
    subtitle: 'ZZP IT Services',
    description:
        'Worked as a freelance IT professional, helping with troubleshooting, system maintenance, software installation, and practical technical support.',
  },
  {
    year: '2024',
    title: 'Web Development Projects',
    subtitle: 'Frontend and full-stack growth',
    description:
        'Built projects with Vue, JavaScript, HTML, CSS, Node.js, Java, Hibernate, JPA, PHP, and SQL. Focused on writing cleaner code and building structured applications.',
  },
  {
    year: '2024',
    title: 'Election Results Platform',
    subtitle: 'Semester project',
    description:
        'Worked on a website focused on accessible Dutch election results, bilingual support, user interaction, and clear democratic data presentation.',
  },
  {
    year: '2025',
    title: 'Artificial Intelligence Focus',
    subtitle: 'AAI minor and AI projects',
    description:
        'Worked on artificial intelligence topics such as deep learning, computer vision, neural networks, NumPy-based models, and practical AI mathematics.',
  },
  {
    year: '2025',
    title: 'License Plate Recognition Project',
    subtitle: 'Computer vision',
    description:
        'Developed an AI-focused project to recognize license plates from video frames, combining computer vision techniques with practical model design.',
  },
  {
    year: '2025',
    title: 'Internship Development',
    subtitle: 'Professional growth',
    description:
        'Continued developing as a student developer through portfolio building, project work, backend systems, and real-world software practice.',
  },
]
</script>

<template>
  <section id="timeline" class="section timeline-section">
    <div class="container">
      <div class="timeline-heading">
        <p class="timeline-label">JOURNEY</p>
        <h2 class="section-title">The path behind my development.</h2>
        <p class="timeline-text">
          This timeline gives a clear view of my growth as a student developer,
          from education and freelance IT work to web development, backend systems,
          and artificial intelligence projects.
        </p>
      </div>

      <div class="timeline-list">
        <article
            v-for="(item, index) in timelineItems"
            :key="`${item.year}-${item.title}`"
            class="timeline-item"
        >
          <div class="timeline-left">
            <div class="timeline-dot"></div>
            <div
                v-if="index !== timelineItems.length - 1"
                class="timeline-line"
            ></div>
          </div>

          <div class="timeline-year">
            {{ item.year }}
          </div>

          <div class="timeline-card card">
            <p class="timeline-subtitle">{{ item.subtitle }}</p>
            <h3>{{ item.title }}</h3>
            <p class="timeline-description">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
  padding-top: 90px;
  padding-bottom: 100px;
}

.timeline-heading {
  max-width: 780px;
  margin-bottom: 44px;
}

.timeline-label {
  margin: 0 0 14px;
  color: #818cf8;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
}

.timeline-text {
  margin-top: 18px;
  max-width: 700px;
  color: #cbd5e1;
  font-size: 1.04rem;
  line-height: 1.8;
}

.timeline-list {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding-bottom: 14px;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
}

.timeline-item {
  position: relative;
  flex: 0 0 320px;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
}

.timeline-left {
  position: relative;
  height: 30px;
  margin-bottom: 14px;
}

.timeline-dot {
  position: absolute;
  top: 8px;
  left: 0;
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: #6366f1;
  box-shadow: 0 0 18px rgba(99, 102, 241, 0.55);
  z-index: 2;
}

.timeline-line {
  position: absolute;
  top: 14px;
  left: 14px;
  height: 2px;
  width: calc(100% + 24px);
  background: linear-gradient(
      90deg,
      rgba(99, 102, 241, 0.35),
      rgba(99, 102, 241, 0.05)
  );
}

.timeline-year {
  margin-bottom: 12px;
  color: #a5b4fc;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.timeline-card {
  height: 100%;
  padding: 22px 24px;
  transition:
      transform 0.22s ease,
      border-color 0.22s ease,
      box-shadow 0.22s ease;
}

.timeline-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.24);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.2);
}

.timeline-subtitle {
  margin: 0;
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 600;
}

.timeline-card h3 {
  margin: 10px 0 0;
  color: white;
  font-size: 1.3rem;
  line-height: 1.3;
}

.timeline-description {
  margin-top: 14px;
  color: #cbd5e1;
  line-height: 1.75;
  font-size: 0.98rem;
}

@media (max-width: 700px) {
  .timeline-list {
    flex-direction: column;
    overflow-x: visible;
    gap: 22px;
  }

  .timeline-item {
    flex: unset;
  }

  .timeline-left {
    height: auto;
    margin-bottom: 10px;
  }

  .timeline-dot {
    position: relative;
    top: 0;
    left: 0;
  }

  .timeline-line {
    display: none;
  }
}
</style>