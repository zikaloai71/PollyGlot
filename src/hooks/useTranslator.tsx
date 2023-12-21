import OpenAI from "openai";



const openai = new OpenAI({
    dangerouslyAllowBrowser:true,
    apiKey: import.meta.env.VITE_APP_OPEN_AI as string,
  });
  
export const useTranslator = () => {

    async function translate(language:string,text:string) {
        try{
            const completion = await openai.chat.completions.create({
                messages: [{"role": "system", "content": "You are a translator who has knowledge in different languages such as arabic, english , french and spanish the user will ask you in english to translate a certain text to one of the language you speak fluently and you should reply with the translated text for this sentence only with no more words than the original text"},
                    {"role": "user", "content": `Translate into ${language} the following text: ${text}`},
                  ],
                model: "gpt-3.5-turbo",
              });
             
            return completion.choices[0].message.content
        }
        catch(err){
            console.log(err)
            return "Sorry I couldn't translate this text"
        }
    
      }
   
  return {
        translate
  }
}


