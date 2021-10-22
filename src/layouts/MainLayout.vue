<template lang="pug">
q-layout(view='lHh Lpr fFf')
  q-header(elevated)
    q-toolbar
      q-btn(
        flat
        round
        dense
        icon='menu'
        @click='leftDrawer = !leftDrawer'
      )
      q-toolbar-title
        .lt-sm quasar-notify
        q-breadcrumbs.gt-xs(
          active-color='white'
          style='font-size: 16px'
        )
          q-breadcrumbs-el(
            icon='home'
            label='quasar-notify'
            to='/'
          )
      img(
        src='~assets/vanoord-logo-white.svg'
        height='40px'
      )
  q-drawer(
    v-model='leftDrawer'
    show-if-above
    bordered
    content-class='bg-grey-1'
  )
    q-scroll-area(style='height: calc(100% - 160px); margin-top: 160px;')
      q-list(
        v-for='(menuItem, index) in menuList'
        :key='index'
      )
        template(v-if='hasPermissions(menuItem.roles)')
          div(@click='() => {redirect(menuItem.link)}')
            q-item(
              v-ripple
              clickable
              active-class='bg-grey-4 text-black'
              :active='menuItem.link === currentLink'
            )
              q-item-section(avatar)
                q-icon(:name='menuItem.icon')
              q-item-section {{ menuItem.label }}
          q-separator(v-if='menuItem.separator')
  q-page-container(v-if='appStatus=="error"')
    .fixed-center.text-center
      p
        img(src='~assets/sad.svg', style='width:30vw;max-width:150px;')
      p.text-faded
        h2 Whoops, something went wrong loading the quasar-notify app!
        p(v-if='appStatusDetails'): strong {{ appStatusDetails }}
        p Please contact support

  q-page-container(v-else-if='!isLoading')
    router-view
</template>

<script>
import { mapGetters } from 'vuex'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  data() {
    return {
      leftDrawer: false,
      isLoading: false,
    };
  },

  computed: {
    ...mapGetters({
      appStatus: 'app/status',
      appStatusDetails: 'app/statusDetails',
    }),
    menuList() {
      return [
        {
          icon: 'list', label: 'Home', link: '/', separator: false,
        },
      ]
    },
    userRoles() {
      return this.$store.getters['user/roles'](this.groupId)
    },
    currentLink() {
      return this.$route.path;
    },
  },

  methods: {
    hasPermissions(roles) {
      return roles === undefined || this.userRoles.filter(o => roles.includes(o)).length > 0;
    },

    redirect(link) { this.$router.push(link) },
  },

});
</script>
