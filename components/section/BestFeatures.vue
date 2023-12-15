<template>
  <section class="bg-[var(--secondary-color)]">
    <div class="max-w-[var(--page-width)] tablet:mx-auto py-10 md:py-16 px-5">

      <div class="flex flex-col md:flex-row items-center space-y-5">
        <div class="text-center md:text-start w-full md:basis-2/5">
          <p class="text-2xl tablet:text-3xl md:text-4xl font-bold text-[var(--title-color)]">
            Melhores
            ferramentas
            para
            projetos</p>
        </div>
        <div class="basis-2/5 w-full">
          <p class="md:text-lg text-stone-600">O gerenciamento de projetos é o processo de liderar o trabalho de uma
            equipe
            para atingir todos os objetivos do projeto dentro das restrições fornecidas.</p>
        </div>
        <div class="flex justify-center md:justify-end basis-1/5">
          <button class=" btn p-4 text-xl md:text-2xl w-fit whitespace-nowrap">Teste
            Agora</button>
        </div>
      </div>
      <div class="flex md:justify-between flex-col md:flex-row gap-5 mt-8 md:mt-16">

        <div class="flex flex-col justify-center items-center rounded-2xl p-5 bg-white md:basis-1/3 gap-3">
          <div class="bg-[#E7F6F3] p-7 rounded-full">
            <NuxtImg class="w-[60px]" src="/img/logo/desktop-computer.svg" alt="Desenho computador" />
          </div>
          <p class="text-center text-2xl font-bold text-[var(--title-color)]">Gerenciamento de Tarefas</p>
          <p class="text-center md:text-lg text-stone-600">O gerenciamento de projetos é o processo de liderar o trabalho
            de uma
            equipe para atingir todos os objetivos do projeto dentro das restrições fornecidas.</p>
        </div>
        <div class="flex flex-col justify-center items-center rounded-2xl p-5 bg-white md:basis-1/3 gap-3">
          <div class="bg-[#E7F6F3] p-7 rounded-full">
            <NuxtImg class="w-[60px]" src="/img/logo/multiple-circle.svg" alt="Desenho avatares" />
          </div>
          <p class="text-center text-2xl font-bold text-[var(--title-color)]">Gerenciamento de Tarefas</p>
          <p class="text-center md:text-lg text-stone-600">O gerenciamento de projetos é o processo de liderar o trabalho
            de uma
            equipe para atingir todos os objetivos do projeto dentro das restrições fornecidas.</p>
        </div>
        <div class="flex flex-col justify-center items-center rounded-2xl p-5 bg-white md:basis-1/3 gap-3">
          <div class="bg-[#E7F6F3] p-7 rounded-full">
            <NuxtImg class="w-[60px]" src="/img/logo/optimization-timer-1.svg" alt="Imagem timer" />
          </div>
          <p class="text-center text-2xl font-bold text-[var(--title-color)]">Gerenciamento de Tarefas</p>
          <p class="text-center md:text-lg text-stone-600">O gerenciamento de projetos é o processo de liderar o trabalho
            de uma
            equipe para atingir todos os objetivos do projeto dentro das restrições fornecidas.</p>
        </div>

      </div>
    </div>
  </section>
</template>