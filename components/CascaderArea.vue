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
import { ref } from 'vue';
import areas from '~/utils/area.js'

const value = ref('')
const cascaderConfig = {
    // checkStrictly: true,
    value: 'name',
    label: 'name',
    children: 'children'
}
const handleChange = () => {

}

</script>

<style lang="scss">
$color: #3CAE91;
.el-cascader {
  .el-input__wrapper {
    width: 280px;
    height: 66px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 0 0 1px #dcdcdc;
    color: #333;
    font-size: 16px;
    .el-input__inner {
      &::placeholder {
        color: #333;
        font-size: 16px;  
      }
    }
    svg {
      font-size: 16px;
    }
  }
  .el-input.is-focus .el-input__wrapper {
    box-shadow: 0 0 0 1px $color;
  }
}
.el-cascader-node {
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  color: #333;
  &:not(.is-disabled):hover, &:not(.is-disabled):focus {
    background: #DDF2EC;
  }
  &.in-active-path, &.is-selectable.in-checked-path, &.is-active {
    color: $color;
    font-weight: normal;
    background: #DDF2EC;
  }
}
</style>