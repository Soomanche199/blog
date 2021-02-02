<template>
  <div class="container">
    <v-card
      v-for="(article, index) in articles"
      :key="article.slug"
      :class="{ alt: index % 2 === 1 }"
      :article="article"
    />

    <v-pagination
      v-if="pagination.pages.length > 0"
      :pages="pagination.pages"
    />
  </div>
</template>

<script>
import childTransition from '@/mixins/childTransition'

export default {
  name: 'Index',
  mixins: [childTransition],
  data: () => ({
    articles: [],
    pagination: {
      articlesPerPage: 4,
      currentPage: 1,
      displayPaginationLength: 10,
      totalArticleLength: 0,
      pages: [],
      endPageNumber: 0,
      startPageNumber: 0,
    },
  }),
  async fetch() {
    this.pagination.currentPage = this.$route.query.page || 1

    this.pagination.totalArticleLength = (
      await this.$content('articles').only('slug').fetch()
    ).length

    this.articles = await this.$content('articles')
      .limit(this.pagination.articlesPerPage)
      .skip((this.pagination.currentPage - 1) * this.pagination.articlesPerPage)
      .fetch()

    let endPageNumber =
      Math.ceil(
        this.pagination.currentPage / this.pagination.displayPaginationLength
      ) * this.pagination.displayPaginationLength

    const startPageNumber =
      endPageNumber - this.pagination.displayPaginationLength + 1

    const tempEndPageNumber = Math.ceil(
      this.pagination.totalArticleLength / this.pagination.articlesPerPage
    )
    endPageNumber = Math.min(tempEndPageNumber, endPageNumber)

    // const hasPrev = startPageNumber !== 1
    //
    // const hasNext = endPageNumber * pageOption.perPage < totalLength

    this.pagination.pages = []
    for (let i = startPageNumber; i <= endPageNumber; i++) {
      this.pagination.pages.push(i)
    }
  },
  watch: {
    '$route.query': {
      handler: '$fetch',
    },
  },
}
</script>
