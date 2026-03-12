<script setup>
import HeroSection from '../components/HeroSection.vue'
import FeaturedProject from '../components/FeaturedProject.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import AboutSection from '../components/AboutSection.vue'
import TimelineSection from '../components/TimelineSection.vue'
import SkillsSection from '../components/SkillsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'
</script>

<template>
  <main>
    <HeroSection />
    <FeaturedProject />
    <ProjectsSection />
    <AboutSection />
    <TimelineSection />
    <SkillsSection />
    <ContactSection />
  </main>

  <FooterSection />
</template>