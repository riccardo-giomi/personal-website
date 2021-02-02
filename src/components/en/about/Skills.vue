<template>
  <section class="skills-section section py-5">
    <div class="container">
      <h3 class="section-title font-weight-bold text-center mb-3">
        Skills Overview
      </h3>
      <div class="section-intro mx-auto text-center mb-5 text-secondary">
        I have more than 20 years of experience creating applications and services for the web. In the last 10 years I
        have worked as a consultant or collaborator in remote teams. Want to find out more about my experience?
        <router-link to="/it/curriculum">Check out my online resume.</router-link>
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
              <h4 class="skills-cat text-center mb-3 mt-5">Others</h4>
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
