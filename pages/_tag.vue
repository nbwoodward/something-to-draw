<template>
  <Photo :tag="tag"/>
</template>

<script>
export default {
  asyncData({ params }) {
    const tag = params.tag
    return { tag }
  },
  head() {
    return {
      title: `${this.tag} - a random ${this.tag} photo to draw`
    }
  }
}
</script>
