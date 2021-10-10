<template>
  <div id="image" :style="style">
  </div>
</template>
<script>
import { createApi } from 'unsplash-js'

export default {
  data() {
    return {
      unsplash: null,
      photo: '',
    }
  },
  computed: {
    style(){
      return {
        backgroundImage: `url('${this.photo}')`
      }
    },
    tag(){
      const path = this.$route?.path || ''
      return path.replace(/[^a-zA-Z0-9]/gi,'');
    },
  },
  mounted() {
    this.unsplash = createApi({
      apiUrl: 'https://something-to-draw.herokuapp.com/',
    })

    // this.getPhoto()
    this.getStaticPhoto()
  },
  methods: {
    getStaticPhoto(){
      console.log("PHOHOW", this.tax)
      this.photo = 'https://images.unsplash.com/photo-1632475999234-a1c7f1511c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY1ODd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzM4OTk5Mjg&ixlib=rb-1.2.1&q=80&w=1080'
    },
    async getPhoto() {
      const query = this.tag ?  { query: this.tag} : {}

      const resp = await this.unsplash.photos.getRandom(query )
      this.photo = resp.response.urls.regular
    },
  },
}
</script>
<style>
#image{
  width: 100%;
  height:100%;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

}

</style>
