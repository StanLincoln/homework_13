function start_game() {
  object.classList.add("active");
}

function hit() {
  // score = score + 1;
  // score += 1;
  score++;
  document.title = `Score ${score}`;
  object.classList.remove("active");
  void object.offsetWidth;
  object.classList.add("active");
  change_object_position();
  change_object_background();
  change_object_size();
  hit_sound.currentTime = 0;
  hit_sound.play();
}

function miss(event) {
  if (event.target.id == "area") {
    score--;
    document.title = `Score ${score}`;
    if (score <= 0) {
      finish_game();
    }
  }
  miss_sound.currentTime = 0;
  miss_sound.play();
}

function finish_game() {
  object.classList.remove("active");
  alert("You Lose. Game Over");
}

function change_object_position() {
  const random_offset = Math.random() * 390;
  object.style.left = `${random_offset}px`;
}

function change_object_background() {
  const color = ['red', 'gold', 'blue', 'green', 'black', 'purple'];
  const index = Math.floor(Math.random() * color.length);
  object.style.background = color[index];
}

function change_object_size() {
  const size = 40 + Math.random() * (80 - 40);
  object.style.width = `${size}px`;
}

let score = 0;
let object = document.querySelector("#object");

const hit_sound = new Audio('sounds/hit.wav');
const miss_sound = new Audio('sounds/miss.wav');