<template>
  <header class="resume-header pt-4 pt-md-0">
    <div class="media flex-column flex-md-row">
      <img class="mr-3 img-fluid picture mx-auto" src="@/assets/images/cv/photo.jpg" alt="" />
      <div class="media-body p-3 d-flex flex-column flex-md-row mx-auto mx-lg-0">
        <div class="primary-info">
          <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">Riccardo Giomi</h1>
          <div class="title mb-3">Freelance full stack developer</div>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#">
                <EnvelopIconFixed />
                contact@riccardogiomi.com</a
              >
            </li>
          </ul>
        </div>
        <div class="secondary-info ml-md-auto mt-2">
          <ul class="resume-social list-unstyled">
            <li class="mb-3">
              <a href="https://www.linkedin.com/in/riccardo-giomi-663303188" target="_blank"
                ><span class="fa-container text-center mr-2"><LinkedinIconFixed /></span
                >linkedin.com/in/riccardo-giomi-663303188</a
              >
            </li>
            <li class="mb-3">
              <a href="https://github.com/riccardo-giomi"
                ><span class="fa-container text-center mr-2"><GithubIconFixed /></span>github.com/riccardo-giomi</a
              >
            </li>
            <li>
              <router-link to="/en/">
                <span class="fa-container text-center mr-2"><GlobeIconFixed /></span>riccardogiomi.com
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import EnvelopIconFixed from '@/components/common/icons-fixed/EnvelopIconFixed.vue'
import LinkedinIconFixed from '@/components/common/icons-fixed/LinkedinIconFixed.vue'
import GithubIconFixed from '@/components/common/icons-fixed/GithubIconFixed.vue'
import GlobeIconFixed from '@/components/common/icons-fixed/GlobeIconFixed.vue'

export default {
  components: {
    EnvelopIconFixed,
    LinkedinIconFixed,
    GithubIconFixed,
    GlobeIconFixed
  }
}
</script>
