<template>
  <nav class="navbar navbar-expand-lg barlow bg-body-bg d-flex align-content-center elevation-2">
    <div class="d-flex align-items-center ms-3">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <h1>Unscripted</h1>
      </router-link>
    </div>
    <div class="navbar-links position-absolute top-2 start-50 translate-middle-x" id="navbarText">
      <ul class="navbar-nav text-center">
        <li>
          <router-link :to="{ name: 'Home' }"
            class="text-dark border-bottom border-dark selectable text-uppercase me-3 fs-4">
            Home
          </router-link>
        </li>
        <!-- <li>
          <router-link :to="{ name: 'About' }"
            class="text-dark border-bottom border-dark selectable text-uppercase me-3 fs-4">
            About
          </router-link>
        </li> -->
        <li>
          <router-link :to="{ name: 'Pricing' }"
            class="text-dark border-bottom border-dark selectable text-uppercase me-3 fs-4">
            Investment
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'Blog' }"
            class="text-dark border-bottom border-dark selectable text-uppercase me-3 fs-4">
            Blog
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Portfolio' }"
            class="text-dark border-bottom border-dark selectable text-uppercase fs-4">
            Portfolio
          </router-link>
        </li>

      </ul>

    </div>
    <div></div>
    <button class="navbar-toggler mobile-drop" type="button" data-bs-toggle="modal" data-bs-target="#navbarModal"
      aria-controls="navbarModal" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link :to="{ name: 'Contact' }">
      <button class="border bg-dark me-5 px-4 py-1 mobile-none lets-chat fs-1">Lets Chat</button>
    </router-link>

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
.lets-chat {
  position: absolute;
  right: 1rem;
  bottom: -2rem;
}

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

.navbar-center {

  position: relative;
  top: .5rem;
  text-align: center;
  left: 20%;
  /* margin-top: -50px; */
  /* margin-left: -100px; */
}


@media screen and (max-width: 1000px) {
  nav {
    height: 64px;
  }

  .mobile-drop {
    position: absolute;
    right: 1rem;
  }

  .navbar-links {
    display: none;
  }

  .mobile-none {
    display: none;
  }

}
</style>
