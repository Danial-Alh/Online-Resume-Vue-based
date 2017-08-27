<template>
  <!-- <div class="skill row">
      <div class="skillName col-xs-2">{{item.skill_name}}</div>
      <div class="skillBar col-xs-10">
        <div class="progress">
          <div class="progress-bar" role="progressbar" v-bind:aria-valuenow="item.skill_level" aria-valuemin="0" aria-valuemax="100" v-bind:style="{width:item.skill_level+'%'}">
            <span class="sr-only">{{item.skill_level}}% Complete</span>
          </div>
        </div>
      </div>
    </div> -->
  <div class="skill">
    <span class="skillName">{{item.name}}</span>
    <div class="level" :style="{height:'8%', width: item.level+'%'}"></div>
  </div>
</template>


<script>
  export default {
    name: 'SkillComponent',
    props: ['item'],
  };
</script>

<style scoped>
  .progress {
    height: 2px;
    margin: 0;
  }

  .skill {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-left: 1em;
    background-color: #efefef;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    /*border-radius: 10px 10px 0 0;*/
    overflow-wrap: break-word;
    overflow: hidden;
  }

  .level {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(57, 144, 210, 0.6);
    z-index: 0;
  }

  .skillName {
    display: flex;
    mix-blend-mode: multiply;
    color: #575a5c;
    z-index: 1;
  }
</style>
