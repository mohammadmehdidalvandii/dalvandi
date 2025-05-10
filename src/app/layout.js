import "./globals.css";



export const metadata = {
  title:"My Personal Website",
  description:"Welcome to my personal website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
