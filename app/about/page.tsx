'use client';

import { useState } from 'react';
import Image from 'next/image';
import CertificateModal from '@/components/CertificateModal';

const certificates = [
  {
    filename: 'sih-certificate.jpeg',
    name: 'SIH National Level Finalist Certificate - Smart India Hackathon 2025',
  },
  {
    filename: 'python-certificate.jpeg',
    name: 'Introduction to Python Programming Language - HCL GUVI',
  },
  {
    filename: 'startup-india.png',
    name: 'Startup Learning Program - UpGrad & #startupindia',
  },
];

const achievements = [
  {
    title: 'Smart India Hackathon FINALIST',
    description: 'SIH 2025',
  },
  {
    title: 'LeetCode',
    description: 'Max Rating: 1745',
  },
  {
    title: 'Codeforces',
    description: 'Pupil Division, Max Rating: 1242',
  },
  {
    title: '3X Hackathon Finalist',
    description: 'Techkriti IIT Kanpur 2025, NIT KKR InnokShetra 2024, SIH 2025',
  },
];

const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'BoostExpo',
    duration: 'Mar 2026 - Present',
    note: 'Expected till June 2026',
    points: [
      'Developing and maintaining boostexpo.com with focus on user experience and functionality.',
      'Collaborating with the team to identify and fix bugs for a smoother cooking event booking process.',
      'Gaining hands-on experience across both frontend and backend development.',
    ],
  },
  {
    role: 'ERPNext Technical Intern',
    company: 'Scented Slogan',
    duration: 'Feb 2026 - Present',
    note: 'Expected till April 2026',
    points: [
      'Managing the ERPNext platform by resolving bugs and feature issues.',
      'Developing automation flows to streamline internal workflows and improve efficiency.',
      'Contributing to maintenance of the company website built with low-code tools.',
    ],
  },
];

export default function About() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const getCertificateName = (filename: string) => {
    return certificates.find((cert) => cert.filename === filename)?.name || filename;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          <section>
            <h2 className="inline-block font-bold text-black dark:text-white text-2xl md:text-3xl tracking-widest border-2 border-black dark:border-white px-8 py-2 mb-8 uppercase">
              About Me
            </h2>
            <div className="max-w-3xl flex flex-col sm:flex-row items-start gap-6">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-2 border-gray-200 shadow-sm dark:border-gray-700 shrink-0">
                <Image
                  src="/assets/photo.jpeg"
                  alt="Ritesh Kushwaha"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I&apos;m Ritesh Kushwaha, a passionate Web Developer currently pursuing
                B.Tech in Information Technology at the University Institute of
                Technology UIT RGPV Bhopal, graduating in 2027. With hands-on
                experience in full-stack development, I focus on creating dynamic,
                scalable web solutions that deliver great user experiences. I&apos;m
                dedicated to continuous learning and improving products with clean,
                practical solutions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="inline-block font-bold text-black dark:text-white text-2xl md:text-3xl tracking-widest border-2 border-black dark:border-white px-8 py-2 mb-8 uppercase">
              Experience
            </h2>
            <div className="max-w-4xl space-y-6">
              {experience.map((item) => (
                <div
                  key={item.company}
                  className="soft-card soft-card-hover p-6"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                        {item.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-right">
                      <p>{item.duration}</p>
                      <p className="font-medium">{item.note}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-gray-900 dark:bg-white" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="inline-block font-bold text-black dark:text-white text-2xl md:text-3xl tracking-widest border-2 border-black dark:border-white px-8 py-2 mb-8 uppercase">
              Education
            </h2>
            <div className="max-w-3xl space-y-8">
              <div className="border-l-2 border-gray-900 dark:border-white pl-6 space-y-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  B.Tech in Information Technology
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 font-medium">
                  University Institute of Technology UIT RGPV Bhopal
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Expected Graduation: 2027
                </p>
              </div>

              <div className="border-l-2 border-gray-900 dark:border-white pl-6 space-y-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Intermediate in PCM and Information Practice
                </h3>
                <p className="text-base text-gray-700 dark:text-gray-300 font-medium">
                  Ramakrishna Vivekananda Vidyapeeth, Bijuri (Anuppur) M.P.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Completed: 2022
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="inline-block font-bold text-black dark:text-white text-2xl md:text-3xl tracking-widest border-2 border-black dark:border-white px-8 py-2 mb-8 uppercase">
              DSA Portfolio
            </h2>
            <div className="max-w-3xl space-y-4">
              <div className="soft-card soft-card-hover p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Solved 900+ DSA Questions
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Explore my DSA journey, coding profiles, and achievements in detail.
                  </p>
                </div>
                <a
                  href="https://codolio.com/profile/riteshkushwaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 sm:mt-0 px-6 py-2 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  View Profiles
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="inline-block font-bold text-black dark:text-white text-2xl md:text-3xl tracking-widest border-2 border-black dark:border-white px-8 py-2 mb-8 uppercase">
              Achievements
            </h2>
            <div className="max-w-3xl space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="soft-card soft-card-hover p-4"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {achievement.title}
                  </h3>
                  {achievement.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="inline-block font-bold text-black dark:text-white text-2xl md:text-3xl tracking-widest border-2 border-black dark:border-white px-8 py-2 mb-8 uppercase">
              Courses & Certifications
            </h2>
            <div className="max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {certificates.map((certificate) => (
                  <div
                    key={certificate.filename}
                    className="soft-card soft-card-hover overflow-hidden cursor-pointer"
                    onClick={() => setSelectedCertificate(certificate.filename)}
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={`/assets/${certificate.filename}`}
                        alt={certificate.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                        {certificate.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {selectedCertificate && (
        <CertificateModal
          isOpen={!!selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
          imageSrc={`/assets/${selectedCertificate}`}
          name={getCertificateName(selectedCertificate)}
        />
      )}
    </div>
  );
}
