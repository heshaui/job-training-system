<template>
    <section class="main-bg">
        <Breadcrumb :breadcrumbList="breadcrumbList" />
        <div class="main-content bg-[#fff] px-[30px] flex justify-between items-center h-[152px]">
            <div>
                <h3 class="text-[20px] text-[#333] font-medium leading-[20px] mb-[14px]">{{ infoData.name }}</h3>
                <p class="mb-[28px] text-[#666] text-[14px] leading-[14px]">
                    <span>{{ infoData.area }}</span>
                    <el-divider direction="vertical" />
                    <span>{{ infoData.yq1 }}</span>
                    <el-divider direction="vertical" />
                    <span>{{ infoData.yq2 }}</span>
                    <el-divider direction="vertical" />
                    <span>{{ infoData.yq3 }}</span>
                </p>
                <p class="info">
                    <span>
                        <img src="~/assets/images/job-icon-5.png" />
                        {{ infoData.time }} 更新
                    </span>
                    <span>
                        被浏览：{{ infoData.num }}次
                    </span>
                    <span>
                        <img src="~/assets/images/job-icon-5.png" />
                        {{ infoData.zm }}
                    </span>
                </p>
            </div>
            <span class="btn">
                <el-icon>
                    <Star v-if="!infoData.isCollection"/>
                    <StarFilled v-else />
                </el-icon>
                {{ infoData.isCollection ? '已收藏' : '收藏' }}
            </span>
        </div>
        <div class="main-content mt-[10px] flex justify-between">
            <div class="w-[940px]">
                <div class="bg-[#fff] mb-[10px] py-[20px] px-[30px]">
                    <h3 class="text-[20px] text-[#333] font-medium leading-[20px] mb-[20px]">职位描述</h3>
                    <div class="job-descr" v-html="infoData.descr"></div>
                </div>
                <div class="bg-[#fff] mb-[10px] py-[20px] px-[30px]">
                    <h3 class="text-[20px] text-[#333] font-medium leading-[20px] mb-[16px]">职位描述</h3>
                    <p class="leading-[27px] text-[16px] text-[#666] mb-[22px] flex">
                        <span class="flex h-[27px] items-center mr-[42px]">在线投递：{{ infoData.url }} <el-icon color="#3CAE91" class="ml-[10px] cursor-pointer"><DocumentCopy /></el-icon></span>
                        <span>说明：人力资源专区</span>
                    </p>
                    <p class="leading-[27px] text-[16px] text-[#666]">
                        <span class="text-[#333] font-medium">央国企岗位库-岗库大数据|岗培系统安全提示：</span>
                        <span>求职过程请勿缴纳费用，谨防诈骗！若信息不实请举报。</span>
                    </p>
                </div>
                <div class="bg-[#fff] p-[20px] mb-[30px]">
                    <h3 class="text-[20px] text-[#333] font-medium leading-[20px] mb-[16px]">该公司的其他职位</h3>
                    <ul>
                        <li v-for="(item, key) of jobList" :key="key" class="list-item">
                            <div class="left flex-auto">
                                <p class="top">
                                    <span class="span-1">{{ item.name }}</span>
                                    <span class="text-[#3CAE91]">{{ item.gz }}</span>
                                </p>
                                <p class="bottom">
                                    <span class="span-1">{{ item.yq }}</span>
                                    <span class="span-2">{{ item.area }}</span>
                                </p>
                            </div>
                            <span class="hover-bg btn" @click="goToDetail(item.id)">申请</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-[250px]">
                <div class="bg-[#fff] px-[18px] py-[16px] mb-[10px] flex flex-col items-center">
                    <img class="w-[100px] h-[100px] company-img mb-[16px]" :src="infoData.src" />
                    <h3 class="text-[20px] text-[#333] font-medium leading-[27px] mb-[29px] text-center">{{ infoData.companyName }}</h3>
                    <p class="pl-[6px] job-span">
                        <span>
                            <img src="~/assets/images/job-icon-6.png" />
                            {{ companyInfo.type }}
                        </span>
                        <span>
                            <img src="~/assets/images/job-icon-7.png" />
                            {{ companyInfo.dw }}
                        </span>
                        <span>
                            <img src="~/assets/images/job-icon-8.png" />
                            {{ companyInfo.size }}
                        </span>
                    </p>
                    <p class="text-[16px] leading-[27px] text-[#666] mt-[9px]">{{ companyInfo.descr }}</p>
                </div>
                <div class="bg-[#fff] p-[16px]">
                    <h3 class="text-[20px] text-[#333] font-medium leading-[27px] mb-[8px]">分享到朋友圈</h3>
                    <div class="flex flex-col items-center">
                        <img src="~/assets/images/code.jpg" class="w-[164px] h-[164px] border-20" />
                        <span class="text-[#666] leading-[27px] text-[16px]">分享至朋友圈</span>
                        <span class="text-[#666] leading-[27px] text-[16px]">↑微信扫上方二维码↑</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from "#app";
