import { type Metadata } from 'next'
import Script from 'next/script'

import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

function ChatUIScript() {
  return (
    <Script
      id="chatbot-embed"
      type="module"
      defer
      dangerouslySetInnerHTML={{
        __html: `
          import Chatbot from "https://cdn.n8nchatui.com/v1/embed.js";
          Chatbot.init({
            "n8nChatUrl": "https://phidiaslo.app.n8n.cloud/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat",
            "metadata": {},
            "theme": {
              "button": {
                "backgroundColor": "#a5bfdb",
                "right": 20,
                "bottom": 20,
                "size": 50,
                "iconColor": "#373434",
                "customIconSrc": "https://www.svgrepo.com/show/506340/tooth.svg",
                "customIconSize": 60,
                "customIconBorderRadius": 15,
                "autoWindowOpen": {
                  "autoOpen": true,
                  "openDelay": 2
                },
                "borderRadius": "rounded"
              },
              "tooltip": {
                "showTooltip": true,
                "tooltipMessage": "Hello 👋 How can I help you?",
                "tooltipBackgroundColor": "#f5fbff",
                "tooltipTextColor": "#1c1c1c",
                "tooltipFontSize": 15
              },
              "chatWindow": {
                "borderRadiusStyle": "rounded",
                "avatarBorderRadius": 25,
                "messageBorderRadius": 6,
                "showTitle": true,
                "title": "Radiance Dental Clinic",
                "titleAvatarSrc": "https://www.svgrepo.com/show/506340/tooth.svg",
                "avatarSize": 40,
                "welcomeMessage": "Hi, I'm from Radiance Dental. How can I help you?",
                "errorMessage": "Oops, something went wrong",
                "backgroundColor": "#ffffff",
                "height": 600,
                "width": 400,
                "fontSize": 16,
                "starterPrompts": [
                  "Can I make an appointment?",
                  "What services do you offer?"
                ],
                "starterPromptFontSize": 15,
                "renderHTML": false,
                "clearChatOnReload": false,
                "showScrollbar": false,
                "botMessage": {
                  "backgroundColor": "#a5bfdb",
                  "textColor": "#333",
                  "showAvatar": true,
                  "avatarSrc": "https://www.svgrepo.com/show/334455/bot.svg"
                },
                "userMessage": {
                  "backgroundColor": "#fff6f3",
                  "textColor": "#050505",
                  "showAvatar": true,
                  "avatarSrc": "https://www.svgrepo.com/show/532363/user-alt-1.svg"
                },
                "textInput": {
                  "placeholder": "Type your query",
                  "backgroundColor": "#ffffff",
                  "textColor": "#1e1e1f",
                  "sendButtonColor": "#a5bfdb",
                  "maxChars": 50,
                  "maxCharsWarningMessage": "You exceeded the characters limit. Please input less than 50 characters.",
                  "autoFocus": false,
                  "borderRadius": 6,
                  "sendButtonBorderRadius": 50
                }
              }
            }
          });
        `,
      }}
    />
  )
}

export const metadata: Metadata = {
  title: 'Chat Demo',
  description: 'A demo of AI powered chatbot',
}

export default function ChatDemo() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Chat Demo"
        title="AI-powered ChatBot for Radiance Dental"
      >
        <p>Click on the 🦷 button on bottom right to start a conversation.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <ChatUIScript />
      </Container>
    </RootLayout>
  )
}
