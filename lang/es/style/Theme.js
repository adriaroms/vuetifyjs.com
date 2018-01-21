export default {
  header: 'Tema',
  headerText: 'Cambie fácilmente los colores de su aplicación mediante programación. Reconstruya la hoja de estilos predeterminada y personalice diversos aspectos del framework para sus necesidades particulares. Si está buscando **Generador de temas**, navegue [aquí](/theme-generator).',
  lightAndDarkHeader: 'Luminosidad y oscuridad',
  lightAndDarkText1: 'Vuetify admite las variantes **light** y **dark** (claro y oscuro respectivamente) de la especificación Material Design. Esta designación comienza en el componente de aplicación raíz, `v-app` y es compatible con la mayoría de los componentes. De forma predeterminada, su aplicación usará el tema **light**, pero esto puede sobrescribirse fácilmente agregando la propiedad **dark**.',
  lightAndDarkText2: 'Cuando designe un componente como claro u oscuro, todos sus hijos heredarán y aplicarán el mismo estilo a menos que se especifique lo contrario. Debido a la especificidad de CSS, existen ciertas combinaciones que pueden solicitarle que asigne manualmente el _theme_ para hijos anidados. Esto es más probable que ocurra cuando se usa el tema **dark** (oscuro).',
  customizingHeader: 'Personalizando',
  customizingText1: 'Por defecto, Vuetify tiene un tema estándar aplicado para todos los componentes.',
  customizingText2: 'Esto puede ser cambiado fácilmente. Simplemente pase una propiedad de **theme** a la función `Vue.use`. Puede optar por modificar todas o solo algunas de las propiedades del tema, y el resto hereda los valores predeterminados.',
  customizingText3: 'También puede usar los colores de material predefinidos.',
  customizingText4: 'Bajo el capó, Vuetify generará clases de CSS basadas en estos valores que serán accesibles en el DOM. Estas clases seguirán el mismo etiquetado que otras clases auxiliares, `primary` o `secondary-text`, por ejemplo.',
  customizingText5: 'Estos valores también estarán disponibles en el objeto instancia **$vuetify** en la propiedad **theme**. Esto te permite modificar de manera _dinámica_ tu tema. Detrás de escena, Vuetify regenerará y actualizará sus clases de tema, actualizando su aplicación a la perfección.',
  stylusHeader: 'Modificando las variables de Stylus',
  stylusText1: 'Vuetify está construido sobre **stylus**. Similar a **scss**, puede cambiar variables y volver a compilar los archivos de estilo. Una lista de variables disponibles se encuentra [aquí](https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_variables.styl). Para construir el archivo stylus, deberá configurar su aplicación para que sea compatible con stylus. Si está utilizando una de las plantillas prefabricadas disponibles en [Inicio rápido](/getting-started/quick-start) guía, puede omitir la siguiente sección.',
  stylusHeader2: 'Configurar el stylus-loader con Webpack',
  stylusText2: 'En la línea de comando, ejecuta:',
  stylusText3: 'Esto instalará las dependencias necesarias para importar y parsear archivos de stylus. Una vez instalado, abra la configuración de su paquete web y agregue una regla para stylus. Para aplicaciones basadas en **SSR**, asegúrese de que la importación esté en su `entrada de cliente`.',
  stylusText4: 'Cree una carpeta llamada `stylus` en su directorio src (o directorio de activos apropiado) con un archivo llamado `main.styl`. Esto servirá como el punto de entrada para importar y reconstruir los estilos predeterminados de Vuetify. Una vez creado, abra el archivo .styl y agregue esta entrada.',
  stylusText5: 'Tenga en cuenta que la ubicación relativa de node_modules puede diferir en su proyecto así que ajustelo en consecuencia. Se recomienda que la importación esté ubicada en su archivo de aplicación principal `index.js` o `entrada de cliente.js`. **NO** importe su `main.styl` dentro de un componente. Esto _causará_ problemas de rendimiento y ralentizará drásticamente **HMR** (recarga de módulos calientes del ingles hot module reloading).',
  stylusText6: 'After you have decided on your import location, if you are requiring the Vuetify stylesheet by a `<link>` tag in your index file, remove it. Restart your build processes and re-open your project. You should see all of the styles working correctly.',
  stylusHeader3: 'Cambiando valores',
  stylusText7: 'Ahora que stylus está configurado, puede establecer valores predeterminados para las variables del stylus que desea cambiar. Deben declararse _antes_ de la importación y anularán automáticamente los valores predeterminados de Vuetify.',
  toc: [
    {
      text: 'Tema',
      href: 'introduction'
    },
    {
      text: 'Luminosidad y oscuridad',
      href: 'light-and-dark'
    },
    {
      text: 'Personalizando',
      href: 'customizing'
    },
    {
      text: 'Modificando las variables de Stylus',
      href: 'stylus-guide'
    }
  ]
}
