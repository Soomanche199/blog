<template>
  <div class="page" data-simplebar>
    <div class="container">
      <div class="contact">
        <div class="contact__info">
          <h2>Lets get in touch</h2>
          <p>
            I am consulting on <strong>overall development</strong> such as
            planning, design, and implementation. Please contact me and i will
            get back to you <strong>as soon as possible.</strong> Thank you for
            visiting. Have a nice day!
          </p>
          <ul class="contact__info--info">
            <li><fa icon="map-marked-alt" />Seoul, Korea</li>
            <li><fa icon="envelope" />soomanche199@gmail.com</li>
            <li><fa :icon="['fab', 'slack']" /> Preparing</li>
          </ul>
        </div>
        <form
          class="contact__form"
          action="https://formspree.io/f/mqkgjyrr"
          method="post"
          @submit.prevent="submitForm"
        >
          <h2>Contact me</h2>
          <v-input v-model="form.name" placeholder="Name">
            <fa icon="user" />
          </v-input>
          <v-input v-model="form.email" placeholder="Email">
            <fa icon="envelope" />
          </v-input>
          <v-textarea v-model="form.comment" placeholder="Comment" />
          <button type="submit" :disabled="disable">Submit</button>
        </form>
      </div>
    </div>
    <v-footer />
  </div>
</template>

<script>
import parentTransition from '@/mixins/parentTransition'
import 'simplebar'

export default {
  name: 'Contact',
  mixins: [parentTransition],
  data: () => ({
    loading: false,
    form: {
      name: '',
      email: '',
      comment: '',
    },
  }),
  computed: {
    disable() {
      return (
        this.loading ||
        !this.form.name ||
        !this.form.email ||
        !this.form.comment
      )
    },
  },
  methods: {
    submitForm(ev) {
      this.loading = true
      const form = ev.target
      const data = new FormData()
      data.append('email', this.form.email)
      data.append('message', [this.form.name, this.form.comment].join(' : '))
      const xhr = new XMLHttpRequest()
      xhr.open(form.method, form.action)
      xhr.setRequestHeader('Accept', 'application/json')
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return
        if (xhr.status === 200) {
          this.form.name = ''
          this.form.email = ''
          this.form.comment = ''
          alert('Thank you!! I will reply as soon as possible 😉')
        } else {
          alert('Invalid information.')
        }
        this.loading = false
      }
      xhr.send(data)
    },
  },
}
</script>

<style scoped>
h2 {
  padding-bottom: 18px;
}

.contact {
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.contact__info {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  padding: 26px;
}

.contact__info--info {
  width: 100%;
  margin-top: 16px;

  & li {
    display: flex;
    align-items: center;

    &:not(:first-of-type) {
      margin-top: 10px;
    }

    & svg {
      font-size: 1.8em;
      margin-right: 10px;
      color: #00a9a2;
    }
  }
}

.contact__form {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1a2738;
  position: relative;
  padding: 26px;

  &::before {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    background-color: #1a2738;
    transform: rotate(45deg);
    top: -13px;
    left: initial;
    right: 25%;
  }

  & h2 {
    color: #00a9a2;
  }
}

.input-group {
  margin-bottom: 16px;
}

@media (min-width: 960px) {
  .contact {
    flex-direction: row;
  }

  .contact__info,
  .contact__form {
    flex-basis: 50%;
  }

  .contact__form::before {
    top: 25%;
    left: -13px;
    right: initial;
  }
}
</style>
