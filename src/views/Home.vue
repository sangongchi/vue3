<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <svg-icon iconClass="icon-Info" class="icon"></svg-icon>
    <input v-model="inputValue" v-limitInput />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  data() {
    return {
      inputValue: '',
    };
  },
};
</script>
<style lang="scss" scoped>
.icon {
  color: red;
  font-size: 50px;
}
</style>
