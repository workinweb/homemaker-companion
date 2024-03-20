import * as React from "react";

interface EmploymentTemplateProps {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const EmploymentTemplate: React.FC<
    Readonly<EmploymentTemplateProps>
> = ({ name, email, phone, message }) => (
    <div>
        <h3>This is a test, PDF is attached</h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <h3>Message: </h3>
        <p>{message} </p>
    </div>
);
