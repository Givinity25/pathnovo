'use client';
import AccentButton from './ui/accent-button';
import { useIsMobile } from '../hooks/useMediaQuery';
import { googleFormURL } from '@/constants/links';

const involvementOptions = [
  {
    title: 'Volunteer',
    description: 'Teach, mentor, or support community outreach.',
    image: '/get-involved/volunteer.jpg',
    cta: 'Volunteer',
  },
  {
    title: 'Internships',
    description: 'Join our operations, communications, or fundraising teams.',
    image: '/get-involved/internships.jpg',
    cta: 'Apply Now',
  },
  {
    title: 'Partner with Us',
    description: 'Schools, NGOs, and CSR teams welcome!',
    image: '/get-involved/partner-with-us.png',
    cta: 'Partner With Us',
  },
  {
    title: 'Joy of Contributing',
    description:
      'Support a child’s education, sponsor a skilling program, or fund a health.',
    image: '/get-involved/joy-of-contributing.jpg',
    cta: 'Donate Now',
  },
];

export default function GetInvolved() {
  const isMobile = useIsMobile();

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-4 max-w-6xl py-20 w-full px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-6 w-full">
          <h2 className="text-4xl font-semibold md:mb-4">Get Involved</h2>
          <p className="text-gray-800 max-w-xl md:text-left text-center text-justify">
            Your time, skills, or support can change lives. Join us in
            empowering communities through education, healthcare, and
            compassion-driven initiatives. Every contribution counts.
          </p>
        </div>

        <div className="w-full gap-y-10 md:gap-8 gap-4 md:justify-center grid grid-cols-2 md:grid-cols-4">
          {involvementOptions.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start border-t border-gray-300 pt-6 w-full"
            >
              <div className="flex flex-col items-start justify-start h-[140px] md:h-[150px]">
                <h3 className="md:text-xl text-base font-semibold mb-2 md:h-12 h-6 flex items-start">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              </div>

              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              )}

              {/* Example of conditional rendering based on screen size */}
              {isMobile ? (
                <AccentButton href={googleFormURL} size="xs">
                  {item.cta}
                </AccentButton>
              ) : (
                <AccentButton href={googleFormURL} size="sm">
                  {item.cta}
                </AccentButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
