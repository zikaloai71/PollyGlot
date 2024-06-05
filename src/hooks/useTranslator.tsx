export const useTranslator = () => {

    async function translate(language:string,text:string) {
        try{
            const resp = await fetch("https://openai-api-worker.zakarialoai71.workers.dev/",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify([{"role": "system", "content": "You are a translator who has knowledge in different languages such as arabic, english , french and spanish the user will ask you in english to translate a certain text to one of the language you speak fluently and you should reply with the translated text for this sentence only with no more words than the original text"},
                {"role": "user", "content": `Translate into ${language} the following text: ${text}`},
              ]),
              }
            )
            const completion = await resp.json() as {content:string}
             
            return completion.content
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


