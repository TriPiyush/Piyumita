/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal. 
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

// Set the date we're counting down to
var countDownDate = new Date("Nov 29, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 29th Nov, 2020!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Vinit Shahdeo', styles1, styles2);

console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)

/* ===== Our Journey: dynamic timeline ===== */
(function(){
    // Simple data for the timeline — edit these entries to add more moments
    var journey = [
        {date: '2019-06', title: 'Met for the first time', desc: 'We crossed paths at a mutual friend\'s gathering and had tea that turned into a three-hour conversation.', img: 'https://i.imgur.com/8Km9tLL.jpg'},
        {date: '2020-11', title: 'First trip together', desc: 'A small weekend getaway where we got to know each other better.', img: 'https://i.imgur.com/4AiXzf8.jpg'},
        {date: '2022-02', title: 'Said yes', desc: 'A cozy evening and a question that changed everything.', img: 'https://i.imgur.com/1y0QFqK.jpg'},
        {date: '2024-08', title: 'Planning begins', desc: 'Excitedly planning the big day with family.', img: ''}
    ];

    function renderTimeline() {
        var container = document.getElementById('timeline');
        if(!container) return;
        container.innerHTML = '';
        journey.forEach(function(item, idx){
            var el = document.createElement('article');
            el.className = 'timeline-item';

            var dot = document.createElement('div');
            dot.className = 'dot';

            var img = '';
            if(item.img){
                img = '<img src="'+item.img+'" alt="'+(item.title||'')+'"/>';
            }

            var content = document.createElement('div');
            content.className = 'content';
            content.innerHTML = '<h3>'+item.title+'</h3><time>'+item.date+'</time><p>'+item.desc+'</p>';

            if(item.img){
                el.innerHTML = '<div class="dot"></div>'+img+'';
                el.appendChild(content);
            } else {
                el.appendChild(dot);
                el.appendChild(content);
            }

            // simple reveal animation with small delay
            setTimeout(function(){ el.classList.add('show'); }, 120*idx);

            container.appendChild(el);
        });
    }

    // Toggle music play/pause
    function setupMusicToggle(){
        var btn = document.getElementById('toggle-music');
        var audio = document.getElementById('my_audio');
        if(!btn || !audio) return;
        var playing = false;
        btn.addEventListener('click', function(){
            if(playing){ audio.pause(); btn.textContent = 'Play Music'; }
            else { audio.play(); btn.textContent = 'Pause Music'; }
            playing = !playing;
        });
    }

    // Show all simply re-runs rendering (placeholder for filters)
    function setupShowAll(){
        var btn = document.getElementById('show-all');
        if(!btn) return;
        btn.addEventListener('click', function(){
            renderTimeline();
        });
    }

    // Initialize
    document.addEventListener('DOMContentLoaded', function(){
        renderTimeline();
        setupMusicToggle();
        setupShowAll();
    });
})();