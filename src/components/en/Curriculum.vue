<template>
  <article class="resume-wrapper text-center position-relative">
    <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
      <div id="cv-for-pdf" class="m-0 p-0 b-0">
        <PersonalInfo />

        <div class="resume-body p-5">
          <Summary />
          <div class="row">
            <div class="col-lg-9"><Experience /></div>
            <div class="col-lg-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import PersonalInfo from '@/components/en/curriculum/PersonalInfo.vue'
import Summary from '@/components/en/curriculum/Summary.vue'
import Experience from '@/components/en/curriculum/Experience.vue'
import Sidebar from '@/components/en/curriculum/Sidebar.vue'

export default {
  name: 'Curriculum',
  components: {
    PersonalInfo,
    Summary,
    Experience,
    Sidebar
  }
}
</script>
