<template>
  <Mynavbar />
  <div class="container py-3">
    <div class="row align-items-center justify-content-between ">
      <div class="col-lg-6 text-lg-start text-center order-last order-lg-first ">
        <p class="fw-bold fs-1">
          Dive into Delights <br />
          Of Delectable <span style="color: #39db4a"> Food</span>
        </p>
        <p class="text-secondary">
          Where Each Plate Weaves a Story of Culinary <br />
          Mastery and Passionate Craftsmanship
        </p>
        <div class="d-flex gap-5">
          <button
            class="btn rounded-5 text-white btn-lg fw-bold"
            style="background: #39db4a"
          >
            Order Now
          </button>
          <p class="text-secondary fw-bold pt-2">Watch Video</p>
          <p class=" ">
            <img
              src="../../assets/images/Polygon 1.svg"
              alt=""
              class="img-fluid text-center"
            />
          </p>
        </div>
      </div>
      <div class="col-lg-6 text-center">
        <div class="position-relative z-0">
          <img
            src="../../assets/images/Group 21.svg"
            alt=""
            class="img-fluid w-75 py-4"
          />
          <p
            class="text-danger position-absolute z-3 p-2 fw-bold bg-white shadow-lg rounded-start-4 arrow-box rounded-top-5 p-2"
            style="top: 22%; left: 0; transform: translateY(-50%)"
          >
            Hot spicy Food 🌶
          </p>
          <!-- <div
            class="row position-absolute bg-white justify-content-around"
            style="top: 80%; left: 0"
          >
            <div class="col-lg-5 shadow-lg rounded-4">
              <carde
                imageSrc="./image 14.svg"
                title="Spicy noodles"
                :price="29.99"
              />
            </div>
            <div class="col-lg-5 shadow-lg rounded-4">
              <carde
                imageSrc="./image 13.svg"
                title="Spicy noodles"
                :price="29.99"
              />
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="container text-center pt-3 lh-1">
    <p class="text-danger fw-bold">Customer Favorites</p>
    <p class="fw-bold fs-1">Popular Categories</p>
  </div>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-2 m-lg-2  col-md-5 col-sm-6  text-sm-center py-3">
        <div
          class="shadow-lg p-3 d-flex flex-column justify-content-center align-items-center rounded-3"
        >
          <div
            class="rounded-div d-flex justify-content-center align-items-center"
          >
            <img
              src="../../assets/images/pngwing 4.svg"
              alt=""
              class="img-fluid w-75"
            />
          </div>
          <span class="fw-bold mt-2">Main Dish</span>
          <span class="text-secondary">(86 dishes)</span>
        </div>
      </div>
      <div class="col-lg-2 m-lg-2  col-md-5 col-sm-6  text-sm-center py-3">
        <div
          class="shadow-lg p-3 d-flex flex-column justify-content-center align-items-center rounded-3"
        >
          <div
            class="rounded-div d-flex justify-content-center align-items-center"
          >
            <img
              src="../../assets/images/pngwing 6.svg"
              alt=""
              class="img-fluid w-75"
            />
          </div>
          <span class="fw-bold mt-2">Break Fast</span>
          <span class="text-secondary">(12 break fast)</span>
        </div>
      </div>
      <div class="col-lg-2 m-lg-2  col-md-5 col-sm-6  text-sm-center  py-3">
        <div
          class="shadow-lg p-3 d-flex flex-column justify-content-center align-items-center rounded-3"
        >
          <div
            class="rounded-div d-flex justify-content-center align-items-center"
          >
            <img
              src="../../assets/images/pngwing 3.svg"
              alt=""
              class="img-fluid w-75"
            />
          </div>
          <span class="fw-bold mt-2">Dessert</span>
          <span class="text-secondary">(48 dessert)</span>
        </div>
      </div>

      <div class="col-lg-2 m-lg-2  col-md-5 col-sm-6  text-sm-center py-3">
        <div
          class="shadow-lg p-3 d-flex flex-column justify-content-center align-items-center rounded-3"
        >
          <div
            class="rounded-div d-flex justify-content-center align-items-center"
          >
            <img
              src="../../assets/images/pngwing 7.svg"
              alt=""
              class="img-fluid w-50"
            />
          </div>
          <span class="fw-bold mt-2">Browse All</span>
          <span class="text-secondary">(255 Items)</span>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-4">
    <p class="text-danger fw-bold">Special Dishes</p>
    <p class="fw-bold fs-2">
      <span>Standout Dishes </span> <br />
      <span>From Our Menu</span>
    </p>
    <div class="d-flex justify-content-between">
      <img
        src="../../assets/images/Group 1 (1).svg"
        alt=""
        class="img-fluid d-flex align-items-center justify-content-center p-2"
        style="
          border-radius: 50%;
          height: 50px;
          width: 50px;
          background: #efefef;
        "
      />
      <img
        src="../../assets/images/Group2.svg "
        alt=""
        class="img-fluid d-flex align-items-center justify-content-center p-2"
        style="
          border-radius: 50%;
          background: #39db4a;
          height: 50px;
          width: 50px;
        "
      />
    </div>
  </div>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-lg-3 text-md-center col-md-6 m-3 ">
        <card
          image="./Fattoush salad.svg"
          title="Fattoush salad"
          subtitle="Description of the item"
          price="24.00"
          rating="4.9"
        />
      </div>
      <div class="col-lg-3 m-3 text-md-center col-md-6">
        <card
          image="./Vegetable salad.svg"
          title="Vegetable salad"
          subtitle="Description of the item"
          price="26.00"
          rating="4.6"
        />
      </div>
      <div class="col-lg-3 m-3 text-md-center col-md-6">
        <card
          image="./Egg salad.svg"
          title="Egg vegi salad"
          subtitle="Description of the item"
          price="23.00"
          rating="4.5"
        />
      </div>
    </div>
  </div>
  <div class="container py-4">
    <div class="row justify-content-center align-items-center py-5">
      <div class="col-lg-6 col-md-6 col-sm-8">
        <div class="position-relative d-inline-block">
          <img
            src="../../assets/images/Mask group.svg"
            alt=""
            class="img-fluid w-50"
          />
          <div class="d-flex justify-content-around">
            <p class="icon-left">😋</p>
            <p class="icon-right">🍕</p>
          </div>
          <div
            class="position-absolute bottom-0 start-50 translate-middle-x
             p-2 shadow-lg bg-white rounded-start-4 arrow-box rounded-top-5 p-2">
            <p class="mb-0">Our Best Chef 😁</p>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 col-sm-8 lh-lg">
        <p class="text-danger fw-bold">Testimonials</p>
        <p class="fw-bold fs-1 lh-lg">
          What Our Customers <br />
          Say About Us
        </p>
        <p class="text-secindary">
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </p>
        <div class="d-flex justify-content-around">
          <AvatarGroup>
            <Avatar image="./i1.svg" size="large" shape="circle" />
            <Avatar image="./i2.svg" size="large" shape="circle" />
            <Avatar image="./i3.svg" size="large" shape="circle" />
            <Avatar label="+2" shape="circle" size="large" />
          </AvatarGroup>
          <div class="lh-lg">
            <span class="fw-bold">Customer Feedback</span>
            <p class="fw-bolder">
              <i class="fas fa-star text-warning"></i> 4.9 (18.6k Reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 col-md-6">
        <p class="text-danger">Our Story & Services</p>
        <span class="fw-bold fs-2">Our Culinary Journey </span> <br />
        <span class="fw-bold fs-2">And Services </span>
        <p class="text-secondary align-items-center fw-bold">
          Rooted in passion, we curate unforgettable dining <br />
          experiences and offer exceptional services, <br />
          blending culinary artistry with warm hospitality.
        </p>
        <button
          class="btn text-white rounded-5 btn-lg"
          style="background: #39db4a"
        >
          Explore
        </button>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="row justify-content-center">
          <div class="col-lg-4 m-2">
            <Vert
              imageSrc="./i4.svg"
              title="CATERING"
              description="Delight your guests  with our flavors and  presentation your guests"
            />
          </div>
          <div class="col-lg-4 m-2">
            <Vert
              imageSrc="./i5.svg"
              title="FAST DELIVERYG"
              description="We deliver your order promptly to your door"
            />
          </div>
          <div class="col-lg-4 m-2">
            <Vert
              imageSrc="./I6.svg"
              title="ONLINE ORDERING"
              description="Explore menu & order  using our Online Ordering "
            />
          </div>
          <div class="col-lg-4 m-2">
            <Vert
              imageSrc="./i7.svg"
              title="Gift Cards"
              description="Give the gift of exceptional dining with Foodi Gift Cards "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import card from "./card.vue";
import Mynavbar from "./Mynavbar.vue";
import Footer from "./Footer.vue";
import Vert from "./Vert.vue";
import carde from "./carde.vue";
export default {
  name: "App",
  components: {
    Mynavbar,
    card,
    Footer,
    AvatarGroup,
    Avatar,
    Vert,
    carde,
  },
};
</script>

<style>
.rounded-div {
  background: #c1f1c6;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-left {
  position: absolute;
  top: 60%;
  left: 0px;
  font-size: 17px;
}

.icon-right {
  position: absolute;
  top: 60%;
  left: 48%;
  font-size: 17px;
}
</style>