<template>
  <section id="about" class="section about-section">
    <div class="container about-layout">
      <div class="about-left">
        <p class="about-label">ABOUT ME</p>

        <h2 class="section-title about-title">
          Building practical software with a strong focus on quality and clarity.
        </h2>

        <p class="about-text">
          I am Michael Shaker, an HBO-ICT student with a strong interest in software engineering,
          backend systems, web development, and artificial intelligence. I enjoy building projects
          that solve real problems and presenting them in a clean and professional way.
        </p>

        <p class="about-text">
          My work is focused on combining technical skill with clear structure. I like creating
          applications that are useful, well-organized, and visually strong.
        </p>

        <div class="about-points">
          <div class="about-point">
            <span class="point-dot"></span>
            <p>Focused on web development, backend systems, and AI</p>
          </div>

          <div class="about-point">
            <span class="point-dot"></span>
            <p>Hands-on mindset with practical problem solving</p>
          </div>

          <div class="about-point">
            <span class="point-dot"></span>
            <p>Clean presentation and structured project building</p>
          </div>
        </div>
      </div>

      <div class="card about-card">
        <div class="about-card-top">
          <p class="about-card-label">Profile Snapshot</p>
          <span class="about-card-badge">Student Developer</span>
        </div>

        <div class="about-card-grid">
          <div class="about-info-box">
            <span>Study</span>
            <h3>HBO-ICT</h3>
          </div>

          <div class="about-info-box">
            <span>Focus</span>
            <h3>Web Development & AI</h3>
          </div>

          <div class="about-info-box">
            <span>Approach</span>
            <h3>Clean practical solutions</h3>
          </div>

          <div class="about-info-box">
            <span>Goal</span>
            <h3>Build useful real-world systems</h3>
          </div>
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
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}

.about-left {
  max-width: 680px;
}

.about-label {
  margin: 0 0 14px;
  color: #818cf8;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
}

.about-title {
  max-width: 700px;
}

.about-text {
  margin-top: 22px;
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.85;
  max-width: 620px;
}

.about-points {
  display: grid;
  gap: 14px;
  margin-top: 28px;
}

.about-point {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.05);
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

.about-card {
  padding: 28px;
}

.about-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 22px;
}

.about-card-label {
  margin: 0;
  color: #e2e8f0;
  font-size: 0.96rem;
  font-weight: 700;
}

.about-card-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.2);
  color: #c7d2fe;
  font-size: 0.82rem;
  font-weight: 700;
}

.about-card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.about-info-box {
  padding: 22px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: transform 0.22s ease, border-color 0.22s ease;
}

.about-info-box:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.22);
}

.about-info-box span {
  color: #94a3b8;
  font-size: 0.88rem;
  font-weight: 600;
}

.about-info-box h3 {
  margin: 12px 0 0;
  color: white;
  font-size: 1.05rem;
  line-height: 1.4;
}

@media (max-width: 950px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .about-card-grid {
    grid-template-columns: 1fr;
  }
}
</style>