<template lang="pug">
  v-content
    v-fade-transition(mode="out-in")
      router-view(:key="$route.path")
</template>
