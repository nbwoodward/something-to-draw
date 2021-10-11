<template>
  <div id="content">
    <Header :tag="tag" @new-tag="setTag" />

    <Loader v-if="fetching" />
    <Error v-else-if="error" :msg="error" />
    <div v-else id="image" :style="style"></div>
  </div>
</template>
<script>
import { createApi } from 'unsplash-js'

export default {
  props: {
    tag: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      unsplash: null,
      photo: '',
      fetching: false,
      error: '',
    }
  },
  computed: {
    style() {
      return {
        backgroundImage: `url('${this.photo}')`,
      }
    },
  },
  async mounted() {
    this.unsplash = createApi({
      apiUrl: 'https://something-to-draw.herokuapp.com/',
    })

    if (this.$route?.query?.p) {
      this.photo = this.getPhotoFromId(this.$route.query.p)
    } else {
      await this.getPhoto()
      // this.getStaticPhoto()
    }
  },
  methods: {
    getStaticPhoto() {
      this.photo = this.getPhotoFromId('photo-1632475999234-a1c7f1511c31')
    },
    getPhotoFromId(id) {
      return `https://images.unsplash.com/${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY1ODd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzM4OTk5Mjg&ixlib=rb-1.2.1&q=80&w=1080`
    },
    async getPhoto() {
      this.fetching = true
      const params = this.tag ? { query: this.tag } : {}

      try {
        const resp = await this.unsplash.photos.getRandom(params)
        this.photo = resp.response.urls.regular
      } catch {
        this.error = 'No photo found for search'
        this.fetching = false
        return
      }

      const photoId = /photo.+?(?=\?)/.exec(this.photo)[0]
      const query = { p: photoId }
      this.$router.push({ query })
      this.fetching = false
    },
    setTag(tag) {
      if (tag !== this.tag) {
        this.$router.push(`/${tag}`)
      } else {
        this.getPhoto()
      }
    },
  },
}
</script>
<style>
#content {
  padding-top: 50px;
  width: 100vw;
  height: 100vh;
}
#image {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
