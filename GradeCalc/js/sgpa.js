/**
 * GradeCalc - SGPA Calculator Engine
 * Handles dynamic subject row insertion, deletion, input validation, and weighted SGPA calculation.
 */

let subjectCount = 0;

document.addEventListener('DOMContentLoaded', () => {
  const sgpaForm = document.getElementById('sgpaForm');
  if (!sgpaForm) return;

  // Initialize with 3 default subject rows
  resetSGPACalculator();

  // Event Listeners
  document.getElementById('addSubjectBtn').addEventListener('click', () => addSubjectRow());
  document.getElementById('resetBtn').addEventListener('click', resetSGPACalculator);
  sgpaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateSGPA();
  });
});

/**
 * Resets the SGPA Calculator to default state
 */
function resetSGPACalculator() {
  const tbody = document.getElementById('subjectTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';
  subjectCount = 0;

  // Add 3 default rows
  addSubjectRow('Mathematics', 4, 8);
  addSubjectRow('English', 3, 9);
  addSubjectRow('Computer Science', 4, 10);

  // Hide result card and clear errors
  const resultCard = document.getElementById('resultCard');
  if (resultCard) {
    resultCard.classList.remove('show');
  }

  clearAllErrors();
}

/**
 * Adds a new subject row to the table
 */
function addSubjectRow(defaultName = '', defaultCredit = '', defaultGradePoint = '') {
  const tbody = document.getElementById('subjectTableBody');
  if (!tbody) return;

  subjectCount++;
  const rowId = `subject-row-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  const tr = document.createElement('tr');
  tr.id = rowId;
  tr.className = 'subject-row';

  tr.innerHTML = `
    <td data-label="Subject Name">
      <input type="text" class="form-control subject-name" placeholder="e.g. Subject ${subjectCount}" value="${defaultName}">
    </td>
    <td data-label="Credits">
      <input type="number" step="0.5" min="0.5" class="form-control subject-credits" placeholder="e.g. 4" value="${defaultCredit}">
    </td>
    <td data-label="Grade / Grade Point">
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <select class="form-control grade-select" style="flex: 1; min-width: 100px;">
          <option value="">Select Grade</option>
          <option value="10" ${defaultGradePoint == 10 ? 'selected' : ''}>O / A+ (10)</option>
          <option value="9" ${defaultGradePoint == 9 ? 'selected' : ''}>A (9)</option>
          <option value="8" ${defaultGradePoint == 8 ? 'selected' : ''}>B+ (8)</option>
          <option value="7" ${defaultGradePoint == 7 ? 'selected' : ''}>B (7)</option>
          <option value="6" ${defaultGradePoint == 6 ? 'selected' : ''}>C+ (6)</option>
          <option value="5" ${defaultGradePoint == 5 ? 'selected' : ''}>C (5)</option>
          <option value="4" ${defaultGradePoint == 4 ? 'selected' : ''}>P / Pass (4)</option>
          <option value="0" ${defaultGradePoint === 0 ? 'selected' : ''}>F / Fail (0)</option>
        </select>
        <input type="number" step="0.01" min="0" max="10" class="form-control subject-gradepoint" placeholder="GP (e.g. 8.5)" value="${defaultGradePoint}" style="flex: 1; min-width: 90px;">
      </div>
    </td>
    <td class="td-action">
      <button type="button" class="btn btn-danger-ghost btn-sm remove-row-btn" aria-label="Remove subject">
        <svg style="width: 18px; height: 18px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
        </svg>
        <span>Remove</span>
      </button>
    </td>
  `;

  tbody.appendChild(tr);

  // Sync Dropdown with Grade Point numeric input
  const selectEl = tr.querySelector('.grade-select');
  const inputEl = tr.querySelector('.subject-gradepoint');

  selectEl.addEventListener('change', () => {
    if (selectEl.value !== '') {
      inputEl.value = selectEl.value;
      clearInlineError(inputEl);
    }
  });

  inputEl.addEventListener('input', () => {
    // If input matches one of the option values, set select value, otherwise set to empty
    const val = inputEl.value;
    const match = Array.from(selectEl.options).find(opt => opt.value === val);
    selectEl.value = match ? match.value : '';
    clearInlineError(inputEl);
  });

  // Attach credit listener to clear error
  const creditEl = tr.querySelector('.subject-credits');
  creditEl.addEventListener('input', () => clearInlineError(creditEl));

  // Attach Remove Listener
  tr.querySelector('.remove-row-btn').addEventListener('click', () => {
    removeSubjectRow(rowId);
  });

  updateRowLabels();
}

/**
 * Removes a subject row
 */
function removeSubjectRow(rowId) {
  const tbody = document.getElementById('subjectTableBody');
  const row = document.getElementById(rowId);
  if (row) {
    row.remove();
  }

  // Ensure there is always at least 1 subject row
  if (tbody.querySelectorAll('.subject-row').length === 0) {
    addSubjectRow();
  } else {
    updateRowLabels();
  }
}

/**
 * Updates row placeholders & labels after addition or removal
 */
function updateRowLabels() {
  const rows = document.querySelectorAll('.subject-row');
  rows.forEach((row, index) => {
    const nameInput = row.querySelector('.subject-name');
    if (nameInput && !nameInput.value) {
      nameInput.placeholder = `e.g. Subject ${index + 1}`;
    }
  });
}

/**
 * Clears all inline errors from the form
 */
function clearAllErrors() {
  const inputs = document.querySelectorAll('#sgpaForm .form-control');
  inputs.forEach(input => clearInlineError(input));
}

/**
 * Calculates SGPA weighted average
 */
function calculateSGPA() {
  clearAllErrors();
  const rows = document.querySelectorAll('.subject-row');

  if (rows.length === 0) {
    alert('Please add at least one subject to calculate SGPA.');
    return;
  }

  let totalCredits = 0;
  let totalCreditPoints = 0;
  let hasError = false;
  let validSubjectCount = 0;

  rows.forEach((row, index) => {
    const creditInput = row.querySelector('.subject-credits');
    const gradePointInput = row.querySelector('.subject-gradepoint');

    const creditVal = parseFloat(creditInput.value);
    const gradePointVal = parseFloat(gradePointInput.value);

    // Validate Credit
    if (isNaN(creditVal) || creditVal <= 0) {
      showInlineError(creditInput, 'Enter valid credit > 0');
      hasError = true;
    }

    // Validate Grade Point
    if (isNaN(gradePointVal) || gradePointVal < 0) {
      showInlineError(gradePointInput, 'Enter valid grade point (≥ 0)');
      hasError = true;
    } else if (gradePointVal > 10) {
      // Soft check for standard 10-point scale
      showInlineError(gradePointInput, 'Grade point exceeds 10 max');
      hasError = true;
    }

    if (!hasError) {
      totalCredits += creditVal;
      totalCreditPoints += (creditVal * gradePointVal);
      validSubjectCount++;
    }
  });

  if (hasError) {
    const resultCard = document.getElementById('resultCard');
    if (resultCard) resultCard.classList.remove('show');
    return;
  }

  if (totalCredits <= 0) {
    alert('Total credits must be greater than zero.');
    return;
  }

  // Calculate SGPA using exact math and round final result to 2 decimal places
  const sgpa = totalCreditPoints / totalCredits;
  const formattedSGPA = safeFormatNumber(sgpa);

  // Display results
  displaySGPAResults(formattedSGPA, totalCredits, totalCreditPoints, validSubjectCount);
}

/**
 * Render results in the result card
 */
function displaySGPAResults(sgpa, totalCredits, totalCreditPoints, subjectCount) {
  const resultCard = document.getElementById('resultCard');
  if (!resultCard) return;

  document.getElementById('resSGPAScore').textContent = sgpa;
  document.getElementById('resTotalCredits').textContent = safeFormatNumber(totalCredits);
  document.getElementById('resTotalCreditPoints').textContent = safeFormatNumber(totalCreditPoints);
  document.getElementById('resSubjectCount').textContent = subjectCount;

  resultCard.classList.add('show');
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
