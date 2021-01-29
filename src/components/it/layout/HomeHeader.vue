<template>
  <header class="header">
    <Navbar active="home" />
    <div class="header-intro theme-bg-primary text-white py-5">
      <div class="container">
        <div class="profile-teaser media flex-column flex-md-row">
          <img
            class="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
            src="@/assets/images/profile.jpg"
            alt=""
          />
          <div class="media-body text-center text-md-left">
            <div class="lead">Benvenuti, mi chiamo</div>
            <h2 class="mt-0 display-4 font-weight-bold">Riccardo Giomi</h2>
            <div class="bio mb-3">
              Sono un programmatore full-stack con esperienza nella realizzazione di backend e frontend per applicazioni
              web. Per ulteriori informazioni, il mio
              <router-link to="/curriculum" class="link-on-bg">curriculum</router-link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '@/components/it/layout/Navbar.vue'

export default {
  name: 'HomeHeader',
  components: { Navbar }
}
</script>
