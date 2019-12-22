<template>
  <header class="flex-align-center">
    <slot name="logo"></slot>
    <slot name="nav"></slot>
    <div class="head-right">
      <slot name="login"></slot>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  header{
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 25px;
    height: $head-height;
    background: $head-bg;
    color: #fff;
    .head-right {
      flex:1;
      display: flex;
      justify-content: flex-end;
    }
  }
</style>>