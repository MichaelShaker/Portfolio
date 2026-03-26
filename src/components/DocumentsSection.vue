<script setup>
const documents = [
  {
    title: 'Curriculum Vitae',
    type: 'CV',
    description: 'Download my latest CV in PDF format.',
    link: `${import.meta.env.BASE_URL}documents/Michael_Shaker_CV.pdf`,
    buttonText: 'Download CV',
    download: true,
  },
  {
    title: 'Propedeuse Diploma',
    type: 'Diploma',
    description: 'Official propedeuse diploma document.',
    link: `${import.meta.env.BASE_URL}documents/propedeuse-diploma.pdf`,
    buttonText: 'View Document',
    download: false,
  },
  {
    title: 'Grades',
    type: 'Gradelist',
    description: 'All grades received during my studies.',
    link: `${import.meta.env.BASE_URL}documents/grades.pdf`,
    buttonText: 'View Grades',
    download: false,
  },
]
</script>

<template>
  <section id="documents" class="section documents-section">
    <div class="container">
      <div class="documents-heading">
        <p class="documents-label">DOCUMENTS</p>
        <h2 class="section-title">Professional documents and achievements.</h2>
        <p class="documents-text">
          This section contains important documents such as my CV, diploma,
          and certifications to support my portfolio in a professional way.
        </p>
      </div>

      <div class="documents-grid">
        <article
            v-for="document in documents"
            :key="document.title"
            class="card document-card"
        >
          <span class="document-type">{{ document.type }}</span>
          <h3>{{ document.title }}</h3>
          <p>{{ document.description }}</p>

          <a
              :href="document.link"
              :download="document.download ? '' : null"
              :target="document.download ? null : '_blank'"
              :rel="document.download ? null : 'noopener noreferrer'"
              class="btn-secondary document-button"
          >
            {{ document.buttonText }}
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.documents-section {
  padding-top: 90px;
  padding-bottom: 100px;
}

.documents-heading {
  max-width: 760px;
  margin-bottom: 40px;
}

.documents-label {
  margin: 0 0 14px;
  color: #818cf8;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.24em;
}

.documents-text {
  margin-top: 18px;
  max-width: 680px;
  color: #cbd5e1;
  font-size: 1.04rem;
  line-height: 1.8;
}

.documents-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.document-card {
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
}

.document-card:hover {
  transform: translateY(-6px);
  border-color: rgba(99, 102, 241, 0.24);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.22);
}

.document-type {
  display: inline-flex;
  width: fit-content;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.2);
  color: #c7d2fe;
  font-size: 0.8rem;
  font-weight: 700;
}

.document-card h3 {
  margin: 0;
  color: white;
  font-size: 1.25rem;
}

.document-card p {
  margin: 0;
  color: #94a3b8;
  line-height: 1.7;
}

.document-button {
  margin-top: auto;
  width: fit-content;
}

@media (max-width: 950px) {
  .documents-grid {
    grid-template-columns: 1fr;
  }
}
</style>