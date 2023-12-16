<template>
  <section class="bg-white">
    <div class="max-w-[var(--page-width)] tablet:mx-auto py-16 px-5">
      <div class="flex flex-col gap-7 bg-[--section-primary-color] md:px-16 py-8 rounded-2xl">
        <p
          class="text-center text-2xl tablet:text-3xl md:text-4xl font-bold text-[var(--title-color)] tracking-wide md:leading-snug">
          Teste Gratuitamente!</p>
        <p class="px-10 md:px-20 md:text-xl text-stone-600 font-medium leading-relaxed md:leading-relaxed">Gestão boa e
          eficiente
          com
          médicos e equipes
          muito
          profissionais. Eles prestam um serviço muito satisfatório.
        </p>
        <div class="flex flex-col gap-3 md:gap-0 md:flex-row justify-center bg-white w-fit p-2 self-center rounded-2xl">
          <input
            class="placeholder:text-center md:placeholder:text-start placeholder:text-lg placeholder:pl-2 placeholder:font-medium"
            type="email" placeholder="Digite seu email" />
          <button class="btn text-xl font-semibold">
            <NuxtLink to="#"><span class="whitespace-nowrap">Comece Gratuitamente</span></NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </section>
</template> 