import { useLanguageStore } from "../../store/languageStore";

import Arabic from "../../assets/images/arabic.webp";
import France from "../../assets/images/france.png";
import Spain from "../../assets/images/spain.png";

import "./flags.css";

export const Flags = () => {
  const { language, setLang } = useLanguageStore();

  return (
    <div className="flags">
      <img
        src={Arabic}
        alt="arabic language"
        className={`${language === "ar_AR" && "activeFlag"} flag`}
        onClick={() => {
          setLang("ar_AR");
        }}
      />
      <img
        src={France}
        alt="french language"
        className={`${language === "fr_XX" && "activeFlag"} flag`}
        onClick={() => {
          setLang("fr_XX");
        }}
      />
      <img
        src={Spain}
        alt="spanish language"
        className={`${language === "es_XX" && "activeFlag"} flag`}
        onClick={() => {
          setLang("es_XX");
        }}
      />
    </div>
  );
};
