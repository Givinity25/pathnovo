import { Heart, BookOpen, Users, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

const focusAreas = [
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: 'Well–wishing for All',
    description:
      'We create a common platform for every person to contribute and help others by offering prayers for the wellness of the others seeking help.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: 'Higher Education for All the deserving students',
    description:
      'We provide schools, e–learning, and mobile classrooms to underserved youth, offering academic, digital, and language learning support.',
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: 'Skilling & Career Guidance',
    description:
      'We offer training, workshops, and mentoring in communication, language, and vocational skills to empower youth employment.',
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-white" />,
    title: 'Health & Wellness Access',
    description:
      'We conduct free blood donation drives, medical camps, mental health workshops, and telemedicine programs for underserved communities.',
  },
];

export default function FocusAreas() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="flex md:flex-row flex-col items-center justify-center md:gap-10 gap-4 max-w-6xl py-20 px-4">
        <div className="flex-1/2 flex flex-col md:items-start items-center justify-between gap-5 h-full">
          <div className="flex flex-col md:items-start items-center gap-5">
            <p className="md:text-left text-center px-4 py-1 rounded-full border border-gray-300 text-sm md:mb-8">
              Our Focus Areas
            </p>
            <h2 className="md:text-left text-center md:text-4xl text-3xl font-bold md:mb-4">
              Serving Communities <br className="hidden md:block" />
              with Purpose and Care
            </h2>
            <p className="md:text-left text-center max-w-2xl text-gray-600 md:mb-6">
              At Council for Start-up India, we provide 360° support to help
              entrepreneurs navigate every stage of their journey — from
              ideation to global scale. Our programs, mentorship, and
              infrastructure are designed to turn raw ideas into thriving,
              sustainable ventures.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-full font-medium">
              ● Donate Now
            </button>
          </div>

          <div className="relative flex-shrink-0 w-full h-[300px] rounded-2xl overflow-hidden md:mt-10">
            <Image
              src="/about-us.jpg"
              alt="About Us"
              fill
              // width={320}
              // height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 flex-1/2">
          {focusAreas.map((area, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-4 p-6 rounded-xl border border-red-100 bg-red-50"
            >
              <div className="bg-red-400 p-3 rounded-lg">{area.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
