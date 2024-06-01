// GeneralInfo.js
import React from 'react';

function GeneralInfo({ totalEmployees, totalCourses, totalExams, totalTeams }) {
  return (
    <div className="general-info">
      <h2>Genel Bilgiler</h2>
      <p>Toplam Çalışan Sayısı: {totalEmployees}</p>
      <p>Tamamlanan Toplam Kurs Sayısı: {totalCourses}</p>
      <p>Toplam Tamamlanan Sınav Sayısı: {totalExams}</p>
      <p>Aktif Takım Sayısı: {totalTeams}</p>
    </div>
  );
}

export default GeneralInfo;
