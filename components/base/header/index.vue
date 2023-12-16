<template>
  <div ref="headerBg" class="fixed w-full">
    <div ref="headerSize"
      class="flex w-full max-w-[var(--page-width-header)] mx-auto tablet:justify-between p-3 items-center transition-all duration-300 ease-in-out delay-0">
      <div id="aqui" class="md:w-full pl-[50px] md:pl-0 mx-auto z-50">
        <NuxtLink to="#">
          <span ref="logo"
            class="text-[var(--title-color)] text-2xl tablet:3xl md:text-5xl font-bold transition-all duration-300 ease-in-out delay-0">TT.Box</span>
        </NuxtLink>
      </div>
      <div class="hidden md:inline">
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
      <div class="hidden md:flex ml-5 space-x-5 items-center">
        <NuxtLink to="#"><span class="text-[var(--title-color)] font-medium">Entrar</span></NuxtLink>
        <button class="btn">
          <NuxtLink to="#"><span class="whitespace-nowrap">Cadastrar</span></NuxtLink>
        </button>
      </div>

      <!-- -------------------------------------------------- 
      hamburguer menu
      -------------------------------------------------- -->
      <div class="md:hidden transition-all ease-in-out duration-300">
        <label for="menu" class="hover:bg-gray-200 rounded-full p-3 cursor-pointer">
          <input type="checkbox" id="menu" class="hidden peer/menu">
          <Icon
            name="streamline:interface-setting-menu-2-button-parallel-horizontal-lines-menu-navigation-staggered-three-hamburger"
            size="25" color="var(--title-color)" />
          <!-- -------------------------------------------------- 
          side bar menu
          -------------------------------------------------- -->
          <div
            class="flex flex-col -translate-x-[100dvh]  w-[200px] absolute top-0 left-0 peer-checked/menu:translate-x-0 duration-500 cursor-default">
            <div class="h-[64px] w-full bg-transparent" />
            <div class="bg-white h-screen">
              <p class="text-center my-5 text-2xl font-bold text-[var(--title-color)]">Links</p>
              <nav>
                <ul
                  class="font-medium flex flex-col justify-center items-center [&_li]:text-stone-500 [&_li:hover]:text-stone-900 [&_li:hover]:bg-[var(--section-primary-color)] [&_li:hover]:w-full [&_li:hover]:text-center space-y-4">
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
                    <NuxtLink to="/">Contato</NuxtLink>
                  </li>
                </ul>
              </nav>
              <div class="flex flex-col items-center justify-center m-5 p-5 space-y-5 bg-[#d4d3cd] rounded-xl">
                <NuxtLink to="#"><span class="text-[var(--title-color)] font-medium">Entrar</span></NuxtLink>
                <button class="btn">
                  <NuxtLink to="#"><span class="whitespace-nowrap">Cadastrar</span></NuxtLink>
                </button>
              </div>

            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const headerBg = ref<HTMLElement>()
const headerSize = ref<HTMLElement>()
const logo = ref<HTMLElement>()

onMounted(() => {
  const tempDiv = document.createElement('div')
  headerBg.value?.before(tempDiv)

  const navObserver = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      headerBg.value?.classList.add('bgWhite')
      headerSize.value?.classList.add('headerSize')
      logo.value?.classList.add('logo')
    } else {
      headerBg.value?.classList.remove('bgWhite')
      headerSize.value?.classList.remove('headerSize')
      logo.value?.classList.remove('logo')
    }
  }, {
    threshold: 1
  })

  navObserver.observe(tempDiv)
})


</script>

<style scoped>
.bgWhite {
  @apply bg-white
}

.headerSize {
  @apply max-w-[var(--page-width)]
}

.logo {
  @apply text-4xl transition-all duration-300 ease-in-out delay-0
}

/* #menu {
  display: none;
} */
</style>