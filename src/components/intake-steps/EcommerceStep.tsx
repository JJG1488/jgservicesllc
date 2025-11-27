'use client';

import { ProjectIntake } from '@/types/intake';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

export default function EcommerceStep({ intake, onUpdate }: StepProps) {
  const updateEcommerce = (updates: Partial<ProjectIntake['ecommerce']>) => {
    onUpdate({
      ...intake,
      ecommerce: { ...intake.ecommerce, ...updates },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          E-Commerce Features
        </h3>
        <p className="text-blue-200">
          Do you need to sell products online? Configure your e-commerce functionality.
        </p>
      </div>

      <div className="space-y-6">
        {/* E-Commerce Enable/Disable Toggle */}
        <div className="glass rounded-lg p-5 border border-white/20">
          <h4 className="text-sm font-semibold text-white mb-4">Do you need e-commerce?</h4>
          <div className="flex gap-4">
            <label className="flex-1 p-4 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border-2 transition-colors">
              <input
                type="radio"
                name="ecommerceEnabled"
                checked={!intake.ecommerce.enabled}
                onChange={() => updateEcommerce({
                  enabled: false,
                  productCatalogSize: '0',
                  catalogPrice: 0
                })}
                className="sr-only"
              />
              <div className={`text-center ${!intake.ecommerce.enabled ? 'text-white' : 'text-blue-200'}`}>
                <div className="text-2xl mb-2">🚫</div>
                <div className="font-medium">No e-commerce needed</div>
              </div>
            </label>

            <label className="flex-1 p-4 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border-2 transition-colors">
              <input
                type="radio"
                name="ecommerceEnabled"
                checked={intake.ecommerce.enabled}
                onChange={() => updateEcommerce({ enabled: true })}
                className="sr-only"
              />
              <div className={`text-center ${intake.ecommerce.enabled ? 'text-white' : 'text-blue-200'}`}>
                <div className="text-2xl mb-2">🛒</div>
                <div className="font-medium">Yes, I need e-commerce</div>
              </div>
            </label>
          </div>
        </div>

        {/* E-Commerce Features (Only show if enabled) */}
        {intake.ecommerce.enabled && (
          <>
            {/* Product Catalog Size */}
            <div className="glass-sm rounded-lg p-4">
              <h4 className="text-sm font-semibold text-white mb-3">Product Catalog Size</h4>
              <p className="text-xs text-blue-200 mb-4">
                How many products will you be selling?
              </p>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="catalogSize"
                      checked={intake.ecommerce.productCatalogSize === '1-25'}
                      onChange={() => updateEcommerce({
                        productCatalogSize: '1-25',
                        catalogPrice: 500
                      })}
                      className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                    />
                    <span className="text-blue-100">1-25 products</span>
                  </div>
                  <span className="text-blue-300 font-medium">+$500</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="catalogSize"
                      checked={intake.ecommerce.productCatalogSize === '26-100'}
                      onChange={() => updateEcommerce({
                        productCatalogSize: '26-100',
                        catalogPrice: 1200
                      })}
                      className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                    />
                    <span className="text-blue-100">26-100 products</span>
                  </div>
                  <span className="text-blue-300 font-medium">+$1,200</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="catalogSize"
                      checked={intake.ecommerce.productCatalogSize === '100+'}
                      onChange={() => updateEcommerce({
                        productCatalogSize: '100+',
                        catalogPrice: 2500
                      })}
                      className="w-4 h-4 text-blue-400 focus:ring-blue-400"
                    />
                    <span className="text-blue-100">100+ products</span>
                  </div>
                  <span className="text-blue-300 font-medium">+$2,500</span>
                </label>
              </div>
            </div>

            {/* Shopping Cart - Included */}
            <div className="glass-sm rounded-lg p-4 border border-green-400/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Shopping Cart</h4>
                    <p className="text-xs text-blue-200 mt-1">
                      Full shopping cart functionality with add/remove/update items
                    </p>
                  </div>
                </div>
                <span className="text-green-400 font-medium">Included</span>
              </div>
            </div>

            {/* Core E-Commerce Features */}
            <div className="glass-sm rounded-lg p-4">
              <h4 className="text-sm font-semibold text-white mb-4">Core E-Commerce Features</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={intake.ecommerce.paymentProcessing}
                      onChange={(e) => updateEcommerce({
                        paymentProcessing: e.target.checked,
                        paymentPrice: e.target.checked ? 300 : 0
                      })}
                      className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                    />
                    <div>
                      <div className="text-blue-100">Payment Processing</div>
                      <div className="text-xs text-blue-300">Stripe/PayPal integration</div>
                    </div>
                  </div>
                  <span className="text-blue-300 font-medium">+$300</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={intake.ecommerce.customerAccounts}
                      onChange={(e) => updateEcommerce({
                        customerAccounts: e.target.checked,
                        accountsPrice: e.target.checked ? 800 : 0
                      })}
                      className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                    />
                    <div>
                      <div className="text-blue-100">Customer Accounts & Order History</div>
                      <div className="text-xs text-blue-300">User accounts with order tracking</div>
                    </div>
                  </div>
                  <span className="text-blue-300 font-medium">+$800</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={intake.ecommerce.inventoryManagement}
                      onChange={(e) => updateEcommerce({
                        inventoryManagement: e.target.checked,
                        inventoryPrice: e.target.checked ? 600 : 0
                      })}
                      className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                    />
                    <div>
                      <div className="text-blue-100">Inventory Management</div>
                      <div className="text-xs text-blue-300">Track stock levels and availability</div>
                    </div>
                  </div>
                  <span className="text-blue-300 font-medium">+$600</span>
                </label>
              </div>
            </div>

            {/* Pricing & Discounts */}
            <div className="glass-sm rounded-lg p-4">
              <h4 className="text-sm font-semibold text-white mb-4">Pricing & Discounts</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={intake.ecommerce.discountCodes}
                      onChange={(e) => updateEcommerce({
                        discountCodes: e.target.checked,
                        discountPrice: e.target.checked ? 300 : 0
                      })}
                      className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                    />
                    <div>
                      <div className="text-blue-100">Discount Codes/Coupons</div>
                      <div className="text-xs text-blue-300">Promo codes and coupon system</div>
                    </div>
                  </div>
                  <span className="text-blue-300 font-medium">+$300</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={intake.ecommerce.subscriptionBilling}
                      onChange={(e) => updateEcommerce({
                        subscriptionBilling: e.target.checked,
                        subscriptionPrice: e.target.checked ? 1000 : 0
                      })}
                      className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                    />
                    <div>
                      <div className="text-blue-100">Subscription/Recurring Billing</div>
                      <div className="text-xs text-blue-300">Monthly/annual subscriptions</div>
                    </div>
                  </div>
                  <span className="text-blue-300 font-medium">+$1,000</span>
                </label>
              </div>
            </div>

            {/* Shipping & Tax */}
            <div className="glass-sm rounded-lg p-4">
              <h4 className="text-sm font-semibold text-white mb-4">Shipping & Tax</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={intake.ecommerce.shippingCalculator}
                      onChange={(e) => updateEcommerce({
                        shippingCalculator: e.target.checked,
                        shippingPrice: e.target.checked ? 400 : 0
                      })}
                      className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                    />
                    <div>
                      <div className="text-blue-100">Shipping Calculator</div>
                      <div className="text-xs text-blue-300">Real-time shipping rate calculation</div>
                    </div>
                  </div>
                  <span className="text-blue-300 font-medium">+$400</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={intake.ecommerce.taxAutomation}
                      onChange={(e) => updateEcommerce({
                        taxAutomation: e.target.checked,
                        taxPrice: e.target.checked ? 500 : 0
                      })}
                      className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                    />
                    <div>
                      <div className="text-blue-100">Tax Automation</div>
                      <div className="text-xs text-blue-300">Automatic tax calculation by location</div>
                    </div>
                  </div>
                  <span className="text-blue-300 font-medium">+$500</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={intake.ecommerce.multiCurrency}
                      onChange={(e) => updateEcommerce({
                        multiCurrency: e.target.checked,
                        currencyPrice: e.target.checked ? 600 : 0
                      })}
                      className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                    />
                    <div>
                      <div className="text-blue-100">Multi-Currency Support</div>
                      <div className="text-xs text-blue-300">Display prices in multiple currencies</div>
                    </div>
                  </div>
                  <span className="text-blue-300 font-medium">+$600</span>
                </label>
              </div>
            </div>

            {/* Customer Engagement */}
            <div className="glass-sm rounded-lg p-4">
              <h4 className="text-sm font-semibold text-white mb-4">Customer Engagement</h4>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={intake.ecommerce.productReviews}
                      onChange={(e) => updateEcommerce({
                        productReviews: e.target.checked,
                        reviewsPrice: e.target.checked ? 400 : 0
                      })}
                      className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                    />
                    <div>
                      <div className="text-blue-100">Product Reviews/Ratings</div>
                      <div className="text-xs text-blue-300">Customer reviews and star ratings</div>
                    </div>
                  </div>
                  <span className="text-blue-300 font-medium">+$400</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={intake.ecommerce.wishlist}
                      onChange={(e) => updateEcommerce({
                        wishlist: e.target.checked,
                        wishlistPrice: e.target.checked ? 350 : 0
                      })}
                      className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                    />
                    <div>
                      <div className="text-blue-100">Wishlist Functionality</div>
                      <div className="text-xs text-blue-300">Save items for later</div>
                    </div>
                  </div>
                  <span className="text-blue-300 font-medium">+$350</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={intake.ecommerce.abandonedCart}
                      onChange={(e) => updateEcommerce({
                        abandonedCart: e.target.checked,
                        abandonedCartPrice: e.target.checked ? 500 : 0
                      })}
                      className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
                    />
                    <div>
                      <div className="text-blue-100">Abandoned Cart Recovery</div>
                      <div className="text-xs text-blue-300">Email reminders for incomplete purchases</div>
                    </div>
                  </div>
                  <span className="text-blue-300 font-medium">+$500</span>
                </label>
              </div>
            </div>

            {/* E-Commerce Notes */}
            <div className="glass-sm rounded-lg p-4">
              <label className="block">
                <h4 className="text-sm font-semibold text-white mb-2">E-Commerce Notes</h4>
                <p className="text-xs text-blue-200 mb-3">
                  Product descriptions, categories, special requirements, etc.
                </p>
                <textarea
                  value={intake.ecommerce.ecommerceNotes}
                  onChange={(e) => updateEcommerce({ ecommerceNotes: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="E.g., We have 3 main product categories: Clothing, Accessories, and Home Goods. Each product needs size/color variants..."
                />
              </label>
            </div>

            {/* E-Commerce Total */}
            {(intake.ecommerce.catalogPrice + intake.ecommerce.paymentPrice +
              intake.ecommerce.subscriptionPrice + intake.ecommerce.accountsPrice +
              intake.ecommerce.inventoryPrice + intake.ecommerce.discountPrice +
              intake.ecommerce.shippingPrice + intake.ecommerce.taxPrice +
              intake.ecommerce.currencyPrice + intake.ecommerce.reviewsPrice +
              intake.ecommerce.wishlistPrice + intake.ecommerce.abandonedCartPrice) > 0 && (
              <div className="glass rounded-lg p-4 border border-blue-400/30">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">E-Commerce Total</span>
                  <span className="text-2xl font-bold text-blue-300">
                    ${(
                      intake.ecommerce.catalogPrice +
                      intake.ecommerce.paymentPrice +
                      intake.ecommerce.subscriptionPrice +
                      intake.ecommerce.accountsPrice +
                      intake.ecommerce.inventoryPrice +
                      intake.ecommerce.discountPrice +
                      intake.ecommerce.shippingPrice +
                      intake.ecommerce.taxPrice +
                      intake.ecommerce.currencyPrice +
                      intake.ecommerce.reviewsPrice +
                      intake.ecommerce.wishlistPrice +
                      intake.ecommerce.abandonedCartPrice
                    ).toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </>
        )}

        {/* Not E-Commerce Message */}
        {!intake.ecommerce.enabled && (
          <div className="glass-sm rounded-lg p-4 border border-white/10">
            <div className="text-center py-4">
              <p className="text-blue-200 text-sm">
                E-commerce is disabled. If you change your mind, you can enable it by selecting "Yes, I need e-commerce" above.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
