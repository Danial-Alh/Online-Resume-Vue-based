<template>
  <TimelineLayout>
    <TimelineTitle slot="title" :input="itemData" :key="itemData.title.content"/>
    <div slot="time" class="timeline-time">
      {{itemData.time}}
    </div>
    <div slot="body">
      <ul>
        <li v-for="detail in itemData.details">
          <span v-if="checktype(detail, '')" v-html="detail"></span>
          <template v-else>{{detail.content}} [ <a :href="detail.link"><u>link</u></a> ]</template>
        </li>
      </ul>
    </div>
  </TimelineLayout>
</template>

<script>
import TimelineLayout from './TimelineItemLayout';
import TimelineTitle from './TimelineTitle';

// const isType = require('type-detect');


export default {
  name: 'GeneralTimelineItem',
  props: ['itemData'],
  components: {
    TimelineLayout,
    TimelineTitle,
  },
  methods: {
    checktype(obj, type) {
      return typeof obj === typeof type;
    },
  },
};
</script>

<style scoped>
ul {
   list-style-type: disc;
}
li {
    font-size: 20px;
}
</style>