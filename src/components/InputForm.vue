<script setup lang="ts">
import { ref } from 'vue';
import { ImmutableUser } from '@/models/user';
import { getAsync, postAsync } from '@/utils/httpClient';
import type { functionsResponse } from '@/models/functionsResponse';

const lastName = ref('');
const firstName = ref('');
const birthDay = ref(new Date());
const message = ref('');
const isDisable = ref(false);

function confirm() {
  isDisable.value = !isDisable.value;

  const user = new ImmutableUser(
    '',
    `${firstName.value} ${lastName.value}`,
    birthDay.value,
    message.value,
  );

  alert(JSON.stringify(user));
}

async function post() {
  const user = new ImmutableUser(
    '',
    `${firstName.value} ${lastName.value}`,
    birthDay.value,
    message.value,
  );

  const [postStatusCode, postContent] = await postAsync<ImmutableUser, functionsResponse>(
    'http://localhost:7156/api/RunRegisterUserClient',
    user,
  );
  if (postStatusCode !== 200 || postContent === null) {
    return;
  }

  const [getStatusCode, getContent] = await getAsync<ImmutableUser>(postContent.statusQueryGetUri);

  console.log(getStatusCode);
  console.log(JSON.stringify(getContent));
}
</script>
<template>
  <v-app>
    <v-card title="入力欄">
      <v-container>
        <v-row>
          <v-col align-self="start">
            <v-text-field
              clearable
              label="姓"
              v-model="lastName"
              :disabled="isDisable"
            ></v-text-field>
            <v-label>{{ lastName }}</v-label>
          </v-col>
          <v-col align-self="start">
            <v-text-field
              clearable
              label="名"
              v-model="firstName"
              :disabled="isDisable"
            ></v-text-field>
            <v-label>{{ firstName }}</v-label>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-label>誕生日</v-label>
            <VDatePicker v-model="birthDay" mode="dateTime" :selectable="isDisable" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              clearable
              label="メッセージ"
              v-model="message"
              :disabled="isDisable"
            ></v-text-field>
            <v-label>{{ message }}</v-label>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col align-self="start">
            <v-btn block @click="confirm">確認</v-btn>
          </v-col>
          <v-col align-self="start">
            <v-btn block @click="post">保存</v-btn>
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
