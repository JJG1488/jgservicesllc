'use client';

import { ProjectIntake } from '@/types/intake';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

export default function ContentStep({ intake, onUpdate }: StepProps) {
  const updateContent = (updates: Partial<ProjectIntake['content']>) => {
    onUpdate({
      ...intake,
      content: { ...intake.content, ...updates },
    });
  };

  const calculateCopywritingPrice = () => {
    let total = 0;
    total += intake.content.copywriting.perPage * 150;
    if (intake.content.copywriting.fullSite5Pages) total += 600;
    if (intake.content.copywriting.fullSite10Pages) total += 1000;
    total += intake.content.copywriting.seoOptimized * 250;
    total += intake.content.copywriting.blogPosts * 200;
    return total;
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Content Creation
        </h3>
        <p className="text-blue-200">
          Let us know what content you can provide and what you'd like us to create for you.
        </p>
      </div>

      <div className="space-y-6">
        {/* Content Provider */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Who will provide content?</h4>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <input
                type="radio"
                name="contentProvider"
                checked={intake.content.providedBy === 'client'}
                onChange={() => updateContent({ providedBy: 'client' })}
                className="w-4 h-4 text-blue-400 focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">I'll provide all content</div>
                <div className="text-xs text-blue-300">You provide all text, images, and media</div>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <input
                type="radio"
                name="contentProvider"
                checked={intake.content.providedBy === 'developer'}
                onChange={() => updateContent({ providedBy: 'developer' })}
                className="w-4 h-4 text-blue-400 focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">Developer creates all content</div>
                <div className="text-xs text-blue-300">We'll handle copywriting and imagery</div>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <input
                type="radio"
                name="contentProvider"
                checked={intake.content.providedBy === 'mixed'}
                onChange={() => updateContent({ providedBy: 'mixed' })}
                className="w-4 h-4 text-blue-400 focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">Mix of both</div>
                <div className="text-xs text-blue-300">I'll provide some, developer creates the rest</div>
              </div>
            </label>
          </div>
        </div>

        {/* Stock Imagery */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Stock Imagery Curation</h4>
          <p className="text-xs text-blue-200 mb-4">
            Professional stock photos selected and curated for your brand
          </p>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="stockImagery"
                  checked={intake.content.stockImagery === 'none'}
                  onChange={() => updateContent({ stockImagery: 'none', stockImageryPrice: 0 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <span className="text-blue-100">No stock imagery needed</span>
              </div>
              <span className="text-blue-300 font-medium">$0</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="stockImagery"
                  checked={intake.content.stockImagery === 'basic'}
                  onChange={() => updateContent({ stockImagery: 'basic', stockImageryPrice: 150 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <div>
                  <div className="text-blue-100">Basic stock imagery</div>
                  <div className="text-xs text-blue-300">Standard stock photo sources</div>
                </div>
              </div>
              <span className="text-blue-300 font-medium">+$150</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="stockImagery"
                  checked={intake.content.stockImagery === 'premium'}
                  onChange={() => updateContent({ stockImagery: 'premium', stockImageryPrice: 400 })}
                  className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                />
                <div>
                  <div className="text-blue-100">Premium stock imagery</div>
                  <div className="text-xs text-blue-300">High-end sources with exclusive content</div>
                </div>
              </div>
              <span className="text-blue-300 font-medium">+$400</span>
            </label>
          </div>
        </div>

        {/* Copywriting Services */}
        <div className="glass-sm rounded-lg p-4">
          <h4 className="text-sm font-semibold text-white mb-4">Copywriting Services</h4>

          <div className="space-y-4">
            {/* Per Page */}
            <div>
              <label className="block mb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-100">Individual pages</span>
                  <span className="text-blue-300 font-medium text-sm">+$150 per page</span>
                </div>
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={intake.content.copywriting.perPage}
                  onChange={(e) => {
                    const pages = parseInt(e.target.value) || 0;
                    updateContent({
                      copywriting: { ...intake.content.copywriting, perPage: pages },
                      copywritingPrice: calculateCopywritingPrice()
                    });
                  }}
                  className="w-24 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <span className="text-blue-200 text-sm">pages</span>
                {intake.content.copywriting.perPage > 0 && (
                  <span className="text-blue-300 font-medium ml-auto">
                    = ${(intake.content.copywriting.perPage * 150).toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Full Site Packages */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={intake.content.copywriting.fullSite5Pages}
                    onChange={(e) => {
                      updateContent({
                        copywriting: { ...intake.content.copywriting, fullSite5Pages: e.target.checked },
                        copywritingPrice: calculateCopywritingPrice()
                      });
                    }}
                    className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                  />
                  <div>
                    <div className="text-blue-100">Full site copywriting (5 pages)</div>
                    <div className="text-xs text-blue-300">Complete content for up to 5 pages</div>
                  </div>
                </div>
                <span className="text-blue-300 font-medium">+$600</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={intake.content.copywriting.fullSite10Pages}
                    onChange={(e) => {
                      updateContent({
                        copywriting: { ...intake.content.copywriting, fullSite10Pages: e.target.checked },
                        copywritingPrice: calculateCopywritingPrice()
                      });
                    }}
                    className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                  />
                  <div>
                    <div className="text-blue-100">Full site copywriting (6-10 pages)</div>
                    <div className="text-xs text-blue-300">Complete content for 6-10 pages</div>
                  </div>
                </div>
                <span className="text-blue-300 font-medium">+$1,000</span>
              </label>
            </div>

            {/* SEO Optimized */}
            <div className="pt-2 border-t border-white/10">
              <label className="block mb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-100">SEO-optimized copywriting</span>
                  <span className="text-blue-300 font-medium text-sm">+$250 per page</span>
                </div>
                <p className="text-xs text-blue-200 mb-3">Keyword research and search-optimized content</p>
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="0"
                  max="20"
                  value={intake.content.copywriting.seoOptimized}
                  onChange={(e) => {
                    const pages = parseInt(e.target.value) || 0;
                    updateContent({
                      copywriting: { ...intake.content.copywriting, seoOptimized: pages },
                      copywritingPrice: calculateCopywritingPrice()
                    });
                  }}
                  className="w-24 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <span className="text-blue-200 text-sm">pages</span>
                {intake.content.copywriting.seoOptimized > 0 && (
                  <span className="text-blue-300 font-medium ml-auto">
                    = ${(intake.content.copywriting.seoOptimized * 250).toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Blog Posts */}
            <div className="pt-2 border-t border-white/10">
              <label className="block mb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-100">Blog post writing</span>
                  <span className="text-blue-300 font-medium text-sm">+$200 per post</span>
                </div>
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={intake.content.copywriting.blogPosts}
                  onChange={(e) => {
                    const posts = parseInt(e.target.value) || 0;
                    updateContent({
                      copywriting: { ...intake.content.copywriting, blogPosts: posts },
                      copywritingPrice: calculateCopywritingPrice()
                    });
                  }}
                  className="w-24 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
                />
                <span className="text-blue-200 text-sm">posts</span>
                {intake.content.copywriting.blogPosts > 0 && (
                  <span className="text-blue-300 font-medium ml-auto">
                    = ${(intake.content.copywriting.blogPosts * 200).toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Video Editing */}
        <div className="glass-sm rounded-lg p-4">
          <label className="block">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="text-sm font-semibold text-white">Video Editing</h4>
                <p className="text-xs text-blue-200 mt-1">Professional video editing (under 2 min each)</p>
              </div>
              <span className="text-blue-300 font-medium">+$300 per video</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="0"
                max="20"
                value={intake.content.videoEditing}
                onChange={(e) => {
                  const videos = parseInt(e.target.value) || 0;
                  updateContent({
                    videoEditing: videos,
                    videoEditingPrice: videos * 300
                  });
                }}
                className="w-24 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
              />
              <span className="text-blue-200 text-sm">videos</span>
              {intake.content.videoEditing > 0 && (
                <span className="text-blue-300 font-medium ml-auto">
                  = ${(intake.content.videoEditing * 300).toLocaleString()}
                </span>
              )}
            </div>
          </label>
        </div>

        {/* Content Notes */}
        <div className="glass-sm rounded-lg p-4">
          <label className="block">
            <h4 className="text-sm font-semibold text-white mb-2">Content Notes & Ideas</h4>
            <p className="text-xs text-blue-200 mb-3">
              Share any specific content requirements, brand voice guidelines, or ideas
            </p>
            <textarea
              value={intake.content.contentNotes}
              onChange={(e) => updateContent({ contentNotes: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors resize-none"
              placeholder="E.g., We want a professional yet friendly tone, focus on sustainability, include customer success stories..."
            />
          </label>
        </div>

        {/* Content Total */}
        {(intake.content.stockImageryPrice + intake.content.copywritingPrice + intake.content.videoEditingPrice) > 0 && (
          <div className="glass rounded-lg p-4 border border-blue-400/30">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">Content Creation Total</span>
              <span className="text-2xl font-bold text-blue-300">
                ${(
                  intake.content.stockImageryPrice +
                  intake.content.copywritingPrice +
                  intake.content.videoEditingPrice
                ).toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
