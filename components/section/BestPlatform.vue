<template>
  <section class="bg-white ">
    <div class="max-w-[var(--page-width)] tablet:mx-auto py-10 md:py-16 md:px-5 px-10">

      <div class="flex flex-col md:flex-row items-center md:space-x-10">

        <div class="max-w-[400px] w-full md:mt-28">
          <NuxtImg class="w-full" src="/img/section/best-platform-1.webp" alt="Mulher usando o computador" />
        </div>

        <div class="flex flex-col self-start  h-full gap-7 w-full">
          <p
            class="text-center md:text-start text-2xl tablet:text-3xl md:text-4xl font-bold text-[var(--title-color)] tracking-wide md:leading-snug">
            Melhor
            plataforma para
            gerenciamento de projetos</p>

          <p class="md:text-lg text-stone-600 md:leading-loose">O gerenciamento de projetos é o processo de liderar o
            trabalho de uma
            equipe
            para atingir todos os objetivos do projeto dentro das restrições fornecidas.</p>

          <ul
            class="grid md:grid-cols-2 gap-5 md:[&_li]:max-w-[251px] [&_li]:text-lg [&_span]:mr-3 [&_li]:font-bold [&_li]:text-[--title-color] [&_span]:p-1 [&_span]:px-1 [&_span]:rounded-full [&_span]:bg-[--primary-color]">
            <li>
              <span>
                <Icon name="fluent:checkmark-12-filled" color="white" size="20" />
              </span> Tudo em Um Só Site
            </li>
            <li>
              <span>
                <Icon name="fluent:checkmark-12-filled" color="white" size="20" />
              </span> Rápido e Fácil de Usar
            </li>
            <li>
              <span>
                <Icon name="fluent:checkmark-12-filled" color="white" size="20" />
              </span> Alta Segurança
            </li>
            <li>
              <span>
                <Icon name="fluent:checkmark-12-filled" color="white" size="20" />
              </span> Melhor Software
            </li>
            <li class="">
              <span>
                <Icon name="fluent:checkmark-12-filled" color="white" size="20" />
              </span> Gerenciamento de Equipes
            </li>

          </ul>
          <button
            class="btn p-4 text-xl md:text-2xl w-fit whitespace-nowrap tracking-widest self-center md:self-start">Veja
            Mais</button>
        </div>
      </div>

      <!-- ----------------------------------
        second block
      ----------------------------------- -->

      <div class="flex flex-col md:flex-row items-center md:space-x-10 mt-16 md:mt-0">

        <div class="order-last md:order-none flex flex-col self-start h-full gap-4 w-full">
          <div class="h-10" />
          <p
            class="text-center md:text-start text-2xl tablet:text-3xl md:text-4xl font-bold text-[var(--title-color)] tracking-wide md:leading-snug">
            Nossas ferramentas ajudam você a ser mais eficiente</p>

          <p class="md:text-lg text-stone-600 md:leading-loose">O gerenciamento de projetos é o processo de liderar o
            trabalho de uma
            equipe
            para atingir todos os objetivos do projeto dentro das restrições fornecidas.</p>

          <ul
            class="grid md:grid-cols-2 gap-5 md:[&_li]:max-w-[251px] [&_li]:text-lg [&_span]:mr-3 [&_li]:font-bold [&_li]:text-[--title-color] [&_span]:p-1 [&_span]:px-1 [&_span]:rounded-full [&_span]:bg-[--primary-color]">
            <li class="first:mt-0">
              <span>
                <Icon name="fluent:checkmark-12-filled" color="white" size="20" />
              </span> 100% Seguro e Confiável
            </li>
            <li>
              <span>
                <Icon name="fluent:checkmark-12-filled" color="white" size="20" />
              </span> Mais Escolhido entre os Engenheiros
            </li>
            <li class="last:mb-5">
              <span>
                <Icon name="fluent:checkmark-12-filled" color="white" size="20" />
              </span> Supre Todas as Demandas
            </li>
          </ul>

          <button
            class="btn p-4 text-xl md:text-2xl w-fit whitespace-nowrap tracking-widest self-center md:self-start">Veja
            Mais</button>
        </div>

        <div class="max-w-[400px] w-full md:mt-28">
          <NuxtImg class="w-full" src="/img/section/best-platform-2.webp" alt="Mulher usando o computador" />
        </div>
      </div>

    </div>
  </section>
</template>