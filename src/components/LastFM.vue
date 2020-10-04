<script>
import axios from 'axios';
export default {
  render() {
    return this.$scopedSlots.default({
      data: this.data,
      error: this.error,
      loading: this.loading
    })
  },
  data() {
    return {
      URL: "./.netlify/functions/apiproxy/",
      loading: false,
    }
  },
  methods: {
    async get() {
      this.loading = true
      try {
        const response = await axios.get(this.URL, {
          params: this.request
        })
        this.data = response.data
      } catch(error) {
        console.error(error)
        this.error = error
      }
      this.loading = false
    }
  },
  mounted() {
    this.get()
  },
  props: {
    request: {
      type: Object,
      required: true,
    }
  }
}
</script>