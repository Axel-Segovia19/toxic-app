<template>
  <div >
    <div class="flex justify-center mt-2">
      <form-tag class="w-full  border flex items-center flex-col bg-gray">
        <post-form
          v-model="toxic.toxicTitle" type="text" required="true"
          :value="toxic.toxicTitle" name="title" placeholder="Text here">
        </post-form>
        <post-form
          v-model="toxic.deletetimer" type="number" required="true"
           :value="toxic.deletetimer" name="timer" placeholder="timer">
        </post-form>
        <post-form
          v-model="toxic.toxicDescription" type="text" required="true"
           :value="toxic.toxicDescription" name="description">
        </post-form>
        <button class="flex bg-black w-16" @click="savePostForm">Submit</button>
      </form-tag>
    </div>
      <div class="flex flex-col ">   
         <div class="flex text-white flex-col"  v-for="post in posts" :key="post.id">
              <h1>Name</h1>
              <h6>Time Posted: </h6>   
              <h1>{{post.Object.toxicTitle}}</h1>     
              <h1>{{post.Object.deletetimer}}</h1>     
              <h1>{{post.Object.toxicDescription}}</h1>     
         </div>
      </div>
  </div>
</template>

<script>
import FormTag from "./FormTag.vue";
import PostForm from "./PostForm.vue";

export default {
  components: { PostForm, FormTag },

  data() {
    return {
      id: 0,
      posts: [],
      toxic: {
        toxicTitle: "",
        deletetimer: 0,
        toxicDescription: "",
      },
    };
  },
  methods:{
    savePostForm(){
      this.posts.push({id: this.id++, Object: this.toxic})
      console.log(this.posts)
    }
  },
};
</script>

<style>
</style>