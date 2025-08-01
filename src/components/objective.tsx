import { googleFormURL } from '@/constants/links';
import AccentButton from './ui/accent-button';

const Objectives = [
  {
    title: 'Promote prayers for peace, harmony and well-being of everyone',
    content:
      'To create a platform for all to come together and offer prayers irrespective of their individual beliefs, faith, religion etc., for the well-being of individual who are suffering due to any reasons, and for the peace, harmony and well-being of everyone collectively.',
    color: '#ffc5c5',
  },
  {
    title: 'Promote Higher Educational Access',
    content:
      'To create awareness about the higher education opportunities, and e-learning platforms offering free or affordable academic education, digital literacy, and language learning for marginalized youth.',
    color: '#f3ec9e',
  },
  {
    title: 'Advance Skill Development',
    content:
      'Design and implement technical, vocational, language and communication training programs aimed at enhancing employability and entrepreneurial abilities among unemployed or disadvantaged individuals.',
    color: '#e9e8ed',
  },
  {
    title: 'Facilitate Career Guidance & Mentorship',
    content:
      'Provide structured career counselling, mentorship, and test preparation services (e.g., for zero-tuition international programs) to empower youth to make informed academic and career choices.',
    color: '#f1f1f1',
  },
  {
    title: 'Deliver Healthcare & Wellness Services',
    content:
      'Organize blood donation camps, medical camps, healthcare support, distribute free medicines, and facilitate mental health support and telemedicine services for underserved populations to improve overall well-being.',
    color: '#EFECFF',
  },
  {
    title: 'Enable Digital Inclusion',
    content:
      'Deploy mobile classrooms, virtual platforms, and tech-enabled tools to bridge the digital divide in education and skill access.',
    color: '#F0F9D4',
  },
  {
    title: 'Foster Partnerships for Greater Impact',
    content:
      'Collaborate with government agencies, corporates (CSR), NGOs, and global networks to scale social impact in education, employment, and healthcare.',
    color: '#E6C7E1',
  },
  {
    title: 'Mobilize Resources for Sustainability',
    content:
      'Raise funds through grants, donations, and sponsorships to sustain and expand the Foundation’s programs, while ensuring full transparency and compliance.',
    color: '#DDFEFF',
  },
];
const Objective = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center gap-4 max-w-6xl py-20 px-4 w-full">
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between w-full">
          <div className="flex flex-col items-start justify-start gap-2">
            <h2 className="md:text-5xl text-3xl font-semibold">
              Core Objectives
            </h2>
            <p className="max-w-sm text-gray-800 md:text-base text-sm">
              Driving sustainable change through education, healthcare, and
              community empowerment initiatives.
            </p>
          </div>

          <AccentButton className="md:block hidden" href={googleFormURL}>
            Contribute Now
          </AccentButton>
        </div>

        {/* Mobile: 2x2 grid, Desktop: scrollable row */}
        <div className="w-full mt-4">
          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {Objectives.map((objective, index) => (
              <div
                style={{ backgroundColor: objective.color }}
                key={objective.title}
                className="p-4 rounded-xl flex flex-col items-start justify-start gap-4 h-full"
              >
                <p className="md:text-base text-sm font-semibold h-20 flex items-start">
                  {objective.title}
                </p>
                <p className="text-xs font-normal">{objective.content}</p>
              </div>
            ))}
          </div>

          {/* Desktop Scrollable Row */}
          <div
            className="hidden md:flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {Objectives.map((objective, index) => (
              <div
                style={{ backgroundColor: objective.color }}
                key={objective.title}
                className="p-4 rounded-xl flex flex-col items-start justify-start gap-4 min-w-[300px] max-w-[350px] h-auto flex-shrink-0"
              >
                <p className="text-lg font-semibold h-20 flex items-start">
                  {objective.title}
                </p>
                <p className="text-sm">{objective.content}</p>
              </div>
            ))}
          </div>
        </div>

        <AccentButton className="md:hidden block mr-auto" href={googleFormURL}>
          Contribute Now
        </AccentButton>
      </div>
    </div>
  );
};

export default Objective;
