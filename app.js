const buttons = document.querySelectorAll('[data-lang]');
function setLanguage(lang) {
  if (!['de', 'en'].includes(lang)) lang = 'de';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-de][data-en]').forEach(el => { el.innerHTML = el.dataset[lang]; });
  buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  document.querySelector('.contact p').textContent = lang === 'de' ? 'Bonn, Deutschland' : 'Bonn, Germany';
  document.querySelector('meta[name="description"]').content = lang === 'de' ? 'Abdelwahab Elshennawy — Machine Learning, Datenanalyse, QA und Design. M.Sc. Informatik, Universität Bonn.' : 'Abdelwahab Elshennawy — Machine learning, data analysis, QA and design. M.Sc. Computer Science student at the University of Bonn.';
  try { localStorage.setItem('portfolio-language', lang); } catch {}
}
buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
let initial = 'de';
try { initial = localStorage.getItem('portfolio-language') || 'de'; } catch {}
setLanguage(initial);
