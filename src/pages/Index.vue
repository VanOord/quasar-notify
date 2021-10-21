<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <q-btn label='notify as in documentation' @click='showNotif'/>
    <q-btn label='notify from Alias' @click='showNotify2'/>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    // from https://quasar.dev/quasar-plugins/notify
    const $q = useQuasar();

    return {
      showNotif() {
        $q.notify({
          message: 'Jim pinged you.',
          icon: 'announcement',
        });
      },
    };
  },

  methods: {
    showNotify2() {
      this.$q.notify({
        message: 'Jim pinged you.',
        icon: 'announcement',
      });
    },
  },
});
</script>
