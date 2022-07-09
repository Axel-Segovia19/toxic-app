<template>
<div class="flex flex-col items-center bg-black">
    <form-tag

    >
      <post-form>
        v-model="toxic.toxicTitle" type="text" required="true" label="Title"
        :value="toxic.toxicTitle" name="title"
      </post-form>
      <post-form>
        v-model="toxic.deletetimer" type="number" required="true" label="Timer"
        :value="toxic.deletetimer" name="timer"
      </post-form>
      <post-form>
        v-model="toxic.toxicDescription" type="text" required="true"
        label="Description" :value="toxic.toxicDescription" name="description"
      </post-form>
    </form-tag>
  </div>
</template>

<script>
import FormTag from "./FormTag.vue";
import PostForm from "./PostForm.vue";
export default {
  components: { PostForm, FormTag },

  data() {
    return {
      toxic: {
        toxicTitle: "",
        deletetimer: 0,
        toxicDescription: "",
      },
    };
  },
};
</script>

<style>
</style>