import * as React from "react";

interface ContactUsEmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    message: string;
    address?: string;
}

export const ContactUsEmailTemplate: React.FC<
    Readonly<ContactUsEmailTemplateProps>
> = ({ name, email, address, phone, message }) => (
    <div
        style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
        }}
    >
        <div
            style={{
                backgroundColor: "#f8f9fa",
                padding: "25px",
                borderRadius: "8px",
                marginBottom: "20px",
            }}
        >
            <h2
                style={{
                    color: "#2b7fa8",
                    marginBottom: "20px",
                    textAlign: "center",
                }}
            >
                New Contact Inquiry
            </h2>
            <div
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "6px",
                }}
            >
                <p
                    style={{
                        fontSize: "16px",
                        color: "#666",
                        marginBottom: "15px",
                    }}
                >
                    <strong style={{ color: "#2b7fa8" }}>Name:</strong> {name}
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#666",
                        marginBottom: "15px",
                    }}
                >
                    <strong style={{ color: "#2b7fa8" }}>Email:</strong> {email}
                </p>
                <p
                    style={{
                        fontSize: "16px",
                        color: "#666",
                        marginBottom: "15px",
                    }}
                >
                    <strong style={{ color: "#2b7fa8" }}>Phone:</strong> {phone}
                </p>
                {address && (
                    <div style={{ marginTop: "20px" }}>
                        <h3 style={{ color: "#2b7fa8", marginBottom: "10px" }}>
                            Address:
                        </h3>
                        <p
                            style={{
                                fontSize: "16px",
                                color: "#666",
                                lineHeight: "1.6",
                            }}
                        >
                            {address}
                        </p>
                    </div>
                )}
                <div style={{ marginTop: "20px" }}>
                    <h3 style={{ color: "#2b7fa8", marginBottom: "10px" }}>
                        Message:
                    </h3>
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#666",
                            lineHeight: "1.6",
                        }}
                    >
                        {message}
                    </p>
                </div>
            </div>
        </div>

        <hr style={{ border: "1px solid #eee", margin: "30px 0" }} />

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <h2
                style={{
                    color: "#2b7fa8",
                    fontSize: "32px",
                    fontFamily: "Georgia, serif",
                    margin: "0",
                }}
            >
                Vadia Estevez
            </h2>
            <p
                style={{
                    color: "#2b7fa8",
                    fontSize: "18px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    margin: "5px 0",
                }}
            >
                Owner
            </p>
        </div>

        <div
            style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f8f9fa",
                padding: "20px",
                borderRadius: "8px",
            }}
        >
            <div>
                <img
                    src="https://res.cloudinary.com/dub477vzt/image/upload/v1711679629/mypdf/v3ianf11kfrvh14tig41.png"
                    style={{
                        width: "120px",
                        height: "100px",
                        objectFit: "contain",
                    }}
                    alt="Evan Home Care Logo"
                />
            </div>

            <div
                style={{
                    marginLeft: "30px",
                    borderLeft: "2px solid #2b7fa8",
                    paddingLeft: "30px",
                }}
            >
                <p style={{ margin: "5px 0", color: "#555" }}>
                    <strong>Office:</strong> (321) 300-9077
                </p>
                <p style={{ margin: "5px 0", color: "#555" }}>
                    <strong>Phone:</strong> (321) 477-9925
                </p>
                <p style={{ margin: "5px 0", color: "#555" }}>
                    <strong>Fax:</strong> (321) 291-5124
                </p>
                <p style={{ margin: "5px 0" }}>
                    <a
                        href="mailto:evanhomecare@gmail.com"
                        style={{ color: "#2b7fa8", textDecoration: "none" }}
                    >
                        evanhomecare@gmail.com
                    </a>{" "}
                    -{" "}
                    <a
                        href="https://www.evanhomecare.com"
                        style={{ color: "#2b7fa8", textDecoration: "none" }}
                    >
                        www.evanhomecare.com
                    </a>
                </p>
                <p style={{ margin: "5px 0", color: "#555" }}>
                    1101 Miranda Ln Suite 127 Kissimmee, FL 34741
                </p>
            </div>
        </div>
    </div>
);
