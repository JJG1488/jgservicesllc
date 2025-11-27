'use client';

import { ProjectIntake } from '@/types/intake';
import { useState } from 'react';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

export default function PagesStep({ intake, onUpdate }: StepProps) {
  const [newPageName, setNewPageName] = useState('');

  const updatePages = (updates: Partial<ProjectIntake['pages']>) => {
    onUpdate({
      ...intake,
      pages: { ...intake.pages, ...updates },
    });
  };

  const addAdditionalPage = (contentBy: 'client' | 'developer') => {
    if (!newPageName.trim()) return;

    const price = contentBy === 'client' ? 200 : 350;
    updatePages({
      additionalPages: [
        ...intake.pages.additionalPages,
        { name: newPageName.trim(), contentBy, price }
      ]
    });
    setNewPageName('');
  };

  const removePage = (index: number) => {
    updatePages({
      additionalPages: intake.pages.additionalPages.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Pages & Sections
        </h3>
        <p className="text-blue-200">
          Add custom pages and sections to enhance your website beyond the base package.
        </p>
      </div>

      <div className="space-y-6">
        {/* Additional Pages */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Additional Pages</h4>
          <p className="text-xs text-blue-200 mb-4">
            Add custom pages beyond your base package
          </p>

          {/* Existing Pages */}
          {intake.pages.additionalPages.length > 0 && (
            <div className="space-y-2 mb-4">
              {intake.pages.additionalPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-100">{page.name}</span>
                    <span className="text-xs text-blue-300 px-2 py-1 rounded-full bg-blue-500/20">
                      {page.contentBy === 'client' ? 'Client content' : 'Developer content'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-blue-300 font-medium">${page.price}</span>
                    <button
                      onClick={() => removePage(index)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add New Page */}
          <div className="space-y-3">
            <input
              type="text"
              value={newPageName}
              onChange={(e) => setNewPageName(e.target.value)}
              placeholder="Page name (e.g., 'Our Team', 'Locations')"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <div className="flex gap-2">
              <button
                onClick={() => addAdditionalPage('client')}
                disabled={!newPageName.trim()}
                className="flex-1 px-4 py-2 rounded-lg bg-blue-500/20 border border-blue-400/30 text-blue-100 hover:bg-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
              >
                Add with client content (+$200)
              </button>
              <button
                onClick={() => addAdditionalPage('developer')}
                disabled={!newPageName.trim()}
                className="flex-1 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-400/30 text-purple-100 hover:bg-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm"
              >
                Add with developer content (+$350)
              </button>
            </div>
          </div>
        </div>

        {/* Hero Sections */}
        <div className="glass-sm rounded-lg p-4">
          <label className="block">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-sm font-semibold text-white">Hero Sections</h4>
                <p className="text-xs text-blue-200 mt-1">Custom hero layouts for impact</p>
              </div>
              <span className="text-blue-300 font-medium text-sm">+$150-250 each</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                max="10"
                value={intake.pages.heroSections}
                onChange={(e) => {
                  const count = parseInt(e.target.value) || 0;
                  updatePages({
                    heroSections: count,
                    heroPrice: count * 200 // Average price
                  });
                }}
                className="w-24 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <span className="text-blue-200 text-sm">sections</span>
            </div>
          </label>
        </div>

        {/* About/Team Section */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">About/Team Section</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="aboutSection"
                  checked={!intake.pages.aboutTeamSection}
                  onChange={() => updatePages({ aboutTeamSection: false, aboutPrice: 0 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Not needed</span>
              </div>
              <span className="text-blue-300 font-medium">$0</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="aboutSection"
                  checked={intake.pages.aboutTeamSection}
                  onChange={() => updatePages({ aboutTeamSection: true, aboutPrice: 150 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Add About/Team section</span>
              </div>
              <span className="text-blue-300 font-medium">+$100-200</span>
            </label>
          </div>
        </div>

        {/* Services/Features Section */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Services/Features Section</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="servicesSection"
                  checked={!intake.pages.servicesSection}
                  onChange={() => updatePages({ servicesSection: false, servicesPrice: 0 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Not needed</span>
              </div>
              <span className="text-blue-300 font-medium">$0</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="servicesSection"
                  checked={intake.pages.servicesSection}
                  onChange={() => updatePages({ servicesSection: true, servicesPrice: 150 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Add Services/Features section</span>
              </div>
              <span className="text-blue-300 font-medium">+$100-200</span>
            </label>
          </div>
        </div>

        {/* Portfolio/Gallery */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Portfolio/Gallery</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="portfolio"
                  checked={intake.pages.portfolio === 'none'}
                  onChange={() => updatePages({ portfolio: 'none', portfolioPrice: 0 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Not needed</span>
              </div>
              <span className="text-blue-300 font-medium">$0</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="portfolio"
                  checked={intake.pages.portfolio === 'client-content'}
                  onChange={() => updatePages({ portfolio: 'client-content', portfolioPrice: 250 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Client provides content</span>
              </div>
              <span className="text-blue-300 font-medium">+$250</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="portfolio"
                  checked={intake.pages.portfolio === 'developer-content'}
                  onChange={() => updatePages({ portfolio: 'developer-content', portfolioPrice: 400 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Developer creates content</span>
              </div>
              <span className="text-blue-300 font-medium">+$400</span>
            </label>
          </div>
        </div>

        {/* Testimonials */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Testimonials/Reviews Section</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="testimonials"
                  checked={intake.pages.testimonials === 'none'}
                  onChange={() => updatePages({ testimonials: 'none', testimonialsPrice: 0 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Not needed</span>
              </div>
              <span className="text-blue-300 font-medium">$0</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="testimonials"
                  checked={intake.pages.testimonials === 'client-content'}
                  onChange={() => updatePages({ testimonials: 'client-content', testimonialsPrice: 100 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Client provides testimonials</span>
              </div>
              <span className="text-blue-300 font-medium">+$100</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="testimonials"
                  checked={intake.pages.testimonials === 'developer-content'}
                  onChange={() => updatePages({ testimonials: 'developer-content', testimonialsPrice: 150 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Developer designs layout</span>
              </div>
              <span className="text-blue-300 font-medium">+$150</span>
            </label>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">FAQ Section</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="faq"
                  checked={intake.pages.faqSection === 'none'}
                  onChange={() => updatePages({ faqSection: 'none', faqPrice: 0 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Not needed</span>
              </div>
              <span className="text-blue-300 font-medium">$0</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="faq"
                  checked={intake.pages.faqSection === 'client-content'}
                  onChange={() => updatePages({ faqSection: 'client-content', faqPrice: 100 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Client provides Q&A</span>
              </div>
              <span className="text-blue-300 font-medium">+$100</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="faq"
                  checked={intake.pages.faqSection === 'developer-content'}
                  onChange={() => updatePages({ faqSection: 'developer-content', faqPrice: 150 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Developer writes FAQs</span>
              </div>
              <span className="text-blue-300 font-medium">+$150</span>
            </label>
          </div>
        </div>

        {/* Case Studies */}
        <div className="glass-sm rounded-lg p-4">
          <label className="block">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-sm font-semibold text-white">Case Studies</h4>
                <p className="text-xs text-blue-200 mt-1">In-depth project showcases</p>
              </div>
              <span className="text-blue-300 font-medium text-sm">+$200-400 each</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                max="20"
                value={intake.pages.caseStudies}
                onChange={(e) => {
                  const count = parseInt(e.target.value) || 0;
                  updatePages({
                    caseStudies: count,
                    caseStudiesPrice: count * 300 // Average price
                  });
                }}
                className="w-24 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <span className="text-blue-200 text-sm">case studies</span>
            </div>
          </label>
        </div>

        {/* Pricing Table */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Pricing Table</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="pricing"
                  checked={intake.pages.pricingTable === 'none'}
                  onChange={() => updatePages({ pricingTable: 'none', pricingTablePrice: 0 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Not needed</span>
              </div>
              <span className="text-blue-300 font-medium">$0</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="pricing"
                  checked={intake.pages.pricingTable === 'client-content'}
                  onChange={() => updatePages({ pricingTable: 'client-content', pricingTablePrice: 150 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Client provides pricing</span>
              </div>
              <span className="text-blue-300 font-medium">+$150</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="pricing"
                  checked={intake.pages.pricingTable === 'developer-content'}
                  onChange={() => updatePages({ pricingTable: 'developer-content', pricingTablePrice: 200 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Developer designs table</span>
              </div>
              <span className="text-blue-300 font-medium">+$200</span>
            </label>
          </div>
        </div>

        {/* Blog/News Section */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Blog/News Section</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="blog"
                  checked={intake.pages.blogSection === 'none'}
                  onChange={() => updatePages({ blogSection: 'none', blogPrice: 0 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Not needed</span>
              </div>
              <span className="text-blue-300 font-medium">$0</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="blog"
                  checked={intake.pages.blogSection === 'client-content'}
                  onChange={() => updatePages({ blogSection: 'client-content', blogPrice: 400 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Client writes posts</span>
              </div>
              <span className="text-blue-300 font-medium">+$400</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="blog"
                  checked={intake.pages.blogSection === 'developer-content'}
                  onChange={() => updatePages({ blogSection: 'developer-content', blogPrice: 500 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Full blog setup</span>
              </div>
              <span className="text-blue-300 font-medium">+$500</span>
            </label>
          </div>
        </div>

        {/* Careers Page */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Careers/Job Listings Page</h4>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="careers"
                  checked={intake.pages.careersPage === 'none'}
                  onChange={() => updatePages({ careersPage: 'none', careersPrice: 0 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Not needed</span>
              </div>
              <span className="text-blue-300 font-medium">$0</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="careers"
                  checked={intake.pages.careersPage === 'client-content'}
                  onChange={() => updatePages({ careersPage: 'client-content', careersPrice: 300 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Client provides listings</span>
              </div>
              <span className="text-blue-300 font-medium">+$300</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="careers"
                  checked={intake.pages.careersPage === 'developer-content'}
                  onChange={() => updatePages({ careersPage: 'developer-content', careersPrice: 450 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">Full careers page setup</span>
              </div>
              <span className="text-blue-300 font-medium">+$450</span>
            </label>
          </div>
        </div>

        {/* Section Notes */}
        <div className="glass-sm rounded-lg p-4">
          <label className="block">
            <h4 className="text-sm font-semibold text-white mb-2">Section Ideas & Notes</h4>
            <p className="text-xs text-blue-200 mb-3">
              Describe any custom sections or page ideas you have in mind
            </p>
            <textarea
              value={intake.pages.sectionsNotes}
              onChange={(e) => updatePages({ sectionsNotes: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors resize-none"
              placeholder="E.g., Interactive timeline of company history, filterable product showcase, team member bios with modal popups..."
            />
          </label>
        </div>
      </div>
    </div>
  );
}
