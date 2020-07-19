<template>
  <b-col :lg="box.width" class="rectangular-box">
    <div :class="['box-content', box.height, box.bgType]">
      <IconHeader
        v-if="box.type == 'icon-header'"
        :title="box.title"
        :img="box.img"
      />
    </div>
  </b-col>
</template>

<script>
import IconHeader from '@/components/IconHeader.vue'

export default {
  name: 'RectangularBox',
  components: { IconHeader },
  props: {
    box: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
.rectangular-box {
  padding-top: 10px;
  padding-bottom: 10px;

  .box-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ._1x {
    height: 180px;
  }
  ._2x {
    height: 300px;
  }

  .bg-blue {
    background-color: #27b9e0;
  }

  .bg-dark-blue {
    background-color: #194768;
  }

  .bg-grey {
    background-color: #c4c4c4;
  }

  .bg-white {
    background-color: #ffffff;
  }
}
</style>
