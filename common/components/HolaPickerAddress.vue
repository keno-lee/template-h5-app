<template>
  <HolaPopup :value="value" @cancel="cancel">
    <div slot="content" class="picker-address-index">
      <div class="picker-header">
        <span class="c-tertiary" @click="cancel">取消</span>
        <span class="c-primary" @click="confirm">确定</span>
      </div>
      <div v-if="value" class="picker-content">
        <div class="picker-column-line-1" />
        <div class="picker-column-line-2" />
        <HolaPickerColumn v-model="provinceSelectedIndex" :data="provinceData" label="name" @changed="provinceChanged" />
        <HolaPickerColumn v-model="citySelectedIndex" :data="cityData" label="name" @changed="cityChanged" />
        <HolaPickerColumn v-model="areaSelectedIndex" :data="areaData" label="name" />
      </div>
    </div>
  </HolaPopup>
</template>
<script>
/**
 * picker地址选择器
 * @author KeNo
 *
 */
import HolaPopup from '@common/components/HolaPopup.vue'
import HolaPickerColumn from '@common/components/HolaPickerColumn.vue'
import provinceData from '@common/constant/address.json'

export default {
  components: {
    HolaPopup,
    HolaPickerColumn,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    // 当前选中项（默认展示）
    selectedProvinceId: {
      type: Number,
      default: 1,
    },
    // 当前选中项（默认展示）
    selectedCityId: {
      type: Number,
      default: 2,
    },
    // 当前选中项（默认展示）
    selectedAreaId: {
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      provinceSelectedIndex: 0,
      citySelectedIndex: 0,
      areaSelectedIndex: 0,
    }
  },
  computed: {
    provinceData() {
      return provinceData
    },
    cityData() {
      return provinceData[this.provinceSelectedIndex].city
    },
    areaData() {
      return provinceData[this.provinceSelectedIndex].city[this.citySelectedIndex].area
    },
  },
  watch: {
    // 将默认显示的id转换成index
    selectedProvinceId: {
      handler(nv) {
        // console.log('selectedProvinceId', nv)
        this.provinceData.forEach((item, index) => {
          if (item.id === nv) {
            this.provinceSelectedIndex = index
            // console.log('选中省份index', this.provinceSelectedIndex)
          }
        })
      },
      immediate: true,
      deep: true,
    },
    selectedCityId: {
      handler(nv) {
        // console.log('selectedCityId', nv)
        this.cityData.forEach((item, index) => {
          if (item.id === nv) {
            this.citySelectedIndex = index
            // console.log('选中城市index', this.citySelectedIndex)
          }
        })
      },
      immediate: true,
      deep: true,
    },
    selectedAreaId: {
      handler(nv) {
        // console.log('selectedAreaId', nv)
        this.areaData.forEach((item, index) => {
          if (item.id === nv) {
            this.areaSelectedIndex = index
            // console.log('选中地区index', this.areaSelectedIndex)
          }
        })
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    provinceChanged() {
      // 选了省，初始化市和区的位置
      this.citySelectedIndex = 0
      this.areaSelectedIndex = 0
    },
    cityChanged() {
      this.areaSelectedIndex = 0
    },
    cancel() {
      this.$emit('cancel')
    },
    confirm() {
      let data = {
        provinceId: this.provinceData[this.provinceSelectedIndex].id,
        cityId: this.cityData[this.citySelectedIndex].id,
        areaId: this.areaData[this.areaSelectedIndex].id,
        address: this.provinceData[this.provinceSelectedIndex].name + this.cityData[this.citySelectedIndex].name + this.areaData[this.areaSelectedIndex].name,
      }
      // console.log(data)
      this.$emit('confirm', data)
    },
  },
}
</script>
<style lang="scss">
.picker-address-index {
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
    height: 240px; /* no */
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
