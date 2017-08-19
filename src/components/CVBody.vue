<template>
  <div>
    <BIOSOP class="row"></BIOSOP>
    <div class="row">
      <RightPanel class="col-md-8 col-md-push-4"></RightPanel>
      <LeftPanel class="col-md-4 col-md-pull-8"></LeftPanel>
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
</style>


