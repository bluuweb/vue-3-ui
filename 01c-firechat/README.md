# Quasar Chat

```
quasar create firechat --branch next
```

## .vscode

```json
{
  "vetur.validation.template": true,
  "vetur.format.enable": true,
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "vue"],

  "vetur.experimental.templateInterpolationService": true
}
```

## Boot

```
quasar new boot <name>
```

quasar.conf.js

```js
boot: ["firebase"],
```

- [vueuse.org](https://vueuse.org/firebase/README.html)

```
npm i @vueuse/firebase firebase
```

```js
import { boot } from "quasar/wrappers";

console.log("firebase boot");

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apikey...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, marcaTiempo };


// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
});

```

- [redirecting to another page](https://next.quasar.dev/quasar-cli/boot-files#redirecting-to-another-page)

```js
export default ({ urlPath, redirect }) => {
  // ...
  const isAuthorized = // ...
  if (!isAuthorized && !urlPath.startsWith('/login')) {
    redirect({ path: '/login' })
    return
  }
  // ...
}
```

## History

quasar.conf.js

```js
build: {
  vueRouterMode: "history",
}
```

## MainLayout

```vue
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Chat </q-toolbar-title>

        <div>botones</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
    };
  },
};
</script>
```

## VistaAcceso

```vue
<template>
  <div class="q-px-xl">
    <h5>{{ acceder ? "Login" : "Registro" }}</h5>
    <q-form class="q-gutter-md" @submit.prevent="registro">
      <q-input label="Email" v-model="email" />
      <q-input label="Password" v-model="password" />
      <q-btn color="primary" type="submit">{{
        acceder ? "Login" : "Registro"
      }}</q-btn>
      <q-btn color="primary" outline @click="acceder = true" v-if="!acceder">
        ¿Ya tienes cuenta?
      </q-btn>
      <q-btn color="negative" outline @click="acceder = false" v-else>
        ¿No tienes cuenta?
      </q-btn>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth, db } from "boot/firebase";
export default {
  setup() {
    const email = ref("prueba@prueba.com");
    const password = ref("123123");

    const acceder = ref(true);

    const registro = async () => {
      if (!email.value.trim() || !password.value.trim()) {
        console.log("campos vacios");
        return;
      }
      try {
        if (acceder.value) {
          const userCredential = await auth.signInWithEmailAndPassword(
            email.value,
            password.value
          );
          const userDB = userCredential.user;
          await db.collection("users").doc(userDB.uid).update({
            estado: true,
          });
        } else {
          const userCredential = await auth.createUserWithEmailAndPassword(
            email.value,
            password.value
          );
          const userDB = userCredential.user;
          await db.collection("users").doc(userDB.uid).set({
            correo: userDB.email,
            uid: userDB.uid,
            estado: true,
          });
        }
        email.value = "";
        password.value = "";
      } catch (error) {
        console.log(error);
      }
    };

    return { email, password, registro, acceder };
  },
};
</script>
```

## pages/Index.vue

```vue
<template>
  <q-page padding>
    <VistaAcceso v-if="!isAuthenticated" />
  </q-page>
</template>

<script>
import VistaAcceso from "../components/VistaAcceso";

import { useAuth } from "@vueuse/firebase";
export default {
  components: {
    VistaAcceso,
  },
  setup() {
    const { user, isAuthenticated } = useAuth();

    return {
      user,
      isAuthenticated,
    };
  },
};
</script>
```

## Layout

```vue
<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered>
      <q-toolbar>
        <q-toolbar-title :class="isAuthenticated ? '' : 'text-center'">
          {{ isAuthenticated ? user.email : "Chat" }}
        </q-toolbar-title>

        <div v-if="isAuthenticated">
          <q-btn color="negative" label="Salir" @click="salir" />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useAuth } from "@vueuse/firebase";
import { db, auth } from "boot/firebase";

export default {
  name: "MainLayout",

  components: {},

  setup() {
    const { user, isAuthenticated } = useAuth();

    const salir = async () => {
      try {
        await db.collection("users").doc(user.value.uid).update({
          estado: false,
        });
        await auth.signOut();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      user,
      isAuthenticated,
      salir,
    };
  },
};
</script>
```

## VistaUsuariosActivos.vue

```vue
<template>
  <q-page-sticky position="top" expand>
    <q-tabs
      v-model="tab"
      inline-label
      outside-arrows
      mobile-arrows
      class="bg-primary text-white shadow-2 full-width"
    >
      <q-tab name="mails" icon="account_circle" label="Mails" />
      <q-tab name="alarms" icon="account_circle" label="Alarms" />
      <q-tab name="movies" icon="account_circle" label="Movies" />
      <q-tab name="photos" icon="account_circle" label="Photos" />
      <q-tab name="videos" icon="account_circle" label="Videos" />
      <q-tab name="addressbook" icon="account_circle" label="Address Book" />
    </q-tabs>
  </q-page-sticky>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      tab: ref("mails"),
    };
  },
};
</script>
```

Index.vue

```vue
<template>
  <q-page padding>
    <VistaAcceso v-if="!isAuthenticated" />
    <div v-else>
      <VistaUsuariosActivos />
      <VistaChat />
    </div>
  </q-page>
</template>
```

Mostrar usuario activos

- [order-limit-data](https://firebase.google.com/docs/firestore/query-data/order-limit-data?hl=es)

```vue
<template>
  <q-page-sticky position="top" expand class="tabs-zindex">
    <q-tabs
      v-model="selecUserChat"
      inline-label
      outside-arrows
      mobile-arrows
      class="bg-primary text-white shadow-2 full-width"
    >
      <q-tab
        v-for="user in arraySinUser"
        :key="user.uid"
        icon="account_circle"
        :label="user.correo"
        :name="user.uid"
        :class="user.estado ? 'text-white' : 'text-grey'"
      />
    </q-tabs>
  </q-page-sticky>
</template>

<script>
import { ref, inject, computed } from "vue";
import { db } from "boot/firebase";
import { useAuth } from "@vueuse/firebase";

export default {
  setup() {
    const users = ref([]);
    const selecUserChat = inject("selecUserChat");
    const { user } = useAuth();

    db.collection("users").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          users.value = [...users.value, change.doc.data()];
          users.value = users.value.sort((a, b) => b.estado - a.estado);
        }
        if (change.type === "modified") {
          users.value = users.value.map((user) =>
            user.uid === change.doc.data().uid
              ? { ...user, estado: change.doc.data().estado }
              : user
          );

          users.value = users.value.sort((a, b) => b.estado - a.estado);
        }
        if (change.type === "removed") {
          users.value = [...users.value, change.doc.data()];
          users.value = users.value.sort((a, b) => b.estado - a.estado);
        }
      });
    });

    const arraySinUser = computed(() => {
      return users.value.filter((item) => item.uid !== user.value.uid);
    });
    return {
      selecUserChat,
      users,
      arraySinUser,
    };
  },
};
</script>

<style scoped>
.tabs-zindex {
  z-index: 2000;
}
</style>
```

index.vue

```vue
<template>
  <q-page padding>
    <VistaAcceso v-if="!isAuthenticated" />
    <div v-else>
      <VistaUsuariosActivos />
      <VistaChat />
    </div>
  </q-page>
</template>

<script>
import VistaAcceso from "../components/VistaAcceso";
import VistaChat from "../components/VistaChat";
import VistaUsuariosActivos from "../components/VistaUsuariosActivos";

import { useAuth } from "@vueuse/firebase";
import { ref, provide, watchEffect } from "vue";

export default {
  components: {
    VistaAcceso,
    VistaChat,
    VistaUsuariosActivos,
  },
  setup() {
    const { user, isAuthenticated } = useAuth();

    const selecUserChat = ref("");
    provide("selecUserChat", selecUserChat);

    watchEffect(() => {
      console.log("selecUserChat", selecUserChat.value);
    });

    return {
      user,
      isAuthenticated,
    };
  },
};
</script>
```

## VistaChat.vue

```vue
<template>
  <div ref="RefChat" v-if="selecUserChat !== ''" class="q-mt-xl">
    <div class="q-pa-md row justify-center">
      <div style="width: 100%; max-width: 600px">
        <q-chat-message
          v-for="chat in chats"
          :key="chat.id"
          :name="chat.user"
          :text="[chat.texto]"
          :sent="chat.uid === user.uid"
        />
      </div>
    </div>

    <q-footer>
      <q-form @submit.prevent="enviarMensaje">
        <q-toolbar class="bg-primary text-white row">
          <q-btn round flat icon="insert_emoticon" class="q-mr-sm" />
          <q-input
            v-model="message"
            class="col-grow q-mr-sm"
            bg-color="white"
            placeholder="Type a message"
            dense
            outlined
            rounded
            autofocus
            ref="inputFocus"
          />
          <q-btn round flat icon="send" type="submit" />
        </q-toolbar>
      </q-form>
    </q-footer>
  </div>
  <div v-else class="flex flex-center q-mt-xl q-pt-xl">
    <h6>Selecciona un usuario para el chat</h6>
  </div>
</template>

<script>
import { ref, inject, watch } from "vue";
import { useAuth } from "@vueuse/firebase";
import { db, marcaTiempo } from "boot/firebase";

export default {
  setup() {
    const message = ref("");
    const inputFocus = ref(null);
    const { user } = useAuth();
    const selecUserChat = inject("selecUserChat");
    const chats = ref([]);
    const RefChat = ref(null);

    let unsubscribe;

    const obtenerData = (idParams) => {
      chats.value = [];
      unsubscribe = db
        .collection("chat")
        .doc(user.value.uid)
        .collection(idParams)
        .orderBy("fecha")
        .onSnapshot((snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              chats.value.push({ ...change.doc.data(), id: change.doc.id });
            }
            if (RefChat.value !== null) {
              setTimeout(() => {
                window.scrollTo(0, RefChat.value.scrollHeight);
              }, 60);
            }
          });
        });
    };

    watch(
      () => selecUserChat.value,
      (newId) => {
        if (unsubscribe) {
          unsubscribe();
          if (newId) {
            obtenerData(newId);
          }
        } else {
          obtenerData(newId);
        }
        console.log("watch");
        console.log("newId", newId);
      }
    );

    const enviarMensaje = async () => {
      try {
        const objetoMensaje = {
          user: user.value.email,
          texto: message.value,
          fecha: marcaTiempo(),
          uid: user.value.uid,
        };
        await db
          .collection("chat")
          .doc(user.value.uid)
          .collection(selecUserChat.value)
          .add(objetoMensaje);
        await db
          .collection("chat")
          .doc(selecUserChat.value)
          .collection(user.value.uid)
          .add(objetoMensaje);
        message.value = "";
        inputFocus.value.focus();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      enviarMensaje,
      message,
      inputFocus,
      chats,
      RefChat,
      user,
      selecUserChat,
    };
  },
};
</script>
```
