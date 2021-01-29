<template>
  <div>
    <CurriculumHeader />
    <Curriculum />
  </div>
</template>

<script>
import CurriculumHeader from '@/components/it/layout/CurriculumHeader.vue'
import Curriculum from '@/components/it/Curriculum.vue'

export default {
  name: 'CurriculumPage',
  components: { CurriculumHeader, Curriculum }
}
</script>
