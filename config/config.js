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
      target: 'http://engprod-core.beta.iwosai.com/',
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
    ['umi-plugin-react', {
      dva: {
        immer: true,
      },
      links: [
        { rel: 'icon', href: 'https://sqb-qa.oss-cn-hangzhou.aliyuncs.com/427e7064-2212-4bda-8886-8c285ce81aec_favicon.png' },
      ],
      antd: true,
      dynamicImport: false,
      title: '项目监控',
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
