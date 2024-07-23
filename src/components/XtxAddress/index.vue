<script setup>
// 返回省市区城市编码，和**省 **市 **区的一个字符串
// 因为用了El的组件，所以不能再install中全局注册，否则会覆盖自定义的主题样式，所以局部注册
import axios from 'axios'
import { Close } from '@element-plus/icons-vue'
import { onMounted, ref, watch } from 'vue'

const areaIpt = ref(null)
const areaDom = ref(null)
const address = ref([])
const areaStr = ref('')
const provinceCode = ref('') // 省份代码
const cityCode = ref('') // 城市代码
const districtCode = ref('') // 区县代码
const areaList = ref([])
const emit = defineEmits(['getAddress'])

const getAddress = async () => {
  // 获取地址数据
  const res = await axios.get(
    'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
  )
  address.value = res.data
  // 格式化地址数据
  areaList.value = address.value.map(item => {
    return {
      code: item.code,
      level: item.level,
      name: item.name
    }
  })
}

const selectAddress = () => {
  // 显示地址选择框
  areaDom.value.style.display = 'block'
}
const clearAddress = () => {
  // 清空地址选择
  areaStr.value = ''
  provinceCode.value = ''
  cityCode.value = ''
  districtCode.value = ''
  // 重置地址列表
  areaList.value = address.value.map(item => {
    return {
      code: item.code,
      level: item.level,
      name: item.name
    }
  })

  // 隐藏地址选择框
  areaDom.value.style.display = 'none'
}
const handleClick = item => {
  // 处理地址选择点击事件
  if (item.level === 0) {
    provinceCode.value = item.code
    areaStr.value += item.name + ' '
  } else if (item.level === 1) {
    cityCode.value = item.code
    areaStr.value += item.name + ' '
  } else if (item.level === 2) {
    if (districtCode.value) {
      // 区县已经选择过，重新赋值区县
      const districtArr = areaStr.value.split(' ')
      districtArr[districtArr.length - 1] = item.name
      areaStr.value = districtArr.join(' ')
      districtCode.value = item.code
    } else {
      districtCode.value = item.code
      areaStr.value += item.name
    }

    // 向父组件传值
    emit('getAddress', {
      provinceCode: provinceCode.value,
      cityCode: cityCode.value,
      countyCode: districtCode.value,
      fullLocation: areaStr.value
    })
    // 关闭弹窗
    areaDom.value.style.display = 'none'
  }
}
watch(provinceCode, value => {
  // 监听省份代码变化
  if (value !== '') {
    // value为空，find找不到，就会有多层属性访问问题
    areaList.value = address.value.find(item => item.code === value).areaList
  }
})
watch(cityCode, value => {
  // 监听城市代码变化
  if (value !== '') {
    const provinceList = address.value.find(
      item => item.code === provinceCode.value
    ).areaList
    areaList.value = provinceList.find(item => item.code === value).areaList
  }
})
defineExpose({
  // 暴露 clearAddress 方法，供外部调用
  clearAddress
})
onMounted(() => {
  getAddress()
})
</script>

<template>
  <div class="address_container">
    <el-input
      ref="areaIpt"
      @focus="selectAddress"
      @click="selectAddress"
      @clear="clearAddress"
      @blur="areaDom.style.display = 'none'"
      v-model="areaStr"
      :readonly="true">
      <!-- 清空按钮 -->
      <template #suffix>
        <el-icon class="clear-icon" :size="18" @click="clearAddress"
          ><Close
        /></el-icon>
      </template>
    </el-input>
    <!-- 展示省市区的盒子 -->
    <div ref="areaDom" class="area">
      <ul>
        <li
          @mousedown.stop.prevent="handleClick(item)"
          v-for="item in areaList"
          :key="item.code">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.address_container {
  position: relative;
  width: 100%;
}
.address_container .area {
  display: none;
  position: absolute;
  top: 45px;
  left: 0;
  background-color: #fff;
  z-index: 999;
  width: 100%;
  height: 200px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1.5px solid $xtxColor;
  overflow: auto;
}
.address_container .area li {
  display: inline-block;
  margin: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 2px 5px;
  font-size: 14px;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }
}
.clear-icon {
  cursor: pointer;
}
</style>
