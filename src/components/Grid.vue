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
          :width="square"
          :height="square"
          :x="x(col)"
          :y="y(row)"
          class="square"
        />
        <rect
          v-if="col !== columns"
          :width="edge"
          :height="square"
          :x="x(col)+square"
          :y="y(row)"
          class="edge"
        />
        <rect
          v-if="row !== rows"
          :width="square+edge"
          :height="edge"
          :x="x(col)"
          :y="y(row)+square"
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
  props: {
    square: {
      type: Number,
      default: 14,
    },
    edge: {
      type: Number,
      default: 3,
    },
  },
  data () {
    return {
      state,
      width: 0,
      height: 0,
      rows: 0,
      columns: 0,
      offsetX: 0,
      offsetY: 0,
    };
  },
  computed: { style () {
    return `width: ${ this.width }px; height: ${ this.height }px;`;
  } },
  mounted () {
    this.width = window.innerWidth;
    this.height = window.innerHeight - 48;

    this.columns = Math.floor(this.width / (this.square + this.edge));
    this.rows = Math.floor(this.height / (this.square + this.edge));

    this.offsetX = (this.width - ((this.columns * (this.square + this.edge)) - this.edge)) / 2;
    this.offsetY = (this.height - ((this.rows * (this.square + this.edge)) - this.edge)) / 2;

    console.log(this.width, this.height, this.columns, this.rows);
  },
  methods: {
    x (col) {
      return ((col - 1) * (this.square + this.edge)) + this.offsetX;
    },
    y (row) {
      return ((row - 1) * (this.square + this.edge)) + this.offsetY;
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

.square:hover {
  fill: #0073b1;
}

.edge {
  fill: #0073b1;
  opacity: 0.25;
}

.edge:hover {
  opacity: 1;
}
</style>
