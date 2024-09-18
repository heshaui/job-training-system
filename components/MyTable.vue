<script setup>
	import { defineProps, computed } from 'vue';
    const props = defineProps({
        tableColumns: {
            type: Array,
            default: () => []
        }
    })
    const initColumns = () => {
        return props.tableColumns.map((column) => {
            return {
                ...column,
                // 添加默认的列宽
                minWidth: column.minWidth || '100px',
                align: column.align || 'center'
            }
        })
    }
    const columns = computed(() => initColumns())
</script>

<template>
    <el-table 
		id="myTable"
        v-bind="$attrs"
        empty-text="暂无数据"
    >   
        <template v-for="(column, index) of columns">
            <template v-if="column.solt">
                <slot :name="column.slot" />
            </template>
            <el-table-column v-else v-bind="column" :key="index">
                <template #default="scope">
                    <template v-if="column.formatter">
                        <span v-html="column.formatter(scope.row, column)" />
                    </template>
                    <template v-else>
                        <!-- 正常显示 -->
                        <span>{{ scope.row[column.prop] }}</span>
                    </template>
                </template>
                
            </el-table-column>
        </template>
    </el-table>
</template>

<style lang="scss">
#myTable.el-table {
    thead {
        color: #333;
    }
	th, td {
		border: none;
	}
    tr.el-table__row:hover {
        background: #DDF2EC !important;
    }
}
</style>
