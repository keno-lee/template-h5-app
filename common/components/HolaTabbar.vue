<template>
  <div class="hola-tabbar">
    <div class="hola-tabbar-fixed">
      <router-link v-for="(item, index) in menu" :key="index" :to="{ path: item.routePath }" class="menu-item">
        <div class="menu-item-icon" />
        <div>{{ item.title }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
/**
 * app底部tab条
 * @author KeNo
 *
 * @param {Array} [menu = []]需要展示的tab数组
 */
export default {
  name: 'HolaTabbar',
  props: {
    menu: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
<style lang="scss">
.hola-tabbar {
  width: 100%;
  height: 100px;

  .hola-tabbar-fixed {
    width: 100%;
    height: 100px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
    background-color: #fff;
    box-shadow: 0 -1px 10px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .menu-item {
      height: 100%;
      flex: 1;
      color: var(--tertiary);
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.router-link-exact-active {
        color: var(--primary);
      }

      .menu-item-icon {
        width: 48px;
        height: 48px;
        background-color: red;
        margin-bottom: 4px;
      }
    }
  }
}
</style>
