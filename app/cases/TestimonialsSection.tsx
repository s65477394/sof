
'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: '王总',
      company: '某制造业集团董事长',
      content: '通过专业的传承规划，我们家族企业实现了平稳过渡。税务筹划为我们节省了大量成本，传承架构设计非常科学合理。',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20Chinese%20business%20executive%20portrait%2C%20middle-aged%20man%20in%20elegant%20suit%2C%20confident%20smile%2C%20traditional%20office%20background%2C%20high-quality%20business%20photography&width=100&height=100&seq=testimonial-wang&orientation=squarish'
    },
    {
      name: '李女士',
      company: '某投资公司创始人',
      content: '易学财运咨询为我的投资决策提供了很好的参考。结合专业的财务分析，投资收益明显改善，风险也得到了有效控制。',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Elegant%20Chinese%20businesswoman%20portrait%2C%20professional%20attire%2C%20warm%20smile%2C%20modern%20office%20setting%2C%20confident%20and%20successful%20appearance&width=100&height=100&seq=testimonial-li&orientation=squarish'
    },
    {
      name: '张先生',
      company: '某地产开发企业总裁',
      content: '家族教育指导让我们的下一代树立了正确的财富观念。孩子们现在更懂得感恩，也更有责任心参与家族事业。',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Distinguished%20Chinese%20businessman%20portrait%2C%20mature%20executive%20in%20formal%20suit%2C%20wise%20and%20experienced%20look%2C%20luxury%20office%20environment&width=100&height=100&seq=testimonial-zhang&orientation=squarish'
    },
    {
      name: '刘总',
      company: '某科技公司CEO',
      content: '专业团队帮助我们建立了完善的股权架构和治理体系。现在公司运营更加规范，投资人信心也大大增强。',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Young%20Chinese%20tech%20CEO%20portrait%2C%20modern%20business%20casual%20style%2C%20innovative%20office%20background%2C%20confident%20and%20visionary%20expression&width=100&height=100&seq=testimonial-liu&orientation=squarish'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">客户见证</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            听听我们的客户怎么说
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  className="w-20 h-20 rounded-full object-cover object-top"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-amber-500 text-xl"></i>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonials[activeIndex].content}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-600">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  activeIndex === index ? 'bg-amber-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                activeIndex === index
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 hover:border-amber-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover object-top"
                />
                <div>
                  <h5 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h5>
                  <p className="text-xs text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
