<template>
  <div id="leftPanel" :style="{margin: (this.$store.state.smallScreen ? '1em 1em 1em 1em' : '4.5% 0% 1em 10%')}">
    <div class="row" id="heading">
      <div class="row" id="titlePicture">
        <img src="../assets/upic.jpg" class="img-square img-responsive">
      </div>
      <span class="row" id="titleName">{{identity.name}}</span>
    </div>
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
  </div>
</template>

<script>
  export default {
    name: 'LeftPanel',
  };
</script>

<style scoped>

  #leftPanel {
    background-color: #f9f9f9;
    /* z-index: 8; */
    border-radius: 5px;
    /*box-shadow: 4px 0 8px 0 rgba(0, 0, 0, 0.2);*/
    padding: 5% 5% 5% 5%;
    margin: 4.5% 0% 1em 10%;
  }

  #heading {
    /*background-color: var(--baseColor);*/
    border-radius: 10px;
    /*border: dashed rgba(57,144,210,0.6) 3px;*/
    margin: 1em;
  }

  #titleName {
    color: var(--baseColor);
    text-align: center;
    width: 100%;
    font-size: 55px;
  }

  #titlePicture {
    /*transform: scaleX(-1);*/
    /*padding-left: 0px;*/

    padding: 2em;
  }

  #titlePicture > img {;
    border-radius: 50%;
    border: rgba(57, 144, 210, 0.6) solid 3px;
    width: 100%;
    height: 100%;
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

</style>
