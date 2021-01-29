<template>
  <header class="resume-header pt-4 pt-md-0">
    <div class="media flex-column flex-md-row">
      <img class="mr-3 img-fluid picture mx-auto" src="@/assets/images/cv/photo.jpg" alt="" />
      <div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
        <div class="primary-info">
          <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">Riccardo Giomi</h1>
          <div class="title mb-3">Full-stack developer</div>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#"
                ><i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>contact@riccardogiomi.com</a
              >
            </li>
          </ul>
        </div>
        <!--//primary-info-->
        <div class="secondary-info ml-md-auto mt-2">
          <ul class="resume-social list-unstyled">
            <li class="mb-3">
              <a href="https://www.linkedin.com/in/riccardo-giomi-663303188" target="_blank"
                ><span class="fa-container text-center mr-2"><i class="fab fa-linkedin-in fa-fw"></i></span
                >linkedin.com/in/riccardo-giomi-663303188</a
              >
            </li>
            <li class="mb-3">
              <a href="https://github.com/riccardo-giomi"
                ><span class="fa-container text-center mr-2"><i class="fab fa-github-alt fa-fw"></i></span
                >github.com/riccardo-giomi</a
              >
            </li>
            <li>
              <router-link to="/">
                <span class="fa-container text-center mr-2"><i class="fas fa-globe"></i></span>riccardogiomi.com
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
