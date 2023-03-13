import v8n from 'v8n';

v8n.extend({
  notSpace: () => (value) => !value.includes(' '),
});

const Validator = {
  login: v8n().string().notSpace().minLength(6),
};
export default Validator;
