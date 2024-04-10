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

        <p style={{ margin: "2px 0 2px" }}>
            ------------------------------------------------------------------------------
        </p>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <p
                style={{
                    fontSize: "50px",
                    color: "#2b7fa8",
                    fontStyle: "italic",
                    fontWeight: "bold",
                    fontFamily: "Edwardian Script ITC",
                }}
            >
                Vadia Estevez
            </p>

            <p
                style={{
                    color: "#2b7fa8",
                    fontSize: "24px",
                    textAlign: "center",
                }}
            >
                owner
            </p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
            <div>
                <img
                    src="https://res.cloudinary.com/dub477vzt/image/upload/v1711679629/mypdf/v3ianf11kfrvh14tig41.png"
                    style={{
                        width: "120px",
                        height: "100px",
                        marginTop: "5px",
                        background: "transparent",
                    }}
                    alt="Evan Home Care Logo"
                />
            </div>

            <div style={{ marginLeft: "20px" }}>
                <p>Office: (321) 300-9077</p>
                <p>Phone: (321) 477-9925</p>
                <p>Fax: (321) 291-5124</p>

                <p>
                    <a href="evanhomecare@gmail.com">evanhomecare@gmail.com</a>{" "}
                    - <a href="www.evanhomecare.com">www.evanhomecare.com</a>
                </p>
                <p>1101 Miranda Ln Suite 127 Kissimmee, FL 34741</p>
            </div>
        </div>
    </div>
);
