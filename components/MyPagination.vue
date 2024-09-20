<template>
    <div class="py-[30px] flex justify-center">
        <el-pagination 
            background
            size="large"
            layout="pager"
            v-bind="$attrs"
        />
    </div>
</template>

<style lang="scss" scoped>

:deep(.el-pagination.is-background .el-pager li.is-active) {
    background: #3CAE91 ;
}
:deep(.el-pagination.is-background .el-pager li) {
    background: #fff;
}
</style>