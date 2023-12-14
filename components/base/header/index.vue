<template>
  <div class="flex max-w-[var(--page-width-header)] mx-auto bg-green-300 justify-between mt-5 items-center">
    <div>
      <NuxtLink to="#">
        <span class="text-[var(--title-color)] text-2xl tablet:3xl md:text-4xl font-bold">TT.Box</span>
      </NuxtLink>
    </div>
    <div>
      <nav>
        <ul class="flex text-stone-500 space-x-5">
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
    <div>login</div>
  </div>
</template>