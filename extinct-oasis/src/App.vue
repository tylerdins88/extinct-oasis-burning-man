<script setup>
import ExplorationNav from "./components/ExplorationNav.vue";
</script>

<template>
  <div class="aroundEmblem">
    <a href="https://burningman.org" target="_blank">
      <img
        src="./assets/extinct-oasis-banner.png"
        class="emblem box"
        alt="Extinct Oasis Emblem"
      />
    </a>
  </div>
  <ExplorationNav />
  <RouterView />
</template>

<style>
.aroundEmblem {
  padding: 30px;
}
.emblem {
  height: 200px;
}

.box {
  --mask: linear-gradient(#000 0 0) center/calc(100% - 60px) calc(100% - 60px)
      no-repeat,
    conic-gradient(from 135deg at top, #0000, #000 1deg 89deg, #0000 90deg) 0 0 /60px
      30px space no-repeat,
    conic-gradient(from -45deg at bottom, #0000, #000 1deg 89deg, #0000 90deg) 0
      100%/60px 30px space no-repeat,
    conic-gradient(from 45deg at left, #0000, #000 1deg 89deg, #0000 90deg) 0 0 /30px
      60px no-repeat space,
    conic-gradient(from -135deg at right, #0000, #000 1deg 89deg, #0000 90deg)
      100% 0/30px 60px no-repeat space;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}

a:hover {
  filter: drop-shadow(0 0 2em #ffd39b);
}
</style>
