
'use client';

export default function TeamIntroduction() {
  const teamMembers = [
    {
      name: '王明德',
      position: '首席财富规划师',
      specialties: ['家族信托', '税务筹划', '连山易学'],
      experience: '18年财富管理经验',
      education: '清华大学经管学院MBA',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Chinese%20wealth%20manager%20portrait%2C%20middle-aged%20man%20in%20elegant%20business%20suit%2C%20confident%20and%20trustworthy%20expression%2C%20modern%20office%20background%2C%20warm%20lighting&width=300&height=400&seq=team-wang&orientation=portrait'
    },
    {
      name: '李雅琴',
      position: '资深法务顾问',
      specialties: ['法律合规', '合同审查', '争议解决'],
      experience: '12年法律服务经验',
      education: '北京大学法学院法学硕士',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Chinese%20female%20lawyer%20portrait%2C%20elegant%20business%20attire%2C%20confident%20and%20professional%20expression%2C%20legal%20office%20setting%2C%20warm%20lighting&width=300&height=400&seq=team-li&orientation=portrait'
    },
    {
      name: '张宏伟',
      position: '高级投资顾问',
      specialties: ['资产配置', '投资分析', '风险管控'],
      experience: '15年投资管理经验',
      education: '上海财经大学金融学博士',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Chinese%20investment%20advisor%20portrait%2C%20middle-aged%20man%20in%20business%20casual%2C%20analytical%20and%20wise%20expression%2C%20financial%20charts%20in%20background&width=300&height=400&seq=team-zhang&orientation=portrait'
    },
    {
      name: '陈慧敏',
      position: '家庭教育专家',
      specialties: ['财商教育', '品格培养', '价值观塑造'],
      experience: '10年教育咨询经验',
      education: '华东师范大学教育学博士',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Chinese%20education%20expert%20portrait%2C%20elegant%20woman%20in%20professional%20attire%2C%20warm%20and%20caring%20expression%2C%20educational%20setting%20with%20books&width=300&height=400&seq=team-chen&orientation=portrait'
    }
  ];

  const teamValues = [
    {
      title: '协作共赢',
      description: '团队成员紧密协作，发挥各自专业优势',
      icon: 'ri-team-line'
    },
    {
      title: '持续学习',
      description: '不断提升专业能力，跟上时代发展步伐',
      icon: 'ri-book-open-line'
    },
    {
      title: '客户至上',
      description: '始终以客户需求为出发点，提供最优服务',
      icon: 'ri-customer-service-2-line'
    },
    {
      title: '创新进取',
      description: '勇于创新，积极探索更好的服务模式',
      icon: 'ri-lightbulb-line'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">专业团队介绍</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            汇聚各领域顶尖专家，为您的财富传承提供全方位专业服务
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{member.position}</p>
                <p className="text-sm text-gray-600 mb-3">{member.experience}</p>
                <p className="text-xs text-gray-500 mb-4">{member.education}</p>
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">专业领域：</p>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <span key={specialtyIndex} className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">团队文化</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-2xl text-amber-600`}></i>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">加入我们的团队</h3>
            <p className="text-gray-600 mb-6">
              我们正在寻找志同道合的专业人士，共同致力于财富传承事业
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                查看职位
              </button>
              <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                联系我们
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
