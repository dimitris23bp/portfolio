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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {category.items.map((group, index) => (
                <div key={index}>
                  {group.groupName && (
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      {group.groupName}
                    </div>
                  )}
                  <div className="skills-list" style={{ marginTop: 0 }}>
                    {group.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
