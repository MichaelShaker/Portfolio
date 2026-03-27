<template>
  <section id="about" class="section about-section">
    <div class="container about-layout">

      <!-- LEFT CONTENT -->
      <div class="about-main">
        <p class="about-label">ABOUT ME</p>

        <h2 class="section-title about-title">
          Building reliable and practical software with a focus on quality and security.
        </h2>

        <p class="about-text">
          I am Michael Shaker, a third-year HBO-ICT student at the Hogeschool van Amsterdam,
          specializing in software engineering. I am developing myself as a full stack developer,
          with a strong focus on building reliable and secure systems.
        </p>

        <p class="about-text">
          Over the past years, I have built multiple full stack applications as well as separate
          frontend, backend, and database systems. My experience includes working with technologies
          such as Vue, Node.js, Python, and SQL, and applying concepts like system design,
          testing, and deployment.
        </p>

        <p class="about-text">
          I have gained practical experience through freelance IT work and as a service desk
          employee at KPN, where I developed strong problem-solving and communication skills.
          I also completed a project for RIVM, where I worked on a data-driven application.
        </p>

        <p class="about-text">
          Currently, I am focusing on software engineering with an increasing interest in
          cybersecurity, particularly in building secure and reliable applications.
        </p>

        <p class="about-text">
          My goal is to grow into a software engineer who builds high-quality systems
          that are both functional and secure in real-world environments.
        </p>
      </div>

      <!-- RIGHT POINTS -->
      <div class="about-points">
        <div class="about-point">
          <span class="point-dot"></span>
          <p>Full stack development (Vue, Node.js, Python, SQL)</p>
        </div>

        <div class="about-point">
          <span class="point-dot"></span>
          <p>Experience with real-world projects and applied software development</p>
        </div>

        <div class="about-point">
          <span class="point-dot"></span>
          <p>Focus on building reliable, scalable, and secure systems</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.about-section {
  position: relative;
}

.about-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
  gap: 40px;
  align-items: start;
}

.about-main {
  max-width: 760px;
}

.about-label {
  margin: 0 0 14px;
  color: #818cf8;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
}

.about-title {
  max-width: 760px;
}

.about-text {
  margin-top: 22px;
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.85;
  max-width: 720px;
}

.about-points {
  display: grid;
  gap: 14px;
  padding-top: 72px;
}

.about-point {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.22s ease, border-color 0.22s ease;
}

.about-point:hover {
  transform: translateY(-3px);
  border-color: rgba(99, 102, 241, 0.2);
}

.point-dot {
  width: 10px;
  height: 10px;
  margin-top: 8px;
  border-radius: 999px;
  background: #6366f1;
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(99, 102, 241, 0.55);
}

.about-point p {
  margin: 0;
  color: #e2e8f0;
  line-height: 1.6;
}

@media (max-width: 950px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .about-points {
    padding-top: 0;
  }
}
</style>