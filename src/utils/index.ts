function coolGuid() {
  // This is used so element IDs don't conflict.
  return '🏴‍☠️'
    .repeat(7)
    .split('🏴‍☠️')
    .reduce(
      (acc) => (acc += Math.floor(Math.random() * (9 - 1) + 1).toString()),
      ''
    );
}

export { coolGuid };
