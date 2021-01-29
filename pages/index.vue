<template>
  <div>
    <section class="mb-5">
      <v-parallax :src="baseUrl + '/img/ogp/home.jpg'" height="300">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-center">
            <b>{{ title }}</b>
          </h1>
          <v-btn
            large
            class="mt-5"
            :to="localePath({ name: 'search' })"
            color="primary"
            >{{ $t('try_out') }}</v-btn
          >
        </v-layout>
      </v-parallax>
    </section>

    <v-container>
      <nuxt-content :document="document" />
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    const document = await $content(app.i18n.locale, 'index').fetch()
    console.log({ document })
    return { document }
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      title: process.env.siteName,
    }
  },
  head() {
    const title = this.title
    return {
      titleTemplate: null,
      title,
    }
  },
}
</script>
