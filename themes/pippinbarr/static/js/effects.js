// Resize menu effect

const menuShrinkY = 200;

window.onscroll = () => {
  const scroll = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
  console.log(scroll);
  if (scroll > menuShrinkY) {
    document.getElementById("nav-wrapper").style.fontSize = "0.5em";
  } else if (scroll === 0) {
    document.getElementById("nav-wrapper").style.fontSize = "1em";
  }
}

// Jank town heros

const RARE_EFFECT_PROBABILITY = 0.01;
const EFFECT_PROBABILITY = 0.1;

const transforms = [{
  name: `skewX`,
  min: 10,
  max: 25,
  unit: `deg`
}, {
  name: `skewY`,
  min: 10,
  max: 25,
  unit: `deg`
}, {
  name: `rotateX`,
  min: -45,
  max: 45,
  unit: `deg`
},
{
  name: `rotateY`,
  min: -45,
  max: 45,
  unit: `deg`
},
{
  name: `rotateZ`,
  min: -45,
  max: 45,
  unit: `deg`
},
{
  name: `scaleX`,
  min: 0.25,
  max: 1.25,
  unit: ``
},
{
  name: `scaleY`,
  min: 0.25,
  max: 1.25,
  unit: ``
},
{
  name: `translateX`,
  min: -100,
  max: 100,
  unit: `px`
},
{
  name: `translateY`,
  min: -100,
  max: 100,
  unit: `px`
},
{
  name: `translateZ`,
  min: -100,
  max: 100,
  unit: `px`
}
];
const tags = [`img`, `p`, `a`, `div`];

let start = 0.05;
if (Math.random() < start) {
  let roll = 1;
  while (Math.random() < roll) {
    let t = random(transforms);
    transformer(t.name, t.min, t.max, t.unit);
    roll -= 0.1;
  }
}

function transformer(type, min, max, unit) {
  let tag = random(tags);
  $(tag)
    .each(function () {
      const amount = min + Math.random() * (max - min);
      $(this)
        .css({
          display: `inline-block`,
          transform: `${type}(${amount}${unit})`,
        });
    });
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}