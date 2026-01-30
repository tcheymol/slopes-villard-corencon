<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: "icon", type: "image/x-icon", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/favicon.bbf920cd41.ico"},
    { rel: "icon", type: "image/png", sizes:"16x16", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/favicon-16x16.890fecf539.png"},
    { rel: "icon", type: "image/png", sizes:"32x32", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/favicon-32x32.8a54b7bfe1.png"},
    { rel: "icon", type: "image/png", sizes:"48x48", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/favicon-48x48.a6078dbae2.png"},
    { rel: "apple-touch-icon", sizes:"57x57", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/apple-touch-icon-57x57.8d5d0c4067.png"},
    { rel: "apple-touch-icon", sizes:"60x60", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/apple-touch-icon-60x60.77ab3b4c1d.png"},
    { rel: "apple-touch-icon", sizes:"72x72", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/apple-touch-icon-72x72.10a21e7bb9.png"},
    { rel: "apple-touch-icon", sizes:"76x76", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/apple-touch-icon-76x76.66c220c16d.png"},
    { rel: "apple-touch-icon", sizes:"114x114", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/apple-touch-icon-114x114.999033d779.png"},
    { rel: "apple-touch-icon", sizes:"120x120", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/apple-touch-icon-120x120.db1220f6bf.png"},
    { rel: "apple-touch-icon", sizes:"144x144", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/apple-touch-icon-144x144.a21d083f6f.png"},
    { rel: "apple-touch-icon", sizes:"152x152", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/apple-touch-icon-152x152.66f56ecfcf.png"},
    { rel: "apple-touch-icon", sizes:"167x167", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/apple-touch-icon-167x167.41415d6e5e.png"},
    { rel: "apple-touch-icon", sizes:"180x180", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/apple-touch-icon-180x180.5ccb16e567.png"},
    { rel: "apple-touch-icon", sizes:"1024x1024", href:"https://woody.cloudly.space/app/dist/villarddelanscorrencon/favicon/favicon/apple-touch-icon-1024x1024.c807ee30b0.png"}
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = "Calculateur d'intinéraire Villard-Corençon"
const description = "Un calculateur d'intinéraire pour les pistes de ski de fond de Villard-Corençon."

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <UHeader :toggle="true">
      <template #left>
        <NuxtLink to="/">
          <AppLogo class="w-auto h-6 shrink-0" />
        </NuxtLink>
        <TemplateMenu class="hidden lg:flex" />
      </template>

      <h1 class="hidden lg:block text-3xl m-3">Calculateur d'intinéraire Villard-Corençon</h1>

      <template #right>
        <UColorModeButton class="hidden lg:flex" />

        <UButton
          class="hidden lg:flex"
          to="https://github.com/tcheymol/slopes-villard-corencon"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>

      <template #body>
        <div class="flex flex-col gap-4 p-4">
          <h1 class="text-xl font-bold">Calculateur d'intinéraire</h1>
          <TemplateMenu />
          <div class="flex items-center gap-2">
            <UColorModeButton />
            <UButton
              to="https://github.com/tcheymol/slopes-villard-corencon"
              target="_blank"
              icon="i-simple-icons-github"
              aria-label="GitHub"
              color="neutral"
              variant="ghost"
            />
          </div>
        </div>
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
