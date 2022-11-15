<template>
  <div class="modal fade" id="navbarModal" tabindex="-1" aria-labelledby="navbarModal" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen-lg-down">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div class="border-bottom border-dark mb-3 pb-4">
            <i class="mdi mdi-close fs-1" data-bs-dismiss="modal"></i>
          </div>
          <div class="navbar-links" id="navbarText">
            <ul class="navbar-nav text-center">
              <li class="mb-5 border-bottom border-dark pb-2">
                <router-link :to="{ name: 'Home' }" class="fs-1 text-dark selectable text-uppercase">
                  Home
                </router-link>
              </li>
              <li class="mb-5 border-bottom border-dark pb-2">
                <router-link :to="{ name: 'About' }" class="fs-1 text-dark selectable text-uppercase">
                  About
                </router-link>
              </li>
              <li class="mb-5 border-bottom border-dark pb-2">
                <router-link :to="{ name: 'About' }" class="fs-1 text-dark selectable text-uppercase">
                  Pricing
                </router-link>
              </li>
              <li class="mb-5 border-bottom border-dark pb-2">
                <router-link :to="{ name: 'About' }" class="fs-1 text-dark selectable text-uppercase">
                  Contact
                </router-link>
              </li>

            </ul>
            <button class="border bg-dark px-4 py-1 fs-1 inquire">Inquire</button>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>