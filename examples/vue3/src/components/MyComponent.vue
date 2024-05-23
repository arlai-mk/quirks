<script setup lang="ts">
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import { useChain } from '@quirks/vue';

const route = useRoute();
const { address } = useChain(route.params.chain as string);
console.log('MyComponent "address" immediate: ' + address.value);

watch(address, (newAddress) => {
  console.log('MyComponent "address" in watch: ' + newAddress);
});

watch(
  () => route.params.chain,
  (newChain) => {
    console.log('MyComponent "chain" in watch: ' + newChain);
  },
);
</script>
