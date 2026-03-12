<template>
  <section class="section">
    <div class="container project-page">
      <p class="page-label">PROJECT DETAIL</p>
      <h1>Beweegvriendelijk Backend</h1>
      <p class="page-text">
        This backend project supports a platform focused on movement-friendly
        environments. It provides the structured backend logic and API support
        needed for the application.
      </p>

      <div class="page-block">
        <h2>Tech Stack</h2>
        <p>Java, Spring Boot, API</p>
      </div>

      <div class="page-block">
        <h2>Repository</h2>
        <a
            href="https://github.com/MichaelShaker/mca-beweegvriendelijk-Deploy"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary"
        >
          Open Repository
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-page h1 {
  margin: 0;
  font-size: 3rem;
  color: white;
}

.page-label {
  margin-bottom: 14px;
  color: #818cf8;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
}

.page-text {
  margin-top: 22px;
  max-width: 760px;
  color: #cbd5e1;
  line-height: 1.8;
  font-size: 1.05rem;
}

.page-block {
  margin-top: 34px;
}

.page-block h2 {
  margin-bottom: 10px;
  color: white;
}
</style>