<script setup>

const project = {
  title: "License Plate Recognition AI",
  description:
      "AI system that detects license plates from video frames using computer vision and deep learning.",
  tech: ["Python", "OpenCV", "AI"],
  repo:
      "https://gitlab.fdmci.hva.nl/applied-artificial-intelligence/2024-2025-semester-2/projecten/faawoodeedaa97",
}

</script>

<template>
  <section class="section featured-project">

    <div class="container featured-layout">

      <div class="featured-visual">
        <div class="visual-placeholder"></div>
      </div>

      <div class="featured-content">

        <p class="featured-label">FEATURED PROJECT</p>

        <h2 class="featured-title">
          {{ project.title }}
        </h2>

        <p class="featured-description">
          {{ project.description }}
        </p>

        <div class="featured-tags">
<span
    v-for="item in project.tech"
    :key="item"
    class="tag"
>
{{ item }}
</span>
        </div>

        <div class="featured-buttons">

          <a
              :href="project.repo"
              target="_blank"
              class="btn-primary"
          >
            View Repository
          </a>

          <a
              href="#projects"
              class="btn-secondary"
          >
            See All Projects
          </a>

        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>

.featured-layout{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:50px;
  align-items:center;
}

.featured-visual{
  height:320px;
}

.visual-placeholder{
  height:100%;
  border-radius:22px;

  background:
      radial-gradient(circle at top left,#6366f133,transparent 40%),
      linear-gradient(135deg,#1e293b,#020617);

  border:1px solid rgba(255,255,255,0.06);
}

.featured-label{
  color:#818cf8;
  letter-spacing:0.2em;
  font-size:0.8rem;
  font-weight:700;
  margin-bottom:12px;
}

.featured-title{
  font-size:2.3rem;
  margin:0;
}

.featured-description{
  margin-top:16px;
  color:#cbd5e1;
  line-height:1.7;
}

.featured-tags{
  margin-top:18px;
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}

.featured-buttons{
  margin-top:26px;
  display:flex;
  gap:12px;
}

@media (max-width:900px){

  .featured-layout{
    grid-template-columns:1fr;
  }

}

</style>