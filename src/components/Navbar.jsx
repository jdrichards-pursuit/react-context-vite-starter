//this is how I would consume the context if I did not want to create the useLanguage custom hook from LanguageContext.js
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Navbar = () => {
  const { language, english, french } = useContext(LanguageContext);

  const { languageWord } = language === "english" ? english : french;

  return <nav>{languageWord}</nav>;
};

export default Navbar;
