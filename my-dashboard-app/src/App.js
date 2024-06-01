import React, { useState, useEffect } from 'react';
import './App.css';
import GeneralInfo from './GeneralInfo';
import ActivityChart from './ActivityChart';
import SkillsChart from './SkillsChart';
import Button from './Button';

function App() {
  // State'ler
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalExams, setTotalExams] = useState(0);
  const [totalTeams, setTotalTeams] = useState(0);
  const [activityData, setActivityData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);

  // Veriyi Tüketme Fonksiyonu
  const fetchData = async () => {
    try {
      const response = await fetch('https://demotrainiq.com/case/dashboard');
      const data = await response.json();
      setTotalEmployees(data.data.total_employees); // "data" objesi içinde olduğu için "data.data" olarak erişiyoruz
      setTotalCourses(data.data.total_completed_courses);
      setTotalExams(data.data.total_completed_exams);
      setTotalTeams(data.data.teams.length);
      setActivityData(data.data.activity_hours);
      setSkillsData(data.data.skills_in_development);
    } catch (error) {
      console.error('Veri alma hatası:', error);
    }
  };

  // ComponentDidMount benzeri
  useEffect(() => {
    fetchData();
  }, []);

  // Dummy fonksiyonlar
  const handleCreateNewTeam = () => {
    // Yeni ekip oluşturma işlemleri
  };

  const handleAddNewEmployee = () => {
    // Yeni çalışan ekleme işlemleri
  };

  return (
    <div className="App">
      {/* Genel Bilgiler Bileşeni */}
      <GeneralInfo
        totalEmployees={totalEmployees}
        totalCourses={totalCourses}
        totalExams={totalExams}
        totalTeams={totalTeams}
      />

      {/* Grafiklerin bulunduğu ana div */}
      <div className="chart-container">
        {/* Aktivite Grafiği Bileşeni */}
        <ActivityChart activityData={activityData} />

        {/* Yetenekler Grafiği Bileşeni */}
        <SkillsChart skillsData={skillsData} />
      </div>

      {/* Dummy Düğmeler */}
      <Button text="Create New Team" onClick={handleCreateNewTeam} />
      <Button text="Add New Employee to a Team" onClick={handleAddNewEmployee} />
    </div>
  );
}

export default App;