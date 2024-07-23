<script setup>
import { getCheckoutService, updateAddressService } from '@/apis/checkout'
import { onMounted, ref } from 'vue'
import XtxAddress from '@/components/XtxAddress/index.vue'
import { addAddressService } from '@/apis/checkout'
import { ElMessage } from 'element-plus'
import { createOrderIdService } from '@/apis/pay'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores'

const cartStore = useCartStore()
const router = useRouter()
const addressRef = ref(null)
const addressChildRef = ref(null)
const toggleFlag = ref(false) // 切换地址弹窗
const addFlag = ref(false) // 添加地址弹窗
const checkInfo = ref({}) // 订单对象
const curAddress = ref({}) // 地址对象
const defaultData = ref([
  { value: 0, label: '是' },
  { value: 1, label: '否' }
])
const activeAddress = ref({}) //点击弹框，选确定才修改默认地址，所以额外声明一个激活地址
const addressInfo = ref({
  receiver: '',
  contact: '',
  provinceCode: '',
  cityCode: '',
  countyCode: '',
  address: '',
  postalCode: '',
  addressTags: '',
  isDefault: null,
  fullLocation: ''
})
const rules = {
  receiver: [{ required: true, message: '请填写收件人', trigger: 'blur' }],
  contact: [
    { required: true, message: '请填写联系方式', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur'
    }
  ],

  address: [{ required: true, message: '请填写详细地址', trigger: 'blur' }],
  postalCode: [{ required: true, message: '请填写邮政编码', trigger: 'blur' }],
  addressTags: [{ required: true, message: '请填写地址标签', trigger: 'blur' }],
  isDefault: [
    { required: true, message: '是否设置为默认地址', trigger: 'blur' }
  ]
}

const getCheckout = async () => {
  const res = await getCheckoutService()
  checkInfo.value = res
  // console.log('🚀 ~ getCheckout ~ res:', res)
  curAddress.value = res.userAddresses.find(item => item.isDefault === 0)
  activeAddress.value = curAddress.value
}
const handleAddressClick = item => {
  activeAddress.value = item
}
const confirmAddress = async () => {
  // 点击确定，修改默认地址
  // 将当前默认地址的isDefault改为1
  curAddress.value.isDefault = 1
  await updateAddressService(curAddress.value)
  // 将激活的地址的isDefault改为0
  activeAddress.value.isDefault = 0
  await updateAddressService(activeAddress.value)
  curAddress.value = activeAddress.value
  toggleFlag.value = false
}
// 获取地址组件传递的信息
const getAddressFn = data => {
  for (let key in data) {
    addressInfo.value[key] = data[key]
  }
}
//添加地址
const addAddress = async () => {
  await addressRef.value.validate()
  await addAddressService(addressInfo.value)
  ElMessage.success('添加地址成功')
  resetForm()
  getCheckout()
}
// 重置表单
const resetForm = () => {
  addFlag.value = false
  addressRef.value.resetFields()
  addressChildRef.value.clearAddress()
}
// 提交订单
const createOrder = async () => {
  const res = await createOrderIdService({
    deliveryTimeType: 1,
    payType: 1,
    payChannel: 1,
    buyerMessage: '',
    goods: checkInfo.value.goods.map(item => {
      return {
        skuId: item.skuId,
        count: item.count
      }
    }),
    addressId: curAddress.value.id
  })
  router.replace(`/rabbit/pay/${res.id}`)
  cartStore.updateCartList()
}
onMounted(() => {
  getCheckout()
})
</script>

