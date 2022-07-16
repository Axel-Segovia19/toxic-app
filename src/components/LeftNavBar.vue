<template>
  <div >
    <leftNav class="flex flex-col">
      <div class="flex justify-center">
        <my-svg-component name="toxic" class="w-40 h-36"/>
      </div>
      <div class="flex mt-12 justify-center">
      <router-link to="/" class="text-4xl font-sans font-bold text-white">Home</router-link>
        
      </div>
      <div class="flex mt-12 justify-center">
      <router-link to="/profile" class="text-4xl font-bold text-white">Profile</router-link>
        
      </div>
    </leftNav>
  </div>
</template>

<script>
export default {
};
</script>

<style>
</style>