const email = 'riteshkushwaha497@gmail.com';

const subject = 'Portfolio Contact';
const body = `Hi Ritesh,

I visited your portfolio and would like to connect.`;

const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const contactLinks = [
  {
    label: 'Email',
    value: email,
    href: emailLink,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/riteshkushwaha7',
    href: 'https://www.linkedin.com/in/riteshkushwaha7/',
  },
  {
    label: 'GitHub',
    value: 'github.com/riteshkushwaha7',
    href: 'https://github.com/riteshkushwaha7',
  },
  {
    label: 'X',
    value: 'x.com/cyberrk_',
    href: 'https://x.com/cyberrk_',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-10">
          <section>
            <h2 className="inline-block font-bold text-black dark:text-white text-2xl md:text-3xl tracking-widest border-2 border-black dark:border-white px-8 py-2 mb-8 uppercase">
              Contact
            </h2>
            <p className="max-w-2xl text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Open to internships, full-stack work, ML projects, hackathon collaborations, and technical conversations.
            </p>
          </section>

          <section className="max-w-3xl space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="soft-card soft-card-hover flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {link.label}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 sm:text-right">
                  {link.value}
                </span>
              </a>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
