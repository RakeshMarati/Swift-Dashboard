import React from 'react';
import './CommentsTable.css';

const getSortIndicator = (column, sortBy, sortOrder) => {
  if (sortBy !== column) return '';
  if (sortOrder === 'asc') return ' ▲';
  if (sortOrder === 'desc') return ' ▼';
  return '';
};

const CommentsTable = ({ comments, sortBy, sortOrder, onSort }) => (
  <table className="comments-table">
    <thead>
      <tr>
        <th onClick={() => onSort('postId')} style={{cursor: 'pointer'}}>
          Post ID{getSortIndicator('postId', sortBy, sortOrder)}
        </th>
        <th onClick={() => onSort('name')} style={{cursor: 'pointer'}}>
          Name{getSortIndicator('name', sortBy, sortOrder)}
        </th>
        <th onClick={() => onSort('email')} style={{cursor: 'pointer'}}>
          Email{getSortIndicator('email', sortBy, sortOrder)}
        </th>
        <th>Comment</th>
      </tr>
    </thead>
    <tbody>
      {comments.map(c => (
        <tr key={c.id}>
          <td>{c.postId}</td>
          <td>{c.name}</td>
          <td>{c.email}</td>
          <td>{c.body}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CommentsTable; 