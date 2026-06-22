import React from 'react';
import type { ResumeData } from '../../types/resume';
import { MapPin, Mail, Phone } from 'lucide-react';

interface HeroSectionProps {
  data: ResumeData['personalInfo'];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  return (
    <header className="section" style={{ marginTop: '2rem', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap-reverse', justifyContent: 'space-between' }}>
      <div style={{ flex: 1, minWidth: '300px' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
          {data.name}
        </h1>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 600, marginBottom: '1.25rem' }} className="gradient-text">
          {data.title}
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '650px', marginBottom: '2rem', lineHeight: 1.7 }}>
          {data.summary}
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={18} />
            <span>{data.location}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Mail size={18} />
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontWeight: 600 }}>in</span>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Phone size={18} />
            <span>{data.phone}</span>
          </div>
        </div>
      </div>

      <div style={{ width: '220px', height: '220px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--border-color)', boxShadow: '0 0 40px rgba(59, 130, 246, 0.1)', flexShrink: 0 }}>
        {/* Placeholder image. Drop your real photo into the 'public' folder and name it 'profile.jpeg' */}
        <img src={`${import.meta.env.BASE_URL}profile.jpeg`} alt={data.name} style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: 'var(--bg-card)' }} />
      </div>
    </header>
  );
};
