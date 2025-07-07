import React, { useEffect, useState } from 'react';
import CommentsTable from '../components/CommentsDashboard/CommentsTable';
import PaginationBar from '../components/CommentsDashboard/PaginationBar';
import { saveDashboardState, loadDashboardState } from '../utils/localStorage';
import './CommentsDashboardPage.css';

const COMMENTS_API = 'https://jsonplaceholder.typicode.com/comments';
const PAGE_SIZE_OPTIONS = [10, 50, 100];
const SORTABLE_FIELDS = ['postId', 'name', 'email'];

const getNextSortOrder = (currentOrder) => {
  if (!currentOrder) return 'asc';
  if (currentOrder === 'asc') return 'desc';
  if (currentOrder === 'desc') return null;
  return 'asc';
};

const CommentsDashboardPage = () => {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  // Load state from localStorage on mount
  useEffect(() => {
    const saved = loadDashboardState();
    if (saved) {
      setSearch(saved.search || '');
      setPage(saved.page || 1);
      setPageSize(saved.pageSize || PAGE_SIZE_OPTIONS[0]);
      setSortBy(saved.sortBy || null);
      setSortOrder(saved.sortOrder || null);
    }
  }, []);

  // Save state to localStorage on change
  useEffect(() => {
    saveDashboardState({ search, page, pageSize, sortBy, sortOrder });
  }, [search, page, pageSize, sortBy, sortOrder]);

  useEffect(() => {
    fetch(COMMENTS_API)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(() => setComments([]));
  }, []);

  // Filtered, sorted, and paginated comments
  let filtered = comments.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.body.toLowerCase().includes(search.toLowerCase())
  );

  if (sortBy && sortOrder) {
    filtered = [...filtered].sort((a, b) => {
      let aVal = a[sortBy];
      let bVal = b[sortBy];
      if (typeof aVal === 'string') aVal = aVal.toLowerCase();
      if (typeof bVal === 'string') bVal = bVal.toLowerCase();
      if (aVal < bVal) return sortOrder === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }

  const total = filtered.length;
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  const handleSort = (field) => {
    if (!SORTABLE_FIELDS.includes(field)) return;
    if (sortBy !== field) {
      setSortBy(field);
      setSortOrder('asc');
    } else {
      const nextOrder = getNextSortOrder(sortOrder);
      setSortOrder(nextOrder);
      if (!nextOrder) setSortBy(null);
    }
    setPage(1);
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Comments Dashboard</h2>
        <input
          type="text"
          placeholder="Search name, email, comment"
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          className="search-input"
        />
      </div>
      <CommentsTable
        comments={paginated}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
      />
      <PaginationBar
        page={page}
        pageSize={pageSize}
        total={total}
        onPageChange={setPage}
        onPageSizeChange={size => { setPageSize(size); setPage(1); }}
      />
    </div>
  );
};

export default CommentsDashboardPage; 