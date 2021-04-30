<template>
  <div class="hola-warm-prompt">
    <div class="warm-prompt-title">
      {{ title }}
    </div>
    <div v-for="(item, index) in content" :key="index" class="warm-prompt-content">
      {{ item }}
    </div>
  </div>
</template>

<script>
/**
 * 温馨提示组件
 * @author KeNo
 *
 * @param {String} [title = '']标题
 * @param {Array} [content = []]内容列表
 *
 */
export default {
  name: 'HolaWarmPrompt',
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {},
}
</script>
<style lang="scss">
.hola-warm-prompt {
  width: 100%;
  padding: 30px 0;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .warm-prompt-title {
    color: var(--secondary);
  }

  .warm-prompt-content {
    color: var(--tertiary);
    margin-top: 8px;
  }
}
</style>
