<template>
  <HolaCell :border="border" :hasInfo="hasInfo" :subtitle="subtitle" :title="title" @infoClick="infoClick">
    <div slot="value" class="hola-cell-input">
      <input
        :maxlength="maxlength"
        :placeholder="placeholder"
        :readonly="readonly"
        :style="{ textAlign: alignment }"
        :type="type"
        :value="value"
        class
        @input="input"
      >
    </div>

    <slot slot="leading" name="leading" />

    <slot slot="trailing" name="trailing" />

    <slot slot="extend" name="extend" />
  </HolaCell>
</template>

<script>
/**
 * 单元格输入框
 * @author KeNo
 *
 * @example <HolaCellInput v-model="name"></HolaCellInput>
 *
 * @param {String} [value = '']双向绑定数据
 * @param {String} [title = '']单元格标题
 * @param {String} [subtitle = '']单元格副标题
 * @param {String} [placeholder = '']单位文本
 * @param {Boolean} [hasInfo = false]是否有信息icon
 * @param {String} [type = 'text']input类型
 * @param {Boolean} [maxlength = false]input最大长度
 * @param {String} [alignment = 'right']input文本布局
 * @param {Boolean} [readonly = false]input只读
 * @param {Boolean} [border = false]是否有底边框
 *
 * @slot [trailing] 尾部
 * @slot [extend] 扩展
 *
 * @event [infoClick] 信息图标点击
 */
import HolaCell from '@common/components/HolaCell.vue'

export default {
  name: 'HolaCellInput',
  components: {
    HolaCell,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
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
    // 占位文本
    placeholder: {
      type: String,
      default: '',
    },
    hasInfo: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    maxlength: {
      type: Number,
      default: 1000,
    },
    alignment: {
      type: String,
      default: 'right',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    input(e) {
      // console.log(e.target.value)
      this.$emit('input', e.target.value)
    },
    infoClick() {
      this.$emit('infoClick')
    },
  },
}
</script>
<style lang="scss">
.hola-cell-input {
  height: 44px;
  flex: 1;

  input {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 30px;
    text-align: right;
    color: var(--secondary);
  }
}
</style>
