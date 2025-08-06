'use client';

import Link from 'next/link';

export default function KnowledgePage() {
  const featuredArticles = [
    {
      id: 1,
      category: '连山易学',
      title: '连山易学在现代财富管理中的应用原理',
      excerpt: '深入解析连山易学的核心理念，如何将古老智慧运用到现代投资决策和风险管控中...',
      author: '财富传承专家',
      date: '2024年1月15日',
      readTime: '8分钟',
      image: 'https://readdy.ai/api/search-image?query=Ancient%20Chinese%20I-Ching%20books%20and%20coins%20with%20modern%20financial%20charts%2C%20traditional%20study%20room%20with%20calligraphy%20scrolls%2C%20wisdom%20meets%20modern%20finance%2C%20scholarly%20atmosphere&width=600&height=300&seq=knowledge1&orientation=landscape',
      tags: ['易学应用', '投资哲学', '风险管控']
    },
    {
      id: 2,
      category: '家庭教育',
      title: '如何培养孩子正确的财富观念：从零花钱管理开始',
      excerpt: '通过日常生活中的理财教育，让孩子从小建立正确的金钱观念和理财意识...',
      author: '家庭教育顾问',
      date: '2024年1月20日',
      readTime: '6分钟',
      image: 'https://readdy.ai/api/search-image?query=Parent%20teaching%20child%20about%20money%20management%20with%20piggy%20bank%20and%20coins%2C%20warm%20family%20scene%2C%20educational%20moment%2C%20traditional%20Chinese%20family%20values%20in%20modern%20setting&width=600&height=300&seq=knowledge2&orientation=landscape',
      tags: ['财商教育', '儿童理财', '价值观培养']
    },
    {
      id: 3,
      category: '财富传承',
      title: '家族信托设立的五大关键要素解析',
      excerpt: '详细分析家族信托的设立要点，包括受益人安排、资产配置、税务筹划等核心要素...',
      author: 'CPA注册会计师',
      date: '2024年1月25日',
      readTime: '12分钟',
      image: 'https://readdy.ai/api/search-image?query=Family%20trust%20documents%20and%20legal%20papers%20on%20elegant%20desk%2C%20professional%20consultation%20setting%2C%20modern%20office%20with%20traditional%20Chinese%20elements%2C%20wealth%20planning%20materials&width=600&height=300&seq=knowledge3&orientation=landscape',
      tags: ['家族信托', '法律架构', '税务优化']
    }
  ];

  const categories = [
    {
      name: '连山易学',
      count: 15,
      icon: 'ri-compass-3-line',
      color: 'bg-purple-100 text-purple-600',
      description: '古老智慧在现代财富管理中的运用'
    },
    {
      name: '家庭教育',
      count: 23,
      icon: 'ri-parent-line',
      color: 'bg-blue-100 text-blue-600',
      description: '培养下一代的品格与财商'
    },
    {
      name: '财富传承',
      count: 18,
      icon: 'ri-money-dollar-circle-line',
      color: 'bg-green-100 text-green-600',
      description: '科学的财富传承规划与实施'
    },
    {
      name: '税务筹划',
      count: 12,
      icon: 'ri-calculator-line',
      color: 'bg-orange-100 text-orange-600',
      description: '合规高效的税务优化策略'
    },
    {
      name: '投资理财',
      count: 20,
      icon: 'ri-line-chart-line',
      color: 'bg-red-100 text-red-600',
      description: '专业的投资分析与资产配置'
    },
    {
      name: '案例分析',
      count: 16,
      icon: 'ri-file-text-line',
      color: 'bg-gray-100 text-gray-600',
      description: '真实成功案例深度解析'
    }
  ];

  const recentArticles = [
    {
      id: 4,
      category: '税务筹划',
      title: '2024年个人所得税新政策解读与筹划策略',
      date: '2024年1月28日',
      readTime: '10分钟'
    },
    {
      id: 5,
      category: '投资理财',
      title: '高净值家族的资产配置黄金比例',
      date: '2024年1月26日',
      readTime: '15分钟'
    },
    {
      id: 6,
      category: '案例分析',
      title: '某制造业家族三代传承成功案例分析',
      date: '2024年1月24日',
      readTime: '8分钟'
    },
    {
      id: 7,
      category: '连山易学',
      title: '易经六十四卦在投资时机选择中的运用',
      date: '2024年1月22日',
      readTime: '12分钟'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Traditional%20Chinese%20library%20with%20ancient%20books%20and%20scrolls%2C%20modern%20financial%20documents%2C%20scholarly%20atmosphere%2C%20warm%20lighting%2C%20wisdom%20and%20knowledge%20theme%2C%20cultural%20heritage%20meets%20modern%20finance&width=1920&height=800&seq=knowledge-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              专业知识中心
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              汇聚连山易学、家庭教育、财富传承等领域的专业知识与实践案例
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#featured-articles" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                阅读文章
              </Link>
              <Link href="#categories" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                浏览分类
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">知识分类</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              按专业领域分类，快速找到您感兴趣的知识内容
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                    <i className={`${category.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-gray-500 text-sm">{category.count} 篇文章</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="featured-articles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">精选文章</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              精心挑选的高质量文章，深度解析专业知识与实践案例
            </p>
          </div>
          
          <div className="space-y-8">
            {featuredArticles.map((article, index) => (
              <div key={article.id} className="bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 lg:h-full object-cover object-top"
                    />
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold mr-3">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.date}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-gray-500 text-sm">{article.readTime}阅读</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-amber-600 transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                          <i className="ri-user-line text-amber-600"></i>
                        </div>
                        <span className="text-gray-700 font-medium">{article.author}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sidebar Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Articles */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">最新文章</h2>
              <div className="space-y-6">
                {recentArticles.map((article, index) => (
                  <div key={article.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mr-3">
                        {article.category}
                      </span>
                      <span className="text-gray-500 text-sm">{article.date}</span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-gray-500 text-sm">{article.readTime}阅读</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Newsletter */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">订阅更新</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  获取最新的专业知识文章和案例分析
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="输入邮箱地址"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                  />
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                    立即订阅
                  </button>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">热门标签</h3>
                <div className="flex flex-wrap gap-2">
                  {['连山易学', '家族信托', '税务筹划', '财商教育', '投资理念', '风险管控', '传承规划', '资产配置', '家庭教育', '案例分析'].map((tag, index) => (
                    <span key={index} className="bg-gray-100 hover:bg-amber-100 text-gray-700 hover:text-amber-700 px-3 py-1 rounded-full text-sm cursor-pointer transition-colors whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expert Consultation */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">专家咨询</h3>
                <p className="text-amber-100 mb-4 text-sm">
                  需要个性化的专业指导？联系我们的专家团队
                </p>
                <Link href="/consultation" className="block w-full bg-white text-amber-600 hover:bg-gray-100 py-2 px-4 rounded-lg font-semibold transition-colors text-center cursor-pointer whitespace-nowrap">
                  预约咨询
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">持续学习，智慧传承</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            我们定期更新专业知识内容，与您分享最新的行业洞察和实践经验
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              专业咨询
            </Link>
            <Link href="/services" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              了解服务
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}