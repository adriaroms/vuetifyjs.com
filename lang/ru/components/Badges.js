export default {
  header: 'Badge',
  headerText: 'Компонент `v-badge` может обернуть любой тип контента, чтобы выделить информацию пользователю или просто привлечь внимание к определенному элементу.',
  components: ['v-badge'],
  examples: [{
    character: {
      header: 'Xарактеристика',
      desc: 'Любой символ может быть помещен с иконкой.'
    },
    icon: {
      header: 'Иконка',
      desc: 'Иконки поддерживаюстя только Material Design.'
    },
    inline: {
      header: 'В одну линию',
      desc: 'Значки также могут быть помещены в линию с текстом.'
    },
    visibility: {
      header: 'Видимость',
      desc: 'Видимость значков можно контролировать с помощью `v-model`.'
    }
  }]
}