const { useState } = React;

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contacto, setContacto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!nome.trim()) newErrors.nome = "O nome é obrigatório.";
    if (!email.trim()) newErrors.email = "O email é obrigatório.";
    if (!contacto.trim()) newErrors.contacto = "O contacto é obrigatório.";
    if (!descricao.trim()) newErrors.descricao = "A descrição é obrigatória.";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formData = { nome, email, contacto, descricao };
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    setMessage("Formulário enviado com sucesso!");
    setErrors({});

    setNome("");
    setEmail("");
    setContacto("");
    setDescricao("");
  };

  return React.createElement(
    "div",
    null,
    message && React.createElement("p", { style: { color: "#4CAF50", fontSize: "16px", fontWeight: "bold" } }, message),
    React.createElement(
      "form",
      {
        onSubmit: handleSubmit,
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: 'rgb(51, 51, 51)',
          border: "1px solid #ccc"
        }
      },
      React.createElement("input", {
        type: "text",
        placeholder: "Nome",
        value: nome,
        onChange: (e) => setNome(e.target.value),
        style: {
          padding: "12px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none",
          transition: "border 0.3s ease-in-out"
        }
      }),
      errors.nome && React.createElement("p", { style: { color: "red", fontSize: "14px", margin: 0 } }, errors.nome),
      React.createElement("input", {
        type: "email",
        placeholder: "E-mail",
        value: email,
        onChange: (e) => setEmail(e.target.value),
        style: {
          padding: "12px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none",
          transition: "border 0.3s ease-in-out"
        }
      }),
      errors.email && React.createElement("p", { style: { color: "red", fontSize: "14px", margin: 0 } }, errors.email),
      React.createElement("input", {
        type: "text",
        placeholder: "Contacto",
        value: contacto,
        onChange: (e) => setContacto(e.target.value),
        style: {
          padding: "12px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none",
          transition: "border 0.3s ease-in-out"
        }
      }),
      errors.contacto && React.createElement("p", { style: { color: "red", fontSize: "14px", margin: 0 } }, errors.contacto),
      React.createElement("textarea", {
        placeholder: "Descreva o motivo do contato",
        value: descricao,
        onChange: (e) => setDescricao(e.target.value),
        style: {
          padding: "12px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none",
          minHeight: "100px",
          resize: "vertical",
          transition: "border 0.3s ease-in-out"
        }
      }),
      errors.descricao && React.createElement("p", { style: { color: "red", fontSize: "14px", margin: 0 } }, errors.descricao),
      React.createElement("button", {
        type: "submit",
        style: {
          padding: "14px 24px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease-in-out"
        }
      }, "Enviar")
    )
  );
}

// ReactDOM.render(React.createElement(Formulario), document.getElementById('root')); 
