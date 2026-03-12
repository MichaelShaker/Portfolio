<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="contact-wrapper card">

        <div class="contact-left">
          <p class="contact-label">LET'S CONNECT</p>

          <h2 class="section-title contact-title">
            Ready to build something strong together?
          </h2>

          <p class="contact-text">
            I am always open to talking about projects, internships, development work,
            and new opportunities. If you like my portfolio and want to get in touch,
            feel free to contact me.
          </p>

          <div class="contact-buttons">
            <a href="mailto:michaelshaker19@gmail.com" class="btn-primary">
              Send Email
            </a>

            <a href="tel:0621364475" class="btn-secondary">
              Call Me
            </a>
          </div>
        </div>

        <div class="contact-right">
          <div class="info-card">
            <span>Name</span>
            <h3>Michael Shaker</h3>
          </div>

          <div class="info-card">
            <span>Email</span>
            <a href="mailto:michaelshaker19@gmail.com">michaelshaker19@gmail.com</a>
          </div>

          <div class="info-card">
            <span>Phone</span>
            <a href="tel:0621364475">06 21364475</a>
          </div>

          <div class="info-card">
            <span>Location</span>
            <h3>Amsterdam, Netherlands</h3>
          </div>
        </div>

        <div class="contact-glow contact-glow-1"></div>
        <div class="contact-glow contact-glow-2"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-wrapper {
  position: relative;
  overflow: hidden;
  padding: 40px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  border-radius: 28px;
}

.contact-left,
.contact-right {
  position: relative;
  z-index: 2;
}

.contact-label {
  margin: 0 0 14px;
  color: #818cf8;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.22em;
}

.contact-title {
  max-width: 620px;
}

.contact-text {
  margin-top: 18px;
  max-width: 580px;
  color: #cbd5e1;
  font-size: 1.05rem;
  line-height: 1.7;
}

.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.contact-right {
  display: grid;
  gap: 16px;
}

.info-card {
  padding: 20px 22px;
  border-radius: 18px;

  background: rgba(255,255,255,0.035);
  border: 1px solid rgba(255,255,255,0.08);

  display: flex;
  flex-direction: column;
  gap: 6px;

  transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      background 0.25s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99,102,241,0.35);
  background: rgba(255,255,255,0.05);
}

/* label */

.info-card span {
  font-size: 0.82rem;
  font-weight: 600;

  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #94a3b8;
}

/* value */

.info-card h3,
.info-card a {
  font-size: 1.05rem;
  font-weight: 700;

  color: white;
  text-decoration: none;

  margin-top: 4px;
}

.info-card a:hover {
  color: #a5b4fc;
}

.contact-glow {
  position: absolute;
  border-radius: 999px;
  filter: blur(90px);
  opacity: 0.35;
  pointer-events: none;
  z-index: 1;
}

.contact-glow-1 {
  width: 260px;
  height: 260px;
  background: rgba(99, 102, 241, 0.22);
  top: -40px;
  right: 40px;
}

.contact-glow-2 {
  width: 220px;
  height: 220px;
  background: rgba(59, 130, 246, 0.16);
  bottom: -50px;
  left: 35%;
}

@media (max-width: 950px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    padding: 28px;
  }

  .contact-title {
    max-width: 100%;
  }

  .contact-text {
    max-width: 100%;
  }
}
</style>