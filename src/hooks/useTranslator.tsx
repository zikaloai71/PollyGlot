export const useTranslator = () => {
  async function translate(language: string, text: string) {
    try {
      const resp = await fetch(
        "https://openai-api-worker.zakarialoai71.workers.dev/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            textToTranslate: text,
            src_lang: "en_XX",
            tgt_lang: language,
          }),
        }
      );
  
      const completion = (await resp.json()) as {
        content: string;
        error: string;
      };
      if (!resp.ok) {
        throw new Error(`Worker Error: ${completion.error}`);
      }

      return completion.content;
    } catch (err) {
      console.log(err);
      return "Sorry I couldn't translate this text";
    }
  }

  return {
    translate,
  };
};
