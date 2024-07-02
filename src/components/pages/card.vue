<!-- 
<template>
    <div class="shadow-lg pt-4 pb-5 position-relative d-flex flex-column align-items-center rounded-4">
      <div class="rounded-d d-flex justify-content-center align-items-center mb-3">
        <img :src="image" alt="" class="img-fluid w-50">
      </div>
      <div class="text-left w-100 px-3">
        <span class="fw-bold d-block">{{ title }}</span>
        <span class="text-secondary d-block">{{ subtitle }}</span>
        <div class="d-flex justify-content-between">
          <span class="fw-bold"> <span class="text-danger">$</span>{{ price }}</span>
          <div class="text-warning d-flex align-items-center">
            <i class="fas fa-star"></i>
            <span class="text-secondary fw-bold ms-1">{{ rating }}</span>
          </div>
        </div>
      </div>
      <div 
        class="heart-icon position-absolute" 
        :class="{ 'active': isFavorited }" 
        @click="toggleFavorite"
      >
        <i :class="[isFavorited ? 'fas' : 'far', 'fa-heart']"></i>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      image: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      },
      rating: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isFavorited: false
      }
    },
    methods: {
      toggleFavorite() {
        this.isFavorited = !this.isFavorited;
      }
    }
  }
  </script>
  
  <style scoped>
  .rounded-d {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-warning {
    color: #ffc107; /* Yellow color for the star */
  }
  .text-left {
    text-align: left;
  }
  .position-relative {
    position: relative;
  }
  .heart-icon {
    top: 0%;
    right: 0px;
    background: #39DB4A;

    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  .heart-icon i {
    color: white;
  }
  .heart-icon.active i {
    color: white;
  }
  </style>
   -->

<template>
  <div class="card">
    <Carousel :value="products" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
      <div class="shadow-lg pt-4 pb-5 position-relative d-flex flex-column align-items-center rounded-4">
        <div class="rounded-d d-flex justify-content-center align-items-center mb-3">
          <img :src="image" alt="" class="img-fluid w-50">
        </div>
        <div class="text-left w-100 px-3">
          <span class="fw-bold d-block">{{ title }}</span>
          <span class="text-secondary d-block">{{ subtitle }}</span>
          <div class="d-flex justify-content-between">
            <span class="fw-bold"> <span class="text-danger">$</span>{{ price }}</span>
            <div class="text-warning d-flex align-items-center">
              <i class="fas fa-star"></i>
              <span class="text-secondary fw-bold ms-1">{{ rating }}</span>
            </div>
          </div>
        </div>
        <div class="heart-icon position-absolute" :class="{ 'active': isFavorited }" @click="toggleFavorite">
          <i :class="[isFavorited ? 'fas' : 'far', 'fa-heart']"></i>
        </div>
      </div>
    </Carousel>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  data() {
    return {
      products: null,
      responsiveOptions: [
        {
          breakpoint: "1400px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "1199px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "767px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "575px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
      isFavorited: false
    };
  },

  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    rating: {
      type: String,
      required: true
    }
  },

  methods: {
    toggleFavorite() {
      this.isFavorited = !this.isFavorited;
    }
  },
};
</script>

<style scoped>
.rounded-d {
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-warning {
  color: #ffc107; /* Yellow color for the star */
}
.text-left {
  text-align: left;
}
.position-relative {
  position: relative;
}
.heart-icon {
  top: 0%;
  right: 0px;
  background: #39DB4A;

  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;
}
.heart-icon i {
  color: white;
}
.heart-icon.active i {
  color: white;
}
</style>
