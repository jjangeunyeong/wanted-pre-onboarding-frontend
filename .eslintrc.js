module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    jsx: true,
  },
  plugins: ['react'],
  rules: {
    'no-var': 'error',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }], // console.log() 금지, console.warn(), console.error(),console.info()는 허용
    'no-multiple-empty-lines': 'error', // 여러 줄 공백 금지
    eqeqeq: 'error', // 일치 연산자 사용 필수
    'no-unused-vars': 'error', // 사용하지 않는 변수 금지
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
