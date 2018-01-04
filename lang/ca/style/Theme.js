export default {
  header: 'Tema',
  headerText: 'Canvieu fàcilment els colors de la vostra aplicació mitjançant programació. Reconstruir el full d\'estil per defecte i personalitzar diversos aspectes del Framework per a les seves necessitats particulars. Si esteu buscant el **Generador de temes**, navegueu [aquí](/theme-generator).',
  lightAndDarkHeader: 'Lluminositat i foscor',
  lightAndDarkText1: 'Vuetify admet les dues variants **ligth** i **dark** (clar i fosc respetivament) de l\'especificació de disseny de Material. Aquesta designació s\'inicia en el component d\'aplicació de l\'arrel, `v-app` i és compatible amb la majoria de components. Per defecte, la vostra aplicació utilitzarà el tema **light** (color clar), però això es pot sobreescriure fàcilment afegint el prop **dark** (fosc).',
  lightAndDarkText2: 'Quan designeu un component com a ligth o dark, tots els seus fills heredaran i aplcaran el mateix estil si no s\'especifica el contrari. A causa de l\'especificitat CSS, hi ha certes combinacions que poden indicar que assigni manualment el _tema_ als fills anidats.És probable que això passi quan feu servir el tema **dark** (fosc).',
  customizingHeader: 'Personalització',
  customizingText1: 'Per defecte, Vuetify té un tema estàndard aplicat per a tots els components.',
  customizingText2: 'Això es pot canviar fàcilment. Només cal passar una propietat **theme** a la funció `Vue.use`.Podeu modificar totes o algunes de les propietats del tema, i la resta heredara els valor predeterminats.',
  customizingText3: 'També podeu utilitzar els colors del Material predefinits.',
  customizingText4: 'Sota el capó, Vuetify generarà classes CSS basades en aquests valors que seran accessibles al DOM. Aquestes classes seguiran el mateix etiquetat que altres classes auxiliars, `primary` o `secondary--text`, per exemple.',
  customizingText5: 'Aquests valors també estaran disponibles a la instància del objecte **$vuetify** sota la propietat **theme**. Això us permet modificar _dinámicament_ el vostre tema. Darrere de les escenes, Vuetify regenerarà i actualitzarà les vostres classes del tema, actualitzant sense problemes la vostra aplicació.',
  stylusHeader: 'Modificació de les variables d\'Stylus',
  stylusText1: 'Vuetify està construït sobre **stylus**. Similar a **scss**, podeu canviar les variables i tornar a compilar els fitxers d\'estil. Una llista de variables disponibles es troba [aquí](https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_variables.styl). Per construir el fitxer de stylus, haureu de configurar la vostra aplicació per a suportar l\'stylus. Si utilitzeu una de les plantilles prefixades disponibles a la guia d\'[Inici ràpid](/getting-started/quick-start), pots saltar a la següent secció.',
  stylusHeader2: 'Configuració del stylus-loader amb Webpack',
  stylusText2: 'A la consola, executeu:',
  stylusText3: 'Això instal·larà les dependències necessàries per importar i parsetjar fitxers d\'stylus. Una vegada instal·lat, obriu la vostra configuració de webpack i afegiu una regla per a l\'stylus. Per a les aplicacions **SSR**, assegureu-vos que la importació es troba a la vostra entrada `principal de client`.',
  stylusText4: 'Creeu una carpeta anomenada `stylus` al directori src (o directori assets apropiat) amb un fitxer anomenat `main.styl`. Això servirà com a punt d\'entrada per importar i reconstruir els estils Vuetify per defecte. Una vegada creat, obriu el fitxer .styl i afegiu aquesta entrada.',
  stylusText5: 'Tingueu en compte que la ubicació relativa de node_modules pot diferir en el vostre projecte, així que ajusteu-vos d\'acord amb això. Es recomana que la importació es trobi a la vostra aplicació principal `index.js` o `client-entry.js`. **NO** importeu el vostre `main.styl` dins d\'un component. Això causarà problemes de rendiment i reduirà dràsticament **HMR** (recarrega de mòduls en calent de l\'angles hot module reloading).',
  stylusText6: 'Després d\'haver decidit la vostra ubicació d\'importació, si necessiteu el full d\'estils Vuetify per una etiqueta `<link>` en el fitxer d\'índex, suprimiu-la. Reinicieu els processos de compilació i torneu a obrir el vostre projecte. Heu de veure que tots els estils funcionen correctament.',
  stylusHeader3: 'Canvi de valors',
  stylusText7: 'Ara que el stylus està configurat, podeu establir valors predeterminats per a les variables de stylus que voleu canviar. Aquests s\'han de declarar abans de la importació i anul·laran automàticament els valors predeterminats de Vuetify.',
  toc: [
    {
      text: 'Tema',
      href: 'introduction'
    },
    {
      text: 'Lluminositat i foscor',
      href: 'light-and-dark'
    },
    {
      text: 'Personalització',
      href: 'customizing'
    },
    {
      text: 'Modificació de les variables d\'Stylus',
      href: 'stylus-guide'
    }
  ]
}
