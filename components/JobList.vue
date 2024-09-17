<template>
    <div>
        <job-card
            v-for="(job, index) of jobList"
            :key="index"
            :data="job"
        />
        <my-pagination :total="jobList.length" @current-change="handleCurrentChange" />
    </div>
</template>

<script setup>
    import companyLogo from '~/assets/images/company-1.png'
    const jobData = [
        {   id: 1,
            logo: companyLogo,
            name: '中国给力付有限公司',
            location: '北京-天通苑',
            size: '100-400人',
            type: '上市公司',
            jobName: 'JAVA工程师',
            time: '2024-08-10 至 2024-08-20',
            isCollection: false,
            isFollow: false
        },
        {
            logo: companyLogo,
            name: '中国给力付有限公司',
            location: '北京-天通苑',
            size: '100-400人',
            type: '100-400人',
            jobName: 'JAVA工程师',
            time: '2024-08-10 至 2024-08-20',
            isCollection: true,
            isFollow: true
        },
        {
            logo: companyLogo,
            name: '中国给力付有限公司',
            location: '北京-天通苑',
            size: '100-400人',
            type: '100-400人',
            jobName: 'JAVA工程师',
            time: '2024-08-10 至 2024-08-20',
            isCollection: false,
            isFollow: false
        },
        {
            logo: companyLogo,
            name: '中国给力付有限公司',
            location: '北京-天通苑',
            size: '100-400人',
            type: '100-400人',
            jobName: 'JAVA工程师',
            time: '2024-08-10 至 2024-08-20',
            isCollection: false,
            isFollow: false
        },{
            logo: companyLogo,
            name: '中国给力付有限公司',
            location: '北京-天通苑',
            size: '100-400人',
            type: '100-400人',
            jobName: 'JAVA工程师',
            time: '2024-08-10 至 2024-08-20',
            isCollection: false,
            isFollow: false
        },{
            logo: companyLogo,
            name: '中国给力付有限公司',
            location: '北京-天通苑',
            size: '100-400人',
            type: '100-400人',
            jobName: 'JAVA工程师',
            time: '2024-08-10 至 2024-08-20',
            isCollection: false,
            isFollow: false
        },{
            logo: companyLogo,
            name: '中国给力付有限公司',
            location: '北京-天通苑',
            size: '100-400人',
            type: '100-400人',
            jobName: 'JAVA工程师',
            time: '2024-08-10 至 2024-08-20',
            isCollection: false,
            isFollow: false
        },{
            logo: companyLogo,
            name: '中国给力付有限公司',
            location: '北京-天通苑',
            size: '100-400人',
            type: '100-400人',
            jobName: 'JAVA工程师',
            time: '2024-08-10 至 2024-08-20',
            isCollection: false,
            isFollow: false
        },{
            logo: companyLogo,
            name: '中国给力付有限公司',
            location: '北京-天通苑',
            size: '100-400人',
            type: '100-400人',
            jobName: 'JAVA工程师',
            time: '2024-08-10 至 2024-08-20',
            isCollection: false,
            isFollow: false
        },{
            logo: companyLogo,
            name: '中国给力付有限公司',
            location: '北京-天通苑',
            size: '100-400人',
            type: '100-400人',
            jobName: 'JAVA工程师',
            time: '2024-08-10 至 2024-08-20',
            isCollection: false,
            isFollow: false
        },{
            logo: companyLogo,
            name: '中国给力付有限公司',
            location: '北京-天通苑',
            size: '100-400人',
            type: '100-400人',
            jobName: 'JAVA工程师',
            time: '2024-08-10 至 2024-08-20',
            isCollection: false,
            isFollow: false
        },{
            logo: companyLogo,
            name: '中国给力付有限公司',
            location: '北京-天通苑',
            size: '100-400人',
            type: '100-400人',
            jobName: 'JAVA工程师',
            time: '2024-08-10 至 2024-08-20',
            isCollection: false,
            isFollow: false
        }
    ]
    const jobList = ref(jobData)
    const handleCurrentChange = currentPage => {
        console.log(currentPage)
    }
</script>