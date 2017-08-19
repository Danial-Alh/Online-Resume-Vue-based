<template>
  <li>
    <div>
      <span>{{course.name}}</span>
      <span>...............................................................</span>
      <span>{{course.score}}</span>
    </div>
  </li>
</template>


<script>
export default {
  props: ['course'],
};
</script>

<style scoped>
div>span:nth-child(1) {
  font-weight: bold;
  margin-right: 10px;
  width: 500px;
}

div>span:nth-child(2) {
  overflow: hidden;
  flex-grow: 1;
}

div>span:nth-child(3) {
  margin-left: 10px;
  width: 80px;
  text-align: right;
}

div {
  font-size: 20px;
  display: inline-flex;
  width: 100%;
  align-items: flex-end;
}
</style>
