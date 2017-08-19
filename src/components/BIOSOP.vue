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
      visible: false,
    };
  },
};
</script>

<style scoped>
#bio-sop {
  background-color: #b6bab8;
  color: #282c34;
}
</style>
