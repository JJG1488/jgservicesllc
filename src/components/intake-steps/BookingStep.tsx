'use client';

import { ProjectIntake } from '@/types/intake';

interface StepProps {
  intake: ProjectIntake;
  onUpdate: (intake: ProjectIntake | ((prev: ProjectIntake) => ProjectIntake)) => void;
}

export default function BookingStep({ intake, onUpdate }: StepProps) {
  const updateBooking = (updates: Partial<ProjectIntake['booking']>) => {
    onUpdate({
      ...intake,
      booking: { ...intake.booking, ...updates },
    });
  };

  const hasAnyBooking = intake.booking.calendlyEmbed || intake.booking.customBooking ||
                        intake.booking.appointmentDashboard || intake.booking.automatedReminders;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Booking & Scheduling
        </h3>
        <p className="text-blue-200">
          Add appointment booking and scheduling functionality to your website.
        </p>
      </div>

      <div className="space-y-6">
        {/* Calendly/Cal.com Embed */}
        <div className="glass-sm rounded-lg p-4">
          <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={intake.booking.calendlyEmbed}
                onChange={(e) => updateBooking({
                  calendlyEmbed: e.target.checked,
                  calendlyPrice: e.target.checked ? 100 : 0
                })}
                className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">Calendly/Cal.com Embed</div>
                <div className="text-xs text-blue-300 mt-1">
                  Integrate your existing Calendly or Cal.com booking calendar
                </div>
              </div>
            </div>
            <span className="text-blue-300 font-medium">+$100</span>
          </label>
        </div>

        {/* Custom Booking System */}
        <div className="glass-sm rounded-lg p-4">
          <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={intake.booking.customBooking}
                onChange={(e) => updateBooking({
                  customBooking: e.target.checked,
                  customBookingPrice: e.target.checked ? 2000 : 0
                })}
                className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">Custom Booking System</div>
                <div className="text-xs text-blue-300 mt-1">
                  Fully custom appointment scheduling system built into your site
                </div>
                <div className="text-xs text-blue-200 mt-1">
                  Includes: Calendar view, time slot selection, service types, booking confirmation
                </div>
              </div>
            </div>
            <span className="text-blue-300 font-medium">+$2,000</span>
          </label>
        </div>

        {/* Appointment Management Dashboard */}
        <div className="glass-sm rounded-lg p-4">
          <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={intake.booking.appointmentDashboard}
                onChange={(e) => updateBooking({
                  appointmentDashboard: e.target.checked,
                  dashboardPrice: e.target.checked ? 1500 : 0
                })}
                className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">Appointment Management Dashboard</div>
                <div className="text-xs text-blue-300 mt-1">
                  Admin dashboard to view, manage, and modify appointments
                </div>
                <div className="text-xs text-blue-200 mt-1">
                  Includes: Booking list, status updates, customer details, calendar overview
                </div>
              </div>
            </div>
            <span className="text-blue-300 font-medium">+$1,500</span>
          </label>
        </div>

        {/* Automated Confirmations/Reminders */}
        <div className="glass-sm rounded-lg p-4">
          <label className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer border border-white/10 transition-colors">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={intake.booking.automatedReminders}
                onChange={(e) => updateBooking({
                  automatedReminders: e.target.checked,
                  remindersPrice: e.target.checked ? 500 : 0
                })}
                className="w-4 h-4 text-blue-400 rounded focus:ring-blue-400"
              />
              <div>
                <div className="text-blue-100">Automated Confirmations & Reminders</div>
                <div className="text-xs text-blue-300 mt-1">
                  Email/SMS notifications for booking confirmations and upcoming appointments
                </div>
                <div className="text-xs text-blue-200 mt-1">
                  Reduces no-shows and improves customer experience
                </div>
              </div>
            </div>
            <span className="text-blue-300 font-medium">+$500</span>
          </label>
        </div>

        {/* No Booking Options Selected */}
        {!hasAnyBooking && (
          <div className="glass-sm rounded-lg p-4 border border-white/10">
            <div className="text-center py-4">
              <p className="text-blue-200 text-sm">
                No booking features selected. If you don't need appointment scheduling, you can skip this step.
              </p>
            </div>
          </div>
        )}

        {/* Booking Total */}
        {(intake.booking.calendlyPrice + intake.booking.customBookingPrice +
          intake.booking.dashboardPrice + intake.booking.remindersPrice) > 0 && (
          <div className="glass rounded-lg p-4 border border-blue-400/30">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">Booking & Scheduling Total</span>
              <span className="text-2xl font-bold text-blue-300">
                ${(
                  intake.booking.calendlyPrice +
                  intake.booking.customBookingPrice +
                  intake.booking.dashboardPrice +
                  intake.booking.remindersPrice
                ).toLocaleString()}
              </span>
            </div>
          </div>
        )}

        {/* Recommendation Box */}
        {intake.booking.customBooking && !intake.booking.appointmentDashboard && (
          <div className="glass-sm rounded-lg p-4 border border-yellow-400/30 bg-yellow-500/10">
            <div className="flex items-start gap-3">
              <div className="text-yellow-400 text-xl">💡</div>
              <div>
                <h4 className="text-sm font-semibold text-yellow-300 mb-1">Recommendation</h4>
                <p className="text-xs text-blue-200">
                  Since you're getting a custom booking system, consider adding the appointment management dashboard.
                  It will make it much easier to manage your bookings and provide better service to your clients.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
