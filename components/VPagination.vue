<template>
  <div class="pagination--wrapper">
    <div class="pagination">
      <nuxt-link
        v-for="page in pages"
        :key="page"
        :to="{ query: { page: page } }"
      >
        {{ page }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pages: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    if (!this.$route.query.page === true) {
      const firstPage = this.$el.querySelector('.pagination a')
      firstPage.classList.add('nuxt-link-exact-active')
    }
  },
}
</script>

<style scoped>
.pagination--wrapper {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 50px;

  & .pagination {
    display: inline-block;
    list-style: none;
    padding-left: 0;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    border-radius: 5px;

    & a {
      float: left;
      padding: 8px 16px;
      text-decoration: none;
      color: #7589a2;
      min-width: 44px;
      min-height: 44px;
      background-color: #1a2738;
      transition: background-color 0.2s;

      &:hover {
        background-color: #111b27;
      }
    }

    & .nuxt-link-exact-active {
      color: #00a9a2;
    }
  }
}
</style>
