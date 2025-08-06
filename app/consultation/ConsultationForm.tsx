
'use client';

import { useState } from 'react';

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    wealthRange: '',
    mainConcerns: '',
    hasChildren: '',
    previousExperience: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 模拟表单提交
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        wealthRange: '',
        mainConcerns: '',
        hasChildren: '',
        previousExperience: '',
        additionalInfo: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="consultation-form" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">预约咨询</h2>
          <p className="text-xl text-gray-600">
            请填写以下信息，我们将在24小时内与您联系确认咨询时间
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form id="consultation-booking" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  姓名 *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                  placeholder="请输入您的姓名"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  联系电话 *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                  placeholder="请输入您的手机号"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  邮箱地址
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                  placeholder="请输入您的邮箱"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  咨询服务类型 *
                </label>
                <div className="relative">
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm appearance-none pr-8"
                  >
                    <option value="">请选择服务类型</option>
                    <option value="initial">初步咨询（免费）</option>
                    <option value="deep">深度规划（¥2,888）</option>
                    <option value="yixue">易学财运咨询（¥1,888）</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  期望咨询日期
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  期望时间段
                </label>
                <div className="relative">
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm appearance-none pr-8"
                  >
                    <option value="">请选择时间段</option>
                    <option value="morning">上午（9:00-12:00）</option>
                    <option value="afternoon">下午（14:00-17:00）</option>
                    <option value="evening">晚上（19:00-21:00）</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  家庭净资产范围
                </label>
                <div className="relative">
                  <select
                    name="wealthRange"
                    value={formData.wealthRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm appearance-none pr-8"
                  >
                    <option value="">请选择资产范围</option>
                    <option value="under-500w">500万以下</option>
                    <option value="500w-1000w">500万-1000万</option>
                    <option value="1000w-3000w">1000万-3000万</option>
                    <option value="3000w-5000w">3000万-5000万</option>
                    <option value="over-5000w">5000万以上</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  是否有子女
                </label>
                <div className="relative">
                  <select
                    name="hasChildren"
                    value={formData.hasChildren}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm appearance-none pr-8"
                  >
                    <option value="">请选择</option>
                    <option value="yes">是</option>
                    <option value="no">否</option>
                    <option value="planning">计划中</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                主要关注问题 *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  '资产保值增值',
                  '税务筹划优化',
                  '子女教育规划',
                  '家族企业传承',
                  '风险防控管理',
                  '国际资产配置',
                  '慈善公益规划',
                  '其他'
                ].map((concern) => (
                  <label key={concern} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="mainConcerns"
                      value={concern}
                      onChange={(e) => {
                        const value = e.target.value;
                        const checked = e.target.checked;
                        const currentConcerns = formData.mainConcerns.split(',').filter(c => c.length > 0);
                        
                        if (checked) {
                          setFormData(prev => ({
                            ...prev,
                            mainConcerns: [...currentConcerns, value].join(',')
                          }));
                        } else {
                          setFormData(prev => ({
                            ...prev,
                            mainConcerns: currentConcerns.filter(c => c !== value).join(',')
                          }));
                        }
                      }}
                      className="mr-3 w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                    />
                    <span className="text-sm text-gray-700">{concern}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                是否有过类似咨询经验
              </label>
              <div className="relative">
                <select
                  name="previousExperience"
                  value={formData.previousExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm appearance-none pr-8"
                >
                  <option value="">请选择</option>
                  <option value="yes">是，有过相关咨询</option>
                  <option value="no">否，首次咨询</option>
                  <option value="some">有一些了解</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                补充信息
              </label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm resize-none"
                placeholder="请简要描述您的具体需求或想要了解的问题（限500字）"
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.additionalInfo.length}/500
              </div>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-amber-600 hover:bg-amber-700 disabled:bg-gray-400 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    提交中...
                  </>
                ) : (
                  '提交预约申请'
                )}
              </button>
            </div>
            
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
                <i className="ri-check-line text-green-600 text-xl mr-2"></i>
                <span className="text-green-700">提交成功！我们将在24小时内与您联系确认咨询时间。</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded-lg text-center">
                <i className="ri-error-warning-line text-red-600 text-xl mr-2"></i>
                <span className="text-red-700">提交失败，请稍后重试或直接联系我们。</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}