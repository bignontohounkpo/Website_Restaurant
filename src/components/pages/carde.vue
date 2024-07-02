<template>
    <div >
      <div class="row align-items-center ">
        <div class="col-lg-4">
          <img :src="imageSrc" class="img-fluid rounded-2" alt="Product Image">
        </div>
        <div class="col-lg-8">
          <div class=" lh-1 p-2">
            <p class=" fw-bold">{{ title }}</p>
            <div class="d-flex align-items-center ">
              <div v-for="(star, index) in 5" :key="index" class="star" @click="rate(index + 1)">
              <P>  <i :class="index < rating ? 'fas fa-star text-warning' : 'far fa-star'"></i></P>
              </div>
            </div>
            <p class="card-price fw-bold"> ${{ price }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        rating: 0
      }
    },
    methods: {
      rate(index) {
        this.rating = index;
      }
    }
  }
  </script>
  
  <style scoped>
  .star {
    cursor: pointer;
    margin-right: 0.25rem;
  }
  </style>
  