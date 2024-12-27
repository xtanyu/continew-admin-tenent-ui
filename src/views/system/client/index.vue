<template>
  <div class="table-page">
    <GiTable
      title="客户端管理"
      row-key="id"
      :data="dataList"
      :columns="columns"
      :loading="loading"
      :scroll="{ x: '100%', y: '100%', minWidth: 1000 }"
      :pagination="pagination"
      :disabled-tools="['size']"
      :disabled-column-keys="['name']"
      @refresh="search"
    >
      <template #toolbar-left>
        <a-input v-model="queryForm.clientKey" placeholder="请输入客户端Key" allow-clear @change="search">
          <template #prefix>
            <icon-search />
          </template>
        </a-input>
        <a-input v-model="queryForm.clientSecret" placeholder="请输入客户端秘钥" allow-clear @change="search">
          <template #prefix>
            <icon-search />
          </template>
        </a-input>
        <a-select
          v-model="queryForm.clientType"
          :options="client_type"
          placeholder="请选择客户端类型"
          allow-clear
          style="width: 150px"
          @change="search"
        />
        <a-select
          v-model="queryForm.status" :options="dis_enable_status_enum" placeholder="请选择状态" allow-clear
          style="width: 150px"
          @change="search"
        >
          <template #prefix>
            <icon-search />
          </template>
        </a-select>
        <a-button @click="reset">
          <template #icon>
            <icon-refresh />
          </template>
          <template #default>重置</template>
        </a-button>
      </template>
      <template #toolbar-right>
        <a-button v-permission="['system:client:add']" type="primary" @click="onAdd">
          <template #icon>
            <icon-plus />
          </template>
          <template #default>新增</template>
        </a-button>
        <a-button v-permission="['system:client:export']" @click="onExport">
          <template #icon>
            <icon-download />
          </template>
          <template #default>导出</template>
        </a-button>
      </template>
      <template #action="{ record }">
        <a-space>
          <a-link v-permission="['system:client:detail']" title="详情" @click="onDetail(record)">详情</a-link>
          <a-link v-permission="['system:client:update']" title="修改" @click="onUpdate(record)">修改</a-link>
          <a-link
            v-permission="['system:client:delete']"
            status="danger"
            :disabled="record.disabled"
            :title="record.disabled ? '不可删除' : '删除'"
            @click="onDelete(record)"
          >
            删除
          </a-link>
        </a-space>
      </template>
    </GiTable>

    <ClientAddModal ref="ClientAddModalRef" @save-success="search" />
    <ClientDetailDrawer ref="ClientDetailDrawerRef" />
  </div>
</template>

<script setup lang="tsx">
import type { LabelValue } from '@arco-design/web-vue/es/tree-select/interface'
import ClientAddModal from './ClientAddModal.vue'
import ClientDetailDrawer from './ClientDetailDrawer.vue'
import { type ClientQuery, type ClientResp, deleteClient, exportClient, listClient } from '@/apis/system/client'
import type { TableInstanceColumns } from '@/components/GiTable/type'
import { useDownload, useTable } from '@/hooks'
import { useDict } from '@/hooks/app'
import { isMobile } from '@/utils'
import has from '@/utils/has'
import GiCellTag from '@/components/GiCell/GiCellTag.vue'
import GiCellTags from '@/components/GiCell/GiCellTags.vue'

defineOptions({ name: 'Client' })

const {
  auth_type_enum,
  client_type,
  dis_enable_status_enum,
} = useDict('auth_type_enum', 'client_type', 'dis_enable_status_enum')

const queryForm = reactive<ClientQuery>({
  clientKey: '',
  clientSecret: '',
  authType: [] as string[],
  clientType: '',
  status: '',
  sort: ['id,desc'],
})
const formatAuthType = (data: string[]) => {
  return data.map((item: string) => {
    return auth_type_enum.value.find((d: LabelValue) => d.value === item).label
  })
}
const {
  tableData: dataList,
  loading,
  pagination,
  search,
  handleDelete,
} = useTable((page) => listClient({ ...queryForm, ...page }), { immediate: true })
const columns: TableInstanceColumns[] = [
  { title: '客户端ID', dataIndex: 'clientId', slotName: 'clientId', ellipsis: true, tooltip: true },
  { title: '客户端Key', dataIndex: 'clientKey', slotName: 'clientKey', ellipsis: true, tooltip: true, align: 'center' },
  { title: '客户端秘钥', dataIndex: 'clientSecret', slotName: 'clientSecret', ellipsis: true, tooltip: true, align: 'center' },
  {
    title: '认证类型',
    dataIndex: 'authType',
    slotName: 'authType',
    ellipsis: true,
    tooltip: true,
    align: 'center',
    render: ({ record }) => {
      return (
        <GiCellTags data={formatAuthType(record.authType)} />
      )
    },
  },
  {
    title: '客户端类型',
    dataIndex: 'clientType',
    slotName: 'clientType',
    ellipsis: true,
    tooltip: true,
    align: 'center',
    render: ({ record }) => {
      return <GiCellTag value={record.clientType} dict={client_type.value} />
    },
  },
  { title: 'Token最低活跃频率', dataIndex: 'activeTimeout', slotName: 'activeTimeout', align: 'center' },
  { title: 'Token有效期', dataIndex: 'timeout', slotName: 'timeout', align: 'center' },
  {
    title: '状态',
    dataIndex: 'status',
    slotName: 'status',
    align: 'center',
    render: ({ record }) => {
      return <GiCellTag value={record.status} dict={dis_enable_status_enum.value} />
    },
  },
  { title: '创建时间', dataIndex: 'createTime', slotName: 'createTime' },
  {
    title: '操作',
    dataIndex: 'action',
    slotName: 'action',
    width: 160,
    align: 'center',
    fixed: !isMobile() ? 'right' : undefined,
    show: has.hasPermOr(['system:client:detail', 'system:client:update', 'system:client:delete']),
  },
]

// 重置
const reset = () => {
  queryForm.clientKey = ''
  queryForm.clientSecret = ''
  queryForm.authType = []
  queryForm.clientType = ''
  queryForm.status = ''
  search()
}

// 删除
const onDelete = (record: ClientResp) => {
  return handleDelete(() => deleteClient(record.id), {
    content: `是否确定删除该条数据？`,
    showModal: true,
  })
}

// 导出
const onExport = () => {
  useDownload(() => exportClient(queryForm))
}

const ClientAddModalRef = ref<InstanceType<typeof ClientAddModal>>()
// 新增
const onAdd = () => {
  ClientAddModalRef.value?.onAdd()
}

// 修改
const onUpdate = (record: ClientResp) => {
  ClientAddModalRef.value?.onUpdate(record.id)
}

const ClientDetailDrawerRef = ref<InstanceType<typeof ClientDetailDrawer>>()
// 详情
const onDetail = (record: ClientResp) => {
  ClientDetailDrawerRef.value?.onOpen(record.id)
}
</script>

<style scoped lang="scss"></style>
