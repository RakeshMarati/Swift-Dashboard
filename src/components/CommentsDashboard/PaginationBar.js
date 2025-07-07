import React from 'react';
import './PaginationBar.css';

const PaginationBar = ({ page, pageSize, total, onPageChange, onPageSizeChange }) => (
  <div className="pagination-bar">
    <span>{(page - 1) * pageSize + 1} - {Math.min(page * pageSize, total)} of {total} items</span>
    <button onClick={() => onPageChange(Math.max(1, page - 1))} disabled={page === 1}>&lt;</button>
    <span>Page {page}</span>
    <button onClick={() => onPageChange(page * pageSize < total ? page + 1 : page)} disabled={page * pageSize >= total}>&gt;</button>
    <select value={pageSize} onChange={e => onPageSizeChange(Number(e.target.value))}>
      {[10, 50, 100].map(opt => <option key={opt} value={opt}>{opt} / Page</option>)}
    </select>
  </div>
);

export default PaginationBar; 