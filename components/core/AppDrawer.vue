<template lang="pug">
  v-navigation-drawer(
    app
    fixed
    v-model="appDrawer"
    :stateless="isFullscreen"
  )#app-drawer
    div.text-xs-center
      div(v-text="$t('Vuetify.AppDrawer.diamondSponsors')").diamond-sponsor-label
      div(
        v-for="diamond in diamonds"
        :key="diamond.title"
      )
        a(
          :href="diamond.href"
          target="_blank"
          rel="noopener"
          @click="$ga.event('drawer sponsor click', 'click', diamond.title)"
        )
          img.diamond-sponsor(
            :src="`/static/doc-images/${diamond.src}`"
            :alt="diamond.title"
          )
      v-btn(
        small
        round
        outline
        color="primary"
        active-class=""
        to="/getting-started/sponsors-and-backers"
      )
        span(v-text="$t('Vuetify.AppDrawer.becomeASponsor')").caption
    v-container(fluid)
      v-text-field(
        placeholder="Search"
        append-icon="search"
        id="search"
        clearable
        single-line
        solo
        key="search"
        v-model="search"
        ref="search"
        light
      )
    div.py-3.text-xs-center
      a(
        href="https://vuejobs.com/?utm_source=vuejobs&utm_medium=banner&utm_campaign=linking&ref=vuetifyjs.com"
        target="_blank"
        rel="noopener"
        class="d-inline-block"
        @click="$ga.event('drawer jobs click', 'click', 'vuejobs')"
      )
        img(
          src="/static/doc-images/affiliates/vuejobs-logo.svg"
          alt="VueJobs"
          title="VueJobs"
          width="30%"
        )
    v-list(dense expand)
      template(v-for="item in items")
        v-list-group(
          v-if="item.items"
          :group="item.group"
          :prepend-icon="item.icon"
          no-action
        )
          v-list-tile(slot="activator" ripple)
            v-list-tile-content
              v-list-tile-title {{ item.title }}
          template(v-for="(subItem, i) in item.items")
            v-list-group(
              v-if="subItem.items"
              :group="subItem.group"
              sub-group
            )
              v-list-tile(slot="activator" ripple)
                v-list-tile-content
                  v-list-tile-title {{ subItem.title }}
              v-list-tile(
                v-for="(grand, i) in subItem.items"
                :key="i"
                :to="`${item.group}/${grand.href}`"
                ripple
              )
                v-list-tile-content
                  v-list-tile-title {{ grand.title }}
            v-list-tile(
              :key="i"
              v-bind="{ \
                to: !subItem.target ? `${item.group}/${subItem.href}` : null, \
                href: subItem.target && subItem.href \
              }"
              :disabled="subItem.disabled"
              :target="subItem.target"
              ripple
              v-else
            )
              v-list-tile-content
                v-list-tile-title
                  span {{ subItem.title }}
              v-chip(
                v-if="subItem.badge"
                class="white--text pa-0 chip--x-small"
                color="primary"
                disabled
              ) {{ subItem.badge }}
              v-list-tile-action(v-if="subItem.action")
                v-icon(:class="[subItem.actionClass || 'success--text']") {{ subItem.action }}
        v-subheader(v-else-if="item.header").grey--text {{ item.header }}
        v-divider(v-else-if="item.divider")
        v-list-tile(
          v-bind="{ \
            to: !item.target ? item.href : null, \
            href: item.target && item.href \
          }"
          ripple
          v-bind:disabled="item.disabled"
          v-bind:target="item.target"
          rel="noopener"
          v-else
        )
          v-list-tile-action(v-if="item.icon")
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title {{ item.title }}
          v-chip(
            v-if="item.badge"
            class="white--text pa-0 chip--x-small"
            color="primary"
            disabled
          ) {{ item.badge }}
          v-list-tile-action(v-if="item.subAction")
            v-icon(class="success--text") {{ item.subAction }}
          v-chip(
            v-else-if="item.chip"
            label
            small
            class="caption blue lighten-2 white--text mx-0"
          ) {{ item.chip }}
</template>

<script>
  import { mapState } from 'vuex'
  import supporters from '@/assets/supporters'
  import appDrawerItems from '@/assets/app-drawer-items'

  export default {
    data: () => ({
      diamonds: supporters.diamond,
      docSearch: {},
      isSearching: false,
      items: appDrawerItems,
      search: ''
    }),

    computed: {
      ...mapState({
        isFullscreen: state => state.isFullscreen,
        stateless: state => state.stateless
      }),
      appDrawer: {
        get (state) {
          return this.$store.state.appDrawer &&
            !this.isFullscreen
        },
        set (val) {
          this.$store.commit('app/DRAWER', val)
        }
      }
    },

    watch: {
      $route () {
        if (this.stateless &&
          this.appDrawer &&
          this.$vuetify.breakpoint.mdAndDown
        ) this.appDrawer = false
      },
      appDrawer (val) {
        if (!val) this.docSearch.autocomplete.autocomplete.close()
      },
      isSearching (val) {
        this.$refs.toolbar.isScrolling = !val

        if (val) {
          this.$nextTick(() => {
            this.$refs.search.focus()
          })
        } else {
          this.search = null
        }
      },
      search (val) {
        if (!val) {
          this.docSearch.autocomplete.autocomplete.close()
        }
      }
    },

    mounted () {
      this.init()
    },

    methods: {
      init () {
        this.initDocSearch()
      },
      initDocSearch () {
        const vm = this

        this.docSearch = docsearch({
          apiKey: '259d4615e283a1bbaa3313b4eff7881c',
          autocompleteOptions: {
            appendTo: '#app',
            hint: false,
            debug: true
          },
          indexName: 'vuetifyjs',
          inputSelector: '#search',
          handleSelected (input, event, suggestion) {
            const url = suggestion.url
            const loc = url.split('.com')

            vm.search = ''
            vm.isSearching = false
            vm.$router.push(loc.pop())
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../node_modules/vuetify/src/stylus/settings/_elevations.styl'

  .algolia-autocomplete
    flex: 1 1 auto

  #search
    width: 100%

  #app
    .algolia-autocomplete > span
      left: -16px !important
      top: 18px !important
      elevation(6)

      .ds-dataset-1
        border: none !important

  #app-drawer
    img.logo
      margin 40px 0 15px

    .chip--x-small
      font-size: 10px
      height: 16px

      .chip__content
        line-height: 1
        padding: 8px

    .diamond-sponsor
      // todo trim down actual image file dimensions
      height: 35px
      margin-bottom 0.25em

      aside.navigation-drawer ul li
        font-size 14px
        color: #373737

      &-label
        color #676767
        margin: 24px 0 16px 0
        font-size 13px
</style>
