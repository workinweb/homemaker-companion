import * as React from "react";

interface ContactUsEmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const ContactUsEmailTemplate: React.FC<
    Readonly<ContactUsEmailTemplateProps>
> = ({ name, email, phone, message }) => (
    <div>
        <h3>
            We have received a new inquiry through the "Contact Us" service on
            our website. Here are the details:
        </h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <h3>Message: </h3>
        <p>{message} </p>
    </div>
);
