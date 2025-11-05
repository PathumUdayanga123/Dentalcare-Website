import React from 'react';
import { Link } from 'react-router-dom';
import { BoxIcon } from 'lucide-react';
interface ServiceCardProps {
  icon: BoxIcon;
  title: string;
  description: string;
  link?: string;
}
const ServiceCard = ({
  icon: Icon,
  title,
  description,
  link = '/appointment'
}: ServiceCardProps) => {
  return <div className="bg-white rounded-standard p-6 shadow-soft transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
      <div className="flex flex-col items-center text-center">
        <div className="bg-secondary p-4 rounded-full mb-4">
          <Icon size={28} className="text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={link} className="text-primary font-medium hover:text-blue-600 transition-colors">
          Learn More
        </Link>
      </div>
    </div>;
};
export default ServiceCard;