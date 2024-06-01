// InProgressCourses.js
import React from 'react';

function InProgressCourses({ courses }) {
  return (
    <div className="in-progress-courses">
      <h2>Devam Eden Kurslar</h2>
      <ul>
        {courses.map(course => (
          <li key={course.title}>
            <strong>{course.title}</strong> - {course.description}
            <br />
            <em>{course.assigned_to}</em> | Bitiş Tarihi: {course.due_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InProgressCourses;
