export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'logo', type: 'image' },
    { name: 'contact', type: 'object', fields: [{ name: 'phone', type: 'string' }, { name: 'email', type: 'string' }] },
    { name: 'address', type: 'text' },
    { name: 'socialLinks', type: 'object', fields: [{ name: 'facebook', type: 'url' }, { name: 'instagram', type: 'url' }, { name: 'youtube', type: 'url' }, { name: 'whatsapp', type: 'url' }] },
    { name: 'whatsAppNumber', title: 'WhatsApp Number', type: 'string' },
    { name: 'footerContent', type: 'text' }
  ]
};
