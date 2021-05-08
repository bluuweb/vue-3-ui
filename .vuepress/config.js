module.exports = {
  title: 'Vue 3 UI (bluuweb - youtube)',
  description: 'Aprende a trabajar con UI',
  base: '/vue-3-ui/',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  themeConfig:{
    nav: [
      { text: 'Guías', link: 'https://bluuweb.github.io/' },
      { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
      { text: 'Curso Vue 3', link: 'http://curso-vue-js-udemy.bluuweb.cl' },
      { text: 'Curso React', link: 'http://curso-react-js-udemy.bluuweb.cl' }
    ],
    sidebar:
      [
        '/',
        '/01-quasar/',
        '/02-ant/',
        '/03-primevue/',
      ]
  }
 
}


{/* <img :src="$withBase('/img/compu-1.gif')"> */}