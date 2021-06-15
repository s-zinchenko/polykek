<template>
  <div class="popup"  ref="popup">
    <div class="popup-form">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var vm = this;
    document.addEventListener("click", function(item) {
      if (item.path[0] ===vm.$refs.popup) vm.$emit('close');
    });
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  &-form {
    background: var(--bg-main);
  }
}
</style>