<template>
  <div class="xtx-pay-checkout-page">
    <div class="container">
      <div class="wrapper">
        <!-- 收货地址 -->
        <h3 class="box-title">收货地址</h3>
        <div class="box-body">
          <div class="address">
            <div class="text">
              <div class="none" v-if="!curAddress">
                您需要先添加收货地址才可提交订单。
              </div>
              <ul v-else>
                <li>
                  <span>收<i />货<i />人：</span>{{ curAddress.receiver }}
                </li>
                <li><span>联系方式：</span>{{ curAddress.contact }}</li>
                <li>
                  <span>收货地址：</span>{{ curAddress.fullLocation }}
                  {{ curAddress.address }}
                </li>
              </ul>
            </div>
            <!-- button -->
            <div class="action">
              <el-button size="large" @click="toggleFlag = true"
                >切换地址</el-button
              >
              <el-button size="large" @click="addFlag = true"
                >添加地址</el-button
              >
            </div>
          </div>
        </div>
        <!-- 商品信息 -->
        <h3 class="box-title">商品信息</h3>
        <div class="box-body">
          <table class="goods">
            <thead>
              <tr>
                <th width="520">商品信息</th>
                <th width="170">单价</th>
                <th width="170">数量</th>
                <th width="170">小计</th>
                <th width="170">实付</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="i in checkInfo.goods" :key="i.id">
                <td>
                  <a href="javascript:;" class="info">
                    <img :src="i.picture" alt="" />
                    <div class="right">
                      <p>{{ i.name }}</p>
                      <p>{{ i.attrsText }}</p>
                    </div>
                  </a>
                </td>
                <td>&yen;{{ i.price }}</td>
                <td>{{ i.count }}</td>
                <td>&yen;{{ i.totalPrice }}</td>
                <td>&yen;{{ i.totalPayPrice }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 配送时间 -->
        <h3 class="box-title">配送时间</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;"
            >不限送货时间：周一至周日</a
          >
          <a class="my-btn" href="javascript:;">工作日送货：周一至周五</a>
          <a class="my-btn" href="javascript:;">双休日、假日送货：周六至周日</a>
        </div>
        <!-- 支付方式 -->
        <h3 class="box-title">支付方式</h3>
        <div class="box-body">
          <a class="my-btn active" href="javascript:;">在线支付</a>
          <a class="my-btn" href="javascript:;">货到付款</a>
          <span style="color: #999">货到付款需付5元手续费</span>
        </div>
        <!-- 金额明细 -->
        <h3 class="box-title">金额明细</h3>
        <div class="box-body">
          <div class="total">
            <dl>
              <dt>商品件数：</dt>
              <dd>{{ checkInfo.summary?.goodsCount }}件</dd>
            </dl>
            <dl>
              <dt>商品总价：</dt>
              <dd>¥{{ checkInfo.summary?.totalPrice.toFixed(2) }}</dd>
            </dl>
            <dl>
              <dt>运<i></i>费：</dt>
              <dd>¥{{ checkInfo.summary?.postFee.toFixed(2) }}</dd>
            </dl>
            <dl>
              <dt>应付总额：</dt>
              <dd class="price">
                {{ checkInfo.summary?.totalPayPrice.toFixed(2) }}
              </dd>
            </dl>
          </div>
        </div>
        <!-- 提交订单 -->
        <div class="submit">
          <el-button @click="createOrder" type="primary" size="large"
            >提交订单</el-button
          >
        </div>
      </div>
    </div>
  </div>
  <!-- 切换地址 -->
  <el-dialog v-model="toggleFlag" title="切换收货地址" width="30%" center>
    <div class="addressWrapper">
      <div
        class="text item"
        v-for="item in checkInfo.userAddresses"
        :key="item.id"
        :class="{ active: item.id === activeAddress.id }"
        @click="handleAddressClick(item)">
        <ul>
          <li>
            <span>收<i />货<i />人：</span>{{ item.receiver }}
          </li>
          <li><span>联系方式：</span>{{ item.contact }}</li>
          <li><span>收货地址：</span>{{ item.fullLocation + item.address }}</li>
        </ul>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="toggleFlag = false">取消</el-button>
        <el-button type="primary" @click="confirmAddress">确定</el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 添加地址 -->
  <el-dialog
    @close="resetForm"
    v-model="addFlag"
    title="添加收货地址"
    width="30%"
    center>
    <span class="line"></span>
    <!-- 收集地址信息的表单 -->
    <el-form
      :rules="rules"
      ref="addressRef"
      :model="addressInfo"
      size="large"
      label-width="120px">
      <el-form-item required label="收货人姓名" prop="receiver">
        <el-input clearable v-model="addressInfo.receiver"></el-input>
      </el-form-item>
      <el-form-item required label="联系方式" prop="contact">
        <el-input clearable v-model="addressInfo.contact"></el-input>
      </el-form-item>
      <!-- 省市区 -->
      <el-form-item required label="所在地区">
        <XtxAddress
          ref="addressChildRef"
          @getAddress="getAddressFn"></XtxAddress>
      </el-form-item>
      <el-form-item required label="详细地址" prop="address">
        <el-input
          v-model="addressInfo.address"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          clearable></el-input>
      </el-form-item>
      <el-form-item required label="邮政编码" prop="postalCode">
        <el-input clearable v-model="addressInfo.postalCode"></el-input>
      </el-form-item>
      <el-form-item required label="地址标签" prop="addressTags">
        <el-input v-model="addressInfo.addressTags"></el-input>
      </el-form-item>
      <el-form-item required label="设为默认地址" prop="isDefault">
        <el-select v-model="addressInfo.isDefault" placeholder="请选择">
          <el-option
            v-for="item in defaultData"
            :key="item"
            :label="item.label"
            :value="item.value" />
        </el-select>
      </el-form-item>
    </el-form>

    <template #footer>
      <span
        class="dialog-footer"
        style="display: flex; justify-content: center">
        <el-button @click="resetForm">取消</el-button>
        <el-button type="primary" @click="addAddress">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.line {
  display: block;
  width: 100%;
  height: 1px;
  background: #f5f5f5;
  margin-bottom: 20px;
}
.xtx-pay-checkout-page {
  margin-top: 20px;

  .wrapper {
    background: #fff;
    padding: 0 20px;

    .box-title {
      font-size: 16px;
      font-weight: normal;
      padding-left: 10px;
      line-height: 70px;
      border-bottom: 1px solid #f5f5f5;
    }

    .box-body {
      padding: 20px 0;
    }
  }
}

.address {
  border: 1px solid #f5f5f5;
  display: flex;
  align-items: center;

  .text {
    flex: 1;
    min-height: 90px;
    display: flex;
    align-items: center;

    .none {
      line-height: 90px;
      color: #999;
      text-align: center;
      width: 100%;
    }

    > ul {
      flex: 1;
      padding: 20px;

      li {
        line-height: 30px;

        span {
          color: #999;
          margin-right: 5px;

          > i {
            width: 0.5em;
            display: inline-block;
          }
        }
      }
    }

    > a {
      color: $xtxColor;
      width: 160px;
      text-align: center;
      height: 90px;
      line-height: 90px;
      border-right: 1px solid #f5f5f5;
    }
  }

  .action {
    width: 420px;
    text-align: center;

    .btn {
      width: 140px;
      height: 46px;
      line-height: 44px;
      font-size: 14px;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
}

.goods {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  .info {
    display: flex;
    text-align: left;

    img {
      width: 70px;
      height: 70px;
      margin-right: 20px;
    }

    .right {
      line-height: 24px;

      p {
        &:last-child {
          color: #999;
        }
      }
    }
  }

  tr {
    th {
      background: #f5f5f5;
      font-weight: normal;
    }

    td,
    th {
      text-align: center;
      padding: 20px;
      border-bottom: 1px solid #f5f5f5;

      &:first-child {
        border-left: 1px solid #f5f5f5;
      }

      &:last-child {
        border-right: 1px solid #f5f5f5;
      }
    }
  }
}

.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666666;
  display: inline-block;

  &.active,
  &:hover {
    border-color: $xtxColor;
  }
}

.total {
  dl {
    display: flex;
    justify-content: flex-end;
    line-height: 50px;

    dt {
      i {
        display: inline-block;
        width: 2em;
      }
    }

    dd {
      width: 240px;
      text-align: right;
      padding-right: 70px;

      &.price {
        font-size: 20px;
        color: $priceColor;
      }
    }
  }
}

.submit {
  text-align: right;
  padding: 60px;
  border-top: 1px solid #f5f5f5;
}

.addressWrapper {
  max-height: 500px;
  overflow-y: auto;
}

.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;

  &.item {
    border: 1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: $xtxColor;
      background: lighten($xtxColor, 50%);
    }

    > ul {
      padding: 10px;
      font-size: 14px;
      line-height: 30px;
    }
  }
}
</style>
