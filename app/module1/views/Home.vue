<template>
  <div class="home">
    <p @click="$router.push('/demo')">
      查看组件示例
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.home {
  padding: 32px;
  // text-align: center;
}
</style>
