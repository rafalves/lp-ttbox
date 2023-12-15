<template>
  <div class="bg-[var(--section-primary-color)]">
    <div class="max-w-[var(--page-width)] mx-auto py-24">

      <div
        class="flex flex-col items-center md:flex-row justify-center tablet:justify-between gap-5 md:gap-10 lg:gap-20 w-full px-5 md:pt-20">
        <div class="flex flex-col md:w-1/2 space-y-7">
          <p class="text-3xl tablet:text-4xl md:text-5xl font-extrabold text-[var(--title-color)]">O jeito mais fácil de
            gerenciar seus projetos</p>
          <p class="md:text-lg text-stone-600">O gerenciamento de projetos é o processo de liderar o trabalho de uma
            equipe
            para atingir
            todos os
            objetivos
            do projeto dentro das restrições especificadas. Essas informações geralmente são descritas na documentação
            do
            projeto</p>
          <button class="btn p-4 text-xl md:text-2xl w-fit self-center md:self-start">Começar Agora</button>
        </div>
        <div class="flex flex-1 relative md:m-5 mt-14">
          <NuxtImg src="/img/main-section.jpg" quality="40" class="w-[400px] max-h-[300px]"
            alt="Mulher usando o computador" />
          <NuxtImg src="/img/main-section-component-1.png" quality="40"
            class="w-[150px] md:w-[200px] -top-14 md:-top-20 -right-8 md:right-0 absolute"
            alt="Grafico de analise de dados" />
          <NuxtImg src="/img/main-section-component-2.png" quality="40"
            class="w-[120px] md:w-[150px] -bottom-3 md:-bottom-10 -left-3 md:-left-10 absolute"
            alt="Grafico de analise" />
        </div>
      </div>
    </div>
  </div>
</template>