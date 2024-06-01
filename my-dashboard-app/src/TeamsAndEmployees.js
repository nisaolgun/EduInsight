// TeamsAndEmployees.js
import React from 'react';

function TeamsAndEmployees({ teams }) {
  return (
    <div className="teams-employees">
      <h2>Takımlar ve Çalışanlar</h2>
      {teams.map(team => (
        <div key={team.title} className="team">
          <h3>{team.title}</h3>
          <p>Açıklama: {team.description}</p>
          <p>Toplam Çalışan Sayısı: {team.total_employee_count}</p>
          <p>Toplam Skor: {team.overall_score}</p>
          <div className="employees">
            {team.employees.map(employee => (
              <div key={employee.email} className="employee">
                <p>Adı: {employee.name}</p>
                <p>Email: {employee.email}</p>
                <p>Başlık: {employee.title}</p>
                <p>Mevcut Skor: {employee.current_score}</p>
                <p>Alınan Ders Sayısı: {employee.lessons_taken}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamsAndEmployees;
