
'use client';

export default function QualificationsSection() {
  const qualifications = [
    {
      title: 'CPA注册会计师',
      institution: '中国注册会计师协会',
      year: '2015年',
      description: '具备专业的财务分析和审计能力，为客户提供精准的财务规划建议',
      icon: 'ri-calculator-line',
      color: 'bg-blue-500'
    },
    {
      title: '法律职业资格证书',
      institution: '司法部',
      year: '2018年',
      description: '深度理解法律法规，确保所有方案合法合规，有效防控法律风险',
      icon: 'ri-scales-3-line',
      color: 'bg-red-500'
    },
    {
      title: '税务师资格证书',
      institution: '税务师协会',
      year: '2020年',
      description: '精通税务政策和筹划技巧，帮助客户合理优化税务负担',
      icon: 'ri-pie-chart-line',
      color: 'bg-green-500'
    }
  ];

  const additionalSkills = [
    {
      name: '连山易学研究',
      level: '高级',
      description: '深入研究连山易学体系，将传统智慧应用于现代财富管理'
    },
    {
      name: '家庭教育指导',
      level: '专业',
      description: '系统学习家庭教育理论，具备丰富的实践指导经验'
    },
    {
      name: '国际资产配置',
      level: '资深',
      description: '具备全球视野，熟悉国际资产配置的策略和实务操作'
    },
    {
      name: '家族信托设立',
      level: '专家',
      description: '具备丰富的家族信托设立和管理经验'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">专业资质认证</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            三重专业认证加持，为您的财富传承提供全方位保障
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {qualifications.map((qual, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 flex items-center justify-center ${qual.color} rounded-xl mb-4 mx-auto`}>
                  <i className={`${qual.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{qual.title}</h3>
                <div className="text-sm text-gray-600">
                  <div>{qual.institution}</div>
                  <div className="text-amber-600 font-semibold">{qual.year}获得</div>
                </div>
              </div>
              <p className="text-gray-700 text-center leading-relaxed">
                {qual.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">专业技能特长</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalSkills.map((skill, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <i className="ri-star-line text-amber-600 text-xl"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
