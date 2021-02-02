<template>
  <div class="container">
    <v-card
      v-for="(article, index) in articles"
      :key="article.slug"
      :class="{ alt: index % 2 === 1 }"
      :article="article"
    />

    <!--    <pagination :pages="pagination.pages" />-->
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
    articles: [],
  }),
  async fetch() {
    this.articles = await this.$content('articles')
      .sortBy('createdAt', 'desc')
      .fetch()
  },
}
</script>