import company1 from '~/assets/images/company-1.png'
// 获取路由对象
const route = useRoute();
// 从路由参数中提取 id
const id = route.params.id;
const companyId = route.query.companyId

const breadcrumbList = ref([
  { name: "企业列表", path: "/jobDatabase" },
  { name: "企业详情", path: `/jobDatabase/${companyId}` },
  { name: '职位详情'}
]);

const infoData = ref({
    name: '客户经理',
    src: company1,
    companyName: '中国联合网络通信有限公司山西省分公司',
    yq1: '2025应届生经验',
    yq2: '本科学历',
    yq3: '可接受应届生',
    area: '北京-海淀',
    gz: '2.2-3万*16薪',
    time: '2024-09-15',
    num: 3,
    zm: '招满为止',
    isCollection: false,
    url: 'www.baidu.com',
    descr: `招聘人数：若干人    专业要求： 法学-法学类-法学<br/>
    1.负责结合法治建设要求和公司实际建立和完善公司法务合规管理制度。<br/>
2.负责公司经济合同、重要规章制度、重大决策法律审查。<br/>
3.负责公司业务部门合同代理人、合规管理员日常管理工作。<br/>
4.负责全面参与公司重要项目，及时提供法律支持，严格把关法律合规风险。<br/>
5.负责处理公司各类法律案件，及时剖析案件根源、提出管理建议，落实以案促管。<br/>
6.负责公司知识产权及品牌商誉维权。<br/>
7.负责法律法规研究解读、法治宣传培训、法律合规咨询。<br/>
8.负责聘用外部法律资源并管理、评价外部律所/律师团队法律服务。<br/>
9.负责结合公司实际建立和完善法务合规管理系统。<br/>
10.负责对接公检法等司法机关、上级法务合规管理部门，落实相关工作要求。`
})
const jobList = ref([
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    },
    {
        name: '客户经理',
        yq: '2025应届生经验 | 本科学历',
        area: '北京-海淀',
        gz: '2.2-3万*16薪',
        time: '2024-09-15'
    }
])
const companyInfo = ref({
    name: '中国给力付有限公司',
    location: '北京-天通苑',
    size: '100-400人',
    dw: '央企',
    type: '通信/电子/运营商',
    jobName: 'JAVA工程师',
    time: '2024-08-10 至 2024-08-20',
    isCollection: false,
    isFollow: false,
    descr: '全国唯一的集电线电缆研究开发、工程设计、测试检验、信息服务于一体的研究机构。有中国工程院院士1名，教授级高工和高级工程师90余名。先后获国家级奖25项，省部级奖150多项和28项专利权(其中3项发明专利)，75%以上的成果获得推广应用。已投资建立了12家企业，其中有国家级和上海市级的高'
})
</script>

<style lang="scss" scoped>
p.info {
    display: flex;
    height: 16px;
    align-items: center;
    color: #666;
    font-size: 14px;
    span {
        display: flex;
        align-items: center;
        margin-right: 30px;
        img {
            width: 16px;
            height: 16px;
            margin-right: 6px;
        }
    }
}
.btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 36px;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #3CAE91;
    color: #3CAE91;
    cursor: pointer;
    .el-icon {
        margin-right: 6px;
    }
}
.job-descr {
    color: #666;
    font-size: 16px;
    line-height: 27px;
}
.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 30px 16px 16px;
    height: 108px;
    margin-bottom: 10px;
    border: 1px solid #EEEEEE;
    background: #fff;
    &:last-child {
        margin: 0;
    }
    .left {
        p {
            display: flex;
        }
        p.top {
            font-size: 20px;
            line-height: 28px;
            color: #3CAE91;
            margin-bottom: 26px;
            font-weight: bold;
        }
        p.bottom {
            font-size: 16px;
            line-height: 22px;
            color: #333;
        }
        span {
            display: block;
            &.span-1 {
                width: 372px;
            }
            &.span-2 {
                width: 280px;
            }
        }
    }
    .btn {
        display: block;
        width: 108px;
        height: 44px;
        background: #3CAE91;
        line-height: 44px;
        border-radius: 4px;
        text-align: center;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
    }
}
.company-img{
    border-radius: 4px;
    border: 1px solid #E4E4E4;
}
.job-span {
    width: 100%;
    span {
        display: flex;
        height: 16px;
        align-items: center;
        color: #666;
        font-size: 16px;
        img {
            width: 16px;
            height: 16px;
            margin-right: 10px;
        }
        margin-bottom: 7px;
    }
}
.border-20 {
    border: 15px solid #fff;
}
</style>