<template>
<main>
  <h1>memo</h1>
  <ul>
    <li v-for="content in contents" :key="content.id">
      <p class="__title"><nuxt-link :to="`/${content.id}`">{{ content.title }}</nuxt-link></p>
      <p class="__body">{{ content.body | omittedText }}</p>
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
  },
   data () {
    return {
      text: "0123456789101112",
    }
  },
  filters: {
    omittedText(text) {
     return text.length > 70 ? text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').slice(0, 70) + "…" : text.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
    }
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
  font-size: 4rem;
  margin-bottom: 1.5rem;
}
</style>

<style lang="scss" scoped>
.__title {
  font-size: 1.5rem;
  margin-bottom: .5rem;
  a {
    &:link,&:visited {
      color: rgb(80, 150, 180);
    }
  }
}
.__body {
  color: #666;
}
main>ul {
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    border-bottom: #ccc 1px solid;
    padding: 1rem 0;
    &:last-of-type {
      border: none;
    }
  }
}
</style>
