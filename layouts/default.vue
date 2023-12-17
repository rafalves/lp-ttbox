<template>
  <Html lang="pt-BR" class="antialiased scroll-smooth font-inter transition-all ease-linear duration-300 delay-0">
  <div class="flex flex-col h-full mx-auto">
    <div class="w-full z-50">
      <BaseHeader />
    </div>
    <div class="flex-1">
      <slot />
    </div>
    <div>
      <BaseFooter />
    </div>
  </div>

  </Html>
</template>  
