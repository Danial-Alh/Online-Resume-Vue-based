<template>
  <div class="row" id="title">
    <span class="col-md-5 col-md-offset-1 col-xs-6" id="titleName">{{identity.name}}</span>
    <span class="col-md-3 col-md-offset-3 col-xs-6" id="titlePicture">
      <img src="../assets/upic.jpg" class="img-square img-responsive">
    </span>
  </div>
</template>

<script>
export default {
  name: 'CVHeading',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
  /* padding: 20px 20px; */
  background-color: var(--baseColor);
  display: flex;
  align-items: center;
  margin: 3%;
  margin-bottom: 0px;
  border-radius: 5px;
  overflow: hidden;
  /*box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);*/
  z-index: 10;
}

#titleName {
  margin-bottom: 0;
  color: #f1f1f2;
}

@media (max-width: 768px) {
  #titleName {
    font-size: 30px;
  }
}

@media (min-width: 768px) {
  #titleName {
    font-size: 55px;
  }
}

#titlePicture {
  transform: scaleX(-1);
  padding-left: 0px;
}

#titlePicture>img {
  ;
  /* border-radius: 5px; */
}
</style>
