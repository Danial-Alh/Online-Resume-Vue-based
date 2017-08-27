<template>
  <div v-if="visible" id="bio-sop">
    {{bio}}
  </div>
</template>


<script>
export default {
  name: 'BIOSOP',
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style scoped>
#bio-sop {
  font-size: 4ex;
  margin: 0 1em 0 10%;
}
</style>
