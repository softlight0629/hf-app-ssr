const bundles = [];

function register(bundle) {
  bundles.push(bundle);
}

export default bundle => register(bundle);

export { bundles }