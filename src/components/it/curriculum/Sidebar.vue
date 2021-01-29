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
import Skills from '@/components/it/curriculum/sidebar/Skills.vue'
import Education from '@/components/it/curriculum/sidebar/Education.vue'
// import Awards from '@/components/it/curriculum/sidebar/Awards.vue'
import Language from '@/components/it/curriculum/sidebar/Language.vue'
import Interests from '@/components/it/curriculum/sidebar/Interests.vue'

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
