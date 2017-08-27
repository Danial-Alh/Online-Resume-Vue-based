<template>
  <div>
    <div id="rightPanel" :style="{margin: this.$store.state.smallScreen ? '1em 1em 1em 1em' : '2% 5% 1em 0'}">
      <div class="sectionTitle" id="bio">
        <span class="material-icons sectionIcon">access_time</span>
        <span class="titleName">I'm ...</span>
      </div>
      <BIOSOP class="row"></BIOSOP>
      <div class="sectionTitle" id="education">
        <span class="material-icons sectionIcon">school</span>
        <span class="titleName">Education</span>
      </div>
      <ul class="timeline">
        <div v-for="(education, index) in educations" :education="education" :key="index"
             :is="education.layout"></div>
      </ul>
      <div class="sectionTitle" id="interests">
        <span class="material-icons sectionIcon">add</span>
        <span class="titleName">Interests</span>
      </div>
      <h3>Machine Learning</h3>
      <h3>Data Science</h3>
      <h3>Robotics</h3>
      <h3>Programming Languages</h3>
      <div class="sectionTitle" id="experiences">
        <span class="material-icons sectionIcon">code</span>
        <span class="titleName">Experience</span>
      </div>
      <ul class="timeline">
        <li>
          <div v-for="(experience, index) in experiences" :itemData="experience" :key="index"
               :is="experience.layout"></div>
        </li>
      </ul>
      <div class="sectionTitle" id="honors">
        <span class="material-icons sectionIcon">beenhere</span>
        <span class="titleName">Honors & Awards</span>
      </div>
      <ul class="timeline">
        <li>
          <div v-for="(honor, index) in honors" :itemData="honor" :key="index" :is="honor.layout"></div>
        </li>
      </ul>
      <div class="sectionTitle" id="skills">
        <span class="material-icons sectionIcon">build</span>
        <span class="titleName">Skills</span>
      </div>
      <div class="skill-div">
        <SkillComponent v-for="(item, index) in skills" :item="item" :key="index"></SkillComponent>
      </div>
      <div class="sectionTitle">
        <span class="material-icons sectionIcon">language</span>
        <span class="titleName">Languages</span>
      </div>
      <ul>
        <li v-for="(language, index) in languages" :key="language.name">
          <b>{{language.name}}:</b> {{language.level}}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  import SkillComponent from './SkillComponent';
  import BIOSOP from './BIOSOP';

  export default {
    name: 'RightPanel',
    components: {
      BIOSOP,
      SkillComponent,
    },
  };
</script>
<style scoped>
  #rightPanel {
    /* background-color: #efefef; */
    padding: 5% 5% 5% 5%;
    background-color: #ffffff;
    color: rgba(0, 0, 0, 0.81);
    border-radius: 5px;
  }

  /************************timeline**********************/

  .filledCircle {
    width: 10px;
    height: 10px;
    background-color: #299bc0;
    border: none;
    border-radius: 50%;
  }

  .timeline {
    position: relative;
    list-style: none;
    padding: 0;
    color: rgba(0, 0, 0, 0.67) !important;
  }

  .timeline-badge {
    position: absolute;
    top: 10px;
    left: var(--sectionTitleOffset);
    background-color: rgb(124, 208, 217);
    border: solid 1px #29b2d7;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    border-radius: 50%;
    padding: 6px;
    margin-left: -11px;
  }

  .sectionIcon {
    position: relative;
    text-align: center;
    font-size: 50px;
    width: 50px;
    height: 50px;
    color: var(--baseColor);
  }

  .titleName {
    position: relative;
    left: 4%;
  }

  h3 {
    left: 10%;
  }

  .content,
  .sidebar {
    padding: 0;
  }

  .skill-div {
    display: inline-flex;
    flex-wrap: wrap;
    padding-right: 20%;
  }

  li {
    font-size: 20px;
    text-align: start;
  }
</style>
