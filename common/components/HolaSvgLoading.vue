<template>
  <div class="hola-svg-loading">
    <template v-if="type === 1">
      <svg enable-background="new 0 0 40 40" height="30px" viewBox="0 0 40 40" width="30px" xml:space="preserve">
        <path
          d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
      s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
      c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
          class="fill-primary"
          opacity="0.2"
        />
        <path
          d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
      C22.32,8.481,24.301,9.057,26.013,10.047z"
          class="fill-primary"
          transform="rotate(42.1171 20 20)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="xml"
            dur="0.5s"
            from="0 20 20"
            repeatCount="indefinite"
            to="360 20 20"
            type="rotate"
          />
        </path>
      </svg>
    </template>
    <template v-else-if="type === 2">
      <svg height="30px" style="enable-background:new 0 0 50 50" viewBox="0 0 50 50" width="30px" xml:space="preserve">
        <path d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" class="fill-primary" transform="rotate(275.098 25 25)">
          <animateTransform
            attributeName="transform"
            attributeType="xml"
            dur="0.6s"
            from="0 25 25"
            repeatCount="indefinite"
            to="360 25 25"
            type="rotate"
          />
        </path>
      </svg>
    </template>
    <template v-else-if="type === 3">
      <svg height="30px" style="enable-background:new 0 0 50 50" viewBox="0 0 50 50" width="30px" xml:space="preserve">
        <path
          d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
          class="fill-primary"
          transform="rotate(275.098 25 25)"
        >
          <animateTransform
            attributeName="transform"
            attributeType="xml"
            dur="0.6s"
            from="0 25 25"
            repeatCount="indefinite"
            to="360 25 25"
            type="rotate"
          />
        </path>
      </svg>
    </template>
    <template v-else-if="type === 4">
      <svg height="30px" style="enable-background:new 0 0 50 50" viewBox="0 0 24 24" width="30px" xml:space="preserve">
        <rect
          class="fill-primary"
          height="7"
          transform="scale(1 1.94336)"
          width="4"
          x="0"
          y="0"
        >
          <animateTransform
            attributeName="transform"
            attributeType="xml"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
            type="scale"
            values="1,1; 1,3; 1,1"
          />
        </rect>
        <rect
          class="fill-primary"
          height="7"
          transform="scale(1 2.72331)"
          width="4"
          x="10"
          y="0"
        >
          <animateTransform
            attributeName="transform"
            attributeType="xml"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
            type="scale"
            values="1,1; 1,3; 1,1"
          />
        </rect>
        <rect
          class="fill-primary"
          height="7"
          transform="scale(1 1.38997)"
          width="4"
          x="20"
          y="0"
        >
          <animateTransform
            attributeName="transform"
            attributeType="xml"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
            type="scale"
            values="1,1; 1,3; 1,1"
          />
        </rect>
      </svg>
    </template>
    <template v-else-if="type === 5">
      <template v-if="loading">
        <svg height="30px" style="enable-background:new 0 0 50 50" viewBox="0 0 24 30" width="24px" xml:space="preserve">
          <rect
            class="fill-primary"
            height="10"
            transform="translate(0 9.4336)"
            width="4"
            x="0"
            y="0"
          >
            <animateTransform
              attributeName="transform"
              attributeType="xml"
              begin="0"
              dur="0.6s"
              repeatCount="indefinite"
              type="translate"
              values="0 0; 0 20; 0 0"
            />
          </rect>
          <rect
            class="fill-primary"
            height="10"
            transform="translate(0 17.2331)"
            width="4"
            x="10"
            y="0"
          >
            <animateTransform
              attributeName="transform"
              attributeType="xml"
              begin="0.2s"
              dur="0.6s"
              repeatCount="indefinite"
              type="translate"
              values="0 0; 0 20; 0 0"
            />
          </rect>
          <rect
            class="fill-primary"
            height="10"
            transform="translate(0 3.89973)"
            width="4"
            x="20"
            y="0"
          >
            <animateTransform
              attributeName="transform"
              attributeType="xml"
              begin="0.4s"
              dur="0.6s"
              repeatCount="indefinite"
              type="translate"
              values="0 0; 0 20; 0 0"
            />
          </rect>
        </svg>
      </template>
      <template v-else>
        <svg height="30px" style="enable-background:new 0 0 50 50" viewBox="0 0 24 30" width="24px" xml:space="preserve">
          <rect
            class="fill-primary"
            height="10"
            transform="translate(0 9.4336)"
            width="4"
            x="0"
            y="0"
          />
          <rect
            class="fill-primary"
            height="10"
            transform="translate(0 17.2331)"
            width="4"
            x="10"
            y="0"
          />
          <rect
            class="fill-primary"
            height="10"
            transform="translate(0 3.89973)"
            width="4"
            x="20"
            y="0"
          />
        </svg>
      </template>
    </template>
    <template v-else-if="type === 6">
      <svg height="30px" style="enable-background:new 0 0 50 50" viewBox="0 0 24 30" width="24px" xml:space="preserve">
        <rect class="fill-primary" height="12.5469" width="4" x="0" y="9.22656">
          <animate
            attributeName="height"
            attributeType="XML"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
            values="5;21;5"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
            values="13; 5; 13"
          />
        </rect>
        <rect class="fill-primary" height="20.5469" width="4" x="10" y="5.22656">
          <animate
            attributeName="height"
            attributeType="XML"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
            values="5;21;5"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
            values="13; 5; 13"
          />
        </rect>
        <rect class="fill-primary" height="13.4531" width="4" x="20" y="8.77344">
          <animate
            attributeName="height"
            attributeType="XML"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
            values="5;21;5"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
            values="13; 5; 13"
          />
        </rect>
      </svg>
    </template>
    <template v-else-if="type === 7">
      <svg height="60px" style="enable-background:new 0 0 50 50" viewBox="0 0 24 30" width="48px" xml:space="preserve">
        <rect class="fill-primary" height="20" width="4" x="0" y="0">
          <animate
            attributeName="opacity"
            attributeType="XML"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
            values="1; .2; 1"
          />
        </rect>
        <rect class="fill-primary" height="20" width="4" x="7" y="0">
          <animate
            attributeName="opacity"
            attributeType="XML"
            begin="0.2s"
            dur="0.6s"
            repeatCount="indefinite"
            values="1; .2; 1"
          />
        </rect>
        <rect class="fill-primary" height="20" width="4" x="14" y="0">
          <animate
            attributeName="opacity"
            attributeType="XML"
            begin="0.4s"
            dur="0.6s"
            repeatCount="indefinite"
            values="1; .2; 1"
          />
        </rect>
      </svg>
    </template>
    <template v-else-if="type === 8">
      <svg height="60px" style="enable-background:new 0 0 50 50" viewBox="0 0 24 30" width="48px" xml:space="preserve">
        <rect
          class="fill-primary"
          height="14.7168"
          opacity="0.2"
          width="4"
          x="0"
          y="7.6416"
        >
          <animate
            attributeName="opacity"
            attributeType="XML"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
            values="0.2; 1; .2"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
            values="10; 20; 10"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            begin="0s"
            dur="0.6s"
            repeatCount="indefinite"
            values="10; 5; 10"
          />
        </rect>
        <rect
          class="fill-primary"
          height="19.7168"
          opacity="0.2"
          width="4"
          x="8"
          y="5.1416"
        >
          <animate
            attributeName="opacity"
            attributeType="XML"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
            values="0.2; 1; .2"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
            values="10; 20; 10"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            begin="0.15s"
            dur="0.6s"
            repeatCount="indefinite"
            values="10; 5; 10"
          />
        </rect>
        <rect
          class="fill-primary"
          height="15.2832"
          opacity="0.2"
          width="4"
          x="16"
          y="7.3584"
        >
          <animate
            attributeName="opacity"
            attributeType="XML"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
            values="0.2; 1; .2"
          />
          <animate
            attributeName="height"
            attributeType="XML"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
            values="10; 20; 10"
          />
          <animate
            attributeName="y"
            attributeType="XML"
            begin="0.3s"
            dur="0.6s"
            repeatCount="indefinite"
            values="10; 5; 10"
          />
        </rect>
      </svg>
    </template>
  </div>
</template>

<script>
/**
 * svg动画组件
 * @author KeNo
 *
 * @param {Number} [type = 1]动画类型
 * @param {Boolean} [loading = '正在加载...']加载中状态文本
 */
export default {
  name: 'HolaSvgLoading',
  props: {
    type: {
      type: Number,
      default: 1,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  methods: {},
}
</script>
<style lang="scss">
.hola-svg-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  .fill-primary {
    color: var(--primary);
  }
}
</style>
