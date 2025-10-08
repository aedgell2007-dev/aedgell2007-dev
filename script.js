document.addEventListener('DOMContentLoaded', () => {
  const showSecretBtn = document.getElementById('showSecret');
  const hiddenLink = document.querySelector('.hidden-link');
  showSecretBtn.addEventListener('click', () => {
    hiddenLink.style.display = 'inline';
    showSecretBtn.style.display = 'none';
  });
});
