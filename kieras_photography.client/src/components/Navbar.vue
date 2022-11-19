<template>
  <nav class="navbar navbar-expand-lg bg-light px-3 pb-4 d-flex justify-content-between">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex align-items-center">
        <h4>Skimmed off Reality</h4>
      </div>
    </router-link>
    <div class="navbar-links pe-5" id="navbarText">
      <ul class="navbar-nav bg-light text-center">
        <li>
          <router-link :to="{ name: 'Home' }"
            class="text-dark border-bottom border-dark selectable text-uppercase me-3">
            Home
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }"
            class="text-dark border-bottom border-dark selectable text-uppercase me-3">
            About
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Pricing' }"
            class="text-dark border-bottom border-dark selectable text-uppercase me-3">
            Pricing
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Blog' }" class="text-dark border-bottom border-dark selectable text-uppercase">
            Blog
          </router-link>
        </li>

      </ul>

    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="modal" data-bs-target="#navbarModal"
      aria-controls="navbarModal" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <button class="border bg-dark me-5 px-4 py-1 inquire">Contact</button>

  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }

}

@media screen and (max-width: 1000px) {
  .navbar-links {
    display: none;
  }

  .inquire {
    display: none;
  }

}
</style>
