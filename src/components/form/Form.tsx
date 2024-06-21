import { useRef, useState } from "react";

import { useMessageStore } from "../../store/messageStore";
import { useLanguageStore } from "../../store/languageStore";
import { useLoadingStore } from "../../store/loadingStore";
import { useTranslator } from "../../hooks/useTranslator";

import SendBtn from "../../assets/images/send-btn.svg";
import DeleteBtn from "../../assets/images/delete.png";

import "./form.css";

export const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isLoading, setLoading } = useLoadingStore();
  const [formError, setFormError] = useState<string>("");
  const { insertMessage, clearMessages } = useMessageStore();
  const { language } = useLanguageStore();
  const { translate } = useTranslator();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputRef.current === null) return;
    if (inputRef.current.value === "") {
      setFormError("Please enter a text");
      return;
    }
    if (inputRef.current.value.length < 3) {
      setFormError("The text should be at least 3 characters");
      return;
    }
    if (inputRef.current.value.length > 100) {
      setFormError("The text should be less than 100 characters");
      return;
    }
    setLoading(true);
    setFormError("");

    insertMessage({ type: "user", text: inputRef.current.value, lang: "en_XX" });

    translate(language, inputRef.current.value)
      .then((botMessage) => {
        insertMessage({ type: "bot", text: botMessage, lang: language });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    inputRef.current.value = "";
  };

  return (
    <section className="formWrapper">
      {formError && <p className="formError">{formError}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" id="message" ref={inputRef} />
        <button
          type="submit"
          className="sendBtn"
          disabled={isLoading}
          aria-label="send text"
        >
          <img src={SendBtn} />
        </button>
        <button
          className="deleteBtn"
          type="button"
          aria-label="clear chat"
          onClick={() => {
            clearMessages();
          }}
        >
          <img src={DeleteBtn} className="deleteImage" />
        </button>
      </form>
    </section>
  );
};
