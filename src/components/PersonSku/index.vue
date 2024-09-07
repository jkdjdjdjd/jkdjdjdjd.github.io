<script setup>
import { onMounted, ref } from 'vue'
import { useSubset } from '@/composables/useSubset'

const emit = defineEmits(['getSkuFn'])
// 商品数据
const { subSetFn } = useSubset()
const pathMap = ref({})
const props = defineProps({
  goods: {
    type: Object,
    required: true
  }
})
const dealGoods = () => {
  pathMap.value = getPathMap(props.goods)
  initDisabled(props.goods.specs, pathMap.value)
}
onMounted(() => {
  dealGoods()
})
const selectChange = (val, item) => {
  //没库存不让点击
  if (val.disabled) return
  if (val.selected) {
    // 已选中清空
    val.selected = false
  } else {
    item.values.forEach(i => (i.selected = false))
    val.selected = true
  }
  updateDisabledStatus(props.goods.specs, pathMap.value)
  // 规格完整产出数据,否则产出{}
  const selectedArr = getSelectedArr(props.goods.specs)
  if (selectedArr.find(item => item === '') === undefined) {
    const key = selectedArr.join('-')
    const skuId = pathMap.value[key][0]
    const sku = props.goods.skus.find(item => item.id === skuId)

    emit('getSkuFn', {
      skuId: sku.id,
      price: sku.price,
      oldPrice: sku.oldPrice,
      inventory: sku.inventory,
      specsText: sku.specs.reduce((prev, cur) => {
        return `${prev}${cur.name}:${cur.valueName},`
      }, '')
    })
  } else {
    emit('getSkuFn', {})
  }
}
const getPathMap = goods => {
  // 此函数用于生成一个路径映射表，其中键是由商品规格值名称组成的字符串，值是符合该规格组合的SKU ID数组
  const pathMap = {}
  const effectSkus = goods.skus.filter(item => item.inventory > 0)
  effectSkus.forEach(sku => {
    const selectedArr = sku.specs.map(item => item.valueName)
    const selectedSubset = subSetFn(selectedArr)
    selectedSubset.forEach(item => {
      // 一个key对应多个路径的id,所以有pathMap[key]就push添加,没有就直接赋值
      const key = item.join('-')
      if (pathMap[key]) {
        pathMap[key].push(sku.id)
      } else {
        pathMap[key] = [sku.id]
      }
    })
  })
  return pathMap
}
// 处理初始化时不能选的商品规格,虽设置了cursor:not-allowed,但还是可以点击
const initDisabled = (specs, pathMap) => {
  // 添加disabled属性来判断是否可以选
  specs.forEach(item => {
    item.values.forEach(val => {
      //能匹配到路径表示有库存
      if (pathMap[val.name]) {
        val.disabled = false
      } else {
        val.disabled = true
      }
    })
  })
}
// 获取已被选中的规格数组
const getSelectedArr = specs => {
  //获取已被选中的数组
  const selectArr = []
  specs.forEach(spec => {
    const selectedVal = spec.values.find(item => item.selected)
    // if (selectedVal) selectArr.push(selectedVal.name)
    // else selectArr.push('')
    selectArr.push(selectedVal ? selectedVal.name : '')
  })
  return selectArr
}

// 更新规格的禁用状态
const updateDisabledStatus = (specs, pathMap) => {
  specs.forEach((spec, index) => {
    const selectedArr = getSelectedArr(specs)
    // ['蓝色', '', '']
    spec.values.forEach(val => {
      selectedArr[index] = val.name
      //遍历第二个尺寸规格时['蓝色', '30cm', ''],['蓝色', '20cm', ''],['蓝色', '10cm', '']
      const key = selectedArr.filter(item => item !== '').join('-')
      val.disabled = pathMap[key] ? false : true
    })
  })
}
</script>

<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd>
        <!-- 遍历规格项的值，并根据值的类型渲染不同的元素 -->
        <template v-for="val in item.values" :key="val.name">
          <!-- 图片类型规格 -->
          <img
            :class="{ selected: val.selected, disabled: val.disabled }"
            @click="selectChange(val, item)"
            v-if="val.picture"
            :src="val.picture"
            :title="val.name" />
          <!-- 文字类型规格 -->
          <span
            v-else
            :class="{ selected: val.selected, disabled: val.disabled }"
            @click="selectChange(val, item)"
            >{{ val.name }}</span
          >
        </template>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="scss">
@mixin sku-state-mixin {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;

  &.selected {
    border-color: #27ba9b;
  }

  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}

.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;

    dt {
      width: 50px;
      color: #999;
    }

    dd {
      flex: 1;
      color: #666;

      > img {
        width: 50px;
        height: 50px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }

      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }
    }
  }
}
</style>
