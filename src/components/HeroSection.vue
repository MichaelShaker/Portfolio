<template>
  <section id="home" class="section hero-section">
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>

    <div class="container hero-layout">
      <div class="hero-left">
        <p class="eyebrow">SOFTWARE DEVELOPER & AI STUDENT</p>

        <h1 class="hero-title">
          Clean portfolio.
          <span>Strong projects.</span>
          Memorable presentation.
        </h1>

        <p class="hero-text">
          I build modern web applications, backend systems, and AI-driven projects.
          This portfolio presents my work in a clean and professional way.
        </p>

        <div class="hero-buttons">
          <a href="#projects" class="btn-primary">View Projects</a>
          <a href="#contact" class="btn-secondary">Contact Me</a>
        </div>
      </div>

      <div class="card hero-card">
        <div class="hero-card-top">
          <p>Current Focus</p>
          <span class="status-pill">Active</span>
        </div>

        <div class="hero-card-grid">
          <div class="mini-card">
            <span>Focus</span>
            <h3>Full Stack Development</h3>
          </div>

          <div class="mini-card">
            <span>Focus</span>
            <h3>Artificial Intelligence</h3>
          </div>

          <div class="mini-card">
            <span>Stack</span>
            <h3>Vue · Java · Python</h3>
          </div>

          <div class="mini-card">
            <span>Goal</span>
            <h3>Build useful systems</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  padding-top: 90px;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 56px;
  align-items: center;
  min-height: 78vh;
}

.hero-left {
  position: relative;
  z-index: 2;
}

.eyebrow {
  margin: 0 0 20px;
  color: #818cf8;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.28em;
}

.hero-title {
  margin: 0;
  max-width: 680px;
  font-size: clamp(3.3rem, 6vw, 5.6rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
  color: #ffffff;
}

.hero-title span {
  display: block;
  color: #a5b4fc;
}

.hero-text {
  margin-top: 24px;
  max-width: 600px;
  color: #cbd5e1;
  font-size: 1.08rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.hero-card {
  position: relative;
  z-index: 2;
  padding: 28px;
}

.hero-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.hero-card-top p {
  margin: 0;
  color: #e2e8f0;
  font-size: 0.98rem;
  font-weight: 700;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 999px;
  color: #86efac;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.18);
  font-size: 0.82rem;
  font-weight: 700;
}

.hero-card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.mini-card {
  padding: 22px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: transform 0.22s ease, border-color 0.22s ease;
}

.mini-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.22);
}

.mini-card span {
  color: #94a3b8;
  font-size: 0.88rem;
  font-weight: 600;
}

.mini-card h3 {
  margin: 12px 0 0;
  color: white;
  font-size: 1.05rem;
  line-height: 1.4;
}

.hero-glow {
  position: absolute;
  border-radius: 999px;
  filter: blur(100px);
  pointer-events: none;
  z-index: 1;
}

.hero-glow-1 {
  width: 320px;
  height: 320px;
  background: rgba(99, 102, 241, 0.18);
  top: 60px;
  left: -60px;
}

.hero-glow-2 {
  width: 260px;
  height: 260px;
  background: rgba(59, 130, 246, 0.12);
  right: 8%;
  top: 120px;
}

@media (max-width: 950px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 36px;
    min-height: auto;
  }

  .hero-card-grid {
    grid-template-columns: 1fr;
  }
}
</style>