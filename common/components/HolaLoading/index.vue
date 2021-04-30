<template>
  <div id="hola-loading" :class="[index, className]" :style="`background-color: ${shadowColor}`" @click="closeShadow">
    <div class="loading-content" :style="`background-color: ${contentColor}`">
      <!-- circular-loading -->
      <div v-if="type === 'circular'" class="loading-circular">
        <div class="spinner-wrap c-primary">
          <div class="spinner">
            <div class="circle-clipper left">
              <div class="circle" />
            </div>
            <div class="gap-patch">
              <div class="circle" />
            </div>
            <div class="circle-clipper right">
              <div class="circle" />
            </div>
          </div>
        </div>
        <p class="hint">
          {{ hint }}
        </p>
      </div>
      <!-- bubble-loading -->
      <div v-else-if="type === 'bubble'" class="loading-bubble">
        <i />
        <i class="layui-m-layerload" />
        <i />
        <p class="hint">
          {{ hint }}
        </p>
      </div>
      <!-- spinner-loading -->
      <div v-else-if="type === 'spinner'" class="loading-spinner">
        <div class="loading-img">
          <svg width="72px" height="72px" viewBox="0 0 72 72" version="1.1">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-1405.000000, -1149.000000)" fill="#FFFFFF">
                <g transform="translate(1405.000000, 1149.000000)">
                  <rect
                    id="矩形"
                    class="change1"
                    x="34"
                    y="0"
                    width="4"
                    height="18"
                    rx="2"
                  />
                  <rect
                    id="矩形"
                    class="change2"
                    fill-opacity="0.15"
                    transform="translate(55.091883, 16.908117) rotate(45.000000) translate(-55.091883, -16.908117) "
                    x="53.0918831"
                    y="7.90811691"
                    width="4"
                    height="18"
                    rx="2"
                  />
                  <rect
                    id="矩形"
                    class="change3"
                    fill-opacity="0.3"
                    transform="translate(63.000000, 36.000000) rotate(90.000000) translate(-63.000000, -36.000000) "
                    x="61"
                    y="27"
                    width="4"
                    height="18"
                    rx="2"
                  />
                  <rect
                    id="矩形"
                    class="change4"
                    fill-opacity="0.45"
                    transform="translate(55.091883, 55.091883) rotate(135.000000) translate(-55.091883, -55.091883) "
                    x="53.0918831"
                    y="46.0918831"
                    width="4"
                    height="18"
                    rx="2"
                  />
                  <rect
                    id="矩形"
                    class="change5"
                    fill-opacity="0.6"
                    transform="translate(36.000000, 63.000000) rotate(180.000000) translate(-36.000000, -63.000000) "
                    x="34"
                    y="54"
                    width="4"
                    height="18"
                    rx="2"
                  />
                  <rect
                    id="矩形"
                    class="change6"
                    fill-opacity="0.75"
                    transform="translate(16.908117, 55.091883) rotate(225.000000) translate(-16.908117, -55.091883) "
                    x="14.9081169"
                    y="46.0918831"
                    width="4"
                    height="18"
                    rx="2"
                  />
                  <rect
                    id="矩形"
                    class="change7"
                    fill-opacity="0.9"
                    transform="translate(9.000000, 36.000000) rotate(270.000000) translate(-9.000000, -36.000000) "
                    x="7"
                    y="27"
                    width="4"
                    height="18"
                    rx="2"
                  />
                  <rect
                    id="矩形"
                    class="change8"
                    transform="translate(16.908117, 16.908117) rotate(315.000000) translate(-16.908117, -16.908117) "
                    x="14.9081169"
                    y="7.90811691"
                    width="4"
                    height="18"
                    rx="2"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <p class="hint">
          {{ hint }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HolaLoading',
}
</script>
<style lang="scss">
@import './index.scss';
</style>
