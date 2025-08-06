
'use client';

import Link from 'next/link';

export default function PlanningTools() {
  const planningTools = [
    {
      title: '家族财富体检表',
      description: '全面评估家族财富状况的专业工具',
      features: [
        '资产负债分析',
        '现金流评估',
        '风险识别',
        '优化建议'
      ],
      icon: 'ri-health-book-line',
      action: '开始体检'
    },
    {
      title: '传承架构设计器',
      description: '可视化设计家族传承架构',
      features: [
        '股权结构图',
        '治理架构',
        '决策流程',
        '风控机制'
      ],
      icon: 'ri-organization-chart',
      action: '开始设计'
    },
    {
      title: '税务优化方案',
      description: '智能生成税务筹划建议',
      features: [
        '节税分析',
        '合规检查',
        '风险评估',
        '实施路径'
      ],
      icon: 'ri-pie-chart-line',
      action: '生成方案'
    },
    {
      title: '家族宪法模板',
      description: '制定家族治理的基础文件',
      features: [
        '价值观梳理',
        '治理规则',
        '决策机制',
        '冲突解决'
      ],
      icon: 'ri-file-text-line',
      action: '创建文档'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">规划工具箱</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            专业的规划工具，帮助您系统性地管理和传承家族财富
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {planningTools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-xl mr-4">
                  <i className={`${tool.icon} text-3xl text-amber-600`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{tool.title}</h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                {tool.action}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">需要更专业的指导？</h3>
            <p className="text-gray-600 mb-6">
              我们的专业顾问团队可以为您提供一对一的深度咨询服务
            </p>
            <Link href="/consultation" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              预约专业咨询
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
