<template>
  <div class="card">
    <div class="card__meta">
      <div
        class="card__image"
        style="
          background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/pike-place.jpg')
            no-repeat center center;
          background-size: cover;
        "
      ></div>
    </div>
    <div class="card__content">
      <div class="card__body">
        <h4 class="card__category">{{ article.category }}</h4>
        <h3 class="card__title">{{ article.title }}</h3>
        <p class="card__description">{{ article.description }}</p>
      </div>
      <div class="card__footer">
        <p>
          <n-link :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            >Read More</n-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCard',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.card {
  background-color: #27394f;
  margin-top: 15px;
  color: #7589a2;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
  overflow: hidden;
}

.card__meta {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.card__image {
  background-color: #7589a2;
  height: 192px;
}

.card__content {
  flex-basis: 60%;
}

.card__body {
  padding: 24px 24px 0;
}

.card__category {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  margin-bottom: 12px;
  padding: 4px;
  color: #00a9a2;
  border-bottom: 0.125rem solid rgba(117, 137, 162, 0.3);
}

.card__title {
  color: #95a4b7;
  font-size: 18px;
  margin-bottom: 8px;
}

.card__description {
  font-size: 15px;
  line-height: 24px;
  display: -webkit-box;
  display: -moz-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card__footer {
  padding: 0 24px 24px;
  text-align: right;

  & p {
    border-top: 1px solid rgba(117, 137, 162, 0.3);
    padding-top: 18px;
    margin-top: 18px;
  }

  & a {
    color: #6a55fa;
    text-decoration: none;
  }
}

.card:hover {
  & .card__title {
    color: #6a55fa;
  }
}

@media (min-width: 600px) {
  .card {
    max-width: 700px;
    display: flex;
    margin: 0 auto 24px;

    &.alt {
      flex-direction: row-reverse;
    }
  }

  .card__meta {
    height: auto;
    flex-basis: 40%;
    overflow: hidden;
  }

  .card__image {
    height: 100%;
    transition: transform 0.5s ease-out;
  }

  .card:hover .card__image {
    transform: scale(1.05);
  }
}
</style>
