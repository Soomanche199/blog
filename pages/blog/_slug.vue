<template>
  <div class="container">
    <!--    <ul>-->
    <!--      <li-->
    <!--        v-for="link of article.toc"-->
    <!--        :key="link.id"-->
    <!--        :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"-->
    <!--      >-->
    <!--        <a :href="`#${link.id}`">{{ link.text }}</a>-->
    <!--      </li>-->
    <!--    </ul>-->
    <span class="article__publish-date"
      >{{ formatDate(article.createdAt) }} -
    </span>
    <span class="article__category">{{ article.category }}</span>
    <h1 class="article__title">{{ article.title }}</h1>
    <div class="article__writer"></div>

    <nuxt-content :document="article"></nuxt-content>

    <div class="article__meta">
      <ul class="tags">
        <li class="tags__item"><a href="#">Java</a></li>
        <li class="tags__item"><a href="#">Javascript</a></li>
        <li class="tags__item"><a href="#">Node.js</a></li>
        <li class="tags__item"><a href="#">Spring</a></li>
        <li class="tags__item"><a href="#">Linux</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import childTransition from '@/mixins/childTransition'

export default {
  name: 'Slug',
  mixins: [childTransition],
  data: () => ({
    article: [],
  }),
  async fetch() {
    this.article = await this.$content(
      'articles',
      this.$route.params.slug
    ).fetch()
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>
.article__publish-date {
  color: #7589a2;
  font-size: 14px;
}

.article__category {
  color: #6a55fa;
  text-transform: uppercase;
  font-size: 14px;
}

.article__title {
  color: #00a9a2;
  font-size: 32px;
}

.article__meta {
  margin-top: 40px;
}

.tags {
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
}

.tags__item {
  display: inline-block;
  background-color: #6a55fa;
  margin-right: 8px;
  margin-bottom: 8px;
  border-radius: 3px;

  & a {
    text-decoration: none;
    color: #1a2738;
    padding: 5px 10px;
    display: block;
  }
}

@media (min-width: 960px) {
  .article__publish-date,
  .article__category {
    font-size: 16px;
  }
  .article__title {
    font-size: 48px;
  }
}
</style>
