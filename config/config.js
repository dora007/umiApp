
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  history: 'browser',
  "theme": {
    "@primary-color": "#3296FA"
  },
  targets: {
    ie: 11,
  },
  disableRedirectHoist: true,
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  manifest: {
    basePath: '/',
  },

  proxy: {
    '/api/v1/': {
      // target: 'http://127.0.0.1:38080/',
      changeOrigin: true,
      pathRewrite: {
        '^/server': '',
      },
    },
  },

  runtimePublicPath: true,

  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/report/index' },
        // {
        //   path: '/check',
        //   component: '../layouts/check',
        // },
      ]
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      dva: {
        immer: true,
      },
      antd: true,
      dynamicImport: false,
      title: 'furcas',
      dll: false,

      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
