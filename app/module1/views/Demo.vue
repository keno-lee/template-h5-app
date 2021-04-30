<template>
  <div class="home">
    <HolaNoticeBar text="大家好我是vue~这是我即将发表的首张独创专辑自定义，里面的一首推荐曲目" />

    <div class="title">
      单元格/单元格输入
    </div>
    <HolaCellGroup>
      <HolaCell title="标准cell" value="内容" />
      <HolaCell isLink title="带箭头的cell" value="内容" />
      <HolaCell hasInfo title="带info图标的cell" value="内容" @infoClick="$toast.open({ type: 'tip', hint: 'info点击' })" />
      <HolaCell subtitle="副标题" title="主标题" value="内容" />
      <HolaCell border subtitle="带底边框" title="主标题" value="内容" />
      <HolaCell subtitle="副标题" title="主标题" value="内容">
        <div slot="extend">
          extend部分
        </div>
      </HolaCell>
      <HolaCellInput v-model="inputvalue" placeholder="请输入" subtitle="副标题" title="input输入" />
      <HolaCellInput v-model="inputvalue" placeholder="请输入" readonly subtitle="副标题" title="input禁用" />
      <HolaCellInput v-model="inputvalue" :maxlength="11" alignment="left" placeholder="请输入" type="tel" />
    </HolaCellGroup>

    <br>

    <div class="title">
      轮播图
    </div>
    <HolaSwiper>
      <HolaSwiperItem>
        <div class="swiper-box">
          11
        </div>
      </HolaSwiperItem>
      <HolaSwiperItem>
        <div class="swiper-box">
          22
        </div>
      </HolaSwiperItem>
      <HolaSwiperItem>
        <div class="swiper-box">
          33
        </div>
      </HolaSwiperItem>
    </HolaSwiper>
    <br>

    <div class="title">
      agreement组件
    </div>
    <HolaAgreement v-model="agreementChecked">
      <span class="c-primary">《xxx协议》</span>
      <span class="c-primary">《xxx协议》</span>
      <span class="c-primary">《xxx协议》</span>
      <span class="c-primary">《xxx协议》</span>
    </HolaAgreement>

    <br>
    <div class="title">
      tabview组件
    </div>

    <div class="title">
      自定义title
    </div>
    <HolaTabview v-model="activeIndex" :titles="['手机', '汽车']">
      <template #title="slotProps">
        <div class="design-tabview-title" @click="activeIndex = 0">
          {{ slotProps.titles[0] }}
        </div>
        <div class="design-tabview-title" @click="activeIndex = 1">
          {{ slotProps.titles[1] }}
        </div>
      </template>
      <HolaTabviewItem>
        <div class="tabview-box">
          内容1
        </div>
      </HolaTabviewItem>
      <HolaTabviewItem>
        <div class="tabview-box">
          内容2
        </div>
      </HolaTabviewItem>
      <HolaTabviewItem>
        <div class="tabview-box">
          内容3
        </div>
      </HolaTabviewItem>
    </HolaTabview>

    <div class="title">
      标准title
    </div>
    <HolaTabview v-model="activeIndex2" :titles="['手机', '汽车', '二次元']">
      <HolaTabviewItem>
        <div class="tabview-box">
          手机
        </div>
      </HolaTabviewItem>
      <HolaTabviewItem>
        <div class="tabview-box">
          汽车
        </div>
      </HolaTabviewItem>
      <HolaTabviewItem>
        <div class="tabview-box">
          二次元
        </div>
      </HolaTabviewItem>
    </HolaTabview>

    <div class="title">
      超过3个自动滚动
    </div>
    <HolaTabview v-model="activeIndex3" :titles="['时政新闻', '关注', '淘金者', '军事', '体育', 'dota2']">
      <HolaTabviewItem>
        <div class="tabview-box">
          时政新闻
        </div>
      </HolaTabviewItem>
      <HolaTabviewItem>
        <div class="tabview-box">
          关注
        </div>
      </HolaTabviewItem>
      <HolaTabviewItem>
        <div class="tabview-box">
          淘金者
        </div>
      </HolaTabviewItem>
      <HolaTabviewItem>
        <div class="tabview-box">
          军事
        </div>
      </HolaTabviewItem>
      <HolaTabviewItem>
        <div class="tabview-box">
          体育
        </div>
      </HolaTabviewItem>
      <HolaTabviewItem>
        <div class="tabview-box">
          dota2
        </div>
      </HolaTabviewItem>
    </HolaTabview>

    <br>
    <div class="title">
      switch组件
    </div>
    <HolaSwitch v-model="switchChecked1" />
    <HolaSwitch v-model="switchChecked2" :disabled="true" />

    <br>
    <div class="title">
      WarmPrompt组件
    </div>
    <HolaWarmPrompt :content="['1.修改手机号后原来手机号将不能在此平台进行注册、 登录', '2.重新绑定会将原来信息同步到当前手机号']" title="温馨提示：" />

    <br>
    <div class="title">
      button组件
    </div>
    <HolaButton text="按钮禁用" />
    <HolaButton :active="true" text="按钮激活" />

    <HolaButton :active="true" text="Toast" @click="toast" />
    <HolaButton :active="true" text="Message" @click="message" />
    <HolaButton :active="true" text="loading-circular" @click="loading(1)" />
    <HolaButton :active="true" text="loading-bubble" @click="loading(2)" />
    <HolaButton :active="true" text="loading-spinner" @click="loading(3)" />

    <HolaButton :active="true" text="dialog对话框" @click="dialogVisible = true" />
    <HolaDialog v-model="dialogVisible" @close="dialogVisible = false" />

    <HolaButton :active="true" text="Alert对话框" @click="alertVisible = true" />
    <HolaAlert v-model="alertVisible" :hasClose="true" @btnClick="alertVisible = false" @close="alertVisible = false" />

    <HolaButton :active="true" text="popup弹出层" @click="popupVisible = true" />
    <HolaPopup v-model="popupVisible" @cancel="popupVisible = false" />
    <HolaButton :active="true" text="pikcer选择器" @click="pickerVisible = true" />
    <HolaPicker v-model="pickerVisible" :data="pickerData" @confirm="pickerVisible = false" />

    <HolaButton :active="true" text="问卷调查" @click="questionare.show = true" />
  </div>
