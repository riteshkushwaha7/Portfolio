'use client';

import { useState } from 'react';

export default function Contact() {
  const web3FormsAccessKey = "d8312b37-5c8f-42f1-92d0-b0166f7dd631";
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus(null);
    setSubmissionMessage('');

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", web3FormsAccessKey);

    const object = {
      subject: "New Contact Form Submission from your Website",
      from_name: formData.get("first-name") + " " + formData.get("last-name"),
    };
    formData.append("object", JSON.stringify(object));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus('success');
        setSubmissionMessage(result.message || "Form submitted successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmissionStatus('error');
        setSubmissionMessage(result.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setSubmissionStatus('error');
      setSubmissionMessage("An unexpected error occurred. Please check your connection and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="inline-block font-bold text-black dark:text-white text-2xl md:text-3xl tracking-widest border-2 border-black dark:border-white px-8 py-2 mb-6 uppercase">
            Contact Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">I'd love to hear from you.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-16 space-y-6">
          <input type="hidden" name="access_key" value={web3FormsAccessKey} />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                First name
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full rounded-md border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-900 dark:focus:border-white focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Last name
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                required
                className="block w-full rounded-md border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-900 dark:focus:border-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="block w-full rounded-md border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-900 dark:focus:border-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-900 dark:focus:border-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Phone number
            </label>
            <div className="flex rounded-md border-2 border-gray-300 dark:border-gray-700 focus-within:border-gray-900 dark:focus-within:border-white transition-colors">
              <select
                id="country"
                name="country"
                autoComplete="country"
                aria-label="Country"
                className="appearance-none rounded-l-md border-0 bg-white dark:bg-gray-800 py-2 pl-3 pr-8 text-base text-gray-500 dark:text-gray-400 focus:outline-none"
              >
                <option>IN</option>
                <option>US</option>
                <option>EU</option>
              </select>
              <input
                id="phone-number"
                name="phone-number"
                type="text"
                placeholder="123-456-7890"
                className="block min-w-0 flex-1 rounded-r-md border-0 bg-white dark:bg-gray-800 py-2 pr-3 pl-1 text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="block w-full rounded-md border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3.5 py-2 text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-gray-900 dark:focus:border-white focus:outline-none transition-colors"
            />
          </div>

          {submissionStatus && (
            <div
              className={`p-4 rounded-md text-sm ${
                submissionStatus === 'success'
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700'
              }`}
            >
              {submissionMessage}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="block w-full rounded-md bg-gray-900 dark:bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors focus:outline-none"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

