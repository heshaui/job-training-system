<template>
  <div class="main-bg">
    <Breadcrumb :breadcrumbList="breadcrumbList" />
    <div class="main-content h-[190px] py-[20px] pl-[20px] pr-[40px] bg-[#fff] flex items-center">
      <img :src="infoData.src" class="w-[150px] h-[150px] mr-[12px] info-img" />
      <div>
        <h3 class="text-[20px] text-[#333] font-medium leading-[20px] mb-[14px]">{{ infoData.name }}</h3>
        <p class="mb-[37px] text-[#999] text-[14px] leading-[14px]">
          <span>{{ infoData.location }}</span>
          <el-divider direction="vertical" />
          <span>{{ infoData.type }}</span>
          <el-divider direction="vertical" />
          <span>{{ infoData.type }}</span>
          <el-divider direction="vertical" />
          <span>{{ infoData.size }}</span>
        </p>
        <div class="flex pl-[11px]">
          <div class="mr-[48px] text-center">
            <p class="text-[18px] text-[#3CAE91] leading-[18px] mb-[8px]">{{ infoData.num }}</p>
            <p class="num-text">招聘人数</p>
          </div>
          <div class="pt-[26px]">
            <p class="num-text">所属组织：{{ infoData.dept }}</p>
          </div>
        </div>
      </div>
      <img v-if="!infoData.isFollow" src="~/assets/images/follow-2.png" alt="关注" class="follow-img">
      <img v-else src="~/assets/images/follow-3.png" alt="取消关注" class="follow-img">
    </div>
    <div class="main-content bg-[#fff] mt-[16px] p-[22px]">
      <h3 class="text-[#333] font-medium text-[18px] leadding-[25px] mb-[22px] pl-[10px]">企业福利</h3>
      <ul class="flex flex-wrap">
        <li v-for="(item, key) of infoData.welfareList" :key="key" class="welfare-item">{{ item }}</li>
      </ul>
    </div>
    <div class="main-content bg-[#fff] mt-[16px] mb-[16px] h-[70px] px-[30px] py-[18px] flex">
      <div class="tab-item" :class="tabActive === '1' ? 'active' : ''" @click="tabActive = '1'">公司简介</div>
      <div class="tab-item" :class="tabActive === '2' ? 'active' : ''" @click="tabActive = '2'">在招职位（{{ infoData.num }}）</div>
    </div>
    <div v-show="tabActive === '1'" class="main-content bg-[#fff] mt-[16px] px-[30px] py-[18px] mb-[16px]" v-html="infoData.descr">
    </div>
    <recruiting-job-list v-show="tabActive === '2'" :companyId="id" />
  </div>
</template>

<script setup>
import { useRoute } from "#app";
import company1 from '~/assets/images/company-1.png'

// 获取路由对象
const route = useRoute();

// 从路由参数中提取 id
const id = route.params.id;

const breadcrumbList = ref([
  { name: "企业列表", path: "/jobDatabase" },
  { name: "企业详情" },
]);

const infoData = ref({
  src: company1,
  isFollow: false,
  name: '中国联合网络通信有限公司山西省分公司',
  location: '山西-太原',
  type: '通信/电子/运营商',
  size: '1000人以上',
  num: 100,
  dept: '中国联合网络通信有限公司',
  welfareList: ['员工体检', '五险二金', '补充医疗保险', '节日福利', '生日福利', '年终奖金', '五险二金', '法定节假日', '礼品礼物'],
  descr: `山西联通是中国联通在山西的分支机构，下设11个市级分公司，97个县级分公司。山西联通多年来致力于全省信息化建设，用户规模--全网用户2132万：移网1162万（含5G用户339万），宽带492万，IPTV 273万，固话205万。网络能力--基站总数7.1万个（含5G基站1万个）；出省带宽13300G，城域网出口带宽13200G，千兆端口117万个；行业云能力达40357核，IDC机架数达8388架。在全省关系到国计民生的新技术、新产品、新业务、新服务上，做为网络强国的国家队起到了大型国有企业的主力军作用。
      企业变革之际，正是用人之时，更是人才脱颖而出的难得机遇期。山西联通诚邀各位学子，与我们一起手联心、通前程，用智慧、科技、想象力，助力网络强国，打造产业新貌，创享美好智慧生活。
   山西联通是中国联通在山西的分支机构，下设11个市级分公司，97个县级分公司。山西联通多年来致力于全省信息化建设，用户规模--全网用户2132万：移网1162万（含5G用户339万），宽带492万，IPTV 273万，固话205万。网络能力--基站总数7.1万个（含5G基站1万个）；出省带宽13300G，城域网出口带宽13200G，千兆端口117万个；行业云能力达40357核，IDC机架数达8388架。在全省关系到国计民生的新技术、新产品、新业务、新服务上，做为网络强国的国家队起到了大型国有企业的主力军作用。
      企业变革之际，正是用人之时，更是人才脱颖而出的难得机遇期。山西联通诚邀各位学子，与我们一起手联心、通前程，用智慧、科技、想象力，助力网络强国，打造产业新貌，创享美好智慧生活。`
  
})

const tabActive = ref('1')

// 你可以使用这个 id 做进一步的数据获取或其他操作
</script>

<style lang="scss" scoped>
.info-img {
  border-radius: 4px;
  border: 1px solid #E4E4E4;
}
.num-text {
    color: #999;
    font-size: 14px;
    line-height: 14px;
}
.follow-img {
  width: 100px;
  height: 36px;
  margin-left: auto;
  cursor: pointer;
}
.welfare-item {
  padding: 4px 16px;
  background: #D5FFF4;
  border-radius: 16px;
  color: #3CAE91;
  font-size: 16px;
  text-align: center;
  margin-right: 10px;
}
.tab-item {
  height: 100%;
  line-height: 25px;
  font-size: 18px;
  margin-right: 25px;
  cursor: pointer;
  color: #333;
  &.active {
    color: #3CAE91;
    border-bottom: 2px solid #3CAE91;
  }
}
</style>

