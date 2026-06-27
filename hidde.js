<!--  hidde the code  -->

<script>
document.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('keydown', e => {
  const blocked = (
    (e.ctrlKey && e.key === 'u') ||
    (e.ctrlKey && e.key === 's') ||
    (e.ctrlKey && e.shiftKey && e.key === 'i') ||
    (e.ctrlKey && e.shiftKey && e.key === 'j') ||
    e.key === 'F12'
  );
  if (blocked) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
});
</script>

<!-- ==== -->