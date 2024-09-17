<template>
	<div class="search-container" :class="isHead ? 'head' : ''">
        <el-select v-model="searchType" placeholder="请选择" class="custom-select">
            <el-option label="职位" value="1"></el-option>
            <el-option label="岗位" value="2"></el-option>
            <el-option label="新闻" value="3"></el-option>
        </el-select>
        <div class="divider"></div>
        <input v-model="searchValue" type="text" class="search-input" placeholder="请输入关键字" />
        <el-button class="search-button" :icon="isHead ? '': 'Search'" @click="onSearch">搜索</el-button>
    </div>
</template>
  
<script setup>
    const props = defineProps({
        isHead: Boolean
    })
    const emit = defineEmits(['onSearch'])
	const searchType = ref('1')
    const searchValue = ref('')
    const onSearch = () => {
        emit('onSearch', searchValue.value)
    }
</script>

<style lang="scss" scoped>
// 职位库样式
.search-container {
    display: flex;
    align-items: center;
    width: 880px;
    height: 48px;
    border-radius: 24px;
	border: 1px solid #3CAE91;
}


/* 使用 :deep() 覆盖 el-select 的默认样式 */
:deep(.el-select .el-input__inner) {
    height: 100%;
    border: none;
    background: none;
    padding-left: 10px;
    font-size: 16px;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
/* 去除 el-select 聚焦时的蓝色框 */
:deep(.el-select .el-input__inner:focus) {
    outline: none; /* 移除默认的 outline */
    box-shadow: none; /* 移除聚焦时的阴影效果 */
    border-color: transparent; /* 或者设置边框颜色 */
}

:deep(.el-select__wrapper) {
	height: 100%;
	border-radius: 24px 0 0 24px;
	box-shadow: none;
}

:deep(.el-select__wrapper.is-hovering:not(.is-focued)) {
	box-shadow: none;
}

:deep(.el-select) {
    width: 85px;
    height: 100%;
	border-radius: 24px 0 0 24px;
}

:deep(.el-select__selected-item.el-select__placeholder span) {
	font-size: 16px;
	color: #666;
}


.divider {
    width: 1px;
    height: 28px;
    background-color: #ccc;
}

.search-input {
    flex: 1;
    border: none;
    padding: 0 10px;
    font-size: 16px;
	color: #666;
    outline: none;
    height: 100%;
	&::placeholder {
		color: #ccc;
		font-size: 14px;
	}
}

:deep(.el-button).search-button {
    width: 122px;
    height: 100%;
	border-radius: 0 24px 24px 0;
    background-color: #3CAE91;
    color: white;
    border: none;
    font-size: 16px;
    cursor: pointer;
}

.search-button:hover {
    background-color: #53cdae;
}

// 头部样式
.head.search-container {
    width: 460px;
    height: 48px;
    border-radius: 2px 1px 1px 2px;
    :deep(.el-select__wrapper) {
        border-radius: 0;
    }
    :deep(.el-select) {
        width: 78px;
        border-radius: 0;
    }
    :deep(.el-button).search-button {
        width: 78px;
        border-radius: 0;
    }
}

</style>