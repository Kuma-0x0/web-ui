<script setup lang="ts">
import { ref } from 'vue';

const lastName = ref('');
const firstName = ref('');
const birthDay = ref(new Date(2000, 1, 1));
const message = ref('');
</script>
<template>
  <v-app>
    <v-card title="入力欄">
      <v-container>
        <v-row>
          <v-col align-self="start">
            <v-text-field clearable label="姓" v-model="lastName"></v-text-field>
            <v-label>{{ lastName }}</v-label>
          </v-col>
          <v-col align-self="start">
            <v-text-field clearable label="名" v-model="firstName"></v-text-field>
            <v-label>{{ firstName }}</v-label>
          </v-col>
        </v-row>
        <v-row>
          <v-col align-self="start">
            <v-text-field clearable label="誕生日" v-model="birthDay"></v-text-field>
            <v-label>{{ birthDay }}</v-label>
          </v-col>
          <v-col align-self="start">
            <v-text-field clearable label="メッセージ" wi v-model="message"></v-text-field>
            <v-label>{{ message }}</v-label>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<style scoped>
.v-card {
  width: 90%;
  margin: 10px auto 0 auto;
}

.v-label {
  margin-left: 16px;
}
</style>
