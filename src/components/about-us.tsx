'use client';

import { Compass, Eye } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useAutoTabSwitch } from '../hooks/useAutoTabSwitch';

const AboutUs = () => {
  const [direction, setDirection] = useState(0);

  const divStyle = {
    backgroundImage: `url('/about-us/aboutus-bg.png')`,
    backgroundSize: 'cover',
  };

  const tabs = [
    {
      id: 0,
      title: 'Our Mission',
      icon: Compass,
      content: {
        title: 'Our Mission',
        description:
          'To create peace and harmony in the lives of people through mass prayers and helping hands, including empower the youth, especially underserved and economically challenged, and communities through inclusive higher education, skill development, and healthcare support—enabling them to lead self-reliant, dignified, and meaningful lives.',
        image: '/about-us/mission.jpg',
      },
      subContent: [
        {
          title: 'Community Impact',
          description: 'Transforming lives through education and support.',
        },
        {
          title: 'Spiritual Solidarity',
          description: 'Spreading peace through collective prayers.',
        },
      ],
    },
    {
      id: 1,
      title: 'Our Vision',
      icon: Eye,
      content: {
        title: 'Our Vision',
        description:
          'A future where every person, regardless of background, caste, and religion, could offer prayers for the well-being of others, and to learn, grow, and thrive through equitable access to knowledge, skills, and well-being of self.',
        image: '/about-us/vision.jpg',
      },
      subContent: [
        {
          title: 'Inclusive Growth',
          description: 'Opportunities for all, beyond caste or background.',
        },
        {
          title: 'Spiritual Unity',
          description: "Prayers for everyone's peace and well-being.",
        },
      ],
    },
  ];

  // Auto-tab switching hook
  const { activeTab, switchToTab, isPaused } = useAutoTabSwitch({
    totalTabs: tabs.length,
    interval: 10000,
    enabled: true,
  });

  const handleTabClick = (tabId: number) => {
    setDirection(tabId > activeTab ? 1 : -1);
    switchToTab(tabId);
  };

  const getSlideDirection = () => {
    if (direction === 1) return 'slide-in-right';
    if (direction === -1) return 'slide-in-left';
    return '';
  };

  return (
    <div
      style={divStyle}
      className="w-full flex flex-col items-center justify-center md:mt-[200px] bg-gray-50 py-20"
    >
      <div className="flex flex-col items-center justify-center gap-4 max-w-6xl w-full">
        <div className="flex md:flex-row flex-col items-end justify-center w-full gap-4 px-4">
          <div className="flex-1/2 w-full flex flex-col items-start justify-start gap-4">
            <div className="w-full flex md:justify-start justify-center">
              <p className="border-[1px] border-gray-500 px-4 py-2 rounded-full text-xs">
                About Us
              </p>
            </div>
            <p className="italic md:text-2xl text-md md:text-left text-center text-accent w-full font-semibold">
              Gratitude + Generousity = Abundance
            </p>

            <p className="w-full font-semibold md:text-5xl text-3xl md:text-left text-center max-w-md">
              Uplifting Lives with Learning, Healing, and Support
            </p>
          </div>
          <div className="flex-1/2 w-full">
            <p className="w-full text-sm md:text-left text-center text-justify">
              In a time marked by uncertainty, division, and growing inequity,
              <strong> Givinity Foundation</strong> emerges as a platform of
              hope—a registered Section 8 nonprofit organisation, committed to
              healing the world through{' '}
              <strong>
                education, compassion, skill-building, and spiritual solidarity.{' '}
              </strong>
              <br />
              We are building{' '}
              <strong>technology-driven, people-centric platforms</strong> that
              create meaningful access to education, jobs, healthcare, mental
              support, and prayers, especially for the underserved and
              economically challenged ones
            </p>
          </div>
        </div>

        {/* TABS */}
        <div className="flex flex-col w-full items-center justify-center gap-4 h-full relative">
          <div className="mt-10 bg-white rounded-xl p-2 flex items-center justify-center gap-4 md:max-w-[500px] w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`w-full rounded-xl py-2 px-2 flex items-center justify-start gap-2 md:text-sm text-xs transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                <tab.icon
                  color={activeTab === tab.id ? 'white' : 'black'}
                  width={16}
                  height={16}
                />
                <p>{tab.title}</p>
              </button>
            ))}
          </div>

          <div className="flex md:flex-row flex-col items-center justify-center w-full bg-white rounded-xl shadow p-6 overflow-hidden">
            <div
              className={`flex flex-col md:items-start items-center md:justify-start justify-center gap-8 flex-1/2 transition-all duration-500 ease-in-out ${getSlideDirection()}`}
            >
              <p className="text-3xl font-semibold text-left w-full">
                {tabs[activeTab].content.title}
              </p>
              <p className="leading-relaxed md:text-left text-justify md:text-base text-sm">
                {tabs[activeTab].content.description}
              </p>
              <div className="w-full md:mb-0 h-[1px] bg-gray-400"></div>
              <div className="flex items-center justify-center w-full md:gap-8 gap-4 md:text-base text-sm">
                <div className="flex-1/2 w-full flex flex-col items-start justify-start gap-2">
                  <p className="font-medium">
                    {tabs[activeTab].subContent[0].title}
                  </p>
                  <p>{tabs[activeTab].subContent[0].description}</p>
                </div>
                <div className="flex-1/2 w-full flex flex-col items-start justify-start gap-2">
                  <p className="font-medium">
                    {tabs[activeTab].subContent[1].title}
                  </p>
                  <p>{tabs[activeTab].subContent[1].description}</p>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: "url('/ourmissionbg.png')" }}
              className="flex-1/2 flex items-center justify-end md:mt-0 mt-5"
            >
              <div className="bg-accent md:py-8 md:px-10 px-6 py-4 rounded-2xl">
                <div className="bg-white p-2 rounded-2xl">
                  <div className="relative flex-shrink-0 w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-2xl overflow-hidden">
                    <Image
                      src={tabs[activeTab].content.image}
                      alt={tabs[activeTab].content.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
