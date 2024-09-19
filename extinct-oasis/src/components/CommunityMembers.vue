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
import Joe from "../assets/foundingmembers/joe-double-jointed.jpg";
import Lauren from "../assets/foundingmembers/lauren-the-crusher.jpg";
import Carter from "../assets/foundingmembers/carter-mr-kickstand.jpg";
import Ashley from "../assets/foundingmembers/ashley-the-smile.jpg";

export default {
  components: {
    Founder,
  },
  data() {
    return {
      founder: [
        {
          name: "ZachMANJAMIN",
          years: 5,
          description:
            "This guy is the camp lead. He's gonna make sure your misted till your actually dripping wet and shivering cold. He'll make sure you got shade over you and a good seat beneath you. He'll rally the troops and throw a day party like you havent seen. Don't miss out when he says its time to gooooo!",
          image: Zach,
        },
        {
          name: "Beth",
          years: 4,
          description:
            "Meet camp mom. Shes gonna keep shit in line. Mess up and you'll be pouring 2 shots of Jamo, 1 for her and 1 for you. She's about the art and the fun. Always down for a day adventure and ready for a sunrise.",
          image: Beth,
        },
        {
          name: "Double Jointed",
          years: 5,
          description:
            "Joe AKA Double Jointed is the music lighting magician. He delivers the freshest beats for every soiree the camp offers. Gonna have you moving those bones like you've never danced before. Not to mention when the sun goes down he'll make sure the place is lit up! Brings the beats and the lights, what more do you need?",
          image: Joe,
        },
        {
          name: "The Crusher",
          years: 3,
          description:
            "Watchout if the Crusher is here. Shes gonna decorate the shit out of your camp, you, your bike, your hair, everything. She does it. The ultimate designer. Any disco spinning she had a hand in. The plants flowing are her too. Shes gonna deliver the laughs and the decor, guaranteed.",
          image: Lauren,
        },
        {
          name: "Mr. Kickstand",
          years: 2,
          description:
            "Mr. Kickstand is the ultimate hype guy. Gonna get you pumped up and ready to jam. He'll serve you champagne, fry chicken, and straight party. He's always down to particpate and help out. He's one of the funnest guys on the playa. Do not miss your chance to rage with this one, but watchout his bike has no kickstand!",
          image: Carter,
        },
        {
          name: "Ashley",
          years: 2,
          description:
            "Ashley is the most participating, helpful, volunteer you didn't know exsisted. She serves drinks, serves chicken & waffles, pops champagne and gets after it. Always rocking the best smile on the playa its hard not notice her happiness radiating. Don't look to far if you need help or someone to lift you up. Shell make sure your set!",
          image: Ashley,
        },
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
