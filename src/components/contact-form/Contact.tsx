import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contato" className="w-full px-4 py-12 text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-start text-rose-600 mb-6">
          Entre em contato conosco
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
