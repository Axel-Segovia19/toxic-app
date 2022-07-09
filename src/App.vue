<template>
<left-nav-bar />
<router-view/>
<right-nav-bar/>
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
