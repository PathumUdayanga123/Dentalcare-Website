import React from 'react';
interface DentistCardProps {
  name: string;
  role: string;
  image: string;
  experience?: string;
  specialty?: string;
}
const DentistCard = ({
  name,
  role,
  image,
  experience,
  specialty
}: DentistCardProps) => {
  return <div className="bg-white rounded-standard overflow-hidden shadow-soft transition-all duration-300 hover:shadow-md group">
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-primary">{role}</p>
        {specialty && <p className="text-gray-600 text-sm mt-1">Specialty: {specialty}</p>}
        {experience && <p className="text-gray-600 text-sm">Experience: {experience}</p>}
      </div>
    </div>;
};
export default DentistCard;