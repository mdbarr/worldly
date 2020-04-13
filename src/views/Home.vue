<template>
  <div class="home">
    <grid />
  </div>
</template>

<script>
import state from '@/state';
import Grid from '@/components/Grid';

export default {
  name: 'Home',
  components: { Grid },
  data () {
    return { state };
  },
};
</script>
