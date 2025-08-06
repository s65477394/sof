
'use client';

export default function SuccessMetrics() {
  const metrics = [
    {
      number: '200+',
      label: '服务家族',
      description: '成功服务高净值家族数量'
    },
    {
      number: '50亿+',
      label: '管理资产',
      description: '累计管理家族资产规模'
    },
    {
      number: '98%',
      label: '满意度',
      description: '客户满意度评价'
    },
    {
      number: '15年',
      label: '专业经验',
      description: '财富管理行业经验'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-600 to-amber-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">专业成果数据</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            用数据说话，用成果证明专业实力
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4">
                {metric.number}
              </div>
              <div className="text-xl font-semibold text-amber-100 mb-2">
                {metric.label}
              </div>
              <p className="text-amber-200 text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
