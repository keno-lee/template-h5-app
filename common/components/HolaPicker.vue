<template>
  <HolaPopup :value="value" @cancel="cancel">
    <div slot="content" class="hola-picker">
      <div class="picker-header">
        <span class="c-tertiary" @click.stop="cancel">取消</span>
        <span class="c-primary" @click.stop="confirm">确定</span>
      </div>
      <div class="picker-content">
        <div class="picker-column-line-1" />
        <div class="picker-column-line-2" />
        <HolaPickerColumn v-model="selectedIndex" :data="data" :label="label" />
      </div>
    </div>
  </HolaPopup>
</template>
<script>
/**
 * picker选择器 - 配合pickerItem使用
 * @author KeNo
 *
 */
import HolaPickerColumn from '@common/components/HolaPickerColumn.vue'
import HolaPopup from '@common/components/HolaPopup.vue'

export default {
  components: {
    HolaPickerColumn,
    HolaPopup,
  },
  props: {
    // 显示
    value: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default() {
        return []
      },
    },
    // 当前选中项（默认展示），如果不需要要么不传，要么传负值
    selectedId: {
      type: Number,
      default: -1,
    },
    // 需要展示的数据
    label: {
      type: String,
      default: 'label',
    },
  },
  data() {
    return {
      selectedIndex: 0,
    }
  },
  watch: {
    selectedId: {
      handler(nv) {
        if (this.selectedId < 0) {
          this.selectedIndex = 0
          return
        }
        // console.log('selectedId', nv)
        this.data.forEach((item, index) => {
          if (item.value === nv) {
            this.selectedIndex = index
            // console.log('选中index', this.selectedIndex)
          }
        })
      },
      immediate: true,
    },
  },
  methods: {
    cancel() {
      this.$emit('input', false)
      this.$emit('cancel')
    },
    confirm() {
      const { value } = this.data[this.selectedIndex]
      this.$emit('confirm', value)
    },
  },
}
</script>
<style lang="scss">
.hola-picker {
  user-select: none;
  .picker-header {
    width: 100%;
    height: 48px; /* no */
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    font-size: 30px;
  }
  .picker-content {
    width: 100%;
    height: 5 * 48px; /* no */
    display: flex;
    overflow: hidden;
    position: relative;

    .picker-column-line-1 {
      width: 100%;
      height: 1px; /* no */
      background: var(--disabled);
      position: absolute;
      left: 0;
      top: 2 * 48px; /* no */
      z-index: 2;
    }

    .picker-column-line-2 {
      width: 100%;
      height: 1px; /* no */
      background: var(--disabled);
      position: absolute;
      left: 0;
      top: 3 * 48px; /* no */
      z-index: 2;
    }
  }
}
</style>
