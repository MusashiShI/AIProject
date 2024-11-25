import React from "react";

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
    };

    return React.createElement(
        "div",
        { style: { padding: "20px", color: "white", fontFamily: "'Orbitron', sans-serif" } },
        React.createElement(
            "header",
            null,
            React.createElement(
                "nav",
                null,
                React.createElement(
                    "ul",
                    { className: "navbar" },
                    React.createElement("li", null, React.createElement("a", { href: "index.html" }, "Início")),
                    React.createElement("li", null, React.createElement("a", { href: "sobre.html" }, "Sobre")),
                    React.createElement("li", null, React.createElement("a", { href: "implementacoes.html" }, "Implementações")),
                    React.createElement("li", null, React.createElement("a", { href: "noticias.html" }, "Notícias")),
                    React.createElement("li", null, React.createElement("a", { href: "contato.html" }, "Contato"))
                )
            )
        ),
        React.createElement(
            "main",
            { style: { marginTop: "20px" } },
            React.createElement("h2", null, "Entre em Contato"),
            React.createElement(
                "form",
                {
                    onSubmit: handleSubmit,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        maxWidth: "600px",
                        margin: "0 auto",
                        padding: "20px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "8px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                    },
                },
                React.createElement("label", { style: { color: "#ddd" } }, "Nome:"),
                React.createElement("input", {
                    type: "text",
                    name: "name",
                    required: true,
                    placeholder: "Seu nome",
                    style: {
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        background: "#333",
                        color: "white",
                    },
                }),
                React.createElement("label", { style: { color: "#ddd" } }, "E-mail:"),
                React.createElement("input", {
                    type: "email",
                    name: "email",
                    required: true,
                    placeholder: "Seu e-mail",
                    style: {
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        background: "#333",
                        color: "white",
                    },
                }),
                React.createElement("label", { style: { color: "#ddd" } }, "Mensagem:"),
                React.createElement("textarea", {
                    name: "message",
                    required: true,
                    placeholder: "Sua mensagem",
                    rows: 5,
                    style: {
                        padding: "10px",
                        borderRadius: "5px",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                        background: "#333",
                        color: "white",
                    },
                }),
                React.createElement(
                    "button",
                    {
                        type: "submit",
                        style: {
                            padding: "10px",
                            borderRadius: "5px",
                            border: "none",
                            backgroundColor: "#4a90e2",
                            color: "white",
                            cursor: "pointer",
                            fontWeight: "bold",
                        },
                    },
                    "Enviar"
                )
            )
        ),
        React.createElement(
            "footer",
            {
                style: {
                    textAlign: "center",
                    marginTop: "20px",
                    padding: "10px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                },
            },
            "© 2024 Computação Quântica, IBM, Made by José Beselga [School Project]"
        )
    );
};

export default Contact;
