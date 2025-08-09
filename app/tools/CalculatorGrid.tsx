
'use client';

import { useState } from 'react';

export default function CalculatorGrid() {
  const [activeCalculator, setActiveCalculator] = useState('tax');
  
  const calculators = [
    {
      id: 'tax',
      title: '税务筹划计算器',
      description: '计算税务优化方案的节税效果',
      icon: 'ri-calculator-line',
      color: 'bg-blue-500'
    },
    {
      id: 'investment',
      title: '投资收益计算器',
      description: '分析投资组合的预期收益',
      icon: 'ri-line-chart-line',
      color: 'bg-green-500'
    },
    {
      id: 'inheritance',
      title: '传承成本计算器',
      description: '评估财富传承的各项成本',
      icon: 'ri-exchange-line',
      color: 'bg-purple-500'
    },
    {
      id: 'insurance',
      title: '保险规划计算器',
      description: '计算保险保障的合理配置',
      icon: 'ri-shield-check-line',
      color: 'bg-red-500'
    }
  ];

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 'tax':
        return <TaxCalculator />;
      case 'investment':
        return <InvestmentCalculator />;
      case 'inheritance':
        return <InheritanceCalculator />;
      case 'insurance':
        return <InsuranceCalculator />;
      default:
        return <TaxCalculator />;
    }
  };

  return (
    <section id="calculator-grid" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">专业计算工具</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            精准的数据计算，为您的决策提供科学依据
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            {calculators.map((calc) => (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  activeCalculator === calc.id
                    ? 'bg-amber-100 border-2 border-amber-500'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-10 h-10 flex items-center justify-center ${calc.color} rounded-lg`}>
                    <i className={`${calc.icon} text-white text-lg`}></i>
                  </div>
                  <h3 className="font-semibold text-gray-900">{calc.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{calc.description}</p>
              </button>
            ))}
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
              {renderCalculator()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TaxCalculator() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">税务计算器</h3>
      <p className="text-gray-600 mb-4">该工具正在开发中，敬请期待...</p>
    </div>
  );
}
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [result, setResult] = useState<{ tax: number; taxableIncome: number } | null>(null);
  const calculateTax = () => {
    const taxableIncome = parseFloat(income) - parseFloat(deductions || '0');
    let tax = 0;
    
    if (taxableIncome > 960000) tax = taxableIncome * 0.45 - 181920;
    else if (taxableIncome > 660000) tax = taxableIncome * 0.35 - 85920;
    else if (taxableIncome > 420000) tax = taxableIncome * 0.30 - 52920;
    else if (taxableIncome > 300000) tax = taxableIncome * 0.25 - 31920;
    else if (taxableIncome > 144000) tax = taxableIncome * 0.20 - 16920;
    else if (taxableIncome > 36000) tax = taxableIncome * 0.10 - 2520;
    else if (taxableIncome > 0) tax = taxableIncome * 0.03;

    setResult(prevState => ({
      ...prevState,
      taxableIncome: Math.max(0, taxableIncome),
      tax: Math.max(0, tax),
      afterTaxIncome: Math.max(0, taxableIncome - tax)
    }));

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">个人所得税计算器</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            年收入（元）
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm"
            placeholder="请输入年收入"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            专项扣除（元）
          </label>
          <input
            type="number"
            value={deductions}
            onChange={(e) => setDeductions(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm"
            placeholder="请输入扣除金额"
          />
        </div>
      </div>
      
      <button
        onClick={calculateTax}
        className="mt-6 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
      >
        计算税额
      </button>
      
      {result && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">应纳税所得额</div>
            <div className="text-2xl font-bold text-blue-600">
              ¥{result.taxableIncome.toLocaleString()}
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">应纳税额</div>
            <div className="text-2xl font-bold text-red-600">
              ¥{result.tax.toLocaleString()}
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">税后收入</div>
            <div className="text-2xl font-bold text-green-600">
              ¥{result.afterTaxIncome.toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InvestmentCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculateInvestment = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    
    const futureValue = p * Math.pow(1 + r, t);
    const totalReturn = futureValue - p;
    
    setResult({
      futureValue,
      totalReturn,
      annualReturn: totalReturn / t
    });
  };

  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">投资收益计算器</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            投资本金（元）
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm"
            placeholder="请输入投资金额"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            年收益率（%）
          </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm"
            placeholder="请输入收益率"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            投资年限
          </label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 text-sm"
            placeholder="请输入年限"
          />
        </div>
      </div>
      
      <button
        onClick={calculateInvestment}
        className="mt-6 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
      >
        计算收益
      </button>
      
      {result && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">未来价值</div>
            <div className="text-2xl font-bold text-blue-600">
              ¥{result.futureValue.toLocaleString()}
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">总收益</div>
            <div className="text-2xl font-bold text-green-600">
              ¥{result.totalReturn.toLocaleString()}
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">年均收益</div>
            <div className="text-2xl font-bold text-purple-600">
              ¥{result.annualReturn.toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InheritanceCalculator() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">传承成本计算器</h3>
      <p className="text-gray-600 mb-4">该工具正在开发中，敬请期待...</p>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-700">
          如需详细的传承成本分析，请联系我们的专业顾问为您定制评估方案。
        </p>
      </div>
    </div>
  );
}

function InsuranceCalculator() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">保险规划计算器</h3>
      <p className="text-gray-600 mb-4">该工具正在开发中，敬请期待...</p>
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <p className="text-amber-700">
          如需专业的保险规划建议，请预约我们的咨询服务。
        </p>
      </div>
    </div>
  );
}


