import Replicate from 'replicate'

export const runtime = 'edge'

export async function POST(req) {
  const { prompt } = await req.json()
  
  const replicate = new Replicate({
    auth: process.env.REPLICATE_KEY
  })

  try {
    const output = await replicate.run(
      "meta/llama-3-8b-instruct",
      {
        input: {
          prompt: `[SYSTEM: Respond like NIXXEL - savage, unfiltered, 1-2 sentences max]\n\nUSER: ${prompt}\nNIXXEL:`,
          max_new_tokens: 100
        }
      }
    )

    return new Response(JSON.stringify({ 
      response: output.join('').split('NIXXEL:')[1]?.trim() || "BRUHHH ERROR"
    }))
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: "AI BRAINROT DETECTED"
    }), { status: 500 })
  }
}
