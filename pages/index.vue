<template>
<main>
  <h1>blog</h1>
  <h2>list</h2>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</main>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://tmtkg.microcms.io/api/v1/blog',
      {
        headers: { 'X-API-KEY': '90a9f7ef-a60e-49e0-bbbc-c9a154625917' }
      }
    )
    return data
  }
}
</script>

<style>
body {
  color: #333;
}
main {
  width: 66vw;
  margin: 2rem auto;
}
main > h1 {
  font-size: 5rem;
}
main > .publishedAt {
  text-align: right;
  color: #666;
  margin: 1rem 0;
}
.post {
  line-height: 1.5;
}
</style>

