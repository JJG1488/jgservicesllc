'use client';

import { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';

interface Lead {
  id: string;
  name: string;
  email: string;
  business?: string;
  newsletter: boolean;
  guide: string;
  guideTitle: string;
  timestamp: any;
  source: string;
  userAgent?: string;
}

interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: any;
  read: boolean;
}

interface Contract {
  id: string;
  clientName: string;
  companyName?: string;
  email: string;
  phone: string;
  projectType: string;
  projectDescription: string;
  servicePackage: string;
  budget?: string;
  signature: string;
  submittedAt: any;
  status: 'pending_review' | 'approved' | 'rejected';
  approved: boolean;
}

export default function AdminDashboard() {
  const { user, loading: authLoading, signInWithGoogle, signOut, isAdmin } = useAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'leads' | 'contacts' | 'contracts'>('leads');
  const [stats, setStats] = useState({
    total: 0,
    newsletter: 0,
    thisWeek: 0,
    totalContacts: 0,
    unreadContacts: 0,
    totalContracts: 0,
    pendingContracts: 0,
  });

  useEffect(() => {
    async function fetchData() {
      if (!isAdmin) {
        setLoading(false);
        return;
      }

      if (!db) {
        setError('Firebase is not configured');
        setLoading(false);
        return;
      }

      try {
        // Fetch leads
        const leadsQuery = query(collection(db, 'leads'), orderBy('timestamp', 'desc'));
        const leadsSnapshot = await getDocs(leadsQuery);
        const leadsData = leadsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Lead[];

        // Fetch contacts
        const contactsQuery = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
        const contactsSnapshot = await getDocs(contactsQuery);
        const contactsData = contactsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Contact[];

        // Fetch contracts
        const contractsQuery = query(collection(db, 'contracts'), orderBy('submittedAt', 'desc'));
        const contractsSnapshot = await getDocs(contractsQuery);
        const contractsData = contractsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Contract[];

        setLeads(leadsData);
        setContacts(contactsData);
        setContracts(contractsData);

        // Calculate stats
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);

        setStats({
          total: leadsData.length,
          newsletter: leadsData.filter(l => l.newsletter).length,
          thisWeek: leadsData.filter(l => {
            const leadDate = l.timestamp?.toDate();
            return leadDate && leadDate > weekAgo;
          }).length,
          totalContacts: contactsData.length,
          unreadContacts: contactsData.filter(c => !c.read).length,
          totalContracts: contractsData.length,
          pendingContracts: contractsData.filter(c => c.status === 'pending_review').length,
        });

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please check your Firebase configuration.');
        setLoading(false);
      }
    }

    if (user && isAdmin) {
      fetchData();
    }
  }, [user, isAdmin]);

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Business', 'Newsletter', 'Guide', 'Date', 'Source'];
    const rows = leads.map(lead => [
      lead.name,
      lead.email,
      lead.business || '',
      lead.newsletter ? 'Yes' : 'No',
      lead.guideTitle || lead.guide,
      lead.timestamp?.toDate().toLocaleDateString() || '',
      lead.source || 'resources-page'
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `jg-leads-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Show loading spinner while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Show login screen if not authenticated
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-slate-50 dark:from-gray-900 dark:via-purple-900 dark:to-slate-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-12 max-w-md w-full mx-4"
        >
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔐</div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Admin Login
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in with your Google account to access the admin dashboard
            </p>
          </div>

          <button
            onClick={signInWithGoogle}
            className="w-full bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-4 px-6 rounded-lg font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </button>

          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-6">
            Only authorized accounts (info@jgservicesllc.com) can access this dashboard
          </p>
        </motion.div>
      </div>
    );
  }

  // Show access denied if authenticated but not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-4"
        >
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Access Denied</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            You are signed in as: <strong>{user.email}</strong>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Only the admin account (info@jgservicesllc.com) can access this dashboard.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={signOut}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Sign Out
            </button>
            <a
              href="/"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition inline-block"
            >
              Go Home
            </a>
          </div>
        </motion.div>
      </div>
    );
  }

  // Show loading spinner while fetching leads
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading leads...</p>
        </div>
      </div>
    );
  }

  // Show error screen
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Error Loading Dashboard</h1>
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Main dashboard (only shown if isAdmin === true)
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-between items-center"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Signed in as: <strong>{user.email}</strong>
            </p>
          </div>
          <button
            onClick={signOut}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition text-sm"
          >
            Sign Out
          </button>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Leads</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">This Week</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.thisWeek}</p>
              </div>
              <div className="text-4xl">📈</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Newsletter Subscribers</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.newsletter}</p>
              </div>
              <div className="text-4xl">✉️</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Contact Messages</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalContacts}</p>
              </div>
              <div className="text-4xl">💬</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Unread Messages</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.unreadContacts}</p>
              </div>
              <div className="text-4xl">🔔</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Contracts</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalContracts}</p>
              </div>
              <div className="text-4xl">📝</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Pending Review</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.pendingContracts}</p>
              </div>
              <div className="text-4xl">⏳</div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-6 flex gap-4 flex-wrap"
        >
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'leads'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            📊 Resource Leads ({stats.total})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all relative ${
              activeTab === 'contacts'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            💬 Contact Messages ({stats.totalContacts})
            {stats.unreadContacts > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {stats.unreadContacts}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('contracts')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all relative ${
              activeTab === 'contracts'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            📝 Service Contracts ({stats.totalContracts})
            {stats.pendingContracts > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {stats.pendingContracts}
              </span>
            )}
          </button>
        </motion.div>

        {/* Export Button */}
        {activeTab === 'leads' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-6 flex justify-end"
          >
            <button
              onClick={exportToCSV}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center gap-2"
            >
              <span>📥</span>
              Export Leads to CSV
            </button>
          </motion.div>
        )}

        {/* Leads Table */}
        {activeTab === 'leads' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            {leads.length === 0 ? (
              <div className="p-12 text-center">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No leads yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Leads will appear here when users download guides from your resources page.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Business
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Guide
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Newsletter
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {leads.map((lead, index) => (
                      <motion.tr
                        key={lead.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {lead.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {lead.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {lead.business || '-'}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">
                            {lead.guideTitle || lead.guide}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {lead.newsletter ? (
                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              ✓ Yes
                            </span>
                          ) : (
                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                              No
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {lead.timestamp?.toDate().toLocaleDateString() || 'Unknown'}
                          </div>
                          <div className="text-xs text-gray-400 dark:text-gray-500">
                            {lead.timestamp?.toDate().toLocaleTimeString() || ''}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        )}

        {/* Contacts Table */}
        {activeTab === 'contacts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            {contacts.length === 0 ? (
              <div className="p-12 text-center">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No contact messages yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Contact form submissions will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-4 p-6">
                {contacts.map((contact, index) => (
                  <motion.div
                    key={contact.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className={`p-6 rounded-lg border-2 transition-all ${
                      contact.read
                        ? 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900'
                        : 'border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {contact.name}
                          {!contact.read && (
                            <span className="ml-2 px-2 py-1 text-xs font-semibold rounded-full bg-blue-500 text-white">
                              NEW
                            </span>
                          )}
                        </h3>
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {contact.email}
                        </a>
                      </div>
                      <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                        <div>{contact.createdAt?.toDate().toLocaleDateString() || 'Unknown'}</div>
                        <div className="text-xs">{contact.createdAt?.toDate().toLocaleTimeString() || ''}</div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                        {contact.message}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Contracts View */}
        {activeTab === 'contracts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            {contracts.length === 0 ? (
              <div className="p-12 text-center">
                <div className="text-6xl mb-4">📭</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No service contracts yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Service contract submissions will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-6 p-6">
                {contracts.map((contract, index) => (
                  <motion.div
                    key={contract.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className={`p-6 rounded-lg border-2 transition-all ${
                      contract.status === 'pending_review'
                        ? 'border-orange-300 dark:border-orange-600 bg-orange-50 dark:bg-orange-900/20'
                        : contract.status === 'approved'
                        ? 'border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/20'
                        : 'border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {contract.clientName}
                          {contract.status === 'pending_review' && (
                            <span className="ml-2 px-3 py-1 text-xs font-semibold rounded-full bg-orange-500 text-white">
                              PENDING REVIEW
                            </span>
                          )}
                          {contract.status === 'approved' && (
                            <span className="ml-2 px-3 py-1 text-xs font-semibold rounded-full bg-green-500 text-white">
                              ✓ APPROVED
                            </span>
                          )}
                          {contract.status === 'rejected' && (
                            <span className="ml-2 px-3 py-1 text-xs font-semibold rounded-full bg-red-500 text-white">
                              REJECTED
                            </span>
                          )}
                        </h3>
                        {contract.companyName && (
                          <p className="text-gray-600 dark:text-gray-400 font-semibold">{contract.companyName}</p>
                        )}
                        <div className="flex gap-4 mt-2 text-sm">
                          <a
                            href={`mailto:${contract.email}`}
                            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                          >
                            📧 {contract.email}
                          </a>
                          <a
                            href={`tel:${contract.phone}`}
                            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                          >
                            📱 {contract.phone}
                          </a>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                        <div>{contract.submittedAt?.toDate().toLocaleDateString() || 'Unknown'}</div>
                        <div className="text-xs">{contract.submittedAt?.toDate().toLocaleTimeString() || ''}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Project Details</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Type:</span>
                            <span className="ml-2 font-semibold text-gray-900 dark:text-white">{contract.projectType}</span>
                          </div>
                          <div>
                            <span className="text-gray-600 dark:text-gray-400">Package:</span>
                            <span className="ml-2 font-semibold text-gray-900 dark:text-white">{contract.servicePackage}</span>
                          </div>
                          {contract.budget && (
                            <div>
                              <span className="text-gray-600 dark:text-gray-400">Budget:</span>
                              <span className="ml-2 font-semibold text-gray-900 dark:text-white">{contract.budget}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Digital Signature</h4>
                        <p className="text-2xl font-['Brush_Script_MT',cursive] text-gray-900 dark:text-white mb-2">
                          {contract.signature}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Signed electronically on {contract.submittedAt?.toDate().toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Project Description</h4>
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                        {contract.projectDescription}
                      </p>
                    </div>

                    {/* Action Buttons - You can add approve/reject functionality later */}
                    {contract.status === 'pending_review' && (
                      <div className="flex gap-3 mt-4">
                        <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                          ✓ Approve Contract
                        </button>
                        <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                          ✗ Reject Contract
                        </button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          <p>
            {activeTab === 'leads'
              ? `Showing ${leads.length} lead${leads.length !== 1 ? 's' : ''}`
              : activeTab === 'contacts'
              ? `Showing ${contacts.length} contact message${contacts.length !== 1 ? 's' : ''}`
              : `Showing ${contracts.length} service contract${contracts.length !== 1 ? 's' : ''}`
            } • Last updated: {new Date().toLocaleString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
