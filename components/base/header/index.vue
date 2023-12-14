<template>
  <div ref="headerBg" class="ease-in-out duration-300 fixed w-full">
    <div ref="headerSize"
      class="ease-in-out duration-300 flex max-w-[var(--page-width-header)] mx-auto justify-between py-5 items-center">
      <div>
        <NuxtLink to="#">
          <span class="text-[var(--title-color)] text-2xl tablet:3xl md:text-4xl font-bold">TT.Box</span>
        </NuxtLink>
      </div>
      <div>
        <nav>
          <ul class="[&_li]:text-stone-500 [&_li:hover]:text-stone-700 flex  space-x-5">
            <li>
              <NuxtLink class="text-[var(--title-color)] font-semibold" to="#">Inicio</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Sobre</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Serviços</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Contato</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex space-x-5 items-center">
        <NuxtLink><span>Login</span></NuxtLink>
        <button class="btn">
          <NuxtLink><span>Sign in</span></NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const headerBg = ref<HTMLElement>()
const headerSize = ref<HTMLElement>()

onMounted(() => {
  const tempDiv = document.createElement('div')
  headerBg.value?.before(tempDiv)

  const navObserver = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      headerBg.value?.classList.add('bgWhite')
      headerSize.value?.classList.add('headerSize')
    } else {
      headerBg.value?.classList.remove('bgWhite')
      headerSize.value?.classList.remove('headerSize')
    }
  }, {
    threshold: 1
  })

  navObserver.observe(tempDiv)
})


</script>

<style scoped>
.bgWhite {
  @apply bg-white ease-in-out duration-300
}

.headerSize {
  @apply max-w-[var(--page-width)] ease-in-out duration-300
}
</style>