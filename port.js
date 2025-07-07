const texts = ["Hello, I'm Jeevanandham", "Frontend Developer", "UI/UX Designer", "React Enthusiast"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
      if (count === texts.length) {
        count = 0;
      }

      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      document.getElementById('typewriter').textContent = letter;

      if (letter.length === currentText.length) {
        setTimeout(() => {
          index = 0;
          count++;
          setTimeout(type, 500);
        }, 2000);
      } else {
        setTimeout(type, 100);
      }
    }

    document.addEventListener('DOMContentLoaded', type);