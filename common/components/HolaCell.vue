<template>
  <div v-preventReClick class="hola-cell" @click="cellClick">
    <div :class="border ? 'border': ''" class="cell-main">
      <!-- 标题左边的icon -->
      <slot name="leading" />

      <!-- 中间内容部分 -->
      <div class="cell-content">
        <div v-if="title" class="title-wrap">
          <slot name="title">
            <div class="title-all">
              <div class="title">
                {{ title }}
              </div>
              <div v-if="subtitle" class="subtitle">
                {{ subtitle }}
              </div>
            </div>
          </slot>
          <span v-if="hasInfo" v-preventReClick class="icon iconfont info" @click.stop="infoClick">&#xe688;</span>
        </div>

        <slot name="value">
          <!-- 值超出隐藏 -->
          <div :class="value || 'disabled'" class="value text-hide tar">
            {{ value || placeholder }}
          </div>
        </slot>
      </div>

      <!-- value右边的icon -->
      <slot name="trailing">
        <div v-if="isLink" class="trailing">
          <!-- TODO 这个右箭头用的是项目的 -->
          <span class="icon iconfont">&#xe67e;</span>
        </div>
      </slot>
    </div>
    <slot name="extend" />
  </div>
</template>

<script>
/**
 * 单元格
 * @author KeNo
 *
 * @example <HolaCell title="标准cell" value="内容" />
 *
 * @param {String} [title = '']单元格标题
 * @param {String} [subtitle = '']单元格副标题
 * @param {String} [value = '']双向绑定数据
 * @param {String} [placeholder = '']单位文本
 * @param {Boolean} [hasInfo = false]是否有信息icon
 * @param {Boolean} [isLink = false]是否可以点击（且有右箭头）
 * @param {Boolean} [border = false]是否有底边框
 *
 * @slot [leading] 头部
 * @slot [trailing] 尾部
 * @slot [extend] 扩展
 *
 * @event [cellClick] 单元格点击
 * @event [infoClick] 信息图标点击
 */
export default {
  name: 'HolaCell',
  props: {
    // 主标题
    title: {
      type: String,
      default: '',
    },
    // 副标题
    subtitle: {
      type: String,
      default: '',
    },
    // 值
    value: {
      type: [String, Number],
      default: '',
    },
    // value为空时占位文本
    placeholder: {
      type: String,
      default: '',
    },
    // 有否是可点击的
    isLink: {
      type: Boolean,
      default: false,
    },
    hasInfo: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    cellClick() {
      this.$emit('cellClick')
    },
    infoClick() {
      this.$emit('infoClick')
    },
  },
}
</script>
<style lang="scss">
.hola-cell {
  width: 100%;
  // height: 110px;
  background: #fff;
  font-size: 30px;
  color: var(--default);
  padding: 0 32px;

  .cell-main {
    width: 100%;
    // height: 100%;
    padding: 32px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .cell-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex: 1;

      .title-wrap {
        // 保证右侧有一定的间距
        margin-right: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .title-all {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;

          // 主标题
          .title {
            font-weight: 600;
            height: 44px;
          }
          // 副标题
          .subtitle {
            font-size: 22px;
            color: var(--tertiary);
          }
        }

        // 信息icon
        .info.iconfont {
          font-size: 30px;
          color: var(--primary);
          margin-left: 12px;
        }
      }
    }

    &.border {
      border-bottom: 1px solid var(--border); /* no */
    }

    // 值内容
    .value {
      flex: 1;
      color: var(--secondary);
      &.disabled {
        color: var(--disabled);
      }
    }

    .trailing {
      width: 44px;
      height: 44px;
      margin-left: 12px;

      .iconfont {
        font-size: 44px;
        color: var(--tab);
      }
    }
  }
}
</style>
