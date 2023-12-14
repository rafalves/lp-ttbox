<template>
  <Html class="antialiased scroll-smooth bg-red-100 font-inter">
  <div class="flex flex-col h-full mx-auto">
    <div>
      <BaseHeader />
    </div>
    <div class="flex-1 mt-14">
      <slot />
    </div>
    <div>
      <BaseFooter />
    </div>
  </div>

  </Html>
</template>
 