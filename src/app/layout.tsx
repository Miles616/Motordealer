import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'MotorKhan - Car Dealer in Rithala, Rohini, Delhi',
  description: 'Your premier destination for quality second hand cars in Delhi. We are a trusted used car dealer in Rithala and Rohini, offering a wide selection of affordable used cars for sale. Sell your car with us.',
  keywords: ['car dealer rithala', 'second hand car', 'used car', 'used car for sale', 'car dealer near me', 'car dealer near me rithala', 'car dealer near me rohini', 'motor khan', 'car sell rithala', 'affordable second hand car', 'used car rohini', 'second hand car rohini', 'car dealer rohini'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CarDealer",
    "name": "MotorKhan",
    "description": "Premier car dealer in Rithala, Rohini for second hand and used cars.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 12, near Rice Mill, Vijay vihar Phase I, Block B",
      "addressLocality": "Rithala, Rohini",
      "postalCode": "110085",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "email": "motorkhandelhi@gmail.com",
    "url": "https://motorkhan.com/"
  };

  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Boldonse&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
