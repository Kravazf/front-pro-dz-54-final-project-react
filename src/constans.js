const ruleText = {
  required: 'Field is required.',
  minLength: (minLength) => (`Field should have more than ${minLength} symbols.`),
  maxLength: (maxLength) => (`Field should have less than ${maxLength} symbols.`),
};

export const testRules = {
  quizName: {
    required: { value: true, message: ruleText.required },
    minLength: { value: 2, message: ruleText.minLength(2) },
    maxLength: { value: 15, message: ruleText.maxLength(15) },
  },
  id: {
    required: { value: true, message: ruleText.required },
  },
  description: {
    required: { value: true, message: ruleText.required },
    minLength: { value: 10, message: ruleText.minLength(100) },
    maxLength: { value: 300, message: ruleText.maxLength(300) },
  },
  imageUrl: {
    required: { value: true, message: ruleText.required },
    pattern: {
      value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|svg|gif))$/i,
      message: 'Please enter a valid URL for an image',
    },
  },
};
