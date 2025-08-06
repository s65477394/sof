
'use client';

import Link from 'next/link';

export default function FamilyEducationPage() {
  const educationPrograms = [
    {
      title: '财商启蒙教育',
      ageGroup: '6-12岁',
      description: '通过游戏和故事培养孩子的金钱观念',
      modules: ['金钱认知游戏', '储蓄习惯培养', '基础理财概念', '消费观念引导'],
      icon: 'ri-seedling-line',
      color: 'bg-green-500'
    },
    {
      title: '投资理念培育',
      ageGroup: '13-18岁',
      description: '系统学习投资知识，建立正确投资观',
      modules: ['投资基础知识', '风险识别能力', '投资心理学', '投资实践体验'],
      icon: 'ri-line-chart-line',
      color: 'bg-blue-500'
    },
    {
      title: '财富管理进阶',
      ageGroup: '18-25岁',
      description: '培养专业的财富管理和传承意识',
      modules: ['高级投资策略', '税务筹划基础', '法律风险防控', '家族企业治理'],
      icon: 'ri-building-line',
      color: 'bg-purple-500'
    },
    {
      title: '传承责任教育',
      ageGroup: '25岁以上',
      description: '培养家族传承使命感和社会责任感',
      modules: ['家族使命传承', '慈善公益参与', '社会责任承担', '文化价值传递'],
      icon: 'ri-heart-line',
      color: 'bg-red-500'
    }
  ];

  const coreValues = [
    {
      title: '品德为先',
      description: '将品德教育作为财富传承教育的基础',
      content: '通过国学经典学习和实践活动，培养孩子的道德品格和责任感，确保财富传承建立在正确价值观的基础上。',
      icon: 'ri-medal-line'
    },
    {
      title: '能力培养',
      description: '系统培养财富管理和创造能力',
      content: '不仅传授理论知识，更注重实践能力培养，通过案例分析、模拟投资等方式提升综合素质。',
      icon: 'ri-brain-line'
    },
    {
      title: '文化传承',
      description: '将家族文化与现代教育相结合',
      content: '运用连山易学智慧指导教育方向，将传统文化精髓与现代财富管理理念有机结合。',
      icon: 'ri-book-2-line'
    },
    {
      title: '个性发展',
      description: '因材施教，发掘每个孩子的潜能',
      content: '根据孩子的性格特点和兴趣爱好，制定个性化的教育方案，让每个孩子都能找到适合的发展道路。',
      icon: 'ri-user-star-line'
    }
  ];

  const educationMethods = [
    {
      method: '体验式学习',
      description: '通过实际操作和体验加深理解',
      examples: ['模拟股市投资', '家庭理财游戏', '企业经营体验']
    },
    {
      method: '案例教学',
      description: '通过真实案例分析培养思维能力',
      examples: ['成功企业分析', '投资失败反思', '传承案例研究']
    },
    {
      method: '导师制培养',
      description: '一对一指导和长期跟踪培养',
      examples: ['专业导师配对', '定期指导会谈', '成长过程记录']
    },
    {
      method: '实践项目',
      description: '通过实际项目锻炼能力',
      examples: ['公益项目参与', '创业项目孵化', '家族企业实习']
    }
  ];

  const successStories = [
    {
      student: '李同学',
      age: '16岁',
      background: '制造业家族第三代',
      achievement: '成功管理100万元投资组合，年化收益率12%',
      growth: '从对金钱毫无概念到能够独立进行投资决策分析'
    },
    {
      student: '王同学',
      age: '22岁',
      background: '房地产家族第二代',
      achievement: '创立环保科技公司，获得天使轮融资',
      growth: '将家族传统产业与新兴环保理念相结合'
    },
    {
      student: '张同学',
      age: '19岁',
      background: '金融家族第三代',
      achievement: '发起慈善基金，累计帮助贫困学生200余人',
      growth: '深刻理解财富的社会责任，积极投身公益事业'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Warm%20family%20education%20scene%20with%20Chinese%20traditional%20elements%2C%20parent%20teaching%20child%20about%20money%20and%20values%2C%20traditional%20study%20room%20with%20books%20and%20calligraphy%2C%20nurturing%20atmosphere&width=1920&height=800&seq=family-education-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              家庭教育指导
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              培养下一代正确的财富观念和管理能力，确保家族文化与财富的双重传承
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                教育咨询
              </Link>
              <Link href="#education-programs" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                课程详情
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section id="education-programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">分阶段教育体系</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              根据不同年龄段的认知特点，设计系统化的财富教育课程
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationPrograms.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 border border-orange-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 ${program.color} rounded-xl flex items-center justify-center mr-4`}>
                    <i className={`${program.icon} text-2xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                    <p className="text-orange-600 font-medium">适合年龄：{program.ageGroup}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <div className="space-y-3">
                  <p className="font-semibold text-gray-900 text-sm">核心模块：</p>
                  {program.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {module}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">核心教育理念</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              以品德为本，能力为重，传承文化精神的教育理念
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                    <i className={`${value.icon} text-xl text-orange-600`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-orange-600 font-medium text-sm">{value.description}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{value.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">教学方法</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              采用多元化教学方法，让孩子在实践中学习成长
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-b from-orange-50 to-white rounded-xl p-6 border border-orange-100 h-full">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{method.method}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{method.description}</p>
                  <div className="space-y-2">
                    {method.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">学员成长故事</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              见证每一个孩子的成长蜕变
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-user-smile-line text-3xl text-orange-600"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{story.student}</h3>
                  <p className="text-orange-600 font-medium">{story.age}</p>
                  <p className="text-gray-600 text-sm">{story.background}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-green-600 mb-2">突出成就</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{story.achievement}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-600 mb-2">成长变化</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{story.growth}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">家长资源</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              为家长提供专业指导和学习资源
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-orange-50 to-white rounded-xl p-8 border border-orange-100 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-book-open-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">教育指南</h3>
              <p className="text-gray-600 text-sm mb-4">
                专业的家庭财富教育指导手册
              </p>
              <button className="text-orange-600 hover:text-orange-700 font-semibold transition-colors cursor-pointer whitespace-nowrap">
                下载指南
              </button>
            </div>
            <div className="bg-gradient-to-b from-orange-50 to-white rounded-xl p-8 border border-orange-100 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-group-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">家长课堂</h3>
              <p className="text-gray-600 text-sm mb-4">
                定期举办家长教育分享会
              </p>
              <button className="text-orange-600 hover:text-orange-700 font-semibold transition-colors cursor-pointer whitespace-nowrap">
                报名参加
              </button>
            </div>
            <div className="bg-gradient-to-b from-orange-50 to-white rounded-xl p-8 border border-orange-100 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-chat-3-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">专家咨询</h3>
              <p className="text-gray-600 text-sm mb-4">
                一对一教育问题答疑咨询
              </p>
              <button className="text-orange-600 hover:text-orange-700 font-semibold transition-colors cursor-pointer whitespace-nowrap">
                预约咨询
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">给孩子最好的财富教育</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            让我们一起为孩子的未来奠定坚实基础，培养有品格、有能力、有担当的下一代
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              教育咨询
            </Link>
            <Link href="#education-programs" className="border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              了解课程
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
