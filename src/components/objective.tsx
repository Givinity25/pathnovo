import Link from 'next/link';

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
];
const Objective = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center gap-4 max-w-6xl py-20 px-4">
        <div className="flex md:flex-row flex-col md:items-center items-start justify-between w-full">
          <div className="flex flex-col items-start justify-start gap-2">
            <h2 className="md:text-5xl text-3xl font-medium">
              Core Objectives
            </h2>
            <p className="max-w-sm text-gray-600 md:text-base text-sm">
              Driving sustainable change through education, healthcare, and
              community empowerment initiatives.
            </p>
          </div>

          <Link
            href="/coming-soon"
            className="px-10 py-3 bg-accent hover:bg-red-500 transition-colors text-white hidden md:flex items-center justify-center gap-4 rounded-full"
          >
            <span className="w-2 h-2 bg-white rounded-full" /> Donate Now
          </Link>
        </div>

        <div className="w-full mt-4 md:flex md:justify-center md:gap-4 grid grid-cols-2 gap-4">
          {Objectives.map((objective, index) => (
            <div
              style={{ backgroundColor: objective.color }}
              key={objective.title}
              className="p-4 rounded-xl flex flex-col items-start justify-start gap-4 h-full"
            >
              <p className="md:text-lg text-base font-semibold md:h-20 h-24 flex items-start">
                {objective.title}
              </p>
              <p className="md:text-sm text-xs">{objective.content}</p>
            </div>
          ))}
        </div>

        <button className="px-10 py-3 bg-accent text-white flex md:hidden items-center justify-center gap-4 rounded-full mr-auto">
          <span className="w-2 h-2 bg-white rounded-full" /> Donate Now
        </button>
      </div>
    </div>
  );
};

export default Objective;
