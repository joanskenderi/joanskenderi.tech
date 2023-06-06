import React from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Please enter a name that is at least 2 characters long")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  message: Yup.string().required("Please enter your message"),
});

const Contact = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: values.name,
          to_name: "Joan",
          from_email: values.email,
          to_email: import.meta.env.VITE_TO_EMAIL,
          message: values.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitting(false);
          alert(
            "Thanks for your message! I will get back to you as soon as possible."
          );
          resetForm();
        },
        (error) => {
          setSubmitting(false);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-quaternary p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={Schema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mt-12 flex flex-col gap-8">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <Field
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <Field
                  type="email"
                  name="email"
                  placeholder="What's your email?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <Field
                  as="textarea"
                  rows="7"
                  name="message"
                  placeholder="What do you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-tertiary hover:bg-tertiary-darker py-4 px-8 rounded-lg text-white font-medium text-xl transition-colors duration-300 ease-in-out"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
