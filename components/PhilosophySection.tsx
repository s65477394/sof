'use client';

export default function PhilosophySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">传承理念</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            以连山易学为根基，结合现代财富管理理念，构建完整的家族传承体系
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full flex-shrink-0">
                <i className="ri-yin-yang-line text-2xl text-amber-600"></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">天地人和谐统一</h3>
                <p className="text-gray-600 leading-relaxed">
                  遵循连山易学"天地人"三才之道，在财富传承中注重天时、地利、人和的完美结合，
                  确保家族财富在时间轴上的稳健传承。
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full flex-shrink-0">
                <i className="ri-scales-3-line text-2xl text-amber-600"></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">德财并重传承</h3>
                <p className="text-gray-600 leading-relaxed">
                  财富传承不仅是物质财富的延续，更是家族品德、文化、智慧的传递。
                  我们注重培养下一代的品格修养和理财能力。
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full flex-shrink-0">
                <i className="ri-leaf-line text-2xl text-amber-600"></i>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">生生不息发展</h3>
                <p className="text-gray-600 leading-relaxed">
                  借鉴易经"生生不息"的智慧，构建可持续发展的财富增长模式，
                  让家族财富在传承中实现保值增值。
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Traditional%20Chinese%20philosophical%20concept%20visualization%20with%20ancient%20Chinese%20coins%2C%20scrolls%20with%20calligraphy%2C%20traditional%20wooden%20abacus%2C%20and%20feng%20shui%20compass%20arranged%20harmoniously%2C%20warm%20lighting%20creating%20peaceful%20atmosphere%2C%20clean%20minimalist%20background%20with%20subtle%20traditional%20patterns%2C%20professional%20photography%20style&width=600&height=600&seq=philosophy1&orientation=squarish"
              alt="传承理念"
              className="w-full rounded-2xl shadow-2xl object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}