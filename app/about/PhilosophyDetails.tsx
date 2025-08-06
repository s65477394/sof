
'use client';

export default function PhilosophyDetails() {
  const philosophyPrinciples = [
    {
      title: '天人合一',
      subtitle: '顺应自然规律',
      description: '尊重市场规律和自然法则，在投资和传承规划中寻求平衡与和谐',
      icon: 'ri-leaf-line',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: '厚德载物',
      subtitle: '德行为先',
      description: '强调品德修养的重要性，财富传承以德为本，培养下一代正确价值观',
      icon: 'ri-heart-line',
      color: 'bg-red-100 text-red-600'
    },
    {
      title: '居安思危',
      subtitle: '风险防控',
      description: '始终保持风险意识，在财富管理中建立完善的风险防控体系',
      icon: 'ri-shield-line',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: '传承有序',
      subtitle: '有序传递',
      description: '按照家族实际情况，制定科学的传承计划，确保财富有序传递',
      icon: 'ri-flow-chart',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const coreValues = [
    {
      value: '专业',
      description: '以专业知识和技能为客户创造价值'
    },
    {
      value: '诚信',
      description: '诚实守信，建立长期信任关系'
    },
    {
      value: '创新',
      description: '不断创新服务模式和解决方案'
    },
    {
      value: '传承',
      description: '致力于文化和财富的双重传承'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">服务理念详解</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            将连山易学的古老智慧与现代财富管理理念相结合，形成独特的服务哲学
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {philosophyPrinciples.map((principle, index) => (
            <div key={index} className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 border border-amber-100">
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 flex items-center justify-center ${principle.color} rounded-xl mr-4`}>
                  <i className={`${principle.icon} text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{principle.title}</h3>
                  <p className="text-amber-600 font-semibold">{principle.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">核心价值观</h3>
              <p className="text-amber-100 mb-8 leading-relaxed">
                我们的价值观不仅指导着我们的服务方式，更体现在与每一位客户的互动中。
                这些价值观是我们立足市场的根本，也是客户信任我们的基础。
              </p>
              <div className="grid grid-cols-2 gap-6">
                {coreValues.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">{item.value}</div>
                    <p className="text-amber-100 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white/10 backdrop-blur rounded-xl p-8">
                <div className="text-4xl font-['Pacifico'] text-white mb-4">logo</div>
                <p className="text-amber-100 text-lg italic">
                  "智慧传承，财富永续"
                </p>
                <div className="w-16 h-1 bg-amber-300 mx-auto lg:ml-auto lg:mr-0 mt-4"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">我们的承诺</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <i className="ri-time-line text-4xl text-amber-600 mb-4"></i>
              <h4 className="font-semibold text-gray-900 mb-2">及时响应</h4>
              <p className="text-gray-600 text-sm">24小时内响应客户需求</p>
            </div>
            <div className="p-6">
              <i className="ri-lock-line text-4xl text-amber-600 mb-4"></i>
              <h4 className="font-semibold text-gray-900 mb-2">保密承诺</h4>
              <p className="text-gray-600 text-sm">严格保护客户隐私信息</p>
            </div>
            <div className="p-6">
              <i className="ri-award-line text-4xl text-amber-600 mb-4"></i>
              <h4 className="font-semibold text-gray-900 mb-2">品质保证</h4>
              <p className="text-gray-600 text-sm">提供最优质的专业服务</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
