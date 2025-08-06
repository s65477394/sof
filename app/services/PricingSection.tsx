
'use client';

import Link from 'next/link';

export default function PricingSection() {
  const pricingPlans = [
    {
      name: '基础咨询',
      price: '免费',
      duration: '60分钟',
      description: '了解基本情况，初步分析需求',
      features: [
        '财富状况初评',
        '传承需求分析',
        '风险点识别',
        '方案建议概述'
      ],
      popular: false
    },
    {
      name: '专业规划',
      price: '2,888',
      duration: '2-3小时',
      description: '深度分析，制定详细传承方案',
      features: [
        '全面财务分析',
        '定制传承架构',
        '税务筹划方案',
        '法律合规审查',
        '实施路径规划',
        '风险防控建议'
      ],
      popular: true
    },
    {
      name: '易学财运',
      price: '1,888',
      duration: '90分钟',
      description: '运用连山易学分析财运趋势',
      features: [
        '个人财运分析',
        '投资时机判断',
        '重要决策咨询',
        '风水布局建议'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">服务收费标准</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            透明的收费标准，专业的服务价值
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'border-2 border-amber-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    最受欢迎
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-2">
                  {plan.price === '免费' ? (
                    <span className="text-4xl font-bold text-amber-600">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-2xl text-gray-500">¥</span>
                      <span className="text-4xl font-bold text-amber-600">{plan.price}</span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 flex items-center justify-center">
                  <i className="ri-time-line mr-2"></i>
                  {plan.duration}
                </p>
              </div>
              
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {plan.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href="/consultation" className={`w-full py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap text-center block ${plan.popular ? 'bg-amber-600 hover:bg-amber-700 text-white' : 'border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'}`}>
                选择方案
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
