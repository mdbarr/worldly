<template>
  <svg
    class="grid"
    :style="style"
  >
    <g
      v-for="row in rows"
      :key="'row-' + row"
    >
      <g
        v-for="col in columns"
        :key="'column-' + col"
      >
        <rect
          :width="cube"
          :height="cube"
          :x="x(col)"
          :y="y(row)"
          class="square"
        />
        <rect
          :width="side"
          :height="cube"
          :x="x(col)+cube"
          :y="y(row)"
          class="edge"
        />
        <rect
          :width="cube+side"
          :height="side"
          :x="x(col)"
          :y="y(row)+cube"
          class="edge"
        />
      </g>
    </g>
  </svg>
</template>

<script>
import state from '@/state';

export default {
  name: 'Grid',
  data () {
    return {
      state,
      cube: 12,
      side: 3,
      width: 0,
      height: 0,
      rows: 0,
      columns: 0,
    };
  },
  computed: { style () {
    return `width: ${ this.width }px; height: ${ this.height }px;`;
  } },
  mounted () {
    this.width = window.innerWidth;
    this.height = window.innerHeight - 48;

    this.columns = Math.floor(this.width / (this.cube + this.side));
    this.rows = Math.floor(this.height / (this.cube + this.side));

    console.log(this.width, this.height, this.columns, this.rows);
  },
  methods: {
    x (col) {
      return (col - 1) * (this.cube + this.side);
    },
    y (row) {
      return (row - 1) * (this.cube + this.side);
    },
  },
};
</script>

<style>
.grid {
  position: absolute;
  top: 0;
  left: 0;
}

.square {
  fill: #fff;
}

.edge {
  fill: #0073b1;
  opacity: 0.5;
}
</style>
