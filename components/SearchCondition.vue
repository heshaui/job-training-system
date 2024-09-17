<template>
    <div class="flex condition-box">
        <span class="label">{{ data.label }}：</span>
        <ul class="flex-auto flex flex-wrap">
            <template v-for="(item, key) of data.options" :key="key">
                <li v-show="!data.more || (data.more && ((!isMore && key <= data.showNum) || isMore))" :class="active === key ? 'active' : 'hover-text'" class="list-item" @click="onSelect(label, item, key)">{{ item }}</li>
            </template>
        </ul>
        <el-button v-if="data.more" class="shrink-0" :icon="isMore ? 'Minus' : 'Plus'" @click="showMore">{{ isMore ? '收起' : '更多' }}</el-button>
    </div>
</template>

<script setup>
    const props = defineProps({
        data: Object
    })
    const emit = defineEmits(['onSelect'])
    const active = ref(0)
    const isMore = ref(false)
    const showMore = () => {
        isMore.value = !isMore.value
    }
    const onSelect = (label, item, key) => {
        active.value = key
        emit('onSelect', {label, value: item})
    }
</script>

<style lang="scss" scoped>
.condition-box {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
    .label {
        width: 42px;
        color: #333;
        font-weight: 500;
        flex-shrink: 0;
        line-height: 20px;
    }
    .list-item {
        height: 20px;
        line-height: 20px;
        cursor: pointer;
        padding: 0 6px;
        margin: 0 6px 6px;
        &.active {
            background-color: #3CAE91 ;
            color: #fff;
            border-radius: 2px;
            &:hover {
                color: #fff;
            }
        }
    }
    :deep(.el-button) {
        margin-left: 20px;
        margin-top: -2px;
        width: 55px;
        height: 24px;
        border-radius: 2px;
        border: 1px solid #DDDDDD;
        font-size: 14px;
        color: #666;
    }
}
</style>