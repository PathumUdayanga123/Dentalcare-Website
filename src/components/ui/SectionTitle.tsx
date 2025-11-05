import React from 'react';
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}
const SectionTitle = ({
  title,
  subtitle,
  center = false,
  className = ''
}: SectionTitleProps) => {
  return <div className={`mb-10 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>;
};
export default SectionTitle;