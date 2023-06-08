function sqrt(val) {
  if (val < 0) {
    throw new Error('val must be positive');
  }

  return Math.sqrt(val);
}

try {
  console.log(sqrt(100));
  console.log(sqrt(-100));
} catch (err) {
  console.log(err);
}
