import { FormEvent, useState } from 'react';
import { AlertCircle, ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolio';

export function ContactSection() {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Art Direction');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    projectType: string;
  } | null>(null);

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      window.setTimeout(() => {
        setCopiedField((curr) => (curr === field ? null : curr));
      }, 2000);
    } catch {
      // Clipboard API unavailable in restricted contexts; link fallback remains active
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      setError('Please enter your name before sending.');
      return;
    }
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please enter a valid email address so I can reply.');
      return;
    }
    if (trimmedMessage.length < 10) {
      setError('Please share a brief note about your project (at least 10 characters).');
      return;
    }

    setError(null);
    setSubmittedData({
      name: trimmedName,
      email: trimmedEmail,
      projectType,
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section
      id="contact"
      className="border-t border-neutral-200/80 bg-[#FFFFFF] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-wide text-neutral-500">
              Contact · Commissions & Collaborations
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl text-balance">
              Let’s build something quiet, sharp, and enduring.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
              Available for select brand direction, photography commissions, and interactive web projects. Reach out directly or send a brief below.
            </p>

            <div className="mt-10 space-y-6 border-t border-neutral-200 pt-8">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    <span>Direct Email</span>
                  </div>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="mt-1 block truncate font-display text-lg font-medium text-[#111111] underline decoration-neutral-300 underline-offset-4 transition-colors duration-150 hover:decoration-[#C82317]"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
                  className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-neutral-200 px-3 text-xs font-medium text-neutral-700 transition-colors duration-150 hover:bg-neutral-50 whitespace-nowrap shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#111111]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-start justify-between gap-4 border-t border-neutral-100 pt-5">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    <span>Studio Phone</span>
                  </div>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                    className="mt-1 block font-mono text-base font-medium text-[#111111] tabular-nums underline decoration-neutral-300 underline-offset-4 transition-colors duration-150 hover:decoration-[#C82317]"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_INFO.phone, 'phone')}
                  className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-neutral-200 px-3 text-xs font-medium text-neutral-700 transition-colors duration-150 hover:bg-neutral-50 whitespace-nowrap shrink-0"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#111111]" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="border-t border-neutral-100 pt-5">
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  <span>Studio & Hours</span>
                </div>
                <p className="mt-1 text-sm font-medium text-[#111111]">
                  {CONTACT_INFO.location}
                </p>
                <p className="mt-0.5 text-xs text-neutral-500">
                  {CONTACT_INFO.hours} · {CONTACT_INFO.responseTime}
                </p>
              </div>

              <div className="border-t border-neutral-100 pt-5">
                <p className="text-xs text-neutral-500">Elsewhere</p>
                <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2.5">
                  {CONTACT_INFO.socials.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-between border-b border-neutral-200 py-1.5 text-sm font-medium text-[#111111] transition-colors duration-150 hover:border-[#C82317] hover:text-[#C82317]"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C82317]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-200 bg-[#F6F6F4] p-6 sm:p-10">
              {submittedData ? (
                <div className="py-10">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] text-white">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-[#111111]">
                    Inquiry received, {submittedData.name}.
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-600">
                    Thank you for reaching out regarding{' '}
                    <span className="font-medium text-[#111111]">
                      {submittedData.projectType}
                    </span>
                    . A confirmation note has been logged for{' '}
                    <span className="font-medium text-[#111111]">
                      {submittedData.email}
                    </span>
                    , and I’ll respond within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedData(null)}
                    className="mt-8 inline-flex h-10 items-center justify-center rounded-lg bg-[#111111] px-5 text-sm font-medium text-white transition-colors duration-150 hover:bg-neutral-800 whitespace-nowrap shrink-0"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-[#111111]">
                      Project Inquiry
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600">
                      Share your timeline, goals, or commission details.
                    </p>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-lg border border-[#C82317]/30 bg-white px-4 py-3 text-sm text-[#991B1B]"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#C82317]" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-neutral-700"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Aarav Mehta"
                        className="mt-2 h-11 w-full rounded-lg border border-neutral-300 bg-white px-3.5 text-sm text-[#111111] placeholder:text-neutral-400 transition-colors duration-150 focus:border-[#111111] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-neutral-700"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="aarav@studio.com"
                        className="mt-2 h-11 w-full rounded-lg border border-neutral-300 bg-white px-3.5 text-sm text-[#111111] placeholder:text-neutral-400 transition-colors duration-150 focus:border-[#111111] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-discipline"
                      className="block text-xs font-medium text-neutral-700"
                    >
                      Project Discipline
                    </label>
                    <select
                      id="contact-discipline"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="mt-2 h-11 w-full rounded-lg border border-neutral-300 bg-white px-3.5 text-sm text-[#111111] transition-colors duration-150 focus:border-[#111111] focus:outline-none"
                    >
                      <option value="Art Direction">Art Direction</option>
                      <option value="Photography Commission">Photography Commission</option>
                      <option value="Interactive Web Design">Interactive Web Design</option>
                      <option value="Editorial & Print Identity">Editorial & Print Identity</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-neutral-700"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me a little about the scope, timeline, and creative direction..."
                      className="mt-2 w-full rounded-lg border border-neutral-300 bg-white p-3.5 text-sm leading-relaxed text-[#111111] placeholder:text-neutral-400 transition-colors duration-150 focus:border-[#111111] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                    <p className="text-xs text-neutral-500">
                      Direct inquiries also welcome via email.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-[#C82317] px-6 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#A91D13] whitespace-nowrap shrink-0"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
