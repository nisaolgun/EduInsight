// SkillsInDevelopment.js
import React from 'react';

function SkillsInDevelopment({ skills }) {
  return (
    <div className="skills-development">
      <h2>Geliştirilen Beceriler</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill.skill}>
            {skill.skill}: {skill.employees} kişi tarafından geliştiriliyor.
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsInDevelopment;
