<template>
  <div id="app" class="container-fluid">
    <CVHeading></CVHeading>
    <CVBody></CVBody>
  </div>
</template>

<script>
import CVHeading from './components/CVHeading';
import CVBody from './components/CVBody';

export default {
  name: 'app',
  components: {
    CVHeading,
    CVBody,
  },
};
</script>

<style>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
@font-face {
  font-family: "ColaborateLight";
  src: url("./assets/fonts/ColabLig.otf") format("opentype");
}

#app {
  font-family: "ColaborateLight", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  position: relative;
  text-align: left;
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

.sectionIcon {
  position: relative;
  text-align: center;
  font-size: 50px;
  width: 50px;
  height: 50px;
  color: var(--baseColor);
}

.table {
  font-size: 20px;
  color: rgba(0, 0, 0, 0.81);
  word-break: break-all;
}

a,
a:visited,
a:focus {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.81);
}

a:hover {
  text-decoration: none;
  color: rgba(21, 88, 107, 0.81);
}

:root {
  --sectionTitleOffset: 10%;
  --baseColor: #2b689c;
}

.statcounter {
  visibility: hidden;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
