<template>
  <b-navbar toggleable="lg" type="dark" class="top-bar theme-bg-primary-darken position-relative">
    <ul class="social-list list-inline mb-0">
      <li class="list-inline-item">
        <a class="text-white" href="mailto:contact@riccardogiomi.com" target="_blank"
          ><i class="far fa-envelope fa-fw"></i
        ></a>
      </li>
      <li class="list-inline-item">
        <a class="text-white" href="https://www.linkedin.com/in/riccardo-giomi-663303188/" target="_blank"
          ><i class="fab fa-linkedin-in fa-fw"></i
        ></a>
      </li>
      <li class="list-inline-item">
        <a class="text-white" href="https://github.com/riccardo-giomi" target="_blank"
          ><i class="fab fa-github-alt fa-fw"></i
        ></a>
      </li>
    </ul>

    <b-navbar-toggle target="navigation"></b-navbar-toggle>

    <b-collapse id="navigation" is-nav>
      <b-navbar-nav class="text-uppercase ml-auto">
        <b-nav-item to="/" :active="isActive('home')">Chi sono</b-nav-item>
        <b-nav-item to="/curriculum" :active="isActive('cv')">Curriculum</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    active: {
      default: 'home'
    }
  },
  methods: {
    isActive(page) {
      return page === this.active
    }
  }
}
</script>
