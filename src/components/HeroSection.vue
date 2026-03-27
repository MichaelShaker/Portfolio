<script setup>
import profileImage from '../assets/profile.jpg'
const cvLink = `${import.meta.env.BASE_URL}documents/Michael_Shaker_CV.pdf`
</script>

<template>
  <section id="home" class="section hero-section">
    <div class="hero-glow hero-glow-1"></div>
    <div class="hero-glow hero-glow-2"></div>

    <div class="container hero-layout">
      <div class="hero-left">
        <p class="eyebrow">SOFTWARE DEVELOPER & AI STUDENT</p>

        <h1 class="hero-title">
          Michael Shaker.
          <span>Building practical software</span>
          with clarity and purpose.
        </h1>

        <p class="hero-text">
          I build modern web applications, backend systems, and AI-driven projects.
          My portfolio presents technical work, real projects, and professional growth
          in a clean and structured way.
        </p>

        <div class="hero-buttons">
          <RouterLink to="/#projects" class="btn-primary">
            View Projects
          </RouterLink>
          <a :href="cvLink" download class="btn-secondary">Download CV</a>
          <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-ghost"
          >
            LinkedIn
          </a>
        </div>

        <div class="hero-meta">
          <div class="hero-meta-item">
            <span>Focus</span>
            <h3>Web Development & AI</h3>
          </div>

          <div class="hero-meta-item">
            <span>Stack</span>
            <h3>Vue · Java · Python</h3>
          </div>

          <div class="hero-meta-item">
            <span>Location</span>
            <h3>Amsterdam</h3>
          </div>
        </div>
      </div>

      <div class="hero-right">
        <div class="hero-image-shell">
          <div class="hero-image-glow"></div>
          <img
              :src="profileImage"
              alt="Michael Shaker portrait"
              class="hero-image"
          />

          <div class="hero-image-badge">
            <span class="badge-dot"></span>
            Available for opportunities
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
  padding-bottom: 40px;
}

.hero-layout {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 56px;
  align-items: center;
  min-height: 82vh;
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
  max-width: 760px;
  font-size: clamp(3.3rem, 6vw, 6rem);
  line-height: 0.94;
  letter-spacing: -0.055em;
  color: #ffffff;
}

.hero-title span {
  display: block;
  color: #a5b4fc;
}

.hero-text {
  margin-top: 26px;
  max-width: 620px;
  color: #cbd5e1;
  font-size: 1.08rem;
  line-height: 1.85;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 20px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: transparent;
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 700;
  transition:
      transform 0.22s ease,
      border-color 0.22s ease,
      background 0.22s ease;
}

.btn-ghost:hover {
  transform: translateY(-2px);
  border-color: rgba(99, 102, 241, 0.25);
  background: rgba(255, 255, 255, 0.03);
}

.hero-meta {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 42px;
  max-width: 760px;
}

.hero-meta-item {
  padding: 18px 18px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
}

.hero-meta-item span {
  display: block;
  color: #94a3b8;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.hero-meta-item h3 {
  margin: 0;
  color: white;
  font-size: 1rem;
  line-height: 1.4;
}

.hero-right {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
}

.hero-image-shell {
  position: relative;
  width: min(100%, 470px);
  min-height: 560px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 26px;
  border-radius: 34px;
  background:
      radial-gradient(circle at top, rgba(99, 102, 241, 0.16), transparent 45%),
      linear-gradient(180deg, rgba(15, 23, 42, 0.82), rgba(2, 6, 23, 0.92));
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.hero-image-glow {
  position: absolute;
  width: 75%;
  height: 75%;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.18);
  filter: blur(80px);
  top: 10%;
  z-index: 1;
}

.hero-image {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 380px;
  object-fit: contain;
  align-self: flex-end;
  filter: drop-shadow(0 22px 50px rgba(0, 0, 0, 0.35));
}

.hero-image-badge {
  position: absolute;
  left: 24px;
  bottom: 24px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(2, 6, 23, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #e2e8f0;
  font-size: 0.85rem;
  font-weight: 600;
  backdrop-filter: blur(12px);
}

.badge-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 12px rgba(34, 197, 94, 0.6);
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

@media (max-width: 1100px) {
  .hero-title {
    font-size: clamp(3rem, 5.4vw, 5rem);
  }

  .hero-meta {
    grid-template-columns: 1fr;
    max-width: 520px;
  }
}

@media (max-width: 950px) {
  .hero-layout {
    grid-template-columns: 1fr;
    gap: 42px;
    min-height: auto;
  }

  .hero-right {
    order: -1;
  }

  .hero-image-shell {
    min-height: 420px;
    width: min(100%, 420px);
  }

  .hero-image {
    max-width: 300px;
  }

  .hero-title {
    max-width: 100%;
  }

  .hero-text {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding-top: 50px;
  }

  .hero-title {
    font-size: clamp(2.7rem, 11vw, 4rem);
    line-height: 0.98;
  }

  .hero-buttons {
    gap: 12px;
  }

  .hero-image-shell {
    min-height: 360px;
    padding: 20px;
    border-radius: 26px;
  }

  .hero-image-badge {
    left: 16px;
    bottom: 16px;
    font-size: 0.78rem;
  }
}
</style>