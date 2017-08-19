<template>
  <div class="timeline-title">
    <h4  v-if="input.title.link != ''">
      <a :href="input.title.link" v-html="input.title.content"/>
    </h4>
    <h4  v-else v-html="input.title.content"/>
    <template v-if="input.title2 != ''">
      <h5  v-if="input.title2.link != ''">
        <a :href="input.title2.link" v-html="input.title2.content"/>
      </h5>
      <h5  v-else v-html="input.title2.content"/>
    </template>
  </div>
</template>

<script>
export default {
  name: 'EducationTitle',
  props: ['input'],
};
</script>

<style scoped>
.timeline-title>h4 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0;
}

.timeline-title>h4>a:active:focus:visited, .timeline-title>h4>a:hover {
  color: rgba(0, 0, 0, 0.51);
}

.timeline-title>h4>a:hover, .timeline-title>h5>a:hover {
  color: rgba(0, 0, 0, 0.25);
}

.timeline-title>h5 {
  font-size: 20px;
  margin-bottom: 0;
}
</style>