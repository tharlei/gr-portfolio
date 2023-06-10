export const config = {
  company: {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || '',
    description: process.env.NEXT_PUBLIC_COMPANY_DESCRIPTION || '',
    email: process.env.NEXT_PUBLIC_COMPANY_EMAIL || '',
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || '',
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || '',
    linktree: process.env.NEXT_PUBLIC_SOCIAL_LINKTREE || '',
    whatsapp: process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP || '',
    whatsappMessage: process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP_MESSAGE || '',
  },
  portfolio: process.env.NEXT_PUBLIC_PORTFOLIO_URL || '',
};
