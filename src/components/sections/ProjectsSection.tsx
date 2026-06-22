import React from 'react';
import type { Project } from '../../types/resume';
import { Code2, ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="section">
      <h3 className="section-title">
        <Code2 size={24} className="gradient-text" />
        Projects
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
        {projects.map((project) => (
          <Card key={project.id}>
            <div className="flex-between" style={{ marginBottom: '1rem', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{project.name}</h4>
                {project.url && (
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-muted" 
                    style={{ display: 'flex', alignItems: 'center', transition: 'color 0.2s', marginTop: '0.15rem' }}
                    aria-label={`${project.name} repository`}
                  >
                    <ExternalLink size={20} className="hover-text-primary" />
                  </a>
                )}
              </div>
              {project.startDate && project.endDate ? (
                <span className="text-muted" style={{ fontWeight: 500 }}>
                  {project.startDate} – {project.endDate}
                </span>
              ) : project.startDate ? (
                <span className="text-muted" style={{ fontWeight: 500 }}>
                  {project.startDate}
                </span>
              ) : null}
            </div>
            
            <div className="text-muted" style={{ lineHeight: 1.6 }}>
              {project.description.map((desc, index) => (
                <p key={index} style={{ marginBottom: '0.5rem' }}>{desc}</p>
              ))}
            </div>
            {project.skills && project.skills.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                {project.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
