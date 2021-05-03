<template>
  <Layout sidebar="true" :title="pageTitle">
    <Main :sectionID="pageTitle | slugify" :sectionClass="pageTitle | slugify">
      <div class="w-100">
        <h2 class="section-title" v-html="$page.abilities.title" />
        <b-row class="skill-section row mb-5">
          <b-col v-for="{ ability, index } in $page.abilities.acf.abilities" :key="index" cols="12" sm="6">
            <p class="mb-0 text-uppercase skill">{{ ability.name }} 
              <star-rating :rating="ability.value | rating" :increment="0.5" read-only :star-size="12" :show-rating="false" inactive-color="#eceeec" active-color="#222222" inline />
            </p>
          </b-col>
        </b-row>
      </div>
      <div class="w-100">
        <h2 class="section-title" v-html="$page.tools.title" />
        <b-row class="skill-section row mb-5">
          <b-col v-for="{ ability, index } in $page.tools.acf.abilities" :key="index" cols="12" sm="6">
            <p class="mb-0 text-uppercase skill">{{ ability.name }} 
              <star-rating :rating="ability.value | rating" :increment="0.5" read-only :star-size="12" :show-rating="false" inactive-color="#eceeec" active-color="#222222" inline />
            </p>
          </b-col>
        </b-row>
      </div>
    </Main>
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
import {
  ListIcon,
  CodeIcon,
  SearchIcon,
  TerminalIcon,
  SettingsIcon
} from "vue-feather-icons";

import StarRating from "vue-star-rating/src";

import Main from "@/layouts/Main";

export default {
  metaInfo: {
    title: "Abilities"
  },
  data() {
    return {
      pageTitle: "Abilities"
    }
  },
  components: {
    Main,
    'star-rating': StarRating
  }
}
</script>