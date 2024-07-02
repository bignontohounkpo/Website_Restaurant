<template>
    <div class=" shadow-lg text-center rounded-3 bg-white py-4 p-2">
      <img :src="imageSrc" class="img-fluid w-25 pb-2" alt="Image">
      <div class="">
        <h5 class=" text fw-bold">{{ title }}</h5>
        <p class=" text">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageCard',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .text{
    color: #39db4a;
  }
  </style>
  