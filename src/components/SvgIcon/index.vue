<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconClassName"></use>
  </svg>
</template>
<script>
export default {
  props: ['iconClass'],
  computed: {
    iconClassName() {
      return '#' + this.iconClass;
    },
  },

  created() {
    console.log('子组件接受值', this.iconClass, this.iconClassName);
  },
};
</script>
<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
