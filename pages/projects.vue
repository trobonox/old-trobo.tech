<template>
  <div>
    <h1 class="mb-2 text-6xl font-bold tracking-tight">Projects</h1>
    <h2 class="mb-8">Here's some projects I have made so far:</h2>
    <div class="flex flex-col gap-4">
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
      <project-card
        title="AbletonConvert"
        description="A CLI Tool for making Files from newer Ableton 10 Versions (10.1.x) compatible with older ones (10.0.x)"
        github="https://github.com/trobonox/abletonconvert"
        stack=".NET, C#, XML, Ableton Live Sets"
      />
      <project-card
        title="Custom Start Page"
        description="Custom Start Page with bookmarks etc. as a New Tab page for my browser"
        github="https://github.com/trobonox/startpage-new"
        demo="https://start.trobonox.tk/"
        stack="HTML, CSS, JavaScript, Browser Extension"
      />
    </div>
  </div>
</template>

<script>
export default {}
</script>
