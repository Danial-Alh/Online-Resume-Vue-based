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
      <div>
        <b-button size="sm" variant="secondary" class="subsectionTitle" @click="changeState">
          <transition name="arrow" mode="out-in">
            <span class="material-icons subsectionIcon" v-if="displayImportantCourses" key="up-arrow">keyboard_arrow_up</span>
            <span class="material-icons subsectionIcon" v-else key="down-arrow">keyboard_arrow_down</span>
          </transition>
          <span class="">Important Courses</span>
        </b-button>
        <transition name="courses">
          <ul v-if="displayImportantCourses">
            <ImportantCourse v-for="(item, index) in courses" :course="item" :key="index" />
          </ul>
        </transition>
      </div>
    </div>
  </TimelineLayout>
</template>

<script>
import TimelineLayout from '../TimelineItemLayout';
import ImportantCourse from './ImportantCourse';
import TimelineTitle from '../TimelineTitle';

export default {
  name: 'UniversityTimelineItem',
  props: ['education'],
  components: {
    ImportantCourse,
    TimelineLayout,
    TimelineTitle,
  },
  data() {
    return {
      displayImportantCourses: false,
    };
  },
  methods: {
    changeState() {
      this.displayImportantCourses = !this.displayImportantCourses;
    },
  },
};
</script>


<style scoped>
.courses-enter-active,
.courses-leave-active {
  transition: all 0.5s ease;
  height: 440px;
  overflow: hidden;
}

.courses-enter,
.courses-leave-to {
  height: 0;
}

.arrow-enter-active,
.arrow-leave-active {
  transition: all 0.2s;
  opacity: 100%;
}

.arrow-enter,
.arrow-leave-to {
  opacity: 0;
}

.timeline-title>h4 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0;
}

.timeline-title>h4>a:active:focus:visited {
  color: rgba(0, 0, 0, 0.51);
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0;
}

.timeline-title>h4>a:hover {
  color: rgba(0, 0, 0, 0.25);
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0;
}

.timeline-title>h5 {
  font-size: 20px;
  margin-bottom: 0;
}

.subsectionTitle {
  color: #000000;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
  /* width: 100%; */
  display: flex;
  align-items: center;
  align-content: center;
}

.subsectionIcon {
  position: relative;
  text-align: center;
  font-size: 30px;
  width: 30px;
  height: 30px;
  color: #000000;
}
</style>