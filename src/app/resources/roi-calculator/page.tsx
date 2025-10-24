'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import Link from 'next/link';

export default function ROICalculator() {
  const [formData, setFormData] = useState({
    currentMonthlyVisitors: 100,
    currentConversionRate: 2,
    averageOrderValue: 100,
    projectedVisitorIncrease: 300,
    projectedConversionIncrease: 5,
    websiteInvestment: 5000,
  });

  const [showResults, setShowResults] = useState(false);

  // Current calculations
  const currentMonthlyCustomers = (formData.currentMonthlyVisitors * formData.currentConversionRate) / 100;
  const currentMonthlyRevenue = currentMonthlyCustomers * formData.averageOrderValue;
  const currentAnnualRevenue = currentMonthlyRevenue * 12;

  // Projected calculations (with new website)
  const projectedMonthlyVisitors = formData.currentMonthlyVisitors + formData.projectedVisitorIncrease;
  const projectedConversionRate = formData.currentConversionRate + formData.projectedConversionIncrease;
  const projectedMonthlyCustomers = (projectedMonthlyVisitors * projectedConversionRate) / 100;
  const projectedMonthlyRevenue = projectedMonthlyCustomers * formData.averageOrderValue;
  const projectedAnnualRevenue = projectedMonthlyRevenue * 12;

  // ROI calculations
  const annualRevenueIncrease = projectedAnnualRevenue - currentAnnualRevenue;
  const roi = ((annualRevenueIncrease - formData.websiteInvestment) / formData.websiteInvestment) * 100;
  const monthsToBreakEven = formData.websiteInvestment / (projectedMonthlyRevenue - currentMonthlyRevenue);

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 text-white py-20 mb-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Link href="/resources" className="inline-flex items-center gap-2 text-white hover:text-blue-100 mb-6">
              ← Back to Resources
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website ROI Calculator
            </h1>
            <p className="text-xl max-w-3xl text-blue-50">
              Calculate the potential return on investment for your website project.
              See how a professional website can increase your revenue and pay for itself.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Calculator Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Enter Your Business Information
            </h2>

            <div className="space-y-6">
              {/* Current Monthly Visitors */}
              <div>
                <label className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">
                    Current Monthly Website Visitors
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    {formData.currentMonthlyVisitors.toLocaleString()}
                  </span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="50"
                  value={formData.currentMonthlyVisitors}
                  onChange={(e) => handleInputChange('currentMonthlyVisitors', Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <p className="text-sm text-gray-500 mt-1">
                  If you don't have a website yet, enter 0. We'll show you the potential.
                </p>
              </div>

              {/* Current Conversion Rate */}
              <div>
                <label className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">
                    Current Conversion Rate (%)
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    {formData.currentConversionRate}%
                  </span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="0.5"
                  value={formData.currentConversionRate}
                  onChange={(e) => handleInputChange('currentConversionRate', Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Percentage of visitors who become customers. Industry average: 2-5%
                </p>
              </div>

              {/* Average Order Value */}
              <div>
                <label className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">
                    Average Order/Service Value ($)
                  </span>
                  <span className="text-2xl font-bold text-blue-600">
                    ${formData.averageOrderValue.toLocaleString()}
                  </span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="5000"
                  step="10"
                  value={formData.averageOrderValue}
                  onChange={(e) => handleInputChange('averageOrderValue', Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Average amount a customer spends per transaction
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900">
                  Projected Improvements with New Website
                </h3>

                {/* Projected Visitor Increase */}
                <div className="mb-6">
                  <label className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">
                      Additional Monthly Visitors
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      +{formData.projectedVisitorIncrease.toLocaleString()}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="50"
                    value={formData.projectedVisitorIncrease}
                    onChange={(e) => handleInputChange('projectedVisitorIncrease', Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    SEO, better UX, and marketing typically increase traffic 200-500%
                  </p>
                </div>

                {/* Projected Conversion Increase */}
                <div className="mb-6">
                  <label className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-semibold">
                      Conversion Rate Improvement (%)
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      +{formData.projectedConversionIncrease}%
                    </span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.5"
                    value={formData.projectedConversionIncrease}
                    onChange={(e) => handleInputChange('projectedConversionIncrease', Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Professional design and UX typically improve conversions 2-8%
                  </p>
                </div>
              </div>

              {/* Website Investment */}
              <div className="border-t pt-6">
                <label className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">
                    Website Investment ($)
                  </span>
                  <span className="text-2xl font-bold text-purple-600">
                    ${formData.websiteInvestment.toLocaleString()}
                  </span>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={formData.websiteInvestment}
                  onChange={(e) => handleInputChange('websiteInvestment', Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <p className="text-sm text-gray-500 mt-1">
                  One-time investment for professional website development
                </p>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow mt-6"
              >
                Calculate ROI
              </button>
            </div>
          </motion.div>

          {/* Results */}
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {/* Current vs Projected Revenue */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Revenue Comparison
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Current */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">
                      Current Situation
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Monthly Visitors</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {formData.currentMonthlyVisitors.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Conversion Rate</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {formData.currentConversionRate}%
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Monthly Customers</p>
                        <p className="text-2xl font-bold text-gray-900">
                          {currentMonthlyCustomers.toFixed(0)}
                        </p>
                      </div>
                      <div className="border-t pt-3">
                        <p className="text-sm text-gray-600">Monthly Revenue</p>
                        <p className="text-3xl font-bold text-gray-900">
                          ${currentMonthlyRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Annual Revenue</p>
                        <p className="text-2xl font-bold text-gray-900">
                          ${currentAnnualRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Projected */}
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-500">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                      With New Website
                      <span className="text-green-600">✨</span>
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-600">Monthly Visitors</p>
                        <p className="text-2xl font-bold text-green-600">
                          {projectedMonthlyVisitors.toLocaleString()}
                          <span className="text-sm ml-2 text-green-600">
                            (+{formData.projectedVisitorIncrease.toLocaleString()})
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Conversion Rate</p>
                        <p className="text-2xl font-bold text-green-600">
                          {projectedConversionRate}%
                          <span className="text-sm ml-2 text-green-600">
                            (+{formData.projectedConversionIncrease}%)
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Monthly Customers</p>
                        <p className="text-2xl font-bold text-green-600">
                          {projectedMonthlyCustomers.toFixed(0)}
                          <span className="text-sm ml-2 text-green-600">
                            (+{(projectedMonthlyCustomers - currentMonthlyCustomers).toFixed(0)})
                          </span>
                        </p>
                      </div>
                      <div className="border-t pt-3">
                        <p className="text-sm text-gray-600">Monthly Revenue</p>
                        <p className="text-3xl font-bold text-green-600">
                          ${projectedMonthlyRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Annual Revenue</p>
                        <p className="text-2xl font-bold text-green-600">
                          ${projectedAnnualRevenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Metrics */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Your Return on Investment
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur">
                    <p className="text-blue-100 mb-2">Annual Revenue Increase</p>
                    <p className="text-4xl font-bold">
                      ${annualRevenueIncrease.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                    <p className="text-sm text-blue-100 mt-2">
                      Extra revenue in first year
                    </p>
                  </div>

                  <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur">
                    <p className="text-blue-100 mb-2">Return on Investment</p>
                    <p className="text-4xl font-bold">
                      {roi.toFixed(0)}%
                    </p>
                    <p className="text-sm text-blue-100 mt-2">
                      {roi > 0 ? 'Positive ROI in first year!' : 'Long-term investment'}
                    </p>
                  </div>

                  <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur">
                    <p className="text-blue-100 mb-2">Break-Even Timeline</p>
                    <p className="text-4xl font-bold">
                      {monthsToBreakEven > 0 && monthsToBreakEven < 1000
                        ? `${monthsToBreakEven.toFixed(1)} mo`
                        : monthsToBreakEven < 0
                        ? 'Immediate'
                        : 'N/A'}
                    </p>
                    <p className="text-sm text-blue-100 mt-2">
                      Time to recover investment
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Insights */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Key Insights
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Revenue Growth</h4>
                      <p className="text-gray-600">
                        A professional website could increase your annual revenue by{' '}
                        <strong className="text-green-600">
                          ${annualRevenueIncrease.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                        </strong>
                        {' '}in the first year alone.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📈</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Customer Acquisition</h4>
                      <p className="text-gray-600">
                        You could gain an additional{' '}
                        <strong className="text-blue-600">
                          {((projectedMonthlyCustomers - currentMonthlyCustomers) * 12).toFixed(0)} customers
                        </strong>
                        {' '}per year with improved visibility and conversion.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Quick Payback</h4>
                      <p className="text-gray-600">
                        {monthsToBreakEven > 0 && monthsToBreakEven < 12
                          ? `Your website investment could pay for itself in just ${monthsToBreakEven.toFixed(1)} months.`
                          : monthsToBreakEven >= 12 && monthsToBreakEven < 24
                          ? `Your website investment could pay for itself within ${(monthsToBreakEven / 12).toFixed(1)} years.`
                          : 'Your website is a long-term asset that continues generating value year after year.'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Conservative Estimates</h4>
                      <p className="text-gray-600">
                        These calculations use conservative industry averages. Many of our clients see even better results through SEO, social media integration, and ongoing optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-8 rounded-2xl text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Make It Happen?
                </h2>
                <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can build a website that delivers these results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
                  >
                    Schedule Free Consultation
                  </Link>
                  <Link
                    href="/resources"
                    className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
                  >
                    Download More Guides
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
