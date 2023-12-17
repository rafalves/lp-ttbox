<template>
  <section class="bg-[--secondary-color]">
    <div class="max-w-[var(--page-width)] tablet:mx-auto py-5 px-5">

      <div class="flex max-[900px]:flex-col flex-row max-[900px]:items-center items-start pb-5">

        <div
          class="mt-8 md:mt-0 flex flex-col max-[900px]:items-center items-start max-[900px]:max-w-[550px] max-w-[350px] gap-5">
          <p class="text-2xl tablet:text-3xl font-bold text-[var(--title-color)]">TT.Box</p>
          <p class="md:text-lg text-stone-600">O gerenciamento de projetos é o processo de liderar o
            trabalho de uma
            equipe
            para atingir todos os objetivos do projeto dentro das restrições fornecidas.</p>
          <div class="flex gap-3">
            <Icon name="mdi:facebook-box" size="65" color="#080236" />
            <Icon name="mdi:linkedin" size="65" color="#080236" />
            <Icon name="mdi:twitter-box" size="65" color="#080236" />
          </div>
        </div>

        <div class="flex justify-between max-[900px]:pt-5 max-[900px]:pl-5 pl-10 w-full">

          <div class="flex flex-wrap gap-10 w-full">
            <div v-for="(menuItem, index) in menu" :key="index" class="flex flex-col">
              <h2 class="text-lg text-[--title-color] font-bold">{{ menuItem.title }}</h2>
              <ul class="mt-2">
                <li class="pt-1 md:text-lg font-medium text-stone-600 hover:text-stone-900"
                  v-for="(section, sectionIndex) in menuItem.sections" :key="sectionIndex">
                  <NuxtLink to="#">{{ section }}</NuxtLink>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const menu = [
  { title: 'Produtos', sections: ['Preço', 'Empresarial', 'Integração', 'Novidades'] },
  { title: 'Recursos', sections: ['Blog', 'Ajuda', 'Tutoriais', 'Produtos'] },
  { title: 'Companhia', sections: ['Sobre Nós', 'Carreiras', 'Midia Kit', 'Contato'] },
  { title: 'Ajuda', sections: ['Fale com o Suporte', 'Documentação API', 'Status do Serviço', 'FAQ'] }
]

const isEven = ((index: number): boolean => index % 2 === 0)
</script>