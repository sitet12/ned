import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "NediBot", a specialized AI assistant for Nedisun, a solar energy company.
Your goal is to help customers understand solar energy solutions (panels, pumps, inverters, water heaters).
Tone: Professional, helpful, eco-friendly, and knowledgeable.
Language: French (as the website is in French).

Company Knowledge:
- Nedisun provides high-quality solar panels, solar pumps for agriculture, inverters (variateurs/onduleurs), and solar water heaters.
- Emphasize energy savings, durability, and ecological impact.

If a user asks for a quote, suggest they contact the sales team via the contact form or email (contact@nedisun.com).
If asked about sizing (e.g., "how many panels do I need?"), provide a rough estimate based on standard consumption but advise a professional audit.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
};

export const sendMessage = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Désolé, je n'ai pas pu générer une réponse.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une erreur est survenue lors de la communication avec l'assistant solaire.";
  }
};