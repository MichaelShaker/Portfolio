<script setup>
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import TimelineSection from '../components/TimelineSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import DocumentsSection from '../components/DocumentsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <HeroSection />

  <AboutSection id="about" />
  <ProjectsSection id="projects" />
  <SkillsSection id="skills" />
  <TimelineSection id="journey" />
  <DocumentsSection id="documents" />
  <ContactSection id="contact" />
</template>