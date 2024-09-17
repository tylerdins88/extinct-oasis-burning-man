<template>
  <div class="links">
    <nav>
      <RouterLink to="/">Homepage</RouterLink>
      <RouterLink to="/campevents">Camp Events</RouterLink>
      <RouterLink to="/oasisfun">Gallery</RouterLink>
      <RouterLink to="/members">Oasis Community</RouterLink>
    </nav>
  </div>
</template>

<style>
.links {
  background-color: green;
  display: flex;
  width: fit-content;
  justify-content: center; /* Center the nav horizontally within the container */
}

nav {
  display: flex;
  gap: 20px; /* Adds space between the links */
  justify-content: center; /* Center the links within the nav */
  align-items: center; /* Vertically center the links (optional) */
}
</style>
