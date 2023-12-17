<template>
  <NuxtLayout>
    <SectionMain />
    <SectionTrusted />
    <SectionBestFeatures />
    <SectionBestPlatform />
    <SectionPeopleSaying />
    <SectionCta />
  </NuxtLayout>
</template>

<script setup lang="ts">

useSeoMeta({
  title: 'TT.Box | Gerenciamento de Projetos',
  description: 'O gerenciamento de projetos é o processo de liderar o trabalho de uma equipe para atingir todos os objetivos do projeto dentro das restrições especificadas.',
  robots: 'index, follow'
})

</script>