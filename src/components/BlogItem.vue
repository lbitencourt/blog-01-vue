<template>
  <div>
    <h3>{{ blog.title }}</h3>
    <p>{{ blog.text }}</p>
  </div>
</template>

<script>
export default {
  props: [`blog`],
};
</script>
