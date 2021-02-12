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

    <nuxt-content :document="article" />

    <div class="article__meta">
      <ul class="tags">
        <li v-for="tag in article.tags" :key="tag" class="tags__item">
          <a href="#">{{ tag }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import childTransition from '@/mixins/childTransition'
import getSiteMeta from '@/utils/getSiteMeta'
import metaGlobal from '@/utils/metaGlobal'

export default {
  name: 'Slug',
  mixins: [childTransition],
  async asyncData({ $content, params }) {
    return { article: await $content('blog', params.slug).fetch() }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        {
          name: 'twitter:data2',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: metaGlobal.siteUrl,
        },
      ],
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: 'article',
        title: this.article.title,
        description: this.article.description,
        url: `${metaGlobal.siteUrl}/blog/${this.$route.params.slug}`,
        mainImage:
          this.article.image &&
          require(`~/assets/images/${this.article.image}`).src,
      }
      return getSiteMeta(metaData)
    },
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
