
'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      title: '家族财富规划',
      description: '基于连山易学智慧，结合现代金融工具，为您制定个性化的财富传承方案',
      image: 'https://readdy.ai/api/search-image?query=Family%20wealth%20planning%20consultation%20scene%20with%20traditional%20Chinese%20elements%2C%20professional%20business%20meeting%20with%20documents%20and%20charts%2C%20warm%20lighting%2C%20elegant%20office%20interior%20with%20cultural%20artifacts%2C%20modern%20financial%20planning%20tools%20mixed%20with%20traditional%20Chinese%20aesthetic&width=400&height=300&seq=service1&orientation=landscape',
      features: ['资产配置优化', '风险评估分析', '传承路径设计', '税务筹划方案'],
      link: '/services/wealth-planning'
    },
    {
      title: '税务筹划服务',
      description: '运用专业税务知识，为个人和家族企业提供合规高效的税务优化方案',
      image: 'https://readdy.ai/api/search-image?query=Professional%20tax%20planning%20service%20with%20calculator%2C%20financial%20documents%2C%20tax%20forms%2C%20and%20traditional%20Chinese%20business%20elements%2C%20clean%20organized%20workspace%2C%20professional%20consulting%20atmosphere%2C%20warm%20lighting%20with%20cultural%20touch&width=400&height=300&seq=service2&orientation=landscape',
      features: ['个人所得税筹划', '企业税务优化', '跨境税务安排', '合规性保障'],
      link: '/services/tax-planning'
    },
    {
      title: '法律合规咨询',
      description: '提供财富传承相关的法律咨询服务，确保传承方案的合法合规',
      image: 'https://readdy.ai/api/search-image?query=Legal%20compliance%20consulting%20with%20law%20books%2C%20legal%20documents%2C%20scales%20of%20justice%2C%20traditional%20Chinese%20legal%20concepts%2C%20professional%20law%20office%20setting%2C%20scholarly%20atmosphere%20with%20cultural%20elements&width=400&height=300&seq=service3&orientation=landscape',
      features: ['遗产继承指导', '信托架构设计', '合同审核把关', '风险防控建议'],
      link: '/services/legal-consulting'
    },
    {
      title: '家庭教育指导',
      description: '融合国学智慧与现代教育理念，培养下一代的品格修养和财富管理能力',
      image: 'https://readdy.ai/api/search-image?query=Family%20education%20guidance%20scene%20with%20traditional%20Chinese%20books%2C%20parent%20and%20child%20learning%20together%2C%20cultural%20artifacts%2C%20warm%20family%20atmosphere%2C%20educational%20materials%20with%20traditional%20and%20modern%20elements%20combined&width=400&height=300&seq=service4&orientation=landscape',
      features: ['财商教育培养', '品格修养指导', '文化传承教育', '接班人培训'],
      link: '/services/family-education'
    },
    {
      title: '易学财运咨询',
      description: '运用连山易学原理，分析个人和家族的财运趋势，提供决策参考',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20I-Ching%20consultation%20with%20ancient%20coins%2C%20hexagram%20charts%2C%20feng%20shui%20compass%2C%20traditional%20scrolls%2C%20serene%20consulting%20room%20with%20cultural%20artifacts%2C%20mystical%20yet%20professional%20atmosphere&width=400&height=300&seq=service5&orientation=landscape',
      features: ['个人财运分析', '投资时机把握', '风水布局建议', '决策时点选择'],
      link: '/services/yixue-consulting'
    },
    {
      title: '综合财务顾问',
      description: '提供全方位的财务顾问服务，从日常理财到长期规划的一站式解决方案',
      image: 'https://readdy.ai/api/search-image?query=Comprehensive%20financial%20advisory%20service%20with%20modern%20financial%20charts%2C%20traditional%20Chinese%20business%20elements%2C%20professional%20consultation%20setting%2C%20financial%20planning%20documents%2C%20cultural%20and%20modern%20fusion%20atmosphere&width=400&height=300&seq=service6&orientation=landscape',
      features: ['投资组合管理', '现金流规划', '保险配置建议', '退休养老规划'],
      link: '/services/financial-advisory'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">核心服务</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            融合传统智慧与现代专业，为您提供全方位的财富传承解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.link}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  了解详情
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/services"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            查看全部服务
          </Link>
        </div>
      </div>
    </section>
  );
}
