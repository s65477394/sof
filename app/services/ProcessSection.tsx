
'use client';

export default function ProcessSection() {
  const processSteps = [
    {
      step: '01',
      title: '初步了解',
      description: '深入了解家族背景、财务状况和传承需求',
      details: '通过详细沟通，全面掌握客户的基本情况和核心诉求'
    },
    {
      step: '02',
      title: '专业分析',
      description: '运用专业工具进行全面的财务和风险分析',
      details: '结合CPA、法考、税务专业知识，提供深度分析报告'
    },
    {
      step: '03',
      title: '方案设计',
      description: '制定个性化的财富传承解决方案',
      details: '融合传统智慧和现代金融理论，设计最优传承架构'
    },
    {
      step: '04',
      title: '方案实施',
      description: '协助客户执行各项具体的实施措施',
      details: '提供全程专业指导，确保方案有效落地执行'
    },
    {
      step: '05',
      title: '持续跟进',
      description: '定期回顾和优化调整传承方案',
      details: '根据环境变化和需求调整，保持方案的有效性'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">服务流程</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            标准化的专业服务流程，确保每个环节都精准到位
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-amber-200 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="relative z-10 bg-white">
                  <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">{step.description}</p>
                  <p className="text-sm text-gray-500">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
