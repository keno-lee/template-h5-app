<template>
  <transition name="transition-fade">
    <div v-show="visible" id="hola-toast" :class="[index, className]">
      <div v-if="type === 'tip'" class="toast-tip">
        {{ hint }}
      </div>
      <div v-else-if="type === 'success' || type === 'fail' " class="toast-feedback">
        <div class="toast-feedback-img">
          <!-- 成功 -->
          <template v-if="type === 'success' && !icon">
            <svg
              width="72px"
              height="72px"
              viewBox="0 0 72 72"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g id="组件" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="操作成功" transform="translate(-84.000000, -56.000000)">
                  <g id="分组-2">
                    <g id="分组" transform="translate(84.000000, 56.000000)">
                      <path
                        id="Fill"
                        d="M36,71 C55.3299662,71 71,55.3299662 71,36 C71,29.800149 69.3867424,23.8377639 66.3647603,18.5814018 C64.8508695,15.948177 62.9988303,13.5210924 60.8600047,11.3630293 C54.3289609,4.77324236 45.4649088,1 36,1 C16.6700338,1 1,16.6700338 1,36 C1,55.3299662 16.6700338,71 36,71 Z"
                        stroke="#FFFFFF"
                        stroke-width="2"
                      />
                      <path
                        id="合并形状"
                        d="M30.3137085,44.7989899 L51.5269119,23.5857864 C52.3079605,22.8047379 53.5742905,22.8047379 54.3553391,23.5857864 C55.1363876,24.366835 55.1363876,25.633165 54.3553391,26.4142136 L31.7279221,49.0416306 C30.9468735,49.8226791 29.6805435,49.8226791 28.8994949,49.0416306 L17.5857864,37.7279221 C16.8047379,36.9468735 16.8047379,35.6805435 17.5857864,34.8994949 C18.366835,34.1184464 19.633165,34.1184464 20.4142136,34.8994949 L30.3137085,44.7989899 Z"
                        fill="#FFFFFF"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </template>
          <!-- 失败 -->
          <template v-else-if="type === 'fail' && !icon">
            <svg
              width="72px"
              height="72px"
              viewBox="0 0 72 72"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g id="组件" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="操作失败" transform="translate(-84.000000, -56.000000)">
                  <g id="分组-4">
                    <g id="分组-3" transform="translate(84.000000, 56.000000)">
                      <circle
                        id="Fill"
                        stroke="#FFFFFF"
                        stroke-width="2"
                        cx="36"
                        cy="36"
                        r="35"
                      />
                      <path
                        id="路径"
                        d="M36.4350288,33.6066017 L48.4558441,21.5857864 C49.2368927,20.8047379 50.5032227,20.8047379 51.2842712,21.5857864 C52.0653198,22.366835 52.0653198,23.633165 51.2842712,24.4142136 L39.263456,36.4350288 L51.2842712,48.4558441 C52.0653198,49.2368927 52.0653198,50.5032227 51.2842712,51.2842712 C50.5032227,52.0653198 49.2368927,52.0653198 48.4558441,51.2842712 L36.4350288,39.263456 L24.4142136,51.2842712 C23.633165,52.0653198 22.366835,52.0653198 21.5857864,51.2842712 C20.8047379,50.5032227 20.8047379,49.2368927 21.5857864,48.4558441 L33.6066017,36.4350288 L21.5857864,24.4142136 C20.8047379,23.633165 20.8047379,22.366835 21.5857864,21.5857864 C22.366835,20.8047379 23.633165,20.8047379 24.4142136,21.5857864 L36.4350288,33.6066017 Z"
                        fill="#FFFFFF"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </template>
          <!-- 自定义图片 -->
          <template v-else-if="icon">
            <img :src="icon" alt>
          </template>
        </div>
        <p class="toast-feedback-txt">
          {{ hint }}
        </p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'HolaToast',
}
</script>
<style lang="scss">
@import './index.scss';
</style>
