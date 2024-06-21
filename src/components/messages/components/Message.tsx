import "./message.css"

export const Message = ({text,type,lang}:{text:string|null,type:"bot"|"user",lang:"en_XX"|"fr_XX"|"ar_AR" | "es_XX"}) => {
   
  return (
    <div className={`${(type === "bot" && lang === "ar_AR")  ? "botMessage botArabicMessage" : type === "user" ? "userMessage" :"botMessage botEnglishMessage"} message`}>
        <p>{text}</p>
    </div>
  )
}





