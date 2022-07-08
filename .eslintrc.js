module.exports = {
  extends: [
    "taro/react",
    // 需要使用该插件（或其他的 ts 插件），否则某些 lib.dom.d.ts 的 interface 为认为是 not defined
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "@typescript-eslint/explicit-module-boundary-types": "off",
    '@typescript-eslint/no-var-requires': 0,
  }
}
