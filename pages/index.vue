<template>
    <section>
        <div class="banner">
            <el-carousel height="600px" :autoplay="false" indicator-position="" arrow="never" trigger="click">
                <el-carousel-item v-for="item of bannerList" :key="item">
                    <img class="w-[100%] h-[100%] object-cover" :src="item" />
                </el-carousel-item>
            </el-carousel>
            <div class="login">
                <Login />
            </div>
        </div>
        <div class="w-[1200px] mx-auto mt-[30px]">
            <div class="flex justify-between">
                <div v-for="(item, index) of introduceList" :key="index" :class="[`introduce-bg-${index+1}`, 'introduce-item']">
                    <img :src="item.src" :alt="item.label" />
                </div>
            </div>
            <div class="flex justify-center mt-[60px] mb-[40px]">
                <img src="~/assets/images/home-tit-1.png" alt="考生关心备考的问题" />
            </div>
            <div class="flex justify-between flex-wrap">
                <div v-for="(item, index) of questionList" :key="index" class="question-item">
                    <h3>{{ item.tit }}</h3>
                    <p v-html="item.answer"></p>
                    <span class="hover-bg">{{ `查看${item.tit}` }}</span>
                </div>
            </div>
        </div>
        <div class="prepare-box">
            <div class="flex justify-center mb-[38px]">
                <img src="~/assets/images/home-tit-2.png" alt="公职考前准备" />
            </div>
            <div class="w-[1200px] mx-auto flex justify-between">
                <div v-for="(item, index) of prepareList" :key="index" class="prepare-item">
                    <div class="flex justify-center mb-[15px]">
                        <img :src="item.icon" :alt="item.tit" />
                    </div>
                    <div class="text-[20px] leading-[28px] text-center mb-[17px]">{{ item.tit }}</div>
                    <ul class="pl-[53px]">
                        <li v-for="l of item.list" :key="l" class="list-item">{{ l }}</li>
                    </ul>
                    <span class="btn hover-text">了解更多</span>
                </div>
            </div>
        </div>
        <div class="w-[1200px] mx-auto mt-[60px] mb-[40px]">
            <div class="flex justify-center mb-[40px]">
                <img src="~/assets/images/home-tit-3.png" alt="新闻咨询" />
            </div>
            <ul class="flex justify-between">
                <li v-for="(item, index) of newsList" :key="index" class="new-item">
                    <img :src="item.src" class="h-[206px] mb-[18px]" />
                    <div class="new-content">
                        <div class="new-tit">{{ item.tit }}</div>
                        <p class="new-descr">{{ item.descr }}</p>
                        <p class="text-[#999] mt-[10px]">{{ item.time }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="file-box">
            <div class="h-[100%] w-[1200px] mx-auto flex justify-around items-center">
                <div>
                    <p class="text-[24px] font-semibold mb-[7px]">我们提供的免费资料,帮助您深入了解相关领域,提升学习效果</p>
                    <p class="text-[18px]">现在点击马上下载我们的免费学习资料</p>
                </div>
                <span class="btn hover-bg">立即下载</span>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useRouter } from 'vue-router'
import bannerImg from '~/assets/images/banner-1.png'
import introduceText1 from '~/assets/images/introduce-text-1.png'
import introduceText2 from '~/assets/images/introduce-text-2.png'
import introduceText3 from '~/assets/images/introduce-text-3.png'
import icon1 from '~/assets/images/icon-1.png'
import icon2 from '~/assets/images/icon-2.png'
import icon3 from '~/assets/images/icon-3.png'
import icon4 from '~/assets/images/icon-4.png'
import new1 from '~/assets/images/new-1.png'
import new2 from '~/assets/images/new-2.png'
import new3 from '~/assets/images/new-3.png'

useSeoMeta({
    title: '公职选岗通 - 提升职业技能 | 公司招聘平台',
    description: '我们提供专业的岗位培训课程，帮助提升您的职业技能，找到理想的工作。',
    author: '公职选岗通'
})

const router = useRouter()

const goToPersonal = () => {
  router.push('/personal/membership')
}

