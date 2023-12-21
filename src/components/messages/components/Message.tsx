import "./message.css"

export const Message = ({text,type,lang}:{text:string|null,type:"bot"|"user",lang:"en"|"fr"|"ar" | "es"}) => {
   
  return (
    <div className={`${(type === "bot" && lang === "ar")  ? "botMessage botArabicMessage" : type === "user" ? "userMessage" :"botMessage botEnglishMessage"} message`}>
        <p>{text}</p>
    </div>
  )
}





