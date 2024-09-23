export default {
	// 身份
	identityOptions : [
		{ label: '应届生', value: 'graduate' },
		{ label: '当界应届生', value: 'current_graduate' },
		{ label: '往届应届生', value: 'previous_graduate' },
		{ label: '往界生', value: 'previous_student' }
	],
	// 政治面貌
	politicalOptions : [
		{ label: '不限', value: 'unlimited' },
		{ label: '共青团员', value: 'communist_youth_league' },
		{ label: '中共党员', value: 'communist_party_member' }
	],
	// 工作年限
	experienceOptions : [
		{ label: '不限', value: 'unlimited' },
		{ label: '一年', value: '1_year' },
		{ label: '二年', value: '2_years' },
		{ label: '三年', value: '3_years' },
		{ label: '五年以上', value: '5_years_above' }
	],
	// 学历
	educationOptions : [
		{ label: '大专及以上', value: 'college_above' },
		{ label: '本科及学士学位', value: 'bachelor_degree' }
	],
	// 学科
	disciplineOptions : [
		{ label: '哲学', value: 'philosophy' },
		{ label: '经济学', value: 'economics' },
		{ label: '法学', value: 'law' },
		{ label: '教育学', value: 'educationMajor' },
		{ label: '文学', value: 'literature' },
		{ label: '历史学', value: 'history' },
		{ label: '理学', value: 'science' },
		{ label: '工学', value: 'engineering' },
		{ label: '农学', value: 'agriculture' },
		{ label: '医学', value: 'medicine' },
		{ label: '军事学', value: 'military_science' },
		{ label: '管理学', value: 'management' }
	],
	// 经济学
	economicsOptions : [
		{ label: '经济学类（0201）', value: 'economics_0201' },
		{ label: '金融学类（0202）', value: 'finance_0202' },
		{ label: '财政学类（0203）', value: 'fiscal_science_0203' },
		{ label: '经济与贸易类（0204）', value: 'economy_trade_0204' }
	],
	// 法学
	lawOptions : [
		{ label: '法学类（0301）', value: 'law_0301' },
		{ label: '政治学类（0302）', value: 'political_science_0302' },
		{ label: '社会学类（0303）', value: 'sociology_0303' },
		{ label: '民族学类（0304）', value: 'ethnology_0304' },
		{ label: '马克思主义理论类（0305）', value: 'marxist_theory_0305' },
		{ label: '公安学类（0306）', value: 'public_security_0306' }
	],
	// 管理学
	managementOptions : [
		{ label: '工商管理类（1202）', value: 'business_management_1202' },
		{ label: '公共管理类（1204）', value: 'public_management_1204' },
		{ label: '电子商务类（1208）', value: 'e_commerce_1208' },
		{ label: '管理科学与工程类（1201）', value: 'management_science_1201' },
		{ label: '物流工程与管理类（1206）', value: 'logistics_management_1206' },
		{ label: '旅游管理类（1209）', value: 'tourism_management_1209' },
		{ label: '工业工程类（1207）', value: 'industrial_engineering_1207' },
		{ label: '农业经济管理类（1203）', value: 'agricultural_economics_1203' },
		{ label: '图书情报与档案管理类（1205）', value: 'library_archives_management_1205' }
	],
	// 文学
	literatureOptions : [
		{ label: '中国语言文学类（0501）', value: 'chinese_language_literature_0501' },
		{ label: '外国语言文学类（0502）', value: 'foreign_language_literature_0502' },
		{ label: '新闻传播学类（0503）', value: 'journalism_communication_0503' }
	],
	// 哲学
	philosophyOptions : [
		{ label: '哲学类（0101）', value: 'philosophy_0101' }
	],
	// 教育学
	educationMajorOptions : [
		{ label: '教育学类（0401）', value: 'education_0401' },
		{ label: '体育学类（0402）', value: 'physical_education_0402' }
	],
	// 艺术学
	artOptions : [
		{ label: '艺术学理论类（1301）', value: 'art_theory_1301' },
		{ label: '音乐与舞蹈类（1302）', value: 'music_dance_1302' },
		{ label: '戏剧与影视学类（1303）', value: 'theatre_film_1303' },
		{ label: '美术学类（1304）', value: 'fine_arts_1304' },
		{ label: '设计学类（1305）', value: 'design_1305' }
	],
	// 医学
	medicalOptions : [
		{ label: '基础医学类（1001）', value: 'basic_medicine_1001' },
		{ label: '临床医学类（1002）', value: 'clinical_medicine_1002' },
		{ label: '公共卫生与预防医学类（1004）', value: 'public_health_1004' },
		{ label: '中医学类（1005）', value: 'chinese_medicine_1005' },
		{ label: '中西医结合类（1006）', value: 'chinese_western_medicine_1006' },
		{ label: '法医学类（1009）', value: 'forensic_science_1009' },
		{ label: '医学技术类（1010）', value: 'medical_technology_1010' },
		{ label: '中药学类（可授予理学学位）（1008）', value: 'chinese_pharmacy_1008' },
		{ label: '药学类（可授予理学学位）（1007）', value: 'pharmacy_1007' },
		{ label: '口腔医学类（1003）', value: 'stomatology_1003' },
		{ label: '护理学类（1011）', value: 'nursing_1011' }
	],
	// 工学
	engineeringOptions : [
		{ label: '计算机类（0807）', value: 'computer_science_0807' },
		{ label: '电子信息类（0809）', value: 'electronic_information_0809' },
		{ label: '机械类（0802）', value: 'mechanical_engineering_0802' },
		{ label: '材料类（0804）', value: 'materials_science_0804' },
		{ label: '自动化类（0808）', value: 'automation_0808' },
		{ label: '仪器类（0803）', value: 'instrumentation_0803' },
		{ label: '电气类（0806）', value: 'electrical_engineering_0806' },
		{ label: '能源动力类（0805）', value: 'energy_power_0805' },
		{ label: '土木类（0810）', value: 'civil_engineering_0810' },
		{ label: '水利类（0811）', value: 'hydraulic_engineering_0811' },
		{ label: '测绘类（0812）', value: 'surveying_mapping_0812' },
		{ label: '化工与制药类（0813）', value: 'chemical_pharmaceutical_0813' },
		{ label: '地质类（0814）', value: 'geology_0814' },
		{ label: '矿业类（0815）', value: 'mining_engineering_0815' },
		{ label: '纺织类（0816）', value: 'textile_engineering_0816' },
		{ label: '轻工类（0817）', value: 'light_industry_0817' },
		{ label: '交通运输类（0818）', value: 'transportation_engineering_0818' },
		{ label: '海洋工程类（0819）', value: 'marine_engineering_0819' },
		{ label: '航空航天类（0820）', value: 'aerospace_engineering_0820' },
		{ label: '兵器类（0821）', value: 'weapons_engineering_0821' },
		{ label: '核工程类（0822）', value: 'nuclear_engineering_0822' },
		{ label: '农业工程类（0823）', value: 'agricultural_engineering_0823' },
		{ label: '林业工程类（0824）', value: 'forestry_engineering_0824' },
		{ label: '环境科学与工程类（0825）', value: 'environmental_engineering_0825' },
		{ label: '生物医学工程类（0826）', value: 'biomedical_engineering_0826' },
		{ label: '食品科学与工程类（0827）', value: 'food_science_engineering_0827' },
		{ label: '建筑类（0828）', value: 'architecture_0828' },
		{ label: '生物工程类（0830）', value: 'biological_engineering_0830' },
		{ label: '安全科学与工程类（0829）', value: 'safety_engineering_0829' },
		{ label: '公安技术类（0831）', value: 'public_security_technology_0831' }
	],
	// 理学
	scienceOptions : [
		{ label: '数学类（0701）', value: 'mathematics_0701' },
		{ label: '物理学类（0702）', value: 'physics_0702' },
		{ label: '化学类（0703）', value: 'chemistry_0703' },
		{ label: '地理科学类（0705）', value: 'geography_0705' },
		{ label: '大气科学类（0706）', value: 'atmospheric_science_0706' },
		{ label: '海洋科学类（0707）', value: 'marine_science_0707' },
		{ label: '力学类（0708）', value: 'mechanics_0708' },
		{ label: '生物科学类（0710）', value: 'biological_science_0710' },
		{ label: '天文学类（0704）', value: 'astronomy_0704' },
		{ label: '统计学类（0712）', value: 'statistics_0712' },
		{ label: '心理学类（0711）', value: 'psychology_0711' },
		{ label: '地质学类（0709）', value: 'geology_0709' },
		{ label: '电子信息科学类（0807）', value: 'electronic_information_science_0807' },
		{ label: '计算机科学与技术类（0807）', value: 'computer_science_0807' }
	],
	// 历史学
	historyOptions : [
		{ label: '历史学类（0601）', value: 'history_0601' }
	],
	// 农学
	agricultureOptions : [
		{ label: '植物生产类（0901）', value: 'plant_production_0901' },
		{ label: '自然保护与环境生态类（0902）', value: 'nature_conservation_0902' },
		{ label: '动物生产类（0903）', value: 'animal_production_0903' },
		{ label: '动物医学类（0904）', value: 'veterinary_medicine_0904' },
		{ label: '林学类（0905）', value: 'forestry_0905' },
		{ label: '水产类（0906）', value: 'aquaculture_0906' },
		{ label: '草学类（0907）', value: 'grassland_science_0907' }
	],
	// 机构性质
	jgOptions: [
		{label: '中央党群机关', value: '1'},
		{label: '中央国家行政机关（本级）', value: '2'},
		{label: '中央国家行政机关省级以下直属机构', value: '3'},
		{label: '中央国家行政机关参照公务员法管理事业单位', value: '4'}
	],
	// 考试类型
	ksOptions: [
		{label: '综合管理类A类', value: '1'},
		{label: '社会科学专技类B类', value: '2'},
		{label: '自然科学专技类C类', value: '3'},
		{label: '中小学教师类D类', value: '4'},
		{label: '医疗卫生类E类', value: '5'}
	],
	// 企业类型
	companyOptions: [
		{label: '国企', value: '1'},
		{label: '央企', value: '2'},
		{label: '民营', value: '3'},
		{label: '外资/合资企业', value: '4'},
		{label: '银行', value: '5'}
	],
}
  
  