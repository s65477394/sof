'use client';

export default function ExpertiseSection() {
  const expertiseAreas = [
    {
      icon: 'ri-calculator-line',
      title: 'CPA财务规划',
      description: '注册会计师专业背景，精通财务分析、税务筹划、资产配置等核心领域',
      features: ['财务报表分析', '成本控制优化', '投资决策支持', '风险评估管理']
    },
    {
      icon: 'ri-scales-line',
      title: '法律合规保障',
      description: '通过法考认证，深度理解财富传承相关法律法规，确保合规性',
      features: ['遗产继承规划', '信托结构设计', '合规性审查', '法律风险防控']
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: '税务优化策略',
      description: '税务专业资质，为客户制定合理合法的税务筹划方案',
      features: ['个税筹划', '企业税务优化', '跨境税务安排', '税务风险管控']
    },
    {
      icon: 'ri-graduation-cap-line',
      title: '家庭教育传承',
      description: '结合家庭教育理念，培养下一代正确的财富观和价值观',
      features: ['财商教育', '品格培养', '文化传承', '接班人培训']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">专业实力</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            三重专业资质护航，为您的财富传承提供全方位专业保障
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-xl flex-shrink-0">
                  <i className={`${area.icon} text-3xl text-amber-600`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                  <ul className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">专业认证加持</h3>
          <p className="text-amber-100 text-lg mb-6">
            CPA + 法考 + 税务师 三重专业认证，为您的财富传承保驾护航
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-2 mx-auto">
                <i className="ri-medal-line text-2xl text-white"></i>
              </div>
              <span className="text-white font-semibold">CPA认证</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-2 mx-auto">
                <i className="ri-award-line text-2xl text-white"></i>
              </div>
              <span className="text-white font-semibold">法考通过</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full mb-2 mx-auto">
                <i className="ri-file-shield-line text-2xl text-white"></i>
              </div>
              <span className="text-white font-semibold">税务师</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}