<template>
  <div class="table-page">
    <GiTable
      title="租户管理"
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
        <a-input v-model="queryForm.name" placeholder="请输入租户名称" allow-clear @change="search">
          <template #prefix><icon-search /></template>
        </a-input>
        <a-select
          v-model="queryForm.packageId"
          style="width: 200px"
          :options="tenantListOptions"
          placeholder="请选择套餐"
          allow-clear
          @change="search"
        />
        <a-button @click="reset">
          <template #icon><icon-refresh /></template>
          <template #default>重置</template>
        </a-button>
      </template>
      <template #toolbar-right>
        <a-button v-permission="['tenant:tenant:add']" type="primary" @click="onAdd">
          <template #icon><icon-plus /></template>
          <template #default>新增</template>
        </a-button>
      </template>
      <template #status="{ record }">
        <GiCellStatus :status="record.status" />
      </template>
      <template #domain="{ record }">
        <a v-if="record.domain" style="color: rgb(var(--arcoblue-7))" :text="record.domain" :href="formatDomain(record.domain)" />
        <span v-else style="color: red" class="text-red-4">未设置</span>
      </template>
      <template #expireTime="{ record }">
        <span v-if="!record.expireTime">
          <icon-check-circle-fill class="success" />
          <span>永不过期</span>
        </span>
        <span v-else>{{ record.expireTime }}</span>
      </template>
      <template #action="{ record }">
        <a-space>
          <a-link v-permission="['tenant:tenant:detail']" title="详情" @click="onDetail(record)">详情</a-link>
          <a-link v-permission="['tenant:tenant:update']" title="修改" @click="onUpdate(record)">修改</a-link>
          <a-link
            v-permission="['tenant:tenant:delete']"
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

    <TenantAddModal ref="TenantAddModalRef" @save-success="search" />
    <TenantDetailDrawer ref="TenantDetailDrawerRef" />
  </div>
</template>

<script setup lang="ts">
import TenantAddModal from './TenantAddModal.vue'
import TenantDetailDrawer from './TenantDetailDrawer.vue'
import { type TenantQuery, type TenantResp, deleteTenant, listTenant } from '@/apis/open/tenant'
import type { TableInstanceColumns } from '@/components/GiTable/type'
import { useTable } from '@/hooks'
import { isMobile } from '@/utils'
import has from '@/utils/has'
import { listAllTenantPackage } from '@/apis/open/tenantPackage'

defineOptions({ name: 'Tenant' })

const queryForm = reactive<TenantQuery>({
  name: undefined,
  packageId: undefined,
  status: undefined,
  sort: ['id,desc'],
})

const {
  tableData: dataList,
  loading,
  pagination,
  search,
  handleDelete,
} = useTable((page) => listTenant({ ...queryForm, ...page }), { immediate: true })
const columns: TableInstanceColumns[] = [
  { title: '租户ID', dataIndex: 'id', slotName: 'id' },
  { title: '租户名称', dataIndex: 'name', slotName: 'name' },
  { title: '绑定域名', dataIndex: 'domain', slotName: 'domain' },
  { title: '绑定套餐', dataIndex: 'packageName', slotName: 'packageName' },
  { title: '租户状态', dataIndex: 'status', slotName: 'status' },
  { title: '租户过期时间', dataIndex: 'expireTime', slotName: 'expireTime' },
  { title: '创建时间', dataIndex: 'createTime', slotName: 'createTime' },
  {
    title: '操作',
    dataIndex: 'action',
    slotName: 'action',
    width: 160,
    align: 'center',
    fixed: !isMobile() ? 'right' : undefined,
    show: has.hasPermOr(['tenant:tenant:detail', 'tenant:tenant:update', 'tenant:tenant:delete']),
  },
]

// 重置
const reset = () => {
  queryForm.name = undefined
  queryForm.packageId = undefined
  queryForm.status = undefined
  search()
}

// 删除
const onDelete = (record: TenantResp) => {
  return handleDelete(() => deleteTenant(record.id), {
    content: `是否确定删除该条数据？`,
    showModal: true,
  })
}

const TenantAddModalRef = ref<InstanceType<typeof TenantAddModal>>()
// 新增
const onAdd = () => {
  TenantAddModalRef.value?.onAdd()
}

// 修改
const onUpdate = (record: TenantResp) => {
  TenantAddModalRef.value?.onUpdate(record.id)
}

const TenantDetailDrawerRef = ref<InstanceType<typeof TenantDetailDrawer>>()
// 详情
const onDetail = (record: TenantResp) => {
  TenantDetailDrawerRef.value?.onOpen(record.id)
}

const tenantListOptions = ref([])

const getListAllTenantPackage = async () => {
  const data = await listAllTenantPackage()
  data.data.forEach((item: any) => {
    tenantListOptions.value.push({ label: item.name, value: item.id })
  })
}

const formatDomain = (domain: string): string => {
  if (domain.startsWith('http')) {
    return domain
  } else {
    return `http://${domain}`
  }
}

onMounted(() => {
  getListAllTenantPackage()
})
</script>

<style scoped lang="scss"></style>
