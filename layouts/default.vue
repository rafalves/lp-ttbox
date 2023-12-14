<template>
  <Html class="antialiased scroll-smooth font-inter">
  <div class="flex flex-col h-full mx-auto">
    <div class="w-full">
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
 