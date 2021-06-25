<template>
  <main>
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  // asyncDataの引数のparamsの中にslugというプロパティが含まれており、こちらにURLからのパスが格納されてきます。
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://tmtkg.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-API-KEY': '90a9f7ef-a60e-49e0-bbbc-c9a154625917' }
      }
    )
    return data
  }
}
</script>
