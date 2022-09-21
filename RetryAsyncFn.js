async function retry(callback, options = { retries: 0 }) {
  let { retries } = options;

  while (retries > 0) {
    try {
      return await callback();
    } catch (e) {
      retries--;
    }
  }
  return await callback();
}

async function retry2(fn, { retries }) => {
  try {
    return await fn();
  } catch (e) {
    if (retries > 0) {
      return retry(fn, { retries: retries - 1 });
    }
    throw e;
  }
};
