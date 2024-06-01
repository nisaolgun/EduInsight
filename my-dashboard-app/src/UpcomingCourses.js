import React from 'react';

function UpcomingCourses({ courses }) {
  return (
    <div className="upcoming-courses">
      <h2>Yaklaşan Kurslar</h2>
      <ul>
        {courses.map(course => (
          <li key={course.title}>
            <strong>{course.title}</strong> - {course.assigned_to}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingCourses;