const bannerList = [bannerImg, bannerImg, bannerImg]
const introduceList = [
    {src: introduceText1, label: 'AI精准选岗 专业选岗平台'},
    {src: introduceText2, label: '实时更新，公务员，事业编 国央企最最新岗'},
    {src: introduceText3, label: '行业全覆盖 选岗无死角'}
]
const questionList = [
    {tit: '报考条件', answer: '年龄一般为18周岁以上、35周岁以下，对于应届硕士、博士研究生，放宽到40周岁以下。', src: ''},
    {tit: '报考流程', answer: '发布公告一报名、提交资料→资格审查一笔试考试→面试考试→体检考察→公示→试用。', src: ''},
    {tit: '考试科目', answer: '公务员考试科目：行测，申论<br/>事业编考试科目：职测，综应ABCDE类，公共基础知识<br/>国央企：行测，申论，公共基础知识，专业知识', src: ''},
    {tit: '分数线', answer: '国家公务员局划定笔试合格分数线时,采取了分层划线的方法，同时对西部地区和艰苦边远地区基层职位予以一定的政策倾斜。', src: ''},
    {tit: '时间安排表', answer: '报名时间、资格审查时间、改报其他职位、查询报名序号、网上报名确认缴费、准考证打印、笔试时间...', src: ''},
    {tit: '专业目录', answer: '各个岗位根据技能需要，会针对招考对口专业考生，可咨询客服老师获取专业目录及对照表。', src: ''}
]
const prepareList = [
    {
        tit: '考情了解',
        list: ['考试科目分值分布?', '上岸分数有要求吗?', '考多少分能上岸?'],
        icon: icon1,
        src: ''
    },
    {
        tit: '如何选岗',
        list: ['哪些岗位薪资最高?','历年招录比地区排名?', '如何根据自己专业选岗?'],
        icon: icon2,
        src: ''
    },
    {
        tit: '注意事项',
        list: ['有纹身能报名吗?', '亲戚坐过牢能报名吗?', '在职如何备考公务员考试?'],
        icon: icon3,
        src: ''
    },
    {
        tit: '笔面技巧',
        list: ['考试科目有哪些?','笔试成绩有效期多久?','无领导面试情形应对?'],
        icon: icon4,
        src: ''
    }
]
const newsList = ref([
    {
        src: new1,
        url: '',
        tit: '单位行政职业能力测验资料分析：比重增长占比很大，我们希望',
        descr: '行测考试当中的资料分析部分应该是令大多数考生又爱又恨的一类题目，爱它相较于数量关系的简单容易的多，我们以放假啊扩大解放',
        time: '2024-07-01 10:54:32'
    },
    {
        src: new2,
        url: '',
        tit: '单位行政职业能力测验资料分析：比重增长占比很大，我们希望',
        descr: '行测考试当中的资料分析部分应该是令大多数考生又爱又恨的一类题目，爱它相较于数量关系的简单容易的多，我们以放假啊扩大解放',
        time: '2024-07-01 10:54:32'
    },
    {
        src: new3,
        url: '',
        tit: '单位行政职业能力测验资料分析：比重增长占比很大，我们希望',
        descr: '行测考试当中的资料分析部分应该是令大多数考生又爱又恨的一类题目，爱它相较于数量关系的简单容易的多，我们以放假啊扩大解放',
        time: '2024-07-01 10:54:32'
    }
])

</script>

<style lang="scss" scoped>
.banner {
    position: relative;
    .login {
        width: 1200px;
        height: 600px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }
}
/* 修改轮播图指示器位置 */
:deep(.el-carousel__indicators.el-carousel__indicators--horizontal) {
    bottom: 2.5px;
    left: 69%;
    transform: none;
}
:deep(.el-carousel__button) {
    width: 63px;
    height: 10px;
    border-radius: 5px;
}

.introduce-item {
    width: 380px;
    height: 160px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    &.introduce-bg-1 {
        background: url('~/assets/images/introduce-bg-1.png');
    }
    &.introduce-bg-2 {
        background: url('~/assets/images/introduce-bg-2.png');
    }
    &.introduce-bg-3{
        background: url('~/assets/images/introduce-bg-3.png');
    }
}

.question-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 370px;
    height: 293px;
    border-radius: 16px;
    border: 1px solid #CCCCCC; 
    padding: 30px 20px 24px;
    color: #333;
    text-align: center;
    margin-bottom: 30px;
    h3 {
        font-size: 30px;
        margin-bottom: 30px;
        font-weight: 600;
        line-height: 24px;
    }
    p {
        font-size: 18px;
        line-height: 25px;
        text-align: justify;
    }
    span {
        display: block;
        margin-top: auto;
        cursor: pointer;
        width: 270px;
        height: 44px;
        background: #3CAE91;
        border-radius: 26px;
        color: #fff;
        text-align: center;
        line-height: 44px;
        font-size: 16px;
    }
}

.prepare-box {
    height: 584px;
    padding: 50px 0;
    background: url('~/assets/images/prepare-bg.png');
    background-size: 100% 100%;
    .prepare-item {
        width: 285px;
        height: 396px;
        background: url('~/assets/images/prepare-item-bg.png');
        padding-top: 30px;
        color: #fff;
        font-weight: 500;
        font-size: 16px;
        .list-item {
            display: flex;
            align-items: center;
            height: 42px;
        }
        .list-item::before {
            content: '';
            display: block;
            width: 13px;
            height: 13px;
            margin-right: 8px;
            background: url('~/assets/images/icon-mark.png')
        }
        .btn {
            display: block;
            margin: 46px auto 0;
            width: 182px;
            height: 33px;
            background: #FFFFFF;
            border-radius: 17px;
            line-height: 33px;
            text-align: center;
            cursor: pointer;
            color: #3CAE91;
        }
    }
}

.new-item {
    width: 366px;
    height: 338px;
    background: #f4f4f4;
    font-size: 16px;
    color: #333;
    .new-content {
        padding: 0 10px;
    }
    .new-tit {
        font-weight: 600;
        margin-bottom: 12px;
        line-height: 22px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .new-descr {
        display: -webkit-box; /* 需要结合 -webkit-box-orient 使用 */
        -webkit-box-orient: vertical; /* 设置垂直方向的盒模型 */
        -webkit-line-clamp: 2; /* 显示三行文本，超过的部分会被截断 */
        overflow: hidden; /* 超出部分隐藏 */
        text-overflow: ellipsis; /* 溢出显示省略号 */
        line-height: 20px; /* 行高 */
        max-height: 40px; /* 根据行高设置最大高度 */
        word-break: break-all; /* 控制文本的换行规则 */
    }
}

.file-box {
    height: 110px;
    margin-bottom: 56px;
    background: url('~/assets/images/file-bg.png');
    color: #fff;
    p {
        line-height: 33px;
    }
    .btn {
        display: block;
        width: 120px;
        height: 30px;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        background: #3CAE91;
        cursor: pointer;
    }
}

</style>