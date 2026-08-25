/**
 * GradeCalc - CGPA Calculator Engine
 * Handles dynamic semester row insertion, deletion, input validation, and weighted CGPA calculation.
 */

let semesterCount = 0;

document.addEventListener('DOMContentLoaded', () => {
  const cgpaForm = document.getElementById('cgpaForm');
  if (!cgpaForm) return;

  // Initialize with 2 default semester rows
  resetCGPACalculator();

  // Event Listeners
  document.getElementById('addSemesterBtn').addEventListener('click', () => addSemesterRow());
  document.getElementById('resetBtn').addEventListener('click', resetCGPACalculator);
  cgpaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    calculateCGPA();
  });
});

/**
 * Resets the CGPA Calculator to default state
 */
function resetCGPACalculator() {
  const tbody = document.getElementById('semesterTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';
  semesterCount = 0;

  // Add 2 default rows
  addSemesterRow('Semester 1', 8.2, 24);
  addSemesterRow('Semester 2', 8.7, 26);

  // Hide result card and clear errors
  const resultCard = document.getElementById('resultCard');
  if (resultCard) {
    resultCard.classList.remove('show');
  }

  clearAllErrors();
}

/**
 * Adds a new semester row to the table
 */
function addSemesterRow(defaultName = '', defaultSGPA = '', defaultCredits = '') {
  const tbody = document.getElementById('semesterTableBody');
  if (!tbody) return;

  semesterCount++;
  const rowId = `semester-row-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  const tr = document.createElement('tr');
  tr.id = rowId;
  tr.className = 'semester-row';

  tr.innerHTML = `
    <td data-label="Semester">
      <input type="text" class="form-control semester-name" placeholder="e.g. Semester ${semesterCount}" value="${defaultName}">
    </td>
    <td data-label="SGPA">
      <input type="number" step="0.01" min="0" max="10" class="form-control semester-sgpa" placeholder="e.g. 8.5" value="${defaultSGPA}">
    </td>
    <td data-label="Semester Credits">
      <input type="number" step="0.5" min="0.5" class="form-control semester-credits" placeholder="e.g. 24" value="${defaultCredits}">
    </td>
    <td class="td-action">
      <button type="button" class="btn btn-danger-ghost btn-sm remove-row-btn" aria-label="Remove semester">
        <svg style="width: 18px; height: 18px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
        </svg>
        <span>Remove</span>
      </button>
    </td>
  `;

  tbody.appendChild(tr);

  // Input listeners for error clearing
  const sgpaEl = tr.querySelector('.semester-sgpa');
  const creditsEl = tr.querySelector('.semester-credits');

  sgpaEl.addEventListener('input', () => clearInlineError(sgpaEl));
  creditsEl.addEventListener('input', () => clearInlineError(creditsEl));

  // Attach Remove Listener
  tr.querySelector('.remove-row-btn').addEventListener('click', () => {
    removeSemesterRow(rowId);
  });

  updateRowLabels();
}

/**
 * Removes a semester row
 */
function removeSemesterRow(rowId) {
  const tbody = document.getElementById('semesterTableBody');
  const row = document.getElementById(rowId);
  if (row) {
    row.remove();
  }

  // Always keep at least 1 semester row
  if (tbody.querySelectorAll('.semester-row').length === 0) {
    addSemesterRow();
  } else {
    updateRowLabels();
  }
}

/**
 * Updates row placeholders after change
 */
function updateRowLabels() {
  const rows = document.querySelectorAll('.semester-row');
  rows.forEach((row, index) => {
    const nameInput = row.querySelector('.semester-name');
    if (nameInput && !nameInput.value) {
      nameInput.placeholder = `e.g. Semester ${index + 1}`;
    }
  });
}

/**
 * Clears all inline error messages
 */
function clearAllErrors() {
  const inputs = document.querySelectorAll('#cgpaForm .form-control');
  inputs.forEach(input => clearInlineError(input));
}

/**
 * Calculates CGPA weighted average
 */
function calculateCGPA() {
  clearAllErrors();
  const rows = document.querySelectorAll('.semester-row');

  if (rows.length === 0) {
    alert('Please add at least one semester to calculate CGPA.');
    return;
  }

  let totalCredits = 0;
  let totalWeightedGradePoints = 0;
  let hasError = false;
  let validSemesterCount = 0;

  rows.forEach((row) => {
    const sgpaInput = row.querySelector('.semester-sgpa');
    const creditsInput = row.querySelector('.semester-credits');

    const sgpaVal = parseFloat(sgpaInput.value);
    const creditsVal = parseFloat(creditsInput.value);

    // Validate SGPA
    if (isNaN(sgpaVal) || sgpaVal < 0 || sgpaVal > 10) {
      showInlineError(sgpaInput, 'Enter valid SGPA (0 - 10)');
      hasError = true;
    }

    // Validate Credits
    if (isNaN(creditsVal) || creditsVal <= 0) {
      showInlineError(creditsInput, 'Enter valid credits > 0');
      hasError = true;
    }

    if (!hasError) {
      totalCredits += creditsVal;
      totalWeightedGradePoints += (sgpaVal * creditsVal);
      validSemesterCount++;
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

  // Calculate CGPA and format final result to 2 decimal places
  const cgpa = totalWeightedGradePoints / totalCredits;
  const formattedCGPA = safeFormatNumber(cgpa);

  // Display results
  displayCGPAResults(formattedCGPA, totalCredits, totalWeightedGradePoints, validSemesterCount);
}

/**
 * Renders calculated CGPA in the result panel
 */
function displayCGPAResults(cgpa, totalCredits, totalWeightedGradePoints, semesterCount) {
  const resultCard = document.getElementById('resultCard');
  if (!resultCard) return;

  document.getElementById('resCGPAScore').textContent = cgpa;
  document.getElementById('resTotalCredits').textContent = safeFormatNumber(totalCredits);
  document.getElementById('resWeightedPoints').textContent = safeFormatNumber(totalWeightedGradePoints);
  document.getElementById('resSemesterCount').textContent = semesterCount;

  resultCard.classList.add('show');
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
