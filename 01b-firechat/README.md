# Quasar FireChat

- [layout/gallery](https://next.quasar.dev/layout/gallery)

## ChatLayout.vue

```vue
<template>
  <div
    class="WAL position-relative bg-grey-4"
    :style="style"
  >
    <q-layout
      view="lHh Lpr lFf"
      class="shadow-3 WAL__layout"
      container
    >
      <q-header elevated>
        <q-toolbar class="bg-grey-3 text-black">
          <q-btn
            @click="leftDrawerOpen = true"
            class="WAL__drawer-open q-mr-sm"
            icon="keyboard_arrow_left"
            flat
            round
          />
          <q-btn
            round
            flat
          >
            <q-avatar>
              <img :src="currentConversation.avatar">
            </q-avatar>
          </q-btn>
          <span class="q-subtitle-1 q-pl-md">
            {{ currentConversation.person }}
          </span>
          <q-space />
          <q-btn
            icon="search"
            flat
            round
          />
          <q-btn
            round
            flat
          >
            <q-icon
              name="attachment"
              class="rotate-135"
            />
          </q-btn>
          <q-btn
            round
            flat
            icon="more_vert"
          >
            <q-menu
              auto-close
              :offset="[110, 0]"
            >
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>Contact data</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Block</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Select messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Silence</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Clear messages</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Erase messages</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        bordered
        :breakpoint="690"
      >
        <q-toolbar>
          <q-avatar class="cursor-pointer">
            <img src="https://cdn.quasar.dev/app-icons/icon-128x128.png" />
          </q-avatar>
          <q-space />
          <q-btn
            round
            flat
            icon="message"
          />
          <q-btn
            round
            flat
            icon="more_vert"
          >
            <q-menu
              auto-close
              :offset="[110, 8]"
            >
              <q-list style="min-width: 150px">
                <q-item clickable>
                  <q-item-section>New group</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Profile</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Archived</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Favorites</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Settings</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn
            round
            flat
            icon="close"
            class="WAL__drawer-close"
            @click="leftDrawerOpen = false"
          />
        </q-toolbar>
        <q-toolbar class="bg-grey-2">
          <q-input
            rounded
            outlined
            dense
            class="WAL__field full-width"
            bg-color="white"
            v-model="search"
            placeholder="Search or start a new conversation"
          >
          </q-input>
        </q-toolbar>

        <q-scroll-area style="height: calc(100% - 100px)">
          <q-list>
            <q-item
              v-for="(conversation, index) in conversations"
              :key="conversation.id"
              clickable
              v-ripple
              @click="currentConversationIndex = index"
            >
              <q-item-section avatar>
                <q-avatar>
                  <img :src="conversation.avatar">
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1">
                  {{ conversation.person }}
                </q-item-label>
                <q-item-label
                  class="conversation__summary"
                  caption
                >
                  <q-icon
                    name="check"
                    v-if="conversation.sent"
                  />
                  <!-- <q-icon name="not_interested" v-if="conversation.deleted" /> -->
                  {{ conversation.caption }}
                </q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-item-label caption>
                  {{ conversation.time }}
                </q-item-label>
                <q-icon name="keyboard_arrow_down" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

      </q-drawer>
      <q-page-container class="bg-grey-2">
        <router-view />
      </q-page-container>
      <q-footer>
        <q-toolbar class="bg-grey-3 text-black row">
          <q-btn
            round
            flat
            icon="insert_emoticon"
            class="q-mr-sm"
          />
          <q-input
            rounded
            outlined
            dense
            class="WAL__field col-grow q-mr-sm"
            bg-color="white"
            v-model="message"
            placeholder="Type a message"
          />
          <q-btn
            round
            flat
            icon="mic"
          />
        </q-toolbar>
      </q-footer>
    </q-layout>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const $q = useQuasar();
    const search = ref("");
    const message = ref("");
    const currentConversationIndex = ref(0);

    const conversations = ref([
      {
        id: 1,
        person: "Razvan Stoenescu",
        avatar: "https://cdn.quasar.dev/team/razvan_stoenescu.jpeg",
        caption: "I'm working on Quasar!",
        time: "15:00",
        sent: true,
      },
      {
        id: 2,
        person: "Dan Popescu",
        avatar: "https://cdn.quasar.dev/team/dan_popescu.jpg",
        caption: "I'm working on Quasar!",
        time: "16:00",
        sent: true,
      },
      {
        id: 3,
        person: "Jeff Galbraith",
        avatar: "https://cdn.quasar.dev/team/jeff_galbraith.jpg",
        caption: "I'm working on Quasar!",
        time: "18:00",
        sent: true,
      },
      {
        id: 4,
        person: "Allan Gaunt",
        avatar: "https://cdn.quasar.dev/team/allan_gaunt.png",
        caption: "I'm working on Quasar!",
        time: "17:00",
        sent: true,
      },
    ]);

    const style = computed(() => {
      return {
        height: $q.screen.height + "px",
      };
    });

    const currentConversation = computed(() => {
      return conversations.value[currentConversationIndex.value];
    });

    return {
      leftDrawerOpen,
      style,
      search,
      message,
      conversations,
      currentConversation,
      currentConversationIndex,
    };
  },
};
</script>

<style lang="sass">
.WAL
    width: 100%
    height: 100%
    padding-top: 20px
    padding-bottom: 20px
    &:before
        content: ''
        height: 127px
        position: fixed
        top: 0
        width: 100%
        background-color: #009688
    &__layout
        margin: 0 auto
        z-index: 4000
        height: 100%
        width: 90%
        max-width: 950px
        border-radius: 5px
    &__field.q-field--outlined .q-field__control:before
        border: none
.q-drawer--standard
    .WAL__drawer-close
        display: none
@media (max-width: 850px)
.WAL
    padding: 0
    &__layout
        width: 100%
        border-radius: 0
@media (min-width: 691px)
.WAL
    &__drawer-open
        display: none
.conversation__summary
    margin-top: 4px
.conversation__more
    margin-top: 0!important
    font-size: 1.4rem
</style>
```

## Vuex

- [modules-namespacing](https://next.vuex.vuejs.org/guide/modules.html#namespacing)

store/index.js
```js
import {
  store
} from 'quasar/wrappers'
import {
  createStore
} from 'vuex'

import mensajes from './mensajes'

export default store(function ( /* { ssrContext } */ ) {
  const Store = createStore({
    modules: {
      mensajes
    },
    strict: process.env.DEBUGGING
  })

  return Store
})
```

mensajes/index.js
```js
export default {
  namespaced: true,
  state: () => ({
    activo: true
  }),
  mutations: {
    setActivo(state, payload) {
      state.activo = payload
    }
  },
  actions: {

  },
  getters: {

  }
}
```

ejemploComponents
```vue
<template>
  <q-page>
    <q-btn @click="mutar">Mutar</q-btn>
  </q-page>
</template>

<script>
import { useStore } from "vuex";

export default {
  components: { Mensajes },
  setup() {
    const store = useStore();

    console.log(store.state.mensajes.activo);

    const mutar = () => {
      store.commit("mensajes/setActivo", !store.state.mensajes.activo);
      console.log(store.state.mensajes.activo);
    };

    return { mutar };
  },
};
</script>
```

## Mensajes
```vue
<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        v-for="mensaje in mensajes"
        :key="mensaje.id"
        :name="mensaje.nombre"
        :text="[mensaje.texto]"
        :sent="mensaje.uid === 'gato' ? true : false"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const mensajes = ref([
      {
        id: 1,
        uid: "gato",
        nombre: "gato",
        texto: "Hola 1",
      },
      {
        id: 2,
        uid: "perro",
        nombre: "perro",
        texto: "Hola 2",
      },
      {
        id: 3,
        uid: "perro",
        nombre: "perro",
        texto: "Hola 3",
      },
      {
        id: 4,
        uid: "gato",
        nombre: "gato",
        texto: "Hola 4",
      },
    ]);

    return { mensajes };
  },
};
</script>
```

Vista
```vue
<template>
  <q-page>
    <Mensajes />
  </q-page>
</template>

<script>
import Mensajes from "../components/Mensajes";

export default {
  components: { Mensajes },
  setup() {
  },
};
</script>
```

