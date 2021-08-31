<template>
  <v-container>
    <v-card class="pa-3">
      <v-row>
        <v-col
          v-for="count in 12"
          :key="count"
          cols="3"
        >
          <v-card
            :height="150"
            class="pa-3"
            outlined
          >
            col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>


export default {

}
</script>
<style>

</style>
