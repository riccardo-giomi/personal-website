<template>
  <div>
    <Skills />
    <Education />
    <!--Awards / -->
    <Language />
    <Interests />
  </div>
</template>

<script>
import Skills from '@/components/en/curriculum/sidebar/Skills.vue'
import Education from '@/components/en/curriculum/sidebar/Education.vue'
// import Awards from '@/components/en/curriculum/sidebar/Awards.vue'
import Language from '@/components/en/curriculum/sidebar/Language.vue'
import Interests from '@/components/en/curriculum/sidebar/Interests.vue'

export default {
  components: {
    Skills,
    Education,
    // Awards,
    Language,
    Interests
  }
}
</script>
