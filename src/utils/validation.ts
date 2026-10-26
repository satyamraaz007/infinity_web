export type ContactValues = { name: string; email: string; phone: string; subject: string; message: string };

export function validateContact(values: ContactValues) {
    const errors: Partial<Record<keyof ContactValues, string>> = {};
    if (!values.name.trim()) errors.name = 'Please enter your name.';
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.';
    if (!values.phone.trim()) errors.phone = 'Please enter your phone number.';
    if (!values.subject.trim()) errors.subject = 'Please enter a subject.';
    if (!values.message.trim()) errors.message = 'Please tell us how we can help.';
    return errors;
}
