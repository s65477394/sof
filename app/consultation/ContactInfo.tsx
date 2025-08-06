
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-phone-line',
      title: '电话咨询',
      content: '400-888-6688',
      description: '工作日 9:00-18:00',
      action: 'tel:400-888-6688'
    },
    {
      icon: 'ri-wechat-line',
      title: '微信咨询',
      content: 'WealthPlanner2024',
      description: '扫码添加微信',
      action: '#'
    },
    {
      icon: 'ri-mail-line',
      title: '邮件联系',
      content: 'info@wealthplanner.com',
      description: '24小时内回复',
      action: 'mailto:info@wealthplanner.com'
    },
    {
      icon: 'ri-map-pin-line',
      title: '办公地址',
      content: '上海市浦东新区陆家嘴金融城',
      description: '预约后可到访面谈',
      action: '#'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">联系方式</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            多种联系方式，为您提供便捷的咨询服务
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-xl mb-4 mx-auto">
                <i className={`${method.icon} text-3xl text-amber-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-lg text-amber-600 font-medium mb-2">{method.content}</p>
              <p className="text-sm text-gray-600 mb-4">{method.description}</p>
              {method.action.startsWith('tel:') || method.action.startsWith('mailto:') ? (
                <a
                  href={method.action}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  立即联系
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
              ) : (
                <button className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors cursor-pointer whitespace-nowrap">
                  了解详情
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">专业保障承诺</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">专业资质保障</h4>
                    <p className="text-gray-600 text-sm">CPA、法考、税务师三重认证</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">隐私保护承诺</h4>
                    <p className="text-gray-600 text-sm">严格保护客户隐私信息</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">持续跟进服务</h4>
                    <p className="text-gray-600 text-sm">提供长期的咨询跟进服务</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">满意度保证</h4>
                    <p className="text-gray-600 text-sm">不满意全额退款承诺</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Chinese%20financial%20advisor%20in%20elegant%20office%20setting%2C%20traditional%20cultural%20elements%20like%20Chinese%20calligraphy%20and%20tea%20set%2C%20modern%20business%20environment%2C%20warm%20lighting%2C%20trust%20and%20reliability%20atmosphere%2C%20clean%20professional%20photography&width=600&height=400&seq=contact-image&orientation=landscape"
                alt="专业咨询服务"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}