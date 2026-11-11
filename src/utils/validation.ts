export type ContactValues = {
    name?: string;
    fullName?: string;
    companyName?: string;
    email: string;
    phone: string;
    subject?: string;
    requirement?: string;
    message: string;
};

export function validateContact(values: Partial<ContactValues>) {
    const errors: Record<string, string> = {};
    const nameVal = values.fullName ?? values.name ?? '';
    if (!nameVal.trim()) errors.fullName = 'Please enter your full name.';
    if (values.companyName !== undefined && !values.companyName.trim()) {
        errors.companyName = 'Please enter your company name.';
    }
    if (!values.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Please enter a valid email address.';
    }
    if (!values.phone?.trim()) {
        errors.phone = 'Please enter your phone number.';
    }
    const reqVal = values.requirement ?? values.subject ?? '';
    if (!reqVal.trim()) {
        errors.requirement = 'Please specify your requirement.';
    }
    if (!values.message?.trim()) {
        errors.message = 'Please enter your message.';
    }
    return errors;
}
