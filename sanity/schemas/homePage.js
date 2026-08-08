export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    { name: 'heroSlides', title: 'Hero Slides', type: 'array', of: [{ type: 'object', fields: [
      { name: 'image', type: 'image' }, { name: 'eyebrow', type: 'string' }, { name: 'title', type: 'string' },
      { name: 'description', type: 'text' }, { name: 'primaryCta', type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'url' }] },
      { name: 'secondaryCta', type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'url' }] }, { name: 'displayOrder', type: 'number' }
    ] }] },
    { name: 'aboutMinistry', title: 'About Ministry', type: 'object', fields: [
      { name: 'heading', type: 'string' }, { name: 'description', type: 'text' }, { name: 'images', type: 'array', of: [{ type: 'image' }] },
      { name: 'mission', type: 'text' }, { name: 'cta', type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'href', type: 'url' }] }
    ] },
    { name: 'pastor', type: 'object', fields: [
      { name: 'name', type: 'string' }, { name: 'photo', type: 'image' }, { name: 'designation', type: 'string' }, { name: 'biography', type: 'text' }, { name: 'quote', type: 'text' }
    ] },
    { name: 'services', type: 'array', of: [{ type: 'object', fields: [
      { name: 'name', type: 'string' }, { name: 'image', type: 'image' }, { name: 'day', type: 'string' }, { name: 'time', type: 'string' }, { name: 'location', type: 'string' }, { name: 'description', type: 'text' }, { name: 'link', type: 'url' }
    ] }] },
    { name: 'ministries', type: 'array', of: [{ type: 'object', fields: [
      { name: 'name', type: 'string' }, { name: 'image', type: 'image' }, { name: 'description', type: 'text' }, { name: 'link', type: 'url' }
    ] }] }
  ]
};
