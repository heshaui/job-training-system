<template>
    <el-cascader
      v-model="value"
      :options="areas"
      :props="cascaderConfig"
      v-bind="$attrs"
      @change="handleChange"
    />
</template>

<script setup>
import {ref} from 'vue';
import areas from '~/utils/area.js'

const value = ref('')
const cascaderConfig = {
    // checkStrictly: true,
    value: 'name',
    label: 'name',
    children: 'children'
}
const handdleChange = () => {

}

</script>