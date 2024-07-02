<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar pt-3">
      <div class="justify-content-end pe-4">
        <img src="../../assets/images/Group 22.svg" alt="" class="img-fluid" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
        style="flex-grow: 1"
      >
        <ul class="navbar-nav fs-6 fw-bold">
          <li class="nav-item">
            <a class="nav-link text-success" href="{{ url_for('home') }}"
              >Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ url_for('contact') }}"
              >Menu <img src="../../assets/images/Group 1.svg" alt="" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ url_for('contact') }}"
              >Services <img src="../../assets/images/Group 1.svg" alt=""
            /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ url_for('contact') }}">Offers </a>
          </li>
        </ul>
      </div>
      <div class="gap-5 ms-auto d-none d-lg-flex">
        <img src="../../assets/images/vector.svg" alt="" class="img-fluid" />
        <img
          src="../../assets/images/fi-rr-shopping-bag.svg"
          alt=""
          class="img-fluid"
        />
        <button class="btn justify-content-between d-flex text-white" style="background: #39db4a">
          <img
            src="../../assets/images/fi-rr-phone-call.svg"
            class="img-fluid w-25 me-3"
            alt=""
          />
          Contact
          
        </button>
      </div>
    </nav>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap");

#app {
  font-family: "Plus jakarta Sans";
}

.barre {
  background: #f4eefa;
}
</style>