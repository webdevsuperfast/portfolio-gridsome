<template>
  <Layout>
    
  </Layout>
</template>

<page-query>
{
  abilities: wordPressPage(id: 424) {
    title,
    acf {
      abilities {
        ability {
          name,
          value
        }
      }
    }
  },
  tools: wordPressPage(id: 426) {
    title,
    acf {
      abilities {
        ability {
          name,
          value
        }
      }
    }
  }
}
</page-query>

<script>

export default {
  metaInfo: {
    title: "Abilities"
  },
  data() {
    return {
      pageTitle: "Abilities"
    }
  }
}
</script>