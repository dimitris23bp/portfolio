import React from 'react';
import type { SkillCategory } from '../../types/resume';
import { Terminal } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section className="section">
      <h3 className="section-title">
        <Terminal size={24} className="gradient-text" />
        Skills & Technologies
      </h3>
      
      <div className="skills-grid">
        {skills.map((category) => (
          <Card key={category.id}>
            <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>
              {category.name}
            </h4>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
