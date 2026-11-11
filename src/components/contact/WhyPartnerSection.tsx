import { useState, FormEvent } from 'react';
import { 
    Phone, 
    Mail, 
    LifeBuoy, 
    MapPin, 
    ShieldCheck, 
    Wrench, 
    ArrowRight, 
    CheckCircle2 
} from 'lucide-react';
import { Container } from '@/components/common/Container';
import { validateContact, ContactValues } from '@/utils/validation';

export function WhyPartnerSection() {
    // Form state
    const [formData, setFormData] = useState<ContactValues>({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        requirement: '',
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (field: keyof ContactValues, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => {
                const next = { ...prev };
                delete next[field];
                return next;
            });
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const validationErrors = validateContact(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
        }
    };

    return (
        <section id="why-partner" className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24 border-b border-slate-200/60">
            <Container>
                {/* Section Header matching Image 2 */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#091D38] uppercase tracking-wide leading-tight">
                        WHY PARTNER WITH INFINITY?
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-500 font-normal">
                        Meticulous Engineering For Mission-Critical Infrastructure.
                    </p>
                </div>

                {/* 2-Column Responsive Layout matching Image 2 & 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-start">
                    
                    {/* LEFT COLUMN: 5 Contact & Address Cards (Images 2 & 3) */}
                    <div className="lg:col-span-4 space-y-5">
                        
                        {/* 1. Call Us */}
                        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#091D38] flex items-center justify-center text-white shrink-0 shadow-sm">
                                    <Phone size={20} className="text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-[#091D38]">
                                    Call Us
                                </h3>
                            </div>
                            <div className="mt-4 pl-1">
                                <a 
                                    href="tel:+919718170004" 
                                    className="text-[15px] font-semibold text-slate-700 hover:text-[#091D38] transition-colors"
                                >
                                    +91-9718170004
                                </a>
                            </div>
                        </div>

                        {/* 2. Email Us */}
                        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#091D38] flex items-center justify-center text-white shrink-0 shadow-sm">
                                    <Mail size={20} className="text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-[#091D38]">
                                    Email Us
                                </h3>
                            </div>
                            <div className="mt-4 pl-1 space-y-1.5">
                                <a 
                                    href="mailto:estimating@infinityengineerings.com" 
                                    className="block text-sm font-medium text-slate-700 hover:text-[#091D38] break-all transition-colors"
                                >
                                    estimating@infinityengineerings.com
                                </a>
                                <a 
                                    href="mailto:infinityengineeringsindia@gmail.com" 
                                    className="block text-sm font-medium text-slate-700 hover:text-[#091D38] break-all transition-colors"
                                >
                                    infinityengineeringsindia@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* 3. Support & AMC */}
                        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#091D38] flex items-center justify-center text-white shrink-0 shadow-sm">
                                    <LifeBuoy size={20} className="text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-[#091D38]">
                                    Support &amp; AMC
                                </h3>
                            </div>
                            <div className="mt-4 pl-1 space-y-1.5">
                                <a 
                                    href="tel:+919718170004" 
                                    className="block text-[15px] font-semibold text-slate-700 hover:text-[#091D38] transition-colors"
                                >
                                    +91-9718170004
                                </a>
                                <a 
                                    href="mailto:sales@infinityengineerings.com" 
                                    className="block text-sm font-medium text-slate-700 hover:text-[#091D38] break-all transition-colors"
                                >
                                    sales@infinityengineerings.com
                                </a>
                                <div className="pt-2">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                                        24/7 Support
                                    </p>
                                    <p className="text-sm font-medium text-slate-700 mt-0.5">
                                        Always Available
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Registration Address (Image 3) */}
                        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#091D38] flex items-center justify-center text-white shrink-0 shadow-sm">
                                    <MapPin size={20} className="text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-[#091D38]">
                                    Registration Address
                                </h3>
                            </div>
                            <div className="mt-4 pl-1">
                                <p className="text-sm leading-relaxed text-slate-600">
                                    3rd Floor, JMD Regent Arcade Mall, A Block, DLF Phase – I, Sector – 28, Gurugram 122002, Haryana
                                </p>
                                <a 
                                    href="https://maps.google.com/?q=JMD+Regent+Arcade+Mall+DLF+Phase+1+Sector+28+Gurugram+122002" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-bold text-[#D92D20] hover:text-[#B42318] hover:underline transition-colors group"
                                >
                                    <span>Get Directions</span>
                                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                </a>
                            </div>
                        </div>

                        {/* 5. Corporate Address (Image 3) */}
                        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#091D38] flex items-center justify-center text-white shrink-0 shadow-sm">
                                    <MapPin size={20} className="text-white" />
                                </div>
                                <h3 className="text-base sm:text-lg font-bold text-[#091D38]">
                                    Corporate Address
                                </h3>
                            </div>
                            <div className="mt-4 pl-1">
                                <p className="text-sm leading-relaxed text-slate-600">
                                    504, Best Business Park, Netaji Subhash Place, Pitampura – 110034, Delhi
                                </p>
                                <a 
                                    href="https://maps.google.com/?q=Best+Business+Park+Netaji+Subhash+Place+Pitampura+Delhi+110034" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-bold text-[#D92D20] hover:text-[#B42318] hover:underline transition-colors group"
                                >
                                    <span>Get Directions</span>
                                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Send Us a Message Card + 2x2 Feature Cards Grid */}
                    <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-7">
                        
                        {/* Send Us a Message Card (Image 2) */}
                        <div id="contact-form" className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-xs">
                            <h3 className="text-2xl sm:text-[28px] font-bold text-[#091D38]">
                                Send Us a Message
                            </h3>
                            <p className="text-sm sm:text-[15px] text-slate-500 mt-1.5">
                                Fill in the form and our team will get back to you shortly.
                            </p>

                            {submitted ? (
                                <div className="mt-8 rounded-xl bg-green-50 border border-green-200 p-6 sm:p-8 text-center animate-in fade-in duration-300">
                                    <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-green-900">
                                        Thank You for Contacting Infinity Engineering!
                                    </h4>
                                    <p className="mt-2 text-sm text-green-700 max-w-md mx-auto">
                                        Your enquiry has been received. Our dedicated fire safety engineering team will review your project requirements and respond promptly.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({
                                                fullName: '',
                                                companyName: '',
                                                email: '',
                                                phone: '',
                                                requirement: '',
                                                message: '',
                                            });
                                        }}
                                        className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-800 hover:underline cursor-pointer"
                                    >
                                        Send another message →
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate className="mt-7 sm:mt-8 space-y-4">
                                    {/* Row 1: Full Name * | Company Name * */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                value={formData.fullName}
                                                onChange={(e) => handleChange('fullName', e.target.value)}
                                                placeholder="Full Name *"
                                                className={`w-full rounded-lg bg-[#F9FAFB] border px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-[#091D38] focus:ring-1 focus:ring-[#091D38] ${
                                                    errors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-200'
                                                }`}
                                            />
                                            {errors.fullName && (
                                                <p className="mt-1 text-xs text-red-600 font-medium">
                                                    {errors.fullName}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                value={formData.companyName}
                                                onChange={(e) => handleChange('companyName', e.target.value)}
                                                placeholder="Company Name *"
                                                className={`w-full rounded-lg bg-[#F9FAFB] border px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-[#091D38] focus:ring-1 focus:ring-[#091D38] ${
                                                    errors.companyName ? 'border-red-500 bg-red-50/30' : 'border-slate-200'
                                                }`}
                                            />
                                            {errors.companyName && (
                                                <p className="mt-1 text-xs text-red-600 font-medium">
                                                    {errors.companyName}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Row 2: Email Address * | Phone Number * */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleChange('email', e.target.value)}
                                                placeholder="Email Address *"
                                                className={`w-full rounded-lg bg-[#F9FAFB] border px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-[#091D38] focus:ring-1 focus:ring-[#091D38] ${
                                                    errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-200'
                                                }`}
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-xs text-red-600 font-medium">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => handleChange('phone', e.target.value)}
                                                placeholder="Phone Number *"
                                                className={`w-full rounded-lg bg-[#F9FAFB] border px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-[#091D38] focus:ring-1 focus:ring-[#091D38] ${
                                                    errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-200'
                                                }`}
                                            />
                                            {errors.phone && (
                                                <p className="mt-1 text-xs text-red-600 font-medium">
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Row 3: Requirement / Solution Interested In * */}
                                    <div>
                                        <input
                                            type="text"
                                            value={formData.requirement}
                                            onChange={(e) => handleChange('requirement', e.target.value)}
                                            placeholder="Requirement / Solution Interested In *"
                                            className={`w-full rounded-lg bg-[#F9FAFB] border px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-[#091D38] focus:ring-1 focus:ring-[#091D38] ${
                                                errors.requirement ? 'border-red-500 bg-red-50/30' : 'border-slate-200'
                                            }`}
                                        />
                                        {errors.requirement && (
                                            <p className="mt-1 text-xs text-red-600 font-medium">
                                                {errors.requirement}
                                            </p>
                                        )}
                                    </div>

                                    {/* Row 4: Your Message * */}
                                    <div>
                                        <textarea
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => handleChange('message', e.target.value)}
                                            placeholder="Your Message *"
                                            className={`w-full rounded-lg bg-[#F9FAFB] border px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-200 resize-y focus:bg-white focus:border-[#091D38] focus:ring-1 focus:ring-[#091D38] ${
                                                errors.message ? 'border-red-500 bg-red-50/30' : 'border-slate-200'
                                            }`}
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-xs text-red-600 font-medium">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Row 5: Submit Button matching Image 2 */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="w-full bg-[#0B2546] hover:bg-[#071A35] text-white font-bold uppercase tracking-wider text-xs sm:text-sm py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                                        >
                                            <span>SEND MESSAGE</span>
                                            <ArrowRight size={17} />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* 2x2 Feature Cards Grid (Image 3) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                            
                            {/* Card 1: Certified Systems */}
                            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300">
                                <div className="text-[#091D38]">
                                    <ShieldCheck size={32} strokeWidth={2.2} />
                                </div>
                                <h4 className="text-base sm:text-lg font-bold text-[#091D38] mt-3.5">
                                    Certified Systems
                                </h4>
                                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                    NFPA and UL-listed systems engineered to exceed international standards.
                                </p>
                            </div>

                            {/* Card 2: Engineering Expertise */}
                            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300">
                                <div className="text-[#091D38]">
                                    {/* Drafting Divider Compass Icon matching Image 3 exactly */}
                                    <svg 
                                        className="w-8 h-8" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2.2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="5" r="2" />
                                        <path d="m10.5 7-5 13" />
                                        <path d="m13.5 7 5 13" />
                                        <path d="M7.5 15h9" />
                                    </svg>
                                </div>
                                <h4 className="text-base sm:text-lg font-bold text-[#091D38] mt-3.5">
                                    Engineering Expertise
                                </h4>
                                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                    Senior engineers with decades of experience in high-hazard environments.
                                </p>
                            </div>

                            {/* Card 3: Project Consultation */}
                            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300">
                                <div className="text-[#091D38]">
                                    {/* Trending Sparkle Line Chart Icon matching Image 3 */}
                                    <svg 
                                        className="w-8 h-8" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2.2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <path d="m3 16 6-6 4 4 8-8" />
                                        <path d="M21 6v5" />
                                        <path d="M21 6h-5" />
                                        <circle cx="9" cy="10" r="1.5" fill="currentColor" />
                                    </svg>
                                </div>
                                <h4 className="text-base sm:text-lg font-bold text-[#091D38] mt-3.5">
                                    Project Consultation
                                </h4>
                                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                    Deep-dive assessment and planning from the earliest design stages.
                                </p>
                            </div>

                            {/* Card 4: Maintenance */}
                            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300">
                                <div className="text-[#091D38]">
                                    <Wrench size={32} strokeWidth={2.2} />
                                </div>
                                <h4 className="text-base sm:text-lg font-bold text-[#091D38] mt-3.5">
                                    Maintenance
                                </h4>
                                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                    Comprehensive 24/7 maintenance contracts to ensure system readiness.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </Container>
        </section>
    );
}
