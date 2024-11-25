const { useState } = React;

function Formulario() {
  // Estados para armazenar os valores dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [contacto, setContacto] = useState("");
  const [message, setMessage] = useState("");  // Mensagem de sucesso

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Salva os dados no localStorage
    const formData = { nome, email, contacto };
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    // Exibe a mensagem de sucesso
    setMessage("Formulário enviado com sucesso!");

    // Limpa os campos
    setNome("");
    setEmail("");
    setContacto("");
  };

  // Retorno do formulário
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "Formulário de Contato"),
    message && React.createElement("p", { style: { color: "green" } }, message), // Exibe a mensagem de sucesso
    React.createElement(
      "form",
      { onSubmit: handleSubmit, style: { display: "flex", flexDirection: "column", gap: "10px", width: "300px" } },
      React.createElement("input", {
        type: "text",
        placeholder: "Nome",
        value: nome,
        onChange: (e) => setNome(e.target.value),
        style: { padding: "8px", fontSize: "16px" }
      }),
      React.createElement("input", {
        type: "email",
        placeholder: "E-mail",
        value: email,
        onChange: (e) => setEmail(e.target.value),
        style: { padding: "8px", fontSize: "16px" }
      }),
      React.createElement("input", {
        type: "text",
        placeholder: "Contacto",
        value: contacto,
        onChange: (e) => setContacto(e.target.value),
        style: { padding: "8px", fontSize: "16px" }
      }),
      React.createElement("button", {
        type: "submit",
        style: { padding: "10px", fontSize: "16px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px" }
      }, "Enviar")
    )
  );
}
