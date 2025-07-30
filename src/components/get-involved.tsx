import Link from 'next/link';

const involvementOptions = [
  {
    title: 'Volunteer',
    description: 'Teach, mentor, or support community outreach.',
    image: '/get-involved.jpg',
    cta: 'Volunteer',
  },
  {
    title: 'Internships',
    description: 'Join our operations, communications, or fundraising teams.',
    image: '/get-involved.jpg',
    cta: 'Apply Now',
  },
  {
    title: 'Partner with Us',
    description: 'Schools, NGOs, and CSR teams welcome!',
    image: '/get-involved.jpg',
    cta: 'Partner With Us',
  },
  {
    title: 'Donate',
    description:
      'Support a child’s education, sponsor a skilling program, or fund a health.',
    image: '/get-involved.jpg',
    cta: 'Donate Now',
  },
];

export default function GetInvolved() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-4 max-w-6xl py-20 w-full px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-6 w-full">
          <h2 className="text-4xl font-bold md:mb-4">Get Involved</h2>
          <p className="text-gray-600 max-w-xl md:text-left text-center">
            Your time, skills, or support can change lives. Join us in
            empowering communities through education, healthcare, and
            compassion-driven initiatives. Every contribution counts.
          </p>
        </div>

        <div className="w-full gap-y-20 md:gap-8 gap-4 md:justify-center grid grid-cols-2 md:grid-cols-4">
          {involvementOptions.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start border-t border-gray-300 pt-6 w-full"
            >
              <div className="flex flex-col items-start h-[130px] md:h-[150px]">
                <h3 className="text-xl font-semibold mb-2 h-12 flex items-start">
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

              <Link
                href="/coming-soon"
                className="px-5 py-2 bg-accent hover:bg-red-500 transition-colors text-white hidden md:flex items-center justify-center gap-4 rounded-full text-sm"
              >
                <span className="w-2 h-2 bg-white rounded-full" /> Donate Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
