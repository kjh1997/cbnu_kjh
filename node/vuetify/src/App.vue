<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      :src="require('@/assets/sidebar.jpg')"
    >
    <template #img="props">
      <v-img :gradient="gradient"
      v-bind="props">

      </v-img>
    </template>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list

        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          active-class="primary"
          class="py-1"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/'},
          { title: 'GridSystem', icon: 'mdi-view-dashboard', to: '/GridSystem'},
          { title: 'GridListPage', icon: 'mdi-view-dashboard', to: '/GridListPage'},
          { title: 'Breakpoint', icon: 'mdi-view-dashboard', to: '/Breakpoint'},
          { title: 'Typography', icon: 'mdi-view-dashboard', to: '/Typography'},
        ],
        right: null,
  }),
};
</script>
