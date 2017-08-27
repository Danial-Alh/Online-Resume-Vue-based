<template>
  <div>
    <!--<BIOSOP class="row"></BIOSOP>-->
    <div class="row">
      <div id="sticky" v-sticky="{ zIndex: 10, stickyTop: 0 }" class="col-lg-4 col-md-12" v-if="!(this.$store.state.smallScreen)">
        <LeftPanel></LeftPanel>
      </div>
      <div id="sticky" class="col-lg-4 col-md-12" style="position: static" v-else>
        <LeftPanel></LeftPanel>
      </div>
      <RightPanel class="col-lg-8 col-md-12"></RightPanel>
    </div>
  </div>
</template>


<script>
  import BIOSOP from './BIOSOP';
  import LeftPanel from './LeftPanel';
  import RightPanel from './RightPanel';

  export default {
    name: 'CVBody',
    components:
    {
      BIOSOP,
      LeftPanel,
      RightPanel,
    },
  };
</script>

<style scoped>
  #sticky {
    height: 100%;
  }
</style>


