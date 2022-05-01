<template>
  <div>
    <h1 class="mb-4 text-6xl font-bold tracking-tight">Blog</h1>
    <h2 class="mb-8">
      If I ever feel like writing articles, you can find them here. Currently
      this is very empty, because I need to think about topics to write about
      😉.
    </h2>
    <div class="flex flex-col gap-4 mb-72">
      <nuxt-link
        v-for="article in articles"
        :to="'/blog/' + article.slug"
        :key="article.title"
        class="p-4 border border-cppnBlack-3 hover:bg-cppnBlack-2 rounded-md"
      >
        <div class="flex flex-row justify-between w-full">
          <h3 class="text-xl font-semibold tracking-tight">
            {{ article.title }}
          </h3>
          <div class="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-auto rounded-md hover:text-mauve hover:bg-cppnBlack-2 p-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
        <h4 class="text-cppnGray-2">{{ article.description }}</h4>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content()
      .only(['slug', 'title', 'description'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
