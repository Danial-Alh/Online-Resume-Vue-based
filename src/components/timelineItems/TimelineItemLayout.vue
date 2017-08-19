<template>
  <li>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <slot name="title"/>
        <slot name="time"/>
      </div>
      <slot name="body"/>
    </div>
  </li>
</template>

<script>
export default {
  name: 'TimelineLayout',
};
</script>

<style scoped>
.timeline-panel {
  position: relative;
  font-size: 18px;
  width: 90%;
  /*left: calc(var(--sectionTitleOffset) + 5%);*/
  left: 10%;
  border-bottom: dotted 2px rgba(145, 145, 145, 0.28);
}

.timeline-heading {
  display: inline-flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 10px;
}

.timeline-title {
  display: block;
  text-align: left;
}

.timeline-time {
  font-size: 18px;
  font-weight: bold;
  text-align: right;
}

.sectionTitle {
  color: var(--baseColor);
  font-size: 50px;
  margin-top: 30px;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
}
</style>
