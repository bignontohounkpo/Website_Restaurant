<template>
    <div class=" shadow-lg text-center rounded-3 bg-white">
      <img :src="imageSrc" class="img-fluid" alt="Image">
      <div class="">
        <h5 class=" text-success">{{ title }}</h5>
        <p class=" text-success">{{ description }}</p>
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
  .card {
    max-width: 300px;
    margin: auto;
  }
  .text-success {
    color: green;
  }
  </style>
  