<template>
  <div class="page portfolio" data-simplebar>
    <div class="container">
      <div class="tab-wrapper">
        <ul class="tab">
          <li class="tab__item active" data-filter="*" @click="tabActive">
            All
          </li>
          <li class="tab__item" data-filter=".private" @click="tabActive">
            Private
          </li>
          <li class="tab__item" data-filter=".public" @click="tabActive">
            Commercial
          </li>
        </ul>
      </div>
      <div class="portfolio__content">
        <div class="portfolio__card-wrapper private">
          <figure class="portfolio__card">
            <img src="~assets/images/portfolio/sooman.jpg" alt="sooman" />
            <figcaption>
              <h3>Sooman Che Website</h3>
              <p>Frontend</p>
              <v-svg view-box="0 0 32 32" width="1em" height="1em"
                ><icons-icon-nuxt
              /></v-svg>
            </figcaption>
          </figure>
        </div>
        <div class="portfolio__card-wrapper public">
          <figure class="portfolio__card">
            <img src="~assets/images/portfolio/coffeenie.jpg" alt="coffeenie" />
            <figcaption>
              <h3>Realtime Booking System</h3>
              <p>Fullstack</p>
              <v-svg
                view-box="0 0 32 32"
                width="1em"
                height="1em"
                style="right: 24px"
                ><icons-icon-nuxt
              /></v-svg>
              <v-svg view-box="0 0 32 32"><icons-icon-spring /></v-svg>
            </figcaption>
          </figure>
        </div>
        <div class="portfolio__card-wrapper public">
          <figure class="portfolio__card">
            <img src="~assets/images/portfolio/smartair.jpg" alt="smartair" />
            <figcaption>
              <h3>Smart Air Screen</h3>
              <p>Backend</p>
              <v-svg view-box="0 0 32 32"><icons-icon-spring /></v-svg>
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
  }),
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
  box-shadow: 0 0 10px 0 rgb(255 255 255 / 10%);
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

    & svg {
      position: absolute;
      display: inline-block;
      right: 0;
      bottom: 0;
      margin: 20px;
      transform: translateX(200%);
      transition: transform 0.3s;
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

    & svg {
      transform: translateX(0);
    }
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
