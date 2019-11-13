export default {
  namespaced: true,
  actions: {
    async addReview (store, review) {
      try {
        const formData = new FormData();
        formData.append('text', review.text)
        formData.append('photo', review.photo)
        formData.append('author', review.author)
        formData.append('occ', review.occ)
        await this.$axios.post('/reviews', formData)

      } catch (error) {
        
      }
    }

  }

};

