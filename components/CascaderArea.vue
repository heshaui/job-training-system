<template>
    <el-cascader
      v-model="myValue"
      :options="areas"
      :props="cascaderConfig"
      filterable
      clearable
      v-bind="$attrs"
    />
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';
import areas from '~/utils/area.js'

const props = defineProps({
    value: String
})
const emits = defineEmits(['input'])

const myValue = computed({
  // 将中文转成 code 码
  get: function() {
      return props.value
  },
  // 将 code 码转成中文
  set: function(value) {
      emits('input', value)
  }
})
const cascaderConfig = {
    // checkStrictly: true,
    value: 'name',
    label: 'name',
    children: 'children'
}
</script>

