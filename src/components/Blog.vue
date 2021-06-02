<template>
  <div>
    <h1>Últimas do blog</h1>
    <ul>
      <blog-item v-for="b in blogs" :key="b.title" :blog=b></blog-item>
    </ul>
  </div>
</template>
<script>
import BlogItem from "./BlogItem";

export default {
  data() {
    return {
      blogs: [
        {
          title: "teste",
          text: "1112 afçjalçfj lçfjadlj",
        },
        {
          title: "teste 2",
          text: "1232131830981 2381203981203821 0312 jh3 123hl12h",
        },
      ],
    };
  },
  components: {
    BlogItem,
  },
};
</script>
