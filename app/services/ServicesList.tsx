
'use client';

import Link from 'next/link';

export default function ServicesList() {
  const services = [
    {
      title: '财富规划设计',
      description: '基于家族实际情况，制定个性化财富管理方案',
      details: [
        '全面财务状况评估分析',
        '投资组合优化配置',
        '风险管控体系建设',
        '流动性管理规划'
      ],
      icon: 'ri-line-chart-line',
      color: 'bg-blue-500',
      link: '/services/wealth-planning'
    },
    {
      title: '税务筹划优化',
      description: '运用专业税务知识，合法合规降低税务负担',
      details: [
        '个人所得税筹划',
        '企业税务优化方案',
        '国际税务规划',
        '税务风险防控'
      ],
      icon: 'ri-calculator-line',
      color: 'bg-green-500',
      link: '/services/tax-planning'
    },
    {
      title: '家族传承架构',
      description: '设计科学的传承架构，确保财富有序传递',
      details: [
        '家族信托设立',
        '传承架构设计',
        '公司治理优化',
        '接班人培养规划'
      ],
      icon: 'ri-building-line',
      color: 'bg-purple-500',
      link: '/consultation'
    },
    {
      title: '法律合规咨询',
      description: '确保所有方案符合法律法规要求',
      details: [
        '合规性审查',
        '法律风险评估',
        '合同文书起草',
        '争议解决支持'
      ],
      icon: 'ri-scales-3-line',
      color: 'bg-red-500',
      link: '/consultation'
    },
    {
      title: '家庭教育指导',
      description: '培养下一代正确的财富观念和管理能力',
      details: [
        '财商教育规划',
        '品格修养培养',
        '能力发展指导',
        '价值观塑造'
      ],
      icon: 'ri-parent-line',
      color: 'bg-orange-500',
      link: '/services/family-education'
    },
    {
      title: '连山易学财运',
      description: '运用传统易学智慧，指导重要决策',
      details: [
        '个人财运分析',
        '投资时机判断',
        '重要决策咨询',
        '风水布局建议'
      ],
      icon: 'ri-compass-3-line',
      color: 'bg-amber-500',
      link: '/consultation'
    }
  ];

  return (
    <section id="services-list" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">核心服务内容</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            六大专业服务模块，覆盖财富传承的各个重要环节
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 flex items-center justify-center ${service.color} rounded-xl mr-4`}>
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    {detail}
                  </li>
                ))}
              </ul>
              
              <Link href={service.link} className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors cursor-pointer whitespace-nowrap">
                了解详情
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
