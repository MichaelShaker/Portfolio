<script setup>
</script>
<template>
  <header class="navbar">
    <div class="container nav-inner">

      <router-link to="/" class="logo">
        Michael<span>.</span>
      </router-link>

      <nav class="links">
        <router-link to="/#about">About</router-link>
        <router-link to="/#projects">Projects</router-link>
        <router-link to="/#skills">Skills</router-link>
        <router-link to="/#journey">Journey</router-link>
        <router-link to="/#documents">Documents</router-link>
        <router-link to="/#contact">Contact</router-link>
      </nav>

      <router-link to="/#contact" class="btn-primary nav-btn">
        Let's Talk
      </router-link>

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

.nav-btn {
  padding: 11px 20px;
  border-radius: 14px;
  text-decoration: none;
}

@media (max-width: 950px) {
  .links {
    display: none;
  }
}
</style>