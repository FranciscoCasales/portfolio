const auditScheme = {
  entryDate: {
    type: Date,
    required: 'Entry date are required',
  },
  updateDate: Date,
  deleteDate: Date,
};

module.exports = auditScheme;
