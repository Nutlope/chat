import Together from 'together-ai';

if (!process.env.TOGETHER_API_KEY) {
  throw new Error('Missing env var from Together.ai');
}

export const config = {
  runtime: 'edge',
};

const together = new Together({
  auth: process.env.TOGETHER_API_KEY,
});

const handler = async (req: Request): Promise<Response> => {
  const { prompt } = (await req.json()) as {
    prompt?: string;
  };

  if (!prompt) {
    return new Response('No prompt in the request', { status: 400 });
  }

  const stream = await together.inference(
    'mistralai/Mistral-7B-Instruct-v0.1',
    {
      prompt: prompt + ' Reply in markdown.',
      max_tokens: 1000,
      stream_tokens: true,
    }
  );

  // return stream response (SSE)
  return new Response(stream as ReadableStream, {
    headers: new Headers({
      // 'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
    }),
  });
};

export default handler;
