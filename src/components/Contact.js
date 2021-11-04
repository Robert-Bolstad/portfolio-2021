import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { schema } from "../utils/schema";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [reset, setReset] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (reset === true) {
      resetForm();
    }
  }, [reset]);

  const resetForm = () => {
    setSubmitting(false);
    setSuccess(false);
    setReset(false);
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    emailjs
      .send(
        "gmail",
        "template_18ouam7",
        data,
        init("user_6OnGW6LOJzT41fOZ2srrP")
      )
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="contact">
      <div className="contact__wrapper">
        <h2 className="contact__heading">
          Contact /<span className="contact__heading--color">&#62;</span>
        </h2>

        <div className="contact__info">
          <div className="contact__phone">
            <p className="contact__nr">+47 98 42 96 73</p>
          </div>
          <div className="contact__email">
            <p className="contact__address">Robert.s.bolstad@gmail.com</p>
          </div>
        </div>
        <div className="contact__form">
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <fieldset className="form__fieldset" disabled={submitting}>
              {success ? (
                <div className="form__success">
                  <i className="form__success--icon fas fa-check-circle"></i>
                  <span className="form__success--inner">Message Sent</span>
                </div>
              ) : null}

              <div className="form__inputs-top">
                <div className="form__group">
                  <label className="form__label" htmlFor="form__input--name">
                    Your Name
                  </label>
                  <input
                    ref={register}
                    className="form__input form__input--name"
                    type="text"
                    name="name"
                    id="form__input--name"
                  />
                  {errors.name && (
                    <p className="form__error-message">
                      <span className="form__error-message--asterisk">
                        {"* "}
                      </span>
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="form__group">
                  <label className="form__label" htmlFor="form__input--email">
                    Email
                  </label>
                  <input
                    className="form__input form__input--email"
                    type="text"
                    name="email"
                    ref={register}
                    id="form__input--email"
                  />
                  {errors.email && (
                    <p className="form__error-message">
                      <span className="form__error-message--asterisk">
                        {"* "}
                      </span>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="form__group form__subject">
                <label className="form__label" htmlFor="form__input--subject">
                  Subject
                </label>
                <input
                  className="form__input form__input--subject"
                  id="form__input--subject"
                  type="text"
                  name="subject"
                  ref={register}
                />
                {errors.subject && (
                  <p className="form__error-message">
                    <span className="form__error-message--asterisk">
                      {"* "}
                    </span>
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="form__input--textbox">
                  Message
                </label>
                <textarea
                  className="form__textbox"
                  name="message"
                  ref={register}
                  type="text"
                  id="form__input--textbox"
                />
                {errors.message && (
                  <p className="form__error-message">
                    <span className="form__error-message--asterisk">
                      {"* "}
                    </span>
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="form__group">
                {success ? (
                  <button
                    type="button"
                    onClick={() => setReset(true)}
                    className="form__submit"
                  >
                    <i className="fas fa-paper-plane"></i>
                    <span className="form__submit--text">New Message</span>
                  </button>
                ) : (
                  <button type="submit" className="form__submit">
                    <i className="fas fa-paper-plane"></i>
                    <span className="form__submit--text">
                      {submitting ? "Submitting" : "Send"}
                    </span>
                  </button>
                )}
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
