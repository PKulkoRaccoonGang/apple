const button = document.getElementById('btn'),
      block = document.getElementById('block');

      button.addEventListener('click', () => {
        block.style.display = 'none';
        alert("Блок удален!");
      });