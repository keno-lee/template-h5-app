<template>
  <div class="hola-tabview">
    <div class="title-viewport">
      <!-- 可以滚动的 -->
      <div :style="titlesStyle" class="titles-set-wrap">
        <!-- 标题集合 -->
        <div ref="titles" class="titles-set">
          <slot name="title" :titles="titles">
            <!-- 超过3个就可以滚动 -->
            <template v-if="titles.length > 3">
              <div v-for="(item, index) in titles" :key="index" ref="title" class="tabview-title" @click="click(index)">
                {{ item }}
              </div>
            </template>
            <!-- 小于3个就平分 -->
            <template v-else>
              <div
                v-for="(item, index) in titles"
                :key="index"
                ref="title"
                :style="`width:${100 / titles.length}%; text-align:center`"
                class="tabview-title"
                @click="click(index)"
              >
                {{ item }}
              </div>
            </template>
          </slot>
        </div>
        <!-- 标题滑块 -->
        <div :style="sliderStyle" class="titles-slider" />
      </div>
      <!-- 小阴影，用来指示用户点击后面 -->
      <transition name="transition-fade">
        <div v-if="titles.length > 3 && value !== titles.length - 1" class="tabview-indicator" />
      </transition>
    </div>
    <div ref="content" :style="contentsStyle" class="tabview-content-wrap">
      <slot />
    </div>
  </div>
</template>

<script>
/**
 * 标签栏 - 需要配合使用HolaTabviewItem
 * @author KeNo
 *
 * @param {Number} [value = 0]激活的索引
 * @param {Array} [titles = []]标题集合
 */
export default {
  name: 'HolaTabview',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      transition: 300,
      // tabveiw的个数
      titlesLength: 0,
      // 可视区域的宽度 === tabveiw内容宽度
      viewWidth: 0,

      itemTransformArr: [],
      titleTransformArr: [],
      opacity: 0,
    }
  },
  computed: {
    titlesStyle() {
      // 只有大于3个的情况需要滚动整个标题栏
      return this.titlesLength > 3
        ? {
          transition: `${this.transition}ms`,
          transform: `translate3d(${this.titleTransformArr[this.value]}px, 0, 0)`,
        }
        : {}
    },
    sliderStyle() {
      return {
        transition: `${this.transition}ms`,
        opacity: this.opacity,
        transform: `translate3d(${this.itemTransformArr[this.value]}px, 0, 0)`,
      }
    },
    contentsStyle() {
      return {
        transition: `${this.transition}ms`,
        transform: `translate3d(${-1 * this.value * 100}%, 0, 0)`,
      }
    },
  },
  mounted() {
    // 解决安卓手机(仅在初次打开webview时)无法获取数量和宽度的问题。延迟200ms获取
    setTimeout(() => {
      const silderWidth = 40
      this.viewWidth = this.$refs.titles.offsetWidth // 可视区域的宽度
      this.titlesLength = this.titles.length

      // 进入页面后将各个item的宽度保存起来
      let itemWidthArr = []
      let itemOffsetLeftArr = []
      let leftTmp = 0

      Array.from(this.$refs.titles.children).forEach((item) => {
        itemWidthArr.push(item.offsetWidth)
        itemOffsetLeftArr.push(leftTmp)
        leftTmp += item.offsetWidth
      })
      // console.log(itemWidthArr) // [134, 98, 116, 98, 98]
      // console.log(itemOffsetLeftArr) // [0, 134, 232, 348, 446]
      // 计算出每个距离左边的位置
      // 计算出大盒子距离左边的位置
      itemWidthArr.forEach((item, index) => {
        let dist = (item - silderWidth) / 2 + itemOffsetLeftArr[index]
        this.itemTransformArr.push(dist)
      })
      const titlesWidth = itemWidthArr[itemWidthArr.length - 1] + itemOffsetLeftArr[itemOffsetLeftArr.length - 1]
      // const titlesWidth = this.$refs.titles.offsetWidth
      this.itemTransformArr.forEach((item) => {
        // [47, 163, 270, 377, 475]
        let dist = item - (this.viewWidth - silderWidth) / 2
        dist = dist <= 0 ? 0 : dist
        dist = dist >= titlesWidth - this.viewWidth ? titlesWidth - this.viewWidth : dist
        this.titleTransformArr.push(-dist)
      })

      // console.log(this.itemTransformArr) // [47, 29, 38, 29, 29] => [47, 163, 270, 377, 475, __ob__: Observer]
      // console.log(this.titleTransformArr) // [-104.5, 11.5, 118.5, 225.5, 323.5]

      // 为了解决滑块位置闪现的问题，先隐藏，计算好位置后再显示
      this.opacity = 1
    }, 200)
  },
  methods: {
    click(index) {
      this.$emit('input', index)
    },
  },
}
</script>
<style lang="scss">
.hola-tabview {
  width: 100%;
  overflow: hidden;

  .title-viewport {
    position: relative;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    // 可以滚动的 2.0再做
    // overflow: auto;

    .titles-set-wrap {
      position: relative;
      white-space: nowrap;
      .titles-set {
        .tabview-title {
          display: inline-block;
          padding: 16px 32px;
          font-size: 36px;
        }
      }

      .titles-slider {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 40px; /* no */
        height: 4px; /* no */
        border-radius: 2px; /* no */
        background-color: #12B7F5;
        background-color: var(--primary);
      }
    }

    .tabview-indicator {
      position: absolute;
      top: 50%;
      right: -40px; /* no */
      width: 40px; /* no */
      height: 40px; /* no */
      transform: translateY(-50%);
      box-shadow: -10px 0 20px rgba(0, 0, 0, 0.15); /* no */
    }
  }

  .tabview-content-wrap {
    white-space: nowrap;
    // 去除水平+垂直间隙
    font-size: 0;
    width: 100%;
  }
}
</style>
