import { useState, useSyncExternalStore } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { company, inquiryTypes } from '../config/site';

const validTypes = new Set(inquiryTypes.map((t) => t.value));
const empty = { name: '', email: '', organisation: '', message: '' };
const noopSubscribe = () => () => {};

export default function Contact() {
  const [params] = useSearchParams();
  const initialType = validTypes.has(params.get('type')) ? params.get('type') : 'general';
  const product = params.get('product');
  // Prerendered HTML has no query string: render 'general' on the server and during hydration,
  // then apply ?type= on the client. Once the visitor picks a type, their choice wins.
  const isClient = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const [form, setForm] = useState({ ...empty, inquiryType: null });
  const [sent, setSent] = useState(false);
  const inquiryType = form.inquiryType ?? (isClient ? initialType : 'general');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Delivery is unchanged from the previous site: opens the visitor's email client
  // addressed to company.email. Swap this for a form endpoint (e.g. an n8n webhook) when ready.
  const onSubmit = (e) => {
    e.preventDefault();
    const typeLabel = inquiryTypes.find((t) => t.value === inquiryType)?.label || inquiryType;
    const subject = encodeURIComponent(`${typeLabel} enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganisation: ${form.organisation || '—'}\n` +
        `Enquiry type: ${typeLabel}\n${product ? `Product: ${product}\n` : ''}\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="page-hero page-contact" aria-labelledby="c-title">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 id="c-title" className="display display-md">Talk to GizMentor.</h1>
          <p className="hero-lead">Investors, partners, retailers and customers — tell us what you have in mind and the right person will respond.</p>
          <ul className="contact-details">
            <li><Mail size={18} aria-hidden="true" /><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><MapPin size={18} aria-hidden="true" /><span>{company.legalName}<br />{company.address.line1}, {company.address.line2}<br />{company.address.city}, {company.address.country}</span></li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="contact-form" noValidate={false}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" value={form.name} onChange={onChange} required className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" autoComplete="email" value={form.email} onChange={onChange} required className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="organisation">Organisation <span className="optional">(optional)</span></label>
            <input id="organisation" name="organisation" autoComplete="organization" value={form.organisation} onChange={onChange} className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="inquiryType">Enquiry type</label>
            <select id="inquiryType" name="inquiryType" value={inquiryType} onChange={onChange} className="form-control">
              {inquiryTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" value={form.message} onChange={onChange} required className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Send enquiry</button>
          <p className="form-note" role="status">
            {sent
              ? `Your email app should now open with your message. If it didn’t, write to us at ${company.email}.`
              : 'Submitting opens your email app with the message ready to send.'}
          </p>
        </form>
      </div>
    </section>
  );
}
