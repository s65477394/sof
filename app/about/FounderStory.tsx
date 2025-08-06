
'use client';

export default function FounderStory() {
  return (
    <section id="founder-story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20Chinese%20financial%20advisor%20portrait%20in%20elegant%20traditional%20study%20room%2C%20middle-aged%20person%20in%20business%20attire%2C%20surrounded%20by%20financial%20books%20and%20Chinese%20classical%20texts%2C%20warm%20lighting%2C%20confident%20and%20wise%20expression&width=600&height=700&seq=founder-portrait&orientation=portrait"
              alt="创始人"
              className="w-full rounded-2xl shadow-lg object-cover object-top"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">创始人故事</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                我是一名深深热爱中华传统文化的财富管理专家。从小受家庭熏陶，对《连山易》等国学经典有着浓厚兴趣，同时在现代金融领域积累了丰富的专业经验。
              </p>
              <p>
                通过多年的学习和实践，我获得了CPA（注册会计师）、法考资格以及税务师证书，形成了完整的专业知识体系。这让我能够从会计、法律、税务三个维度为客户提供全方位的财富传承服务。
              </p>
              <p>
                在服务高净值家族的过程中，我深深认识到，真正的财富传承不仅是资产的转移，更是文化和价值观的传承。因此，我将连山易学的智慧融入到现代财富管理中，形成了独特的服务理念。
              </p>
              <p>
                我坚信，家庭教育是财富传承的根本。只有培养出具备正确财富观念和优秀品格的下一代，才能实现真正的家族基业长青。
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-2xl font-bold text-amber-600 mb-2">15年</div>
                <div className="text-sm text-gray-600">行业经验</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-2xl font-bold text-amber-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">服务家族</div>
              </div>
              <div className="text-center p-4 bg-amber-50 rounded-lg">
                <div className="text-2xl font-bold text-amber-600 mb-2">50亿+</div>
                <div className="text-sm text-gray-600">管理资产</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
