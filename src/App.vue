<template>
<div class="flex justify-between bg-black">
<left-nav-bar class="h-screen bg-slate-700 items-center ml-10 w-1/5 rounded-lg"/>
<router-view class="w-1/3 bg-gray-900 items-center "/>
<right-nav-bar class="h-screen bg-slate-700 items-center mr-10 w-1/5 rounded-lg" />
</div>
</template>

<script>
import LeftNavBar from './components/LeftNavBar.vue'
import RightNavBar from './components/RightNavBar.vue'

export default {
  name: 'App',
  components: {
    LeftNavBar,
    RightNavBar

  }

}
</script>
