<template>
  <section class="bg-[--secondary-color] ">
    <div class="max-w-[var(--page-width)] tablet:mx-auto py-10 md:py-16 md:px-5 px-10">

      <p
        class="text-center text-2xl tablet:text-3xl md:text-4xl font-bold text-[var(--title-color)] tracking-wide md:leading-snug">
        O que estão dizendo?</p>
      <p class="md:text-lg text-stone-600 md:leading-loose text-center my-2">Testemunho dos nossos queridos clientes.</p>

      <div class="flex flex-col justify-center items-center md:justify-start md:flex-row h-fit mt-5">
        <div class="flex flex-col bg-white rounded-2xl p-5 md:p-10 max-w-[500px] max-h-[370px] mt-5">
          <p class="md:text-lg text-stone-600 font-medium leading-relaxed md:leading-relaxed">Gestão boa e eficiente com
            médicos e equipes
            muito
            profissionais. Eles prestam um serviço muito satisfatório.
          </p>
          <p class="md:text-lg text-stone-600 font-medium leading-relaxed md:leading-relaxed">Eles muito bem arranjados.
            No
            geral toda a equipe
            médica é
            muito qualificada e possui tecnologia de ponta.</p>
          <div class="flex flex-col gap-2 justify-end flex-1">
            <p class="mt-5 font-bold text-[--title-color] text-xl">John Smith</p>
            <p class="md:text-lg text-stone-600 font-medium leading-relaxed md:leading-relaxed">Marketing Coordinator</p>
          </div>
        </div>
        <div class="flex flex-col justify-center rotate-90 md:rotate-0 h-full md:inline shrink">
          <NuxtImg class="hidden md:inline w-16 md:w-12 md:h-72 md:mt-10 shrink md:mx-14 opacity-50"
            src="/img/section/people-saying-section-component-1.png" alt="" />
        </div>
        <div class="md:mt-10">
          <NuxtImg src="/img/section/people-saying-section.png" alt="Fotos de rosto de pessoas sorrindo" />
        </div>
      </div>
    </div>
  </section>
</template>