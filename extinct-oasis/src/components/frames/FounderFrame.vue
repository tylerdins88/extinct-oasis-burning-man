<template>
  <div>
    <img class="picture" :src="founder.image" alt="Updates Image" />
    <p>{{ founder.name }}</p>
    <p>Got Dusty: {{ founder.years }} Times</p>
    <p>{{ founder.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    founder: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.picture {
  height: 200px;
}
</style>
