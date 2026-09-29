/**
 * Informações Oficiais da Empresa: LAVA CAR LÍDER
 * 
 * ATENÇÃO: As informações abaixo foram extraídas estritamente dos dados
 * fornecidos pela empresa. Campos não confirmados utilizam placeholders explícitos.
 */

export const COMPANY_CONFIG = {
  name: "Lava Car Líder",
  shortName: "Líder",
  segment: "Estética Automotiva",
  tagline: "Seu veículo no Padrão Líder",
  subtitle: "Estética automotiva com experiência, cuidado e padrão de qualidade desde 1992.",
  foundingYear: "1992",
  badge: "Padrão Líder em Carros e Caminhões",
  sustainabilityStatement: "Estética Automotiva Sustentável do Sul do Brasil",

  // Contato & WhatsApp
  // Número fornecido: +55 42 988445194
  whatsappNumber: "5542988445194",
  whatsappFormatted: "(42) 98844-5194",
  defaultWhatsAppMessage: "Olá! Gostaria de saber mais sobre os serviços da Lava Car Líder.",

  // Endereço Oficial
  address: {
    street: "Rua Santos Dumont, 391",
    neighborhood: "Centro", // [BAIRRO_AQUI caso diferente]
    city: "Marechal Mallet",
    state: "Paraná",
    stateShort: "PR",
    cep: "84571-175",
    country: "Brasil",
    fullAddress: "Rua Santos Dumont, 391 - Marechal Mallet - PR, 84571-175",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Santos+Dumont+391+Marechal+Mallet+PR+84571175",
    // Embed URL para exibição de mapa da região de Marechal Mallet / Rua Santos Dumont
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.137351659972!2d-50.771895!3d-25.688175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94efaa4b09ec258b%3A0xc3f6a27e0eeef753!2sR.+Santos+Dumont%2C+391+-+Mallet%2C+PR%2C+84570-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  },

  // Redes Sociais
  social: {
    instagram: {
      handle: "@lavacar lider",
      display: "@lavacarlider",
      url: "https://www.instagram.com/lavacarlider",
    },
  },

  // Placeholders para dados futuros a serem confirmados pelo cliente:
  placeholders: {
    horarioFuncionamento: "[HORARIO_AQUI]", // Ex: Segunda a Sábado - 08:00 às 18:00
    telefoneFixo: "[TELEFONE_AQUI]",
  },
};

/**
 * Função utilitária para gerar links do WhatsApp devidamente codificados
 */
export function buildWhatsAppUrl(customText?: string): string {
  const text = customText || COMPANY_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
