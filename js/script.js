/**
 * @author Vinit Shahdeo
 */

/* ================= Sakura Animation ================= */
(function ($) {
  "use strict";
  $('.sakura-falling').sakura();
})(jQuery);

/* ================= Music Play on Click ================= */
$(document).on('click', function () {
  var audio = document.getElementById("my_audio");
  if (audio && audio.paused) {
    audio.play();
    console.log('Shaadi me zaroor aana');
  }
});

/* ================= Countdown ================= */
var countDownDate = new Date("April 21, 2026 00:00:00").getTime();

setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var timeEl = document.getElementById("time");
  if (!timeEl) return;

  if (distance < 0) {
    timeEl.innerHTML = "Bless the married couple for happy life!";
    return;
  }

  timeEl.innerHTML = `
    <div class="container">
      <div class="days block">${days}<br>Days</div>
      <div class="hours block">${hours}<br>Hours</div>
      <div class="minutes block">${minutes}<br>Minutes</div>
      <div class="seconds block">${seconds}<br>Seconds</div>
    </div>`;
}, 1000);

/* ================= Console Styling ================= */
var styles = [
  'background: linear-gradient(#D33106, #571402)',
  'border: 4px solid #3E0E02',
  'color: white',
  'font-size: 32px',
  'font-weight: bold',
  'padding: 10px'
].join(';');

console.log('%c SAVE THE DATE: 21st April, 2026!', styles);

var journey = [
  {
    date: '2019',
    title: 'First Meet',
    desc: 'We met for the first time and unknowingly began a beautiful journey together.',
    img: 'https://i.imgur.com/8Km9tLL.jpg'
  },
  {
    date: '2020',
    title: 'First Trip',
    desc: 'Our first trip together, full of laughter and memories.',
    img: 'https://i.imgur.com/4AiXzf8.jpg'
  },
  {
    date: '2022',
    title: 'She Said Yes ❤️',
    desc: 'A cozy evening, a heartfelt question, and a forever promise.',
    img: 'https://i.imgur.com/1y0QFqK.jpg'
  },
  {
    date: '2024',
    title: 'Wedding Bells 🔔',
    desc: 'Families met and wedding planning officially began.',
    img: ''
  }
];

var timeline = document.getElementById('timeline');

if (timeline) {
  journey.forEach(function (item) {

    var card = document.createElement('div');
    card.className = 'timeline-item';

    if (item.img) {
      var img = document.createElement('img');
      img.src = item.img;
      card.appendChild(img);
    }

    card.insertAdjacentHTML(
      'beforeend',
      `<h3>${item.title}</h3>
       <time>${item.date}</time>
       <p>${item.desc}</p>`
    );

    timeline.appendChild(card);
  });

  /* Scroll reveal */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.timeline-item').forEach(function (el) {
    observer.observe(el);
  });
}