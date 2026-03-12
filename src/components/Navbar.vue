<template>
  <header class="navbar">
    <div class="container nav-inner">

      <a href="#home" class="logo">
        Michael<span>.</span>
      </a>

      <nav class="links">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#timeline">Journey</a>
        <a href="#skills">Skills</a>
        <a href="#documents">Documents</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#contact" class="btn-primary">
        Let's Talk
      </a>

    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;

  background: rgba(2, 6, 23, 0.75);
  backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 82px;
  gap: 30px;
}

/* logo */

.logo {
  text-decoration: none;
  color: white;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.logo span {
  color: #6366f1;
}

/* navigation links */

.links {
  display: flex;
  align-items: center;
  gap: 34px;
}

.links a {
  text-decoration: none;
  color: #cbd5e1;
  font-weight: 600;
  font-size: 0.95rem;

  transition: 0.2s ease;
}

.links a:hover {
  color: white;
}

/* button */

.nav-btn {
  padding: 11px 20px;
  border-radius: 14px;
}

/* responsive */

@media (max-width: 950px) {
  .links {
    display: none;
  }
}
</style>