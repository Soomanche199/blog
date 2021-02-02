<template>
  <div>
    <ul class="navbar" :class="{ active: showSidebar }">
      <li class="navbar__header">
        <n-link to="/" class="navbar__logo">Sooman</n-link>
        <fa icon="times" class="navbar__toggle" @click.prevent="closeEmit" />
      </li>
      <li class="navbar__search">
        <div class="input-group">
          <input type="text" placeholder="Search" spellcheck="false" />
          <fa icon="search" />
        </div>
      </li>
      <li class="navbar__link">
        <n-link to="/">
          <fa icon="home" />
          Home
        </n-link>
      </li>
      <li v-for="(link, index) in links" :key="link" class="navbar__link">
        <n-link :to="'/' + link.toLowerCase()">
          <fa :icon="icons[index]" />
          {{ link }}
        </n-link>
      </li>
    </ul>
    <div class="navbar__overlay"></div>
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
  }),
  methods: {
    async indicate(event, link) {
      const marker = this.$el.querySelector('.navbar--marker')

      marker.style.top = event.target.offsetTop + 'px'
      marker.style.width = event.target.offsetWidth + 'px'

      const routeName = link === undefined ? 'index' : link.toLowerCase()

      await this.$router.push({ name: routeName })
      this.closeEmit()
    },
    closeEmit() {
      this.$emit('toggle-sidebar', false)
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
  z-index: 10;
  box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%);
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

  & .input-group {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #172331;
    height: 50px;
    width: 260px;
    margin: 0 auto;
  }

  & input {
    font-size: 16px;
    background-color: transparent;
    color: #00a9a2;
    outline: none;
    border: none;
    padding-left: 15px;

    &::placeholder {
      color: #7589a2;
      opacity: 0.5;
    }
  }

  & svg {
    margin-right: 15px;
    margin-left: 15px;
    color: #7589a2;
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
}

.navbar.active {
  transform: translateX(0);

  & ~ .navbar__overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

@media (min-width: 1264px) {
  .navbar {
    transform: translateX(0);
    width: 300px;
    z-index: 1;
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
