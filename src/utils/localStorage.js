export const saveDashboardState = (state) => {
  localStorage.setItem('dashboardState', JSON.stringify(state));
};

export const loadDashboardState = () => {
  const state = localStorage.getItem('dashboardState');
  return state ? JSON.parse(state) : null;
}; 