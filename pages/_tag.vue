<template>
  <Photo :tag="tag"/>
</template>

<script>
export default {
  asyncData({ params }) {
    const tag = params.tag
    return { tag }
  },
}
</script>
