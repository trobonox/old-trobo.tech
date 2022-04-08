<template>
  <header
    class="flex flex-row justify-between items-center w-full max-w-4xl px-8 py-6 mx-auto text-cppnGray-1 sticky top-0 z-50 bg-clip-padding bg-cppnBlack-0 bg-opacity-20 backdrop-filter backdrop-blur-lg"
  >
    <nuxt-link to="/" class="font-bold hover:text-lavender">🏠 Home</nuxt-link>
    <nav class="flex flex-row justify-center align-middle items-center gap-4">
      <a href="/blog" class="hover:text-lavender">Blog</a>
      <a href="/projects" class="hover:text-lavender">Projects</a>
    </nav>
  </header>
</template>
