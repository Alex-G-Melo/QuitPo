import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'QuitPo - Your Recovery Journey Starts Here',
  description:
    'QuitPo helps you break free from porn addiction with AI-powered support, streak tracking, and a supportive community.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  );
}