</template>

<script>
import HolaCell from '@common/components/HolaCell.vue'
import HolaCellInput from '@common/components/HolaCellInput.vue'
import HolaSwitch from '@common/components/HolaSwitch.vue'
import HolaTabview from '@common/components/HolaTabview.vue'
import HolaTabviewItem from '@common/components/HolaTabviewItem.vue'
import HolaAlert from '@common/components/HolaAlert.vue'
import HolaDialog from '@common/components/HolaDialog.vue'
import HolaButton from '@common/components/HolaButton.vue'
import HolaPicker from '@common/components/HolaPicker.vue'
import HolaCellGroup from '@common/components/HolaCellGroup.vue'
import HolaPopup from '@common/components/HolaPopup.vue'
import HolaSwiper from '@common/components/HolaSwiper.vue'
import HolaSwiperItem from '@common/components/HolaSwiperItem.vue'
import HolaAgreement from '@common/components/HolaAgreement.vue'
import HolaNoticeBar from '@common/components/HolaNoticeBar.vue'
import HolaWarmPrompt from '@common/components/HolaWarmPrompt.vue'

export default {
  name: 'Ui',
  components: {
    HolaButton,
    HolaCell,
    HolaSwitch,
    HolaTabview,
    HolaTabviewItem,
    HolaCellInput,
    HolaAlert,
    HolaDialog,
    HolaPicker,
    HolaCellGroup,
    HolaPopup,
    HolaSwiper,
    HolaSwiperItem,
    HolaAgreement,
    HolaNoticeBar,
    HolaWarmPrompt,
  },
  data() {
    return {
      activeIndex: 0,
      activeIndex2: 0,
      activeIndex3: 0,
      dialogVisible: false,
      alertVisible: false,
      inputvalue: '',
      pickerVisible: false,
      agreementChecked: true,
      switchChecked1: true,
      switchChecked2: true,
      pickerData: [
        { key: 1, value: '示例1' },
        { key: 2, value: '示例2' },
      ],
      popupVisible: false,
      questionare: {
        show: false,
        titles: ['身份证不在身边?', '设置提醒，稍后上传'],
        options: [
          { id: 'A', value: '1小时候后提醒我' },
          { id: 'B', value: '6小时候后提醒我' },
          { id: 'C', value: '12小时候后提醒我' },
        ],
        answer: [],
      },
    }
  },
  methods: {
    async toast() {
      await this.$toast.open({ type: 'success', hint: 'suceess' })
    },
    message() {
      this.$message.open({
        btn: ['取消', '确认'],
        hasInput: true,
        hasCountDown: true,
      })
    },
    loading(index) {
      if (index === 1) this.$loading.open({ type: 'circular', shadowClose: true })
      else if (index === 2) this.$loading.open({ type: 'bubble', shadowClose: true })
      else if (index === 3) this.$loading.open({ type: 'spinner', shadowClose: true })
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding: 32px;

  .hola-button {
    margin-top: 32px;
  }

  .swiper-box {
    height: 200px;
    background-color: palevioletred;

    &::nth-child(2) {
      background-color: yellowgreen;
    }
    &::nth-child(3) {
      background-color: cyan;
    }
  }

  .design-tabview-title {
    display: inline-block;
    width: 50%;
    height: 110px;
    line-height: 110px;
    text-align: center;
    font-size: 30px;
  }

  .title {
    height: 40px; /* no */
    line-height: 40px; /* no */
  }
  .tabview-box {
    height: 200px;
    background-color: cyan;
  }
}
</style>
