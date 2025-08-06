
'use client';

export default function ResourceCenter() {
  const resources = [
    {
      title: '财富传承白皮书',
      type: 'PDF文档',
      size: '2.5MB',
      description: '深度解析高净值家族财富传承的核心要点',
      icon: 'ri-file-pdf-line',
      color: 'text-red-600'
    },
    {
      title: '税务筹划实战案例',
      type: 'PDF文档',
      size: '1.8MB',
      description: '20个真实税务优化案例分析',
      icon: 'ri-file-text-line',
      color: 'text-blue-600'
    },
    {
      title: '家族信托设立指南',
      type: 'PDF文档',
      size: '3.2MB',
      description: '详细介绍家族信托的设立流程和要点',
      icon: 'ri-book-line',
      color: 'text-green-600'
    },
    {
      title: '财商教育资料包',
      type: 'ZIP压缩包',
      size: '8.5MB',
      description: '适合不同年龄段的财商教育材料',
      icon: 'ri-folder-zip-line',
      color: 'text-purple-600'
    },
    {
      title: '易学财运解析',
      type: 'PDF文档',
      size: '1.2MB',
      description: '连山易学在财富管理中的应用',
      icon: 'ri-compass-3-line',
      color: 'text-amber-600'
    },
    {
      title: '法律风险防控手册',
      type: 'PDF文档',
      size: '2.1MB',
      description: '财富传承中的法律风险识别与防控',
      icon: 'ri-shield-line',
      color: 'text-orange-600'
    }
  ];

  const webinars = [
    {
      title: '2024年税务政策解读',
      date: '2024年1月15日',
      duration: '90分钟',
      speaker: '税务专家团队',
      status: '已结束',
      replay: true
    },
    {
      title: '家族企业传承实务',
      date: '2024年2月20日',
      duration: '120分钟',
      speaker: '传承规划专家',
      status: '已结束',
      replay: true
    },
    {
      title: '国际资产配置策略',
      date: '2024年3月25日',
      duration: '105分钟',
      speaker: '投资顾问',
      status: '即将开始',
      replay: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">资源中心</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            丰富的学习资源和专业材料，助您深入了解财富传承
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">专业资料下载</h3>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`text-2xl ${resource.color}`}>
                        <i className={resource.icon}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                        <p className="text-sm text-gray-600">{resource.description}</p>
                        <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                          <span>{resource.type}</span>
                          <span>•</span>
                          <span>{resource.size}</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap">
                      下载
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">在线讲座</h3>
            <div className="space-y-6">
              {webinars.map((webinar, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">{webinar.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      webinar.status === '已结束' ? 'bg-gray-100 text-gray-600' : 'bg-green-100 text-green-600'
                    }`}>
                      {webinar.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                    <div>
                      <i className="ri-calendar-line mr-2"></i>
                      {webinar.date}
                    </div>
                    <div>
                      <i className="ri-time-line mr-2"></i>
                      {webinar.duration}
                    </div>
                    <div className="col-span-2">
                      <i className="ri-user-line mr-2"></i>
                      {webinar.speaker}
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    {webinar.replay ? (
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap">
                        观看回放
                      </button>
                    ) : (
                      <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap">
                        立即报名
                      </button>
                    )}
                    <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap">
                      了解详情
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
