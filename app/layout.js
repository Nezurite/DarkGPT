export const metadata = {
  title: "DARKGPT - NIXXEL'S DEMON AI",
  description: "UNFILTERED AI SAVAGERY",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black text-green-400">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
