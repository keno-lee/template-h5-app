<template>
  <div class="hola-appbar">
    <div class="hola-appbar-fixed" :class="titleClassName">
      <div class="leading">
        <slot name="leading" />
      </div>
      <div :class="centerTitle ? 'position-center' : 'float-left'" class="title">
        <span>{{ title }}</span>
      </div>
      <div class="trailing">
        <slot name="trailing" />
      </div>
    </div>
  </div>
</template>

<script>
/**
 * app导航栏
 * @author KeNo
 *
 * @example <HolaAppbar />
 *
 * @param {String} [title = '']标题
 * @param {Boolean} [centerTitle = true]是否居中，安卓风格是居左
 *
 * @slot [leading] 头部
 * @slot [trailing] 尾部
 *
 * @event [cellClick] 单元格点击
 * @event [infoClick] 信息图标点击
 */
export default {
  name: 'HolaAppbar',
  props: {
    title: {
      type: String,
      default() {
        return window.document.title
      },
    },
    centerTitle: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    titleClassName() {
      return this.title === '首页' ? 'home-title' : ''
    },
  },
}
</script>
<style lang="scss">
.hola-appbar {
  width: 100%;
  height: 88px;

  .hola-appbar-fixed {
    width: 100%;
    height: 88px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    padding: 0 32px;
    background-color: #fff;

    .leading {
      height: 100%;
      float: left;
      display: flex;
      align-items: center;
    }

    .title {
      display: inline-block;
      height: 100%;

      span {
        height: 100%;
        font-size: 36px;
        color: var(--default);
        display: flex;
        align-items: center;
      }
    }

    .trailing {
      height: 100%;
      float: right;
      display: flex;
      align-items: center;
    }
  }

  .float-left {
    left: 0;
  }
}
.pitaya {
  .home-title {
    background: linear-gradient(to bottom, #253078, #232d74);
    .title {
      left: 80px;
      span {
        color: #fff !important;
        text-align: left;
      }
    }
  }
}
</style>
