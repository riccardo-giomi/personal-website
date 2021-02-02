<template>
  <section class="skills-section section py-5">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-3">
        Competenze
      </h3>
      <div class="section-intro mx-auto text-center mb-5 text-secondary">
        Ho più di 20 anni di esperienza nel settore IT, sviluppando applicazioni e servizi per la rete. Negli ultimi
        dieci anni ho lavorato primariamente come collaboratore o consulente in gruppi di lavoro remoto. Ecco una rapida
        carrellata dei linguaggi e degli strumenti che ho usato più recentemente. Volete saperne di più sulla mia
        esperienza?
        <router-link to="/it/curriculum">Date un'occhiata al mio curriculum</router-link>.
      </div>

      <div class="skills-blocks mx-auto pt-5">
        <div class="row">
          <div class="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
            <div class="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
              <h4 class="skills-cat text-center mb-3 mt-5">Frontend</h4>
              <div class="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                <img class="skills-icon" src="@/assets/theme-instance-b4/images/frontend-icon.svg" />
              </div>
              <ul class="skills-list list-unstyled text-secondary">
                <li class="mb-2">
                  <i class="fas fa-check mr-2 text-primary"></i>
                  Vue/Vue-cli/Nuxt
                </li>
                <li class="mb-2">
                  <i class="fas fa-check mr-2 text-primary"></i>
                  React/Gatsby
                </li>
                <li class="mb-2"><i class="fas fa-check mr-2 text-primary"> </i>HTML/CSS/Javascript</li>
              </ul>
            </div>
          </div>

          <div class="skills-block col-12 col-lg-4 mb-5 mb-3 mb-lg-0">
            <div class="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
              <h4 class="skills-cat text-center mb-3 mt-5">Backend</h4>
              <div class="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                <img class="skills-icon" src="@/assets/theme-instance-b4/images/backend-icon.svg" />
              </div>
              <ul class="skills-list list-unstyled text-secondary">
                <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>Ruby/Rails</li>
                <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>PHP</li>
                <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>Node.js/Express</li>
                <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>MySQL</li>
                <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>MongoDB</li>
              </ul>
            </div>
          </div>

          <div class="skills-block col-12 col-lg-4">
            <div class="skills-block-inner bg-white shadow-sm py-4 px-5 position-relative">
              <h4 class="skills-cat text-center mb-3 mt-5">Altri</h4>
              <div class="skills-icon-holder position-absolute d-inline-block rounded-circle text-center">
                <img class="skills-icon" src="@/assets/theme-instance-b4/images/other-skills-icon.svg" />
              </div>
              <ul class="skills-list list-unstyled text-secondary">
                <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>Git/Github</li>
                <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>DevOps</li>
                <li class="mb-2"><i class="fas fa-check mr-2 text-primary"></i>Testing (BDD/TDD)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
