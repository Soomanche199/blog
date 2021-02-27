<template>
  <div class="page portfolio" data-simplebar>
    <div class="container">
      <v-modal v-if="showModal" @close="showModal = false">
        <v-image :src="'/portfolio/' + articles[targetIndex].image"></v-image>
        <h2>{{ articles[targetIndex].title }}</h2>
        <h3>
          {{ articles[targetIndex].manMonth }} |
          {{ articles[targetIndex].period }}
        </h3>
        <p>
          {{ articles[targetIndex].description }}
        </p>
        <a
          v-if="articles[targetIndex].url"
          class="portfolio__url"
          :href="articles[targetIndex].url"
        >
          <fa icon="globe-asia" /> {{ articles[targetIndex].url }}
        </a>
        <ul class="portfolio__stacks">
          <li v-for="stack in articles[targetIndex].stacks" :key="stack">
            {{ stack }}
          </li>
        </ul>
      </v-modal>
      <div class="tab-wrapper">
        <ul class="tab">
          <li class="tab__item active" data-filter="*" @click="tabActive">
            All
          </li>
          <li class="tab__item" data-filter=".private" @click="tabActive">
            Private
          </li>
          <li class="tab__item" data-filter=".commercial" @click="tabActive">
            Commercial
          </li>
        </ul>
      </div>
      <div class="portfolio__content">
        <div
          v-for="(article, index) in articles"
          :key="article.slug"
          class="portfolio__card-wrapper"
          :class="article.type"
          @click="openModal(index)"
        >
          <figure class="portfolio__card">
            <img :src="getImage(article.image)" />
            <figcaption>
              <h3>{{ article.title }}</h3>
              <p>{{ article.role }}</p>
              <span>
                <v-svg
                  v-for="icon in article.icons"
                  :key="icon.tag"
                  :view-box="icon.viewBox"
                  :width="icon.width"
                  :height="icon.height"
                >
                  <component :is="icon.tag" />
                </v-svg>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
    <v-footer />
  </div>
</template>

<script>
import parentTransition from '@/mixins/parentTransition'

export default {
  name: 'Portfolio',
  mixins: [parentTransition],
  data: () => ({
    isotope: {},
    articles: [],
    targetIndex: 0,
    showModal: false,
  }),
  async fetch() {
    this.articles = await this.$content('portfolio')
      .sortBy('createdAt', 'desc')
      .fetch()
  },
  mounted() {
    require('simplebar')
    const imagesLoaded = require('imagesloaded')
    const Isotope = require('isotope-layout')
    const grid = document.querySelector('.portfolio__content')

    this.isotope = new Isotope(grid, {
      percentPosition: true,
      itemSelector: '.portfolio__card-wrapper',
    })

    imagesLoaded(grid).on('progress', () => {
      // layout Isotope after each image loads
      this.isotope.layout()
    })
  },
  methods: {
    tabActive(e) {
      const tabItems = this.$el.querySelectorAll('.tab__item')
      tabItems.forEach((i) => {
        i.classList.remove('active')
      })
      e.target.classList.add('active')

      const filterValue = e.target.getAttribute('data-filter')
      this.isotope.arrange({
        filter: filterValue,
        hiddenStyle: {
          transform: 'scale(.2) skew(30deg)',
          opacity: 0,
        },
        visibleStyle: {
          transform: 'scale(1) skew(0deg)',
          opacity: 1,
        },
        transitionDuration: '.5s',
      })
    },
    getImage(src) {
      return require(`~/assets/images/portfolio/${src}`)
    },
    openModal(index) {
      this.showModal = true
      this.targetIndex = index
    },
  },
}
</script>

<style scoped>
.tab-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}

.tab {
  display: flex;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

.tab__item {
  padding: 10px 25px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  border-radius: 50px;

  &.active {
    color: white;
    background-color: #00a9a2;
  }
}

.portfolio__content {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}

.portfolio__card-wrapper {
  padding: 0 15px;
  width: 100%;
}

.portfolio__card {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  margin-bottom: 15px;
  transition: background-color 0.3s;
  will-change: top, left;
  cursor: pointer;

  & img {
    width: 100%;
    transition: opacity 0.3s;
  }

  & figcaption {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s;
    margin-top: 0;
    pointer-events: none;

    & h3 {
      color: white;
    }

    & p {
      position: absolute;
      left: 0;
      bottom: 0;
      margin: 20px;
      transform: translateX(-200%);
      transition: transform 0.3s;
      color: white;
      font-size: 14px;

      &::before {
        content: '# ';
        font-weight: 700;
      }
    }

    & span {
      position: absolute;
      display: inline-block;
      right: 0;
      bottom: 0;
      margin: 20px;
      transform: translateX(200%);
      transition: transform 0.3s;
    }

    & svg {
      color: white;
      font-size: 24px;
    }
  }
}

.portfolio__card:hover {
  background-color: #00a9a2;

  & img {
    opacity: 0.25;
  }

  & figcaption {
    opacity: 1;

    & p {
      transform: translateX(0);
    }

    & span {
      transform: translateX(0);
    }
  }
}

.portfolio__url {
  color: #6a55fa;
  font-weight: 500;
  text-decoration: none;
}

.portfolio__stacks {
  display: flex;
  margin-top: 8px;
  flex-wrap: wrap;

  & li {
    margin-right: 8px;
    margin-top: 8px;
    border-radius: 4px;
    background-color: #6a55fa;
    color: #e9e6fe;
    padding: 0 8px;
  }
}
@media (min-width: 600px) {
  .portfolio__card-wrapper {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (min-width: 960px) {
  .portfolio__card-wrapper {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
}

@media (min-width: 1264px) {
  .container {
    max-width: 1140px;
  }
}
</style>
