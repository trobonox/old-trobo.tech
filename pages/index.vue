<template>
  <main>
    <section
      id="introduction"
      class="flex flex-col-reverse sm:flex-row items-start mb-10"
    >
      <div class="pr-8">
        <span class="mb-1 text-lg text-cppnGray-1 font-light tracking-wider"
          >Hi there,</span
        >
        <h1 class="mb-1 text-6xl font-bold tracking-tight">
          I'm
          <span class="text-mauve">Trobo</span>
        </h1>
        <h2 class="mb-4 text-lg tracking-tight">
          Developer and Tech Enthusiast from Germany
        </h2>
        <p class="text-cppnGray-2 mb-1">
          Welcome to my corner of the internet! This is my virtual "business
          card" and a little blog where I occasionally post things I want to
          share with the world.
        </p>
        <a
          href="/about"
          class="flex flex-row items-center gap-1 tracking-tight text-cppnGray-1 hover:text-mauve"
        >
          More about me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
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
        </a>
      </div>
      <div>
        <img
          src="../static/profile_picture.png"
          alt="Profile Picture"
          class="rounded-full w-56 hidden md:block"
        />
      </div>
    </section>
    <section id="projects" class="pb-8">
      <h2 class="mb-4 text-3xl font-bold tracking-tight">Projects</h2>
      <div class="flex flex-col gap-2">
        <project-card
          title="Kanban Electron"
          description="A cross-platform Kanban board desktop application made with Electron and Nuxt.js, with a focus on simplicity and user experience."
          github="https://github.com/trobonox/kanban-electron"
          stack="HTML, CSS, Javascript, Nuxt.js, Electron, Electron-Store, JSON"
        />
        <project-card
          title="Productivity Suite"
          description="All-in-one web app for productivity tools like a Pomodoro timer and a Kanban board, with more tools like notes and a calendar planned. Full user authentication and remote saving available using Supabase as the backend."
          demo="https://productivity-suite-three.vercel.app"
          stack="HTML, Tailwind CSS, Javascript, Nuxt.js, Supabase (PostgreSQL Database + Authentication)"
        />
        <project-card
          title="Lohem Bot"
          description="Discord bot for the community Lohem, based around the game The Isle. Manages gameserver config files over FTP and integrates this concept with features like a currency system."
          discord="https://discord.com/invite/j7qdPuFsHT"
          stack="Python, Discord.py, SQLite, FTP Data Transfer"
        />
        <project-card
          title="Ultramarine Linux Website"
          description="Designed and implemented a landing page for the Linux Distribution Ultramarine, which is based on Fedora Linux."
          demo="https://ultramarine-linux.org"
          discord="https://discord.com/invite/bUuQasHdrF"
          gitlab="https://gitlab.ultramarine-linux.org/website-wip/ultramarine-website"
          stack="HTML, Tailwind CSS, Javascript, Nuxt.js"
        />
        <project-card
          title="AniWatch"
          description="Web app to visualize results from the official Anilst.co GraphQL API in a nice and unique way."
          demo="https://aniwatch.vercel.app"
          stack="HTML, CSS, Javascript, Vue.js, Anilist.co GraphQL API"
        />
      </div>
      <a
        href="/projects"
        class="flex flex-row items-center gap-1 mt-4 tracking-tight text-cppnGray-1 hover:text-mauve"
      >
        More projects
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
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
      </a>
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
