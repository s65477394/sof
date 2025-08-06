
'use client';

export default function ServiceIntro() {
  const consultationTypes = [
    {
      title: '初步咨询',
      duration: '60分钟',
      price: '免费',
      description: '了解您的基本情况，分析财富传承需求',
      features: [
        '家族财富现状评估',
        '传承目标初步规划',
        '风险点识别分析',
        '后续服务方案建议'
      ],
      icon: 'ri-chat-1-line'
    },
    {
      title: '深度规划',
      duration: '2-3小时',
      price: '¥2,888',
      description: '详细制定个性化财富传承方案',
      features: [
        '全面财务状况分析',
        '定制化传承架构设计',
        '税务筹划方案制定',
        '法律合规性审查'
      ],
      icon: 'ri-presentation-line'
    },
    {
      title: '易学财运咨询',
      duration: '90分钟',
      price: '¥1,888',
      description: '运用连山易学分析财运趋势',
      features: [
        '个人财运分析',
        '投资时机判断',
        '风水布局建议',
        '重要决策时点选择'
      ],
      icon: 'ri-compass-3-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">咨询服务类型</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            根据您的需求选择合适的咨询服务，获得专业的指导建议
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {consultationTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-xl border-2 border-gray-100 p-8 hover:border-amber-200 hover:shadow-lg transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-xl mb-4 mx-auto">
                  <i className={`${type.icon} text-3xl text-amber-600`}></i>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                <div className="flex items-center justify-center space-x-4 text-gray-600">
                  <span className="flex items-center">
                    <i className="ri-time-line mr-2"></i>
                    {type.duration}
                  </span>
                  <span className="text-2xl font-bold text-amber-600">{type.price}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {type.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {type.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                选择此服务
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}