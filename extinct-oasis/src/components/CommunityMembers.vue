<template>
  <div>
    <h2>Founding Members</h2>
    <p>
      The following campmates helped start the Oasis. In the desert of 2023
      during MudMan a select 7 friends faced the rain. They danced, they sang,
      they cried, and they smiled. They explored the swamping desert and
      searched for relief. In the end the Oasis was found and the legend lives
      on.
    </p>

    <!-- Add a container for the founders and apply flexbox styling -->
    <div class="founder-container">
      <div
        v-for="(founder, index) in founder"
        :key="index"
        class="founder-item"
      >
        <Founder :founder="founder" />
      </div>
    </div>

    <h2>Camp Members</h2>
  </div>
</template>

<script>
import Founder from "./frames/FounderFrame.vue";

import Zach from "../assets/foundingmembers/zach-camp-leader.jpg";
import Beth from "../assets/foundingmembers/beth-camp-leader.jpg";

export default {
  components: {
    Founder,
  },
  data() {
    return {
      founder: [
        { name: "ZachMANJAMIN", years: 5, image: Zach },
        { name: "Beth", years: 4, image: Beth },
      ],
    };
  },
};
</script>

<style scoped>
.founder-container {
  display: flex; /* Enables flexbox layout */
  justify-content: space-between; /* Ensures space between each founder */
  gap: 20px; /* Add gap between items (alternative to space-between) */
  flex-wrap: wrap; /* Allows wrapping if the viewport is too narrow */
}

.founder-item {
  flex: 1 1 calc(33.33% - 20px); /* Adjust width and make it responsive */
  text-align: center; /* Centers content inside each founder item */
}
</style>
