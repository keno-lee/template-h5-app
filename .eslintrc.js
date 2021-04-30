module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    // 解决 'window' is not defined 问题
    browser: true,
  },
  // parser: 'babel-eslint', // This package has been deprecated
  // 基础配置
  // 用来解决 Parsing error: The keyword 'export' is reserved 等报错
  // parser: '@babel/eslint-parser',
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: ['vue'],
  // 扩展规则 airbnb-base 依赖: eslint-config-airbnb-base 和 eslint-plugin-import
  // extends: ['airbnb-base'],
  extends: ['plugin:vue/essential', 'plugin:vue/recommended', 'airbnb-base'],
  // extends: ['airbnb-base'],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: 0,
    // 'no-underscore-dangle': 0, // class使用 _
    // 'no-empty': 0, // Empty block statement
    // 'import/no-unresolved': 0, // 忽略别名
    // 'no-use-before-define': 0, // 函数使用前必须要声明
    // 'func-names': 0, // 函数表达式必须有名字
    // 'prefer-const': 0, // 偏向于const
    // 'no-param-reassign': 0, // 不允许重新分配函数参数
    // 'no-restricted-syntax': 0,
    // 'guard-for-in': 0, // 监视for...in循环，防止出现不可预料的情况
    // 'max-len': 0, // 一行最大长度，单位为字符
    // 'prefer-template': 0, // 偏向于模板字符串
    'no-plusplus': 0,
    'space-before-function-paren': 0, // 函数名和括号之间要有空格
    'import/prefer-default-export': 0, // 偏向于 export default
    // 'import/no-cycle': 0, // 循环引用
    // 'no-shadow': 0, // 作用域下重复命名
    radix: 0, // parseInt() 需要指定小数点
    // 'max-classes-per-file': 0, // 每个文件只能由一个class
    // 'no-async-promise-executor': 0, // 不允许promise里面有异步函数
    // 'global-require': 0, // 不可以在非全局的地方使用require。尝试用import解决？
    // 'no-nested-ternary': 0, // 不能网状的三元表达式
    // 'no-restricted-properties': 0, // 不能使用幂运算符
    // 'import/extensions': 0,
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/attribute-hyphenation': 0,
    'vue/no-v-html': 0,
  },
}
