<template>
  <div>
    <h1>Hello LaunchDarkly</h1>
    <pre>{{ flags }}</pre>
    <div v-if="flags['sprinkles']">
      <img src="@/assets/sprinkles.jpg" width="300" height="400" />
    </div>
    <div v-else>
      <img src="@/assets/plain.jpg" width="300" height="400" />
    </div>
  </div>
</template>
<script>
import { ref, inject } from "vue";

export default {
  setup(props, context) {
    const $ldClient = inject("$ldClient");
    let flags = ref({});

    $ldClient.on("ready", () => {
      flags.value = $ldClient.allFlags();
    });

    $ldClient.on("change", () => {
      flags.value = $ldClient.allFlags();
    });

    return {
      flags,
    };
  },
};
</script>