<template lang="pug">
q-page(padding)
  q-btn(label='notfiy1' @click='notify')
  q-btn(label='notfiy2' @click='showNotify2')
  q-btn(label='notfiy3' @click='showNotify3')
</template>
<script>
import { defineComponent } from 'vue';
import { Notify, useQuasar } from 'quasar'

export default defineComponent({
  name: 'PageIndex',

  setup() {
    // from https://quasar.dev/quasar-plugins/notify
    const $q = useQuasar();

    return {
      notify() {
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

    showNotify3() {
      Notify.create({
        message: 'Jim pinged you.',
        icon: 'announcement',
      });
    },
  },
});
</script>
