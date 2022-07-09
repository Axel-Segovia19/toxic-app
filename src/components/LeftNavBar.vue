<template>
  <div class="flex justify-between">
    <leftNav class="flex flex-col h-screen w-1/5 bg-slate-700 ml-10 rounded-lg items-center">
      <div class="flex">
        <my-svg-component name="toxic" class="w-40 h-36"/>
      </div>
      <div class="flex mt-12">
      <router-link to="/" class="text-4xl font-sans font-bold text-white">Home</router-link>
        
      </div>
      <div class="flex mt-12">
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