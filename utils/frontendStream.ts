import {
  ParsedEvent,
  ReconnectInterval,
  createParser,
} from 'eventsource-parser';

export default async function frontendStream({ data, setLlmResponse }: any) {
  if (!data) {
    return;
  }

  const onParse = (event: ParsedEvent | ReconnectInterval) => {
    if (event.type === 'event') {
      const data = event.data;
      if (data === '[DONE]') {
        return;
      }
      try {
        const text = JSON.parse(data).choices[0].text ?? '';
        console.log({ text });
        setLlmResponse((prev: string) => prev + text);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // https://web.dev/streams/#the-getreader-and-read-methods
  const reader = data.getReader();
  const decoder = new TextDecoder();
  const parser = createParser(onParse);
  let done = false;
  while (!done) {
    const { value, done: doneReading } = await reader.read();
    done = doneReading;
    const chunkValue = decoder.decode(value);
    parser.feed(chunkValue);
  }
}
