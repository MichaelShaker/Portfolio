<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="contact-wrapper">

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

            <a
                href="/cv/Michael_Shaker_CV.pdf"
                download
                class="btn-secondary"
            >
              Download CV
            </a>

            <a
                href="https://www.linkedin.com/in/michaelshaker/"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div class="contact-right">
          <div class="info-item">
            <span>Name</span>
            <h3>Michael Shaker</h3>
          </div>

          <div class="info-item">
            <span>Email</span>
            <a href="mailto:michaelshaker19@gmail.com">michaelshaker19@gmail.com</a>
          </div>

          <div class="info-item">
            <span>Phone</span>
            <a href="tel:0621364475">06 21364475</a>
          </div>

          <div class="info-item">
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
  padding: 48px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 56px;
  border-radius: 30px;

  background: linear-gradient(
      145deg,
      rgba(15, 23, 42, 0.82),
      rgba(15, 23, 42, 0.62)
  );
  border: 1px solid rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(16px);
}

.contact-left,
.contact-right {
  position: relative;
  z-index: 2;
}

.contact-label {
  margin: 0 0 14px;
  color: #818cf8;
  font-size: 0.82rem;
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
  line-height: 1.8;
}

.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.contact-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
}

.info-item {
  padding: 18px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.info-item:first-child {
  padding-top: 0;
}

.info-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.info-item:hover {
  transform: translateX(6px);
  border-color: rgba(99, 102, 241, 0.28);
}

.info-item span {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 8px;
}

.info-item h3,
.info-item a {
  font-size: 1.08rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  line-height: 1.5;
}

.info-item a:hover {
  color: #a5b4fc;
}

.contact-glow {
  position: absolute;
  border-radius: 999px;
  filter: blur(100px);
  opacity: 0.32;
  pointer-events: none;
  z-index: 1;
}

.contact-glow-1 {
  width: 280px;
  height: 280px;
  background: rgba(99, 102, 241, 0.18);
  top: -60px;
  right: 20px;
}

.contact-glow-2 {
  width: 240px;
  height: 240px;
  background: rgba(59, 130, 246, 0.12);
  bottom: -70px;
  left: 32%;
}

@media (max-width: 950px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 36px;
    padding: 30px;
  }

  .contact-title,
  .contact-text {
    max-width: 100%;
  }
}
</style>