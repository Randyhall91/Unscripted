<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <div class="card border-dark">
          <div class="card-body">
            <h4 class="card-title">Contact Me</h4>
            <form @submit="handleSubmit">
              <div class="mb-3">
                <label for="name" class="form-label">Family Name</label>
                <input type="text" required class="form-control" name="name" id="name" aria-describedby="name"
                  placeholder="Name">
              </div>
              <div class="mb-3">
                <label for="familyCount" class="form-label">How many members of your family are there?</label>
                <select class="form-select form-select-sm" required name="familyCount" id="familyCount">
                  <option selected>Select one</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="kids" class="form-label">What ages are your kids(if any)</label>
                <input type="text" class="form-control" name="kids" id="kids" aria-describedby="numberOfKids"
                  placeholder="kids">
              </div>
              <div class="mb-3">
                <label for="familyDescription" class="form-label">What is the first word that comes to mind to describe
                  your family?</label>
                <input type="text" class="form-control" name="familyDescription" id="familyDescription"
                  aria-describedby="familyDescription" placeholder="family descriptor">
              </div>

            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-6"></div>
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