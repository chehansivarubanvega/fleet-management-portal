import { CONFIG } from '@/global-config';
import type { AxiosRequestConfig } from 'axios';

import axios from 'axios';



// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: CONFIG.serverUrl, withCredentials: true });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { statusCode, errorDetails, userMessage } = error.response.data;

      if (statusCode === 401) {
        // TODO: Add a storage key for the user's token
        sessionStorage.removeItem('access_token');

        window.location.href = CONFIG.auth.redirectPath;
      }

      return Promise.reject(errorDetails || userMessage || 'Something went wrong!');
    }
    if (error.request) {
      console.error('Request error:', error.request);
      return Promise.reject(new Error('No response received from the server.'));
    }
    console.error('Axios error:', error.message);
    return Promise.reject(new Error('Error in setting up the request.'));
  }
);
export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------

export const endpoints = {
  auth: {
    signIn: 'auth/signin',
    signUp: 'auth/signup',
    generateToken: 'auth/password/generate-token',
    verifyToken: 'auth/password/verify-token',
    verifyEmail: (token: string) => `auth/verify-email/${token}`,
  },
  file: {
    list: 'files',
    create: 'files',
    createCaseFile: 'files/case',
    getRoot: 'file-system/root',
    getBranch: (id: string) => `file-system/branch/${id}`,
    getBreadcrumbs: (id: string) => `file-system/breadcrumb/${id}`,
    deleteSingleFile: (id: string) => `file-system/file/${id}`,
    deleteSingleFolder: (id: string) => `file-system/folder/${id}`,
    deleteMultipleItems: 'file-system/delete-multiple',
    getByCaseId: (caseId: string) => `files/case/${caseId}`,
    createNode: 'file-system',
    update: (id: string) => `files/${id}`,
    delete: (id: string) => `files/${id}`,
  },

  case: {
    list: 'cases',
    create: 'cases',
    statistics: 'cases/statistics',
    getById: (id: string) => `cases/${id}`,
    update: (id: string) => `cases/${id}`,
    autocomplete: 'cases/autocomplete',
    delete: (id: string) => `cases/${id}`,
  },
  caseAssignment: {
    create: 'case-assignments',
    delete: (userId: string, caseId: string) => `case-assignments/user/${userId}/case/${caseId}`,
  },

  activity: {
    getByCaseId: (caseId: string) => `activities/case/${caseId}`,
    getBillableActivities: (caseId: string) => `activities/case/${caseId}/billable`,
    create: 'activities',
    getById: (id: string) => `activities/${id}`,
    update: (id: string) => `activities/${id}`,
    delete: (id: string) => `activities/${id}`,
  },
  contact: {
    create: 'contacts',
    autocomplete: 'contacts/autocomplete',
  },

  client: {
    list: 'clients',
    getById: (id: string) => `clients/${id}`,
    create: 'clients',
    autocomplete: 'clients/autocomplete',
    update: (id: string) => `clients/${id}`,
    delete: (id: string) => `clients/${id}`,
  },
  firm: {
    register: 'firms',
    invite: (name: string) => `firms/invite/${name}`,
    verify: (name: string) => `firms/verify/${name}`,
    update: (id: string) => `firms/${id}`,
    getById: (id: string) => `firms/${id}`,
  },
  invoice: {
    list: 'invoices',
    listByCaseId: (caseId: string) => `invoices/case/${caseId}`,
    listByClientId: (clientId: string) => `invoices/client/${clientId}`,
    create: 'invoices',
    statistics: 'invoices/statistics',
    statisticsByCaseId: (caseId: string) => `invoices/case/${caseId}/statistics`,
    getById: (id: string) => `invoices/${id}`,
    update: (id: string) => `invoices/${id}`,
    updateStatus: (id: string) => `invoices/${id}/status`,

    delete: (id: string) => `invoices/${id}`,
  },
  note: {
    getByCaseId: (caseId: string) => `notes/case/${caseId}`,
    create: 'notes',
    update: (id: string) => `notes/${id}`,
    delete: (id: string) => `notes/${id}`,
  },
  user: {
    list: 'users',
    getById: (id: string) => `users/${id}`,
    create: 'users',
    autocomplete: 'users/autocomplete',
    statistics: 'users/statistics',
    updateByAdmin: (id: string) => `users/${id}/full-access`,
    update: (id: string) => `users/${id}`,
    delete: (id: string) => `users/${id}`,
    changePassword: (id: string) => `users/${id}/password`,
  },
  calendar: {
    list: '/events',
    getById: (id: string) => `/events/${id}`,
    getByCaseId: (caseId: string) => `/events/case/${caseId}`,
    create: '/events',
    update: (id: string) => `/events/${id}`,
    delete: (id: string) => `/events/${id}`,
  },
  chat: '/chat',
  inquiry: 'inquiries',
  kanban: '/kanban',
  mail: {
    details: '/api/mail/details',
    labels: '/api/mail/labels',
    list: '/api/mail/list',
  },
  order: {
    create: 'orders',
    updateOrderStatus: (id: string) => `orders/suborder/status/${id}`,
    getById: (id: string) => `orders/${id}`,
    getSubOrdersByOrderId: (orderId: string) => `orders/suborders/${orderId}`,
  },
  post: {
    details: '/api/post/details',
    latest: '/api/post/latest',
    list: '/api/post/list',
    search: '/api/post/search',
  },
  task: {
    getByCaseId: (caseId: string) => `tasks/case/${caseId}`,
    create: 'tasks',
    getKanbanTasks: (userId: string) => `tasks/kanban/${userId}`,
    statisticsByCaseId: (caseId: string) => `tasks/case/${caseId}/statistics`,
    createSubTask: (id: string) => `tasks/subtask/${id}`,
    updateSubTask: (id: string, subtaskId: string) => `tasks/${id}/subtask/${subtaskId}`,
    getById: (id: string) => `tasks/${id}`,
    update: (id: string) => `tasks/${id}`,
    delete: (id: string) => `tasks/${id}`,
    deleteSubTask: (id: string, subtaskId: string) => `tasks/${id}/subtask/${subtaskId}`,
    updateStatus: (id: string) => `tasks/${id}/status`,
    updateSubTaskStatus: (id: string, subtaskId: string) =>
      `tasks/${id}/subtask/${subtaskId}/status`,
  },
};
