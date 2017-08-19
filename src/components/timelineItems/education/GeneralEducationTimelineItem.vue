<template>
  <TimelineLayout>
    <TimelineTitle slot="title" :input="education" :key="education.title.content"/>
    <div slot="time" class="timeline-time">
      {{education.time}}
    </div>
    <div slot="body">
      <p>
        {{education.field}} <br>
        GPA: <b>{{education.gpa}}</b> / {{education.gpaTotalScore}}
      </p>
    </div>
  </TimelineLayout>
</template>

<script>
import TimelineLayout from '../TimelineItemLayout';
import TimelineTitle from '../TimelineTitle';

export default {
  name: 'GeneralEducationTimelineItem',
  props: ['education'],
  components: {
    TimelineLayout,
    TimelineTitle,
  },
};
</script>

<style scoped>

</style>