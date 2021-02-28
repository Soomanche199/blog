<template>
  <div>
    <ul class="navbar" :class="{ active: showSidebar }">
      <li class="navbar__header">
        <n-link to="/" class="navbar__logo">Sooman</n-link>
        <fa icon="times" class="navbar__toggle" @click.prevent="closeEmit" />
      </li>
      <li class="navbar__search">
        <v-input v-model="searchKeyword" placeholder="Search Articles...">
          <fa icon="search" />
        </v-input>
        <ul v-show="searchKeyword" class="search__list">
          <li
            v-for="article in articles"
            :key="article.slug"
            class="search__item"
          >
            <n-link
              class="search__link"
              :to="getRoute(article)"
              @click.native="clickArticle"
              >{{ article.title }}</n-link
            >
          </li>
        </ul>
      </li>
      <li class="navbar__link">
        <n-link to="/" @click.native="closeEmit">
          <fa icon="home" />
          Home
        </n-link>
      </li>
      <li v-for="(link, index) in links" :key="link" class="navbar__link">
        <n-link :to="'/' + link.toLowerCase()" @click.native="closeEmit">
          <fa :icon="icons[index]" />
          {{ link }}
        </n-link>
      </li>
    </ul>
    <div class="navbar__overlay" @click="closeEmit"></div>
  </div>
</template>

<script>
export default {
  name: 'VSideBar',
  props: {
    showSidebar: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    links: ['About', 'Portfolio', 'Blog', 'Contact'],
    icons: ['address-card', 'briefcase', 'pen', 'envelope'],
    searchKeyword: '',
    articles: [],
  }),
  watch: {
    async searchKeyword(keyword) {
      if (!keyword) {
        this.articles = []
        return
      }
      this.articles = await this.$content('blog', { deep: true })
        .limit(6)
        .search(keyword)
        .only(['title', 'slug', 'path'])
        .fetch()
    },
  },
  methods: {
    closeEmit() {
      this.$emit('toggle-sidebar', false)
    },
    clickArticle() {
      this.searchKeyword = ''
      this.closeEmit()
    },
    getRoute(article) {
      const path = article.path.split('/')
      return {
        name: 'blog-year-month-slug',
        params: {
          year: path[2],
          month: path[3],
          slug: path[4],
        },
      }
    },
  },
}
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  height: 100vh;
  background-color: #1a2738;
  transform: translateX(-100%);
  transition: transform 0.5s;
  will-change: transform;
  z-index: 10;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.navbar__header {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #111b27;
}

.navbar__logo {
  font-size: 30px;
  padding-left: 45px;
  text-decoration: none;
  color: white;
  font-family: 'Dancing Script', cursive;
}

.navbar__toggle {
  color: #7589a2;
  font-size: 30px;
  margin-right: 35px;
}

.navbar__search {
  padding-top: 25px;
  padding-bottom: 65px;
  position: relative;
  width: 260px;
  margin: 0 auto;

  & .input-group {
    color: #7589a2;
  }

  & .search__list {
    background-color: #172331;
    position: absolute;
    z-index: 2;
    width: 100%;
    margin-top: 2px;

    & .search__link {
      padding: 8px 16px;
      display: block;
      text-decoration: none;
      color: currentColor;

      &:hover {
        color: #6a55fa;
      }
    }
  }
}

.navbar__link {
  line-height: 50px;
  font-weight: 500;

  & a {
    position: relative;
    color: #7589a2;
    text-decoration: none;
    display: block;
    padding-left: 40px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #111b27;
    }

    & svg {
      margin-right: 28px;
    }
  }

  & .nuxt-link-active:not([href='/']) {
    background-color: #00a9a2;
    color: white;
  }
}

.navbar__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}

.navbar.active {
  transform: translateX(0);

  & ~ .navbar__overlay {
    display: block;
  }
}

@media (min-width: 1264px) {
  .navbar {
    transform: translateX(0);
    width: 300px;
    z-index: 2;
  }
  .navbar__logo {
    padding-left: 0;
    margin: 0 auto;
  }
  .navbar__toggle {
    display: none;
  }
  .navbar__overlay {
    display: none;
  }
}
</style>
