# Chat app

A Next.js chat app that uses Mistral 7B through Together.ai.

<!-- Insert screenshot here -->

## How it works

This project uses Mistral 7B through Together.ai's serverless endpoints and [Vercel Edge functions](https://vercel.com/features/edge-functions) with streaming. It takes the prompt the user specifies, sends it to Mistral 7B via a Vercel Edge function, then streams the response back to the application.

## Running Locally

After cloning the repo, go to [Together.ai](https://together.ai) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```
