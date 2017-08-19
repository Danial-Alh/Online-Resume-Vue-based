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
    {{item}}
  </div>
</template>


<script>
export default {
  name: 'skillComponent',
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
  margin-left: 10px;
  background-color: #efefef;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  overflow-wrap: break-word;
}

.skillName {
  display: flex;
  width: 25%;
  padding: 0;
}
</style>
