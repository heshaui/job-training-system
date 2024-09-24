<template>
    <div class="flex condition-box">
        <span class="label">{{ data.label }}：</span>
        <ul class="flex-auto flex flex-wrap">
            <template v-for="(item, key) of data.options" :key="key">
                <li v-show="!data.more || (data.more && ((!isMore && key <= data.showNum) || isMore))" :class="active === key ? 'active' : 'hover-text'" class="list-item" @click="onSelect(label, item, key)">{{ item }}</li>
            </template>
        </ul>
        <button v-if="data.more" class="shrink-0 btn-more" @click="showMore">
            <el-icon>
                <Minus v-if="isMore" />
                <Plus v-else />
            </el-icon>
            {{ isMore ? '收起' : '更多' }}
        </button>
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
    .btn-more {
        margin-left: 20px;
        width: 55px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        border: 1px solid #DDDDDD;
        font-size: 12px;
        color: #666;
        :deep(.el-icon) {
            font-size: 14px;
            color: #666;
            margin-right: 5px;
        }
        &:hover {
            border-color: #3CAE91;
            color: #3CAE91;
            :deep(.el-icon) {
                color: #3CAE91;
            }
        }
    }
}
</style>