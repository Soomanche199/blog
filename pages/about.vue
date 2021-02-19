<template>
  <div class="page about" data-simplebar>
    <div class="container">
      <div class="about__profile">
        <div class="about__profile--text">
          <h1>Know Who <strong>I'M</strong></h1>
          <p>
            Hello, I am <strong>Sooman Che</strong> from
            <strong>Seoul, Korea.</strong> I'm a 4th year developer, and now I'm
            working as a freelancer. These days, coding is more fun than games,
            so I am focusing on coding.
          </p>
          <p>
            To become a better developer than yesterday, I am not neglecting my
            studies. Apart from coding, some other activities that I love to do!
          </p>
          <ul style="padding-top: 10px; padding-left: 15px; list-style: inside">
            <li>Making games with friend</li>
            <li>Singing</li>
            <li>Travelling</li>
          </ul>
          <p>"Actions speak louder than words!"</p>
        </div>
        <div class="about__profile--image">
          <img src="~assets/images/profile.png" />
        </div>
      </div>
      <h2><strong>Frontend</strong> Skills</h2>
      <ul>
        <li><fa :icon="['fab', 'js-square']" /></li>
        <li><fa :icon="['fab', 'css3-alt']" /></li>
        <li>
          <v-svg width="1em" height="1em" view-box="0 0 256 256"
            ><icons-icon-postcss
          /></v-svg>
        </li>
        <li><fa :icon="['fab', 'vuejs']" /></li>
        <li>
          <v-svg view-box="0 0 32 32" width="1em" height="1em"
            ><icons-icon-nuxt
          /></v-svg>
        </li>
        <li>
          <v-svg view-box="0 0 32 32" width="1em" height="1em"
            ><icons-icon-webpack
          /></v-svg>
        </li>
        <li>
          <v-svg view-box="0 0 32 32" width="1em" height="1em"
            ><icons-icon-jquery
          /></v-svg>
        </li>
      </ul>
      <h2>Skills of <strong>Backend</strong></h2>
      <ul>
        <li><fa :icon="['fab', 'java']" /></li>
        <li><fa :icon="['fab', 'centos']" /></li>
        <li><fa :icon="['fab', 'ubuntu']" /></li>
        <li><fa :icon="['fab', 'aws']" /></li>
        <li>
          <v-svg view-box="0 0 32 32"><icons-icon-spring /></v-svg>
        </li>
        <li>
          <v-svg view-box="0 0 256 267"><icons-icon-hibernate /></v-svg>
        </li>
        <li>
          <v-svg view-box="0 0 256 170"><icons-icon-mariadb /></v-svg>
        </li>
        <li>
          <v-svg view-box="0 0 678 103.4" width="1.2em" height="1.2em"
            ><icons-icon-vmware
          /></v-svg>
        </li>
        <li>
          <v-svg view-box="0 0 2500 2500"><icons-icon-heroku /></v-svg>
        </li>
        <li>
          <v-svg view-box="20.7 244.9 600.3 154.7" height="1.2em" width="1.2em"
            ><icons-icon-docker
          /></v-svg>
        </li>
        <li>
          <v-svg view-box="0 0 882.7 688.6"><icons-icon-nginx /></v-svg>
        </li>
      </ul>
    </div>
    <v-footer />
  </div>
</template>

<script>
import parentTransition from '@/mixins/parentTransition'
import 'simplebar'

export default {
  name: 'About',
  mixins: [parentTransition],
}
</script>

<style scoped>
.about {
  font-size: 18px;
}

.about__profile--text {
  padding-bottom: 50px;
}

h1 {
  color: #7589a2;
  margin-bottom: 8px;
  padding-bottom: 20px;
  font-size: 34px;
  text-align: center;
}

p {
  line-height: 30px;
  font-weight: 500;

  &:not(:first-of-type) {
    padding-top: 30px;
  }

  &:last-of-type {
    text-align: center;
    color: #00a9a2;
    opacity: 0.6;
    padding-bottom: 20px;
  }
}

img {
  width: 100%;
  padding-bottom: 50px;
}

h2 {
  text-align: center;
  font-size: 34px;
  margin-bottom: 13px;
}

h2 ~ ul {
  font-size: 72px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & li {
    border: 2px solid rgba(0, 169, 162, 0.5);
    border-radius: 4px;
    flex: 0 0 144px;
    height: 120px;
    display: inline-flex;
    margin: 10px;
    padding: 0 15px;
    justify-content: center;
    align-items: center;

    & svg {
      align-self: center;
      transition: transform 0.2s;
    }
  }
}

h2 ~ ul li:hover {
  border: 1px solid rgba(0, 169, 162, 1);

  & svg {
    transform: scale(1.2);
  }
}

@media (min-width: 600px) {
  .about__profile {
    display: flex;
  }

  .about__profile--text {
    flex: 0 0 50%;
  }

  .about__profile--image {
    flex: 0 0 50%;

    & img {
      margin-top: 80px;
    }
  }
}
</style>
