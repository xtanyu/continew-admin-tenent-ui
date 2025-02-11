<template>
  <a-modal
    v-model:visible="visible"
    :esc-to-close="false"
    :mask-closable="false"
    :title="title"
    :width="width >= 500 ? 500 : '100%'"
    :hi
    draggable
    @close="reset"
    @before-ok="save"
  >
    <a-form ref="formRef" :model="form" :rules="rules" auto-label-width size="large">
      <a-form-item field="name" label="套餐名称">
        <a-input v-model.trim="form.name" placeholder="请输入套餐名称" />
      </a-form-item>
      <a-form-item field="status" label="套餐状态">
        <a-switch
          v-model="form.status" type="round" :checked-value="1" :unchecked-value="2" checked-text="启用"
          unchecked-text="禁用"
        />
      </a-form-item>
      <a-form-item field="menuIds" label="关联菜单">
        <a-space>
          <a-checkbox v-model="isMenuExpanded" @change="onExpanded">展开/折叠</a-checkbox>
          <a-checkbox v-model="isMenuCheckAll" @change="onCheckAll">全选/全不选</a-checkbox>
          <a-checkbox v-model="form.menuCheckStrictly">父子联动</a-checkbox>
        </a-space>
        <template #extra>
          <a-tree
            ref="menuTreeRef"
            :data="menuList"
            class="scrollable-container"
            :default-expand-all="isMenuExpanded"
            :check-strictly="!form.menuCheckStrictly"
            checkable
          />
        </template>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import { type FormInstance, Message } from '@arco-design/web-vue'
import { useWindowSize } from '@vueuse/core'
import { addTenantPackage, getTenantPackage, updateTenantPackage } from '@/apis/tenant/tenantPackage'
import { useResetReactive } from '@/hooks'
import { useMenu } from '@/hooks/app'

const emit = defineEmits<{ (e: 'save-success'): void }>()
const { width } = useWindowSize()

const dataId = ref('')
const visible = ref(false)
const isUpdate = computed(() => !!dataId.value)
const title = computed(() => (isUpdate.value ? '修改租户套餐' : '新增租户套餐'))
const formRef = ref<FormInstance>()
const { menuList, getTenantPackageMenuList } = useMenu()
const rules: FormInstance['rules'] = {
  name: [{ required: true, message: '请输入套餐名称' }],
  status: [{ required: true, message: '请选择套餐状态' }],
}

const [form, resetForm] = useResetReactive({
  menuCheckStrictly: true,
  status: 2,
})

const menuTreeRef = ref()
const isMenuExpanded = ref(false)
const isMenuCheckAll = ref(false)

// 重置
const reset = () => {
  isMenuExpanded.value = false
  isMenuCheckAll.value = false
  menuTreeRef.value?.expandAll(isMenuExpanded.value)
  menuTreeRef.value?.checkAll(false)
  formRef.value?.resetFields()
  resetForm()
}

// 获取所有选中的菜单
const getMenuAllCheckedKeys = () => {
  // 获取目前被选中的菜单
  const checkedNodes = menuTreeRef.value?.getCheckedNodes()
  const checkedKeys = checkedNodes.map((item: TreeNodeData) => item.key)
  // 获取半选中的菜单
  const halfCheckedNodes = menuTreeRef.value?.getHalfCheckedNodes()
  const halfCheckedKeys = halfCheckedNodes.map((item: TreeNodeData) => item.key)
  checkedKeys.unshift(...halfCheckedKeys)
  return checkedKeys
}

// 保存
const save = async () => {
  try {
    const isInvalid = await formRef.value?.validate()
    if (isInvalid) return false
    form.menuIds = getMenuAllCheckedKeys()
    if (isUpdate.value) {
      await updateTenantPackage(form, dataId.value)
      Message.success('修改成功')
    } else {
      await addTenantPackage(form)
      Message.success('新增成功')
    }
    emit('save-success')
    return true
  } catch (error) {
    return false
  }
}

// 新增
const onAdd = async () => {
  reset()
  await getTenantPackageMenuList()
  dataId.value = ''
  visible.value = true
}

// 修改
const onUpdate = async (id: string) => {
  reset()
  await getTenantPackageMenuList()
  dataId.value = id
  const { data } = await getTenantPackage(id)
  Object.assign(form, data)
  menuTreeRef.value?.checkNode(form.menuIds, true, true)
  visible.value = true
}

// 展开/折叠
const onExpanded = () => {
  menuTreeRef.value?.expandAll(isMenuExpanded.value)
}

// 全选/全不选
const onCheckAll = () => {
  menuTreeRef.value?.checkAll(isMenuCheckAll.value)
}

defineExpose({ onAdd, onUpdate })
</script>

<style lang="scss" scoped>
.scrollable-container {
  height: 280px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
