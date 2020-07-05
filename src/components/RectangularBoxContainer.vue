<template>
  <b-container class="rectangular-box-container">
    <b-row>
      <RectangularBox
        v-for="box in RectangularBoxContainer.boxes"
        :key="box.id"
        :box="box"
      />
    </b-row>
  </b-container>
</template>

<script>
import RectangularBox from '@/components/RectangularBox.vue'

export default {
  name: 'RectangularBoxContainer',
  components: {
    RectangularBox
  },
  data: function () {
    return {
      RectangularBoxContainer: {
        boxes: [
          {
            id: 1,
            width: '3',
            height: '_1x',
            type: 'icon-header',
            title: 'collaborative online services',
            img: 'some image',
            bgType: 'bg-dark-blue'
          },
          {
            id: 2,
            width: '3',
            height: '_1x',
            type: 'icon-header',
            title: 'outreach programs',
            img: 'another image',
            bgType: 'bg-blue'
          },
          {
            id: 3,
            height: '_1x',
            width: '6',
            bgType: 'bg-grey'
          },
          {
            id: 4,
            width: '6',
            height: '_2x',
            bgType: 'bg-grey'
          },
          {
            id: 5,
            width: '6',
            height: '_2x',
            bgType: 'bg-white'
          },
          {
            id: 6,
            width: '6',
            height: '_2x',
            bgType: 'bg-white'
          },
          {
            id: 7,
            width: '6',
            height: '_2x',
            bgType: 'bg-grey'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.rectangular-box-container {
  .row {
    justify-content: space-between;
  }
}
</style>
