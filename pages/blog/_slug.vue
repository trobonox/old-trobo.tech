<template>
  <article>
    <h1 class="text-4xl md:text-6xl font-extrabold mb-2">{{ page.title }}</h1>
    <h2 class="text-md text-cppnGray-1 mb-2">
      {{ createdAt }} • {{ page.readingStats.text }}
    </h2>
    <p class="text-md md:text-lg mb-10 max-w-none w-full">
      {{ page.description }}
    </p>
    <nuxt-content
      :document="page"
      class="w-full max-w-4xl mx-0 prose prose-invert prose-img:rounded-sm prose-h1:text-6xl prose-h1:mb-2 prose-h2:mb-2 prose-p:mb-2 prose-p:text-cppnWhite prose-p:text-lg prose-a:text-mauve prose-code:before:content-none prose-code:after:content-none prose-code:bg-cppnBlack-2 prose-code:text-cppnGray-2 prose-code:font-mono prose-code:p-1 prose-code:font-medium prose-blockquote:font-normal"
    />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch()

    return {
      page,
    }
  },
  computed: {
    createdAt() {
      const dateparse = Date.parse(this.page.createdAt)
      const dateObject = new Date(dateparse)
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return dateObject.toLocaleDateString('en-UK', options)
    },
  },
}
</script>

<style>
h1,
h2,
h3,
p {
  scroll-margin-block-start: 110px;
}

.icon.icon-link {
  @apply inline-block absolute opacity-0 h-6 -ml-6 w-6 bg-no-repeat;
  background-image: url('@/static/link_icon.svg');
  margin-top: 4px;
}

h2:hover .icon.icon-link,
h3:hover .icon.icon-link,
h4:hover .icon.icon-link,
h5:hover .icon.icon-link {
  opacity: 100%;
}
</style>
