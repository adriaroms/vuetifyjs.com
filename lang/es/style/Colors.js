export default {
  header: 'Colores',
  headerText: 'Por defecto, obtiene acceso a todos los colores en la [Especificación del Diseño Material](https://material.io/guidelines/style/color.html) a través de **stylus** y **javascript**. Estos valores se pueden usar en las hojas de estilo, los archivos de componentes y los componentes actuales a través del sistema **clase de color**.',
  classesHeader: 'Clases',
  classesText: 'Cada color de la especificación se convierte en una variante **de fondo** y **texto** para el estilo dentro de su aplicación a través de una clase, Ex: `<div class="red">` or `<span class="red--text">`. Estos colores de clase están definidos [aquí](https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_colors.styl).',
  classesText2: 'Los colores de texto también admiten las variantes **darken** y **lighten** usando `text--{lighten|darken}-{n}`',
  javascriptPackHeader: 'Paquete de color Javascript',
  javascriptPackText: 'Vuetify tiene un paquete de colores de JavaScript opcional que puede importar y usar dentro de su aplicación. Esto también se puede usar para ayudar a definir el tema de su aplicación.',
  stylusPackHeader: 'Paquete de color Stylus',
  stylusPackText: 'Si bien es conveniente, el paquete de colores aumenta el tamaño de exportación css en ~30kb. Algunos proyectos solo pueden requerir las clases proporcionadas predeterminadas que se crean en tiempo de ejecución desde el arranque de Vuetify. Para desactivar esta función, deberá _manualmente_ importar y crear el archivo **stylus** principal. Esto requerirá un [cargador de Stylus](https://github.com/shama/stylus-loader) y una entrada de archivo `.styl`.',
  stylusPackText2: 'Su archivo `main.styl` creado tendrá que ser incluido en su proyecto.',
  alert: '**Debes** configurar tu webpack para usar `stylus`. Si está usando una [plantilla prefabricada](/getting-started/quick-start#new-applications) esto ya estará hecho para ti.',
  stylusPackText3: 'Esto también se puede hacer dentro de su archivo principal **App.vue**. Tenga en cuenta, dependiendo de la configuración de su proyecto, esto _aumentará_ los tiempos de compilación cada vez que se actualice su archivo de entrada, los archivos del Stylus se volverán a generar.',
  colorHeader: 'Colores Material',
  colorText: 'A continuación se muestra una lista de la paleta de colores de diseño de Material agrupados por el color primario',
  toc: [
    {
      text: 'Introduction',
      href: 'introduction'
    },
    {
      text: 'Clases',
      href: 'classes'
    },
    {
      text: 'Paquete de color Javascript',
      href: 'javascript-color-pack'
    },
    {
      text: 'Paquete de color Stylus',
      href: 'stylus-color-pack'
    },
    {
      text: 'Colores Material',
      href: 'material-colors'
    }
  ]
}
