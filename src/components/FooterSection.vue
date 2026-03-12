<template>

  <footer class="footer">

    <div class="container footer-layout">

      <div class="footer-left">

        <h3>Michael Shaker</h3>

        <p>
          Software Developer & AI Student
        </p>

      </div>

      <div class="footer-links">

        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>

      </div>

      <div class="footer-social">

        <a
            href="https://github.com/MichaelShaker"
            target="_blank"
        >
          GitHub
        </a>

        <a
            href="mailto:michaelshaker19@gmail.com"
        >
          Email
        </a>

      </div>

    </div>

    <div class="footer-bottom">

      © 2025 Michael Shaker

    </div>

  </footer>

</template>

<style scoped>

.footer{
  margin-top:120px;
  padding:60px 0 30px 0;

  border-top:1px solid rgba(255,255,255,0.08);
}

.footer-layout{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:40px;
}

.footer-links{
  display:flex;
  flex-direction:column;
  gap:10px;
}

.footer-social{
  display:flex;
  flex-direction:column;
  gap:10px;
}

.footer-bottom{
  margin-top:40px;
  text-align:center;
  color:#94a3b8;
  font-size:0.9rem;
}

</style>