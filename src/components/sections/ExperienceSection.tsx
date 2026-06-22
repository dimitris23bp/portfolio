import React from 'react';
import type { Experience } from '../../types/resume';
import { Briefcase } from 'lucide-react';
import { Badge } from '../ui/Badge';

interface ExperienceSectionProps {
  experience: Experience[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section className="section">
      <h3 className="section-title">
        <Briefcase size={24} className="gradient-text" />
        Experience
      </h3>
      
      <div style={{ marginTop: '2rem' }}>
        {experience.map((job) => (
          <div key={job.id} className="timeline-item">
            <div className="timeline-dot" />
            <div className="flex-between">
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{job.role}</h4>
                <div style={{ color: 'var(--accent-hover)', fontWeight: 500, marginTop: '0.25rem' }}>
                  {job.company}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="text-muted" style={{ fontWeight: 500 }}>
                  {job.startDate} – {job.endDate}
                </div>
                <div className="text-muted" style={{ fontSize: '0.875rem' }}>
                  {job.location}
                </div>
              </div>
            </div>
            
            <ul className="highlights-list">
              {job.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
            {job.skills && job.skills.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
