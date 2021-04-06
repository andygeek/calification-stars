const calification = { template: '<calification></calification>' }

const routes = [{ path: '/calification/:name/:stars', component: calification }]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
