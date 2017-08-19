<template>
  <div id="leftPanel" v-sticky="{ zIndex: 100, stickyTop: 0 }">
    <div class="" id="personalInf">
      <table class="table">
        <tbody class="borderless">
          <tr>
            <th>
              <i class="material-icons">email</i>
            </th>
            <td>
              <a :href="'mailto:' + identity.email">
                danial.alihosseini@gmail.com</a>
            </td>
          </tr>
          <tr>
            <th>
              <span class="material-icons">phone</span>
            </th>
            <td>{{identity.phone}}</td>
          </tr>
          <tr>
            <th>
              <span class="material-icons">place</span>
            </th>
            <td>{{identity.location}}</td>
          </tr>
          <tr>
            <th>
              <icon name="linkedin-square" class="fontawesome"></icon>
            </th>
            <td>
              <a :href="identity.linkedin">
                {{identity.linkedin}}</a>
            </td>
          </tr>
          <tr>
            <th>
              <icon name="github" class="fontawesome"></icon>
            </th>
            <td>
              <a :href="identity.github">
                {{identity.github}}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container-fluid" id="skills">
      <div class="sectionTitle">
        Programming Skills
      </div>
      <div class="container-fluid skill-div">
        <SkillComponent v-for="(item, index) in skills" :item="item" :key="item" />
      </div>
    </div>
    <div class="container-fluid" id="langs">
      <div class="sectionTitle">
        Languages
      </div>
      <ul>
        <li v-for="(language, index) in languages" :key="language.name">
          <b>{{language.name}}:</b> {{language.level}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import SkillComponent from './SkillComponent';

export default {
  name: 'LeftPanel',
  components: {
    SkillComponent,
  },
};
</script>

<style scoped>
@media (max-width: 768px) {
  #leftPanel {
    padding: 30px 30px 30px 30px;
  }
}

@media (min-width: 768px) {
  #leftPanel {
    padding: 30px 30px 30px 90px;
  }
}

#leftPanel {
  background-color: #f9f9f9;
  z-index: 8;
  /*box-shadow: 4px 0 8px 0 rgba(0, 0, 0, 0.2);*/
}

.borderless tr,
.borderless tr td,
.borderless tr th {
  border: 0 !important;
  display: flex !important;
  align-items: flex-start !important;
  text-align: start !important;
}



.material-icons,
.fontawesome {
  color: rgba(0, 0, 0, 0.51);
}

.fontawesome {
  font-size: 24px;
  width: 24px;
  height: 24px;
}

li {
  font-size: 20px;
  text-align: start;
}

.skill-div {
  display: inline-flex;
  flex-wrap: wrap;
}
</style>