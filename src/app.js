import "bootstrap";
import "./style.css";

const prefixes = ['super','charm','strange','bottom','wolf','Ilm'];
const middles  = ['tech','dev','app','cloud','data','web'];
const suffixes = ['.com','.io','.es','.net','.dev'];

const rand = arr => arr[Math.floor(Math.random() * arr.length)];

function generateDomain() {
  return `${rand(prefixes)}${rand(middles)}${rand(suffixes)}`;
}

function renderDomain() {
  const el = document.getElementById('domain');
  if (!el) {
    console.error('No se encontró el elemento #domain');
    return;
  }
  el.innerText = generateDomain();
}

window.addEventListener('DOMContentLoaded', () => {
  renderDomain();
  const btn = document.getElementById('new-domain');
  if (!btn) {
    console.error('No se encontró el botón #new-domain');
    return;
  }
  btn.addEventListener('click', renderDomain);
});
