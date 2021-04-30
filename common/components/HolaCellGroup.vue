<template>
  <div class="hola-cell-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HolaCellGroup',
}
</script>
<style lang="scss">
.hola-cell-group {
  border-radius: 16px;
  overflow: hidden;
  margin-top: 24px;
}
</style>
