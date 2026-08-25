/**
 * GradeCalc - Converter Engine
 * Handles SGPA → Percentage, CGPA → Percentage, and Percentage → CGPA calculations using default 9.5 multiplier.
 */

document.addEventListener('DOMContentLoaded', () => {
  initSGPAToPercentageConverter();
  initCGPAToPercentageConverter();
  initPercentageToCGPAConverter();
});

/**
 * 1. SGPA to Percentage Converter logic
 */
function initSGPAToPercentageConverter() {
  const form = document.getElementById('sgpaToPercentageForm');
  if (!form) return;

  const methodSelect = document.getElementById('conversionMethod');
  const customGroup = document.getElementById('customMultiplierGroup');
  const multiplierInput = document.getElementById('multiplierInput');

  if (methodSelect && customGroup) {
    methodSelect.addEventListener('change', () => {
      if (methodSelect.value === 'custom') {
        customGroup.style.display = 'block';
      } else {
        customGroup.style.display = 'none';
        if (multiplierInput) multiplierInput.value = '9.5';
      }
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateSGPAToPercentage();
  });

  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      if (customGroup) customGroup.style.display = 'none';
      if (multiplierInput) multiplierInput.value = '9.5';
      const resultCard = document.getElementById('resultCard');
      if (resultCard) resultCard.classList.remove('show');
      clearConverterErrors(form);
    });
  }
}

function calculateSGPAToPercentage() {
  const form = document.getElementById('sgpaToPercentageForm');
  clearConverterErrors(form);

  const sgpaInput = document.getElementById('sgpaInput');
  const methodSelect = document.getElementById('conversionMethod');
  const multiplierInput = document.getElementById('multiplierInput');

  const sgpaVal = parseFloat(sgpaInput.value);
  let multiplier = 9.5;

  if (methodSelect.value === 'custom') {
    multiplier = parseFloat(multiplierInput.value);
  }

  let hasError = false;

  if (isNaN(sgpaVal) || sgpaVal < 0 || sgpaVal > 10) {
    showInlineError(sgpaInput, 'Enter a valid SGPA between 0.00 and 10.00');
    hasError = true;
  }

  if (isNaN(multiplier) || multiplier <= 0) {
    showInlineError(multiplierInput, 'Enter a valid positive multiplier');
    hasError = true;
  }

  if (hasError) return;

  const percentage = sgpaVal * multiplier;
  const formattedPct = safeFormatNumber(percentage);

  const resultCard = document.getElementById('resultCard');
  if (resultCard) {
    document.getElementById('resPercentageScore').textContent = `${formattedPct}%`;
    document.getElementById('resSGPAGiven').textContent = safeFormatNumber(sgpaVal);
    document.getElementById('resMultiplierUsed').textContent = multiplier;
    resultCard.classList.add('show');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/**
 * 2. CGPA to Percentage Converter logic
 */
function initCGPAToPercentageConverter() {
  const form = document.getElementById('cgpaToPercentageForm');
  if (!form) return;

  const methodSelect = document.getElementById('conversionMethod');
  const customGroup = document.getElementById('customMultiplierGroup');
  const multiplierInput = document.getElementById('multiplierInput');

  if (methodSelect && customGroup) {
    methodSelect.addEventListener('change', () => {
      if (methodSelect.value === 'custom') {
        customGroup.style.display = 'block';
      } else {
        customGroup.style.display = 'none';
        if (multiplierInput) multiplierInput.value = '9.5';
      }
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateCGPAToPercentage();
  });

  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      if (customGroup) customGroup.style.display = 'none';
      if (multiplierInput) multiplierInput.value = '9.5';
      const resultCard = document.getElementById('resultCard');
      if (resultCard) resultCard.classList.remove('show');
      clearConverterErrors(form);
    });
  }
}

function calculateCGPAToPercentage() {
  const form = document.getElementById('cgpaToPercentageForm');
  clearConverterErrors(form);

  const cgpaInput = document.getElementById('cgpaInput');
  const methodSelect = document.getElementById('conversionMethod');
  const multiplierInput = document.getElementById('multiplierInput');

  const cgpaVal = parseFloat(cgpaInput.value);
  let multiplier = 9.5;

  if (methodSelect.value === 'custom') {
    multiplier = parseFloat(multiplierInput.value);
  }

  let hasError = false;

  if (isNaN(cgpaVal) || cgpaVal < 0 || cgpaVal > 10) {
    showInlineError(cgpaInput, 'Enter a valid CGPA between 0.00 and 10.00');
    hasError = true;
  }

  if (isNaN(multiplier) || multiplier <= 0) {
    showInlineError(multiplierInput, 'Enter a valid positive multiplier');
    hasError = true;
  }

  if (hasError) return;

  const percentage = cgpaVal * multiplier;
  const formattedPct = safeFormatNumber(percentage);

  const resultCard = document.getElementById('resultCard');
  if (resultCard) {
    document.getElementById('resPercentageScore').textContent = `${formattedPct}%`;
    document.getElementById('resCGPAGiven').textContent = safeFormatNumber(cgpaVal);
    document.getElementById('resMultiplierUsed').textContent = multiplier;
    resultCard.classList.add('show');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/**
 * 3. Percentage to CGPA Converter logic
 */
function initPercentageToCGPAConverter() {
  const form = document.getElementById('percentageToCGPAForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    calculatePercentageToCGPA();
  });

  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      const resultCard = document.getElementById('resultCard');
      if (resultCard) resultCard.classList.remove('show');
      clearConverterErrors(form);
    });
  }
}

function calculatePercentageToCGPA() {
  const form = document.getElementById('percentageToCGPAForm');
  clearConverterErrors(form);

  const percentageInput = document.getElementById('percentageInput');
  const multiplierInput = document.getElementById('multiplierInput');

  const percentageVal = parseFloat(percentageInput.value);
  const multiplierVal = parseFloat(multiplierInput.value || 9.5);

  let hasError = false;

  if (isNaN(percentageVal) || percentageVal < 0 || percentageVal > 100) {
    showInlineError(percentageInput, 'Enter a valid percentage between 0% and 100%');
    hasError = true;
  }

  if (isNaN(multiplierVal) || multiplierVal <= 0) {
    showInlineError(multiplierInput, 'Enter a valid positive multiplier');
    hasError = true;
  }

  if (hasError) return;

  const cgpa = percentageVal / multiplierVal;
  const formattedCGPA = safeFormatNumber(cgpa);

  const resultCard = document.getElementById('resultCard');
  if (resultCard) {
    document.getElementById('resCGPAScore').textContent = formattedCGPA;
    document.getElementById('resPercentageGiven').textContent = `${safeFormatNumber(percentageVal)}%`;
    document.getElementById('resMultiplierUsed').textContent = multiplierVal;
    resultCard.classList.add('show');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

/**
 * Clear all errors inside a given form
 */
function clearConverterErrors(formElement) {
  if (!formElement) return;
  const inputs = formElement.querySelectorAll('.form-control');
  inputs.forEach(input => clearInlineError(input));
}
