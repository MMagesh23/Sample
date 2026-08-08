const cms = {
  heroSlides: [
    { eyebrow: 'Welcome to', title: 'Fort of Praise', description: 'A place of faith, hope, and transformation for every generation.', image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1800&q=85', primaryCta: 'Join Us', secondaryCta: 'Learn More', caption: 'Sunday worship gathering', meta: 'Every Sunday • 9:00 AM & 11:30 AM' },
    { eyebrow: 'Worship with us', title: 'Encounter Grace Together', description: 'Experience heartfelt worship, biblical teaching, and a community that prays with you.', image: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=1800&q=85', primaryCta: 'Watch Sermon', secondaryCta: 'View Events', caption: 'A community shaped by worship', meta: 'Live and online' },
    { eyebrow: 'Grow & serve', title: 'Find Family. Discover Purpose.', description: 'From children to adults, every ministry helps you belong, serve, and flourish in Christ.', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=85', primaryCta: 'Explore Ministries', secondaryCta: 'Contact Us', caption: 'Life-giving ministry for all ages', meta: 'Small groups • Outreach • Prayer' }
  ],
  services: [
    { name: 'Sunday Worship', day: 'Sunday', time: '9:00 AM – 11:00 AM', location: 'Main Sanctuary', description: 'A powerful morning of worship, prayer, and the Word.', image: 'https://images.unsplash.com/photo-1507036066871-b7e8032b3dea?auto=format&fit=crop&w=900&q=85' },
    { name: 'Celebration Service', day: 'Sunday', time: '11:30 AM – 1:00 PM', location: 'Main Sanctuary', description: 'A vibrant family gathering with contemporary worship.', image: 'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=900&q=85' },
    { name: 'Midweek Prayer', day: 'Wednesday', time: '7:00 PM – 8:15 PM', location: 'Prayer Chapel', description: 'A focused evening of intercession and encouragement.', image: 'https://images.unsplash.com/photo-1519834022362-b5c0d2a7962f?auto=format&fit=crop&w=900&q=85' },
    { name: 'Bible Study', day: 'Friday', time: '6:30 PM – 8:00 PM', location: 'Fellowship Hall', description: 'Grow deeper through Scripture, conversation, and community.', image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=900&q=85' }
  ],
  ministries: [
    ['Children\'s Ministry', 'Helping children know Jesus in safe, joyful spaces.', 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85'],
    ['Youth Ministry', 'Growing together in faith, friendship, and purpose.', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85'],
    ['Worship Ministry', 'Leading the church into reverent, Spirit-filled praise.', 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1000&q=85'],
    ['Women\'s Ministry', 'Encouraging women through prayer, mentoring, and fellowship.', 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=85'],
    ['Men\'s Ministry', 'Equipping men to lead with humility and courage.', 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=85'],
    ['Outreach Ministry', 'Serving our city with compassion and practical love.', 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=85']
  ]
};

const header = document.querySelector('[data-header]');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 24));

const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
menuToggle.addEventListener('click', () => { const open = mobileMenu.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', open); });
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

const track = document.querySelector('[data-hero-track]');
const dots = document.querySelector('[data-hero-dots]');
let activeSlide = 0;
track.innerHTML = cms.heroSlides.map((slide, index) => `
  <article class="hero-slide ${index === 0 ? 'active' : ''}" aria-hidden="${index !== 0}">
    <img src="${slide.image}" alt="${slide.caption}" loading="${index === 0 ? 'eager' : 'lazy'}" />
    <div class="hero-content"><p class="eyebrow">${slide.eyebrow}</p><h1>${slide.title}</h1><p>${slide.description}</p><div><a class="button button-primary" href="#services">${slide.primaryCta}</a><a class="button button-ghost" href="#about">${slide.secondaryCta}</a></div></div>
    <div class="hero-panel"><div><strong>${slide.caption}</strong><span>${slide.description}</span></div><em>${slide.meta}</em></div>
  </article>`).join('');
dots.innerHTML = cms.heroSlides.map((_, index) => `<button aria-label="Go to slide ${index + 1}" ${index === 0 ? 'class="active"' : ''}></button>`).join('');
function showSlide(next) { activeSlide = (next + cms.heroSlides.length) % cms.heroSlides.length; document.querySelectorAll('.hero-slide').forEach((s, i) => { s.classList.toggle('active', i === activeSlide); s.setAttribute('aria-hidden', i !== activeSlide); }); dots.querySelectorAll('button').forEach((d, i) => d.classList.toggle('active', i === activeSlide)); }
document.querySelector('[data-hero-next]').onclick = () => showSlide(activeSlide + 1);
document.querySelector('[data-hero-prev]').onclick = () => showSlide(activeSlide - 1);
dots.querySelectorAll('button').forEach((dot, i) => dot.onclick = () => showSlide(i));
let heroTimer = setInterval(() => showSlide(activeSlide + 1), 6500);
document.querySelector('[data-hero]').addEventListener('mouseenter', () => clearInterval(heroTimer));
document.querySelector('[data-hero]').addEventListener('mouseleave', () => heroTimer = setInterval(() => showSlide(activeSlide + 1), 6500));

const serviceTrack = document.querySelector('[data-service-track]');
serviceTrack.innerHTML = cms.services.map(service => `<article class="service-card"><img src="${service.image}" alt="${service.name}" loading="lazy" /><div><h3>${service.name}</h3><p class="service-time">${service.day} • ${service.time}</p><p>${service.description}</p><p>${service.location}</p><a href="#contact">View Details →</a></div></article>`).join('');
document.querySelector('[data-service-next]').onclick = () => serviceTrack.scrollBy({ left: 380, behavior: 'smooth' });
document.querySelector('[data-service-prev]').onclick = () => serviceTrack.scrollBy({ left: -380, behavior: 'smooth' });

document.querySelector('[data-ministry-grid]').innerHTML = cms.ministries.map(([name, description, image]) => `<a class="ministry-card" href="#contact"><img src="${image}" alt="${name}" loading="lazy" /><span><h3>${name}</h3><p>${description}</p></span><b>→</b></a>`).join('');

const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('visible', entry.isIntersecting)), { threshold: 0.16 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
