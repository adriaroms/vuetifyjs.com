export default {
  header: 'Colors',
  headerText: 'Fora de la caixa, accedeix a tots els colors de [l\'especificació de disseny de Material](https://material.io/guidelines/style/color.html) a través de **stylus** i **javascript**. Aquests valors es poden utilitzar en els fulls d\'estil, els vostres fitxers de components i els components reals a través del sistema de **class de colors**.',
  classesHeader: 'Classes',
  classesText: 'Cada color de l\'especificació es converteix en variants de **fons** i **texte** per a l\'estil de la vostra aplicació a través d\'una classe, Ex: `<div class="red">` o `<span class="red--text">`. Aquests colors de classe es defineixen [aquí](https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_colors.styl).',
  classesText2: 'Els colors de texte també admeten variants de **darken** i **lighten** que usen `text--{lighten|darken}-{n}`',
  javascriptPackHeader: 'Paquet de colors amb Javascript',
  javascriptPackText: 'Vuetify té un paquet de colors Javascript opcional que podeu importar i utilitzar dins de la vostra aplicació. Això també es pot utilitzar per ajudar a definir el tema de la vostra aplicació.',
  stylusPackHeader: 'Paquet de colors amb Stylus',
  stylusPackText: 'Tot i que és convenient, el paquet de colors augmenta la mida de l\'exportació css en ~30kb. Alguns projectes només necessiten les classes proporcionades per defecte que es creen en temps d\'execució des del Vuetify bootstrap. Per desactivar aquesta funció, haurà de fer-ho _manualment_ importar i compilant el fitxer principal d\'**stylus**. Això requerirà un [cargador de Stylus](https://github.com/shama/stylus-loader) i una entrada de fitxer `.styl`.',
  stylusPackText2: 'El vostre fitxer `main.styl` creat necessitara ser inclòs al vostre projecte.',
  alert: '**Heu de configurar** la vostra configuració de webpack per utilitzar `stylus`. Si utilitzeu una [plantilla preconfigurada](/getting-started/quick-start#new-applications) això ja esta fet per vostè.',
  stylusPackText3: 'Això també es pot fer dins del vostre fitxer d\'entrada **App.vue**. Tingueu en compte, en funció de la configuració del vostre projecte, això _augmentarà_ el temps de compilació, ja que cada vegada que s\'actualitzi el fitxer d\'entrada, es tornaran a generar els fitxers de Stylus.',
  colorHeader: 'Colors Material',
  colorText: 'A continuació es mostra una llista de la paleta de colors del disseny de material agrupada pel color primari',
  toc: [
    {
      text: 'Introducció',
      href: 'introduction'
    },
    {
      text: 'Classes',
      href: 'classes'
    },
    {
      text: 'Paquet de colors amb Javascript',
      href: 'javascript-color-pack'
    },
    {
      text: 'Paquet de colors amb Stylus',
      href: 'stylus-color-pack'
    },
    {
      text: 'Colors Material',
      href: 'material-colors'
    }
  ]
}
