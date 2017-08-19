<template>
  <div>
    <BIOSOP class="row"></BIOSOP>
    <div class="row">
      <RightPanel class="col-md-7 col-md-push-5"></RightPanel>
      <LeftPanel class="col-md-5 col-md-pull-7"></LeftPanel>
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


