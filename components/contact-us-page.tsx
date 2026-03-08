import { Clock8Icon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import ContactUs from "@/components/shadcn-studio/blocks/contact-us-page-01/contact-us-page-01";

const contactInfo = [
  {
    title: "Program",
    icon: Clock8Icon,
    description: "Luni - Vineri\n09:00 - 18:00"
  },
  {
    title: "Locație",
    icon: MapPinIcon,
    description: "Sibiu, România\nColaborăm și remote"
  },
  {
    title: "Email",
    icon: MailIcon,
    description: "hello@agentie-marketing.ro\nbrief@agentie-marketing.ro"
  },
  {
    title: "Telefon",
    icon: PhoneIcon,
    description: "+40 740 000 000\n+40 745 000 000"
  }
];

const ContactUsPage = () => {
  return <ContactUs contactInfo={contactInfo} />;
};

export default ContactUsPage;
