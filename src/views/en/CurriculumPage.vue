<template>
  <div>
    <CurriculumHeader />
    <Curriculum />
  </div>
</template>

<script>
import CurriculumHeader from '@/components/en/layout/CurriculumHeader.vue'
import Curriculum from '@/components/en/Curriculum.vue'

export default {
  name: 'CurriculumPage',
  components: { CurriculumHeader, Curriculum }
}
</script>
