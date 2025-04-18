describe('Tech Quiz End-to-End Test', () => {
  beforeEach(() => {
    // Stub the API call to return our fixture data
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    // Visit the app
    cy.visit('/');
  });

  it('should allow a user to complete a quiz and view their score', () => {
    // Start the quiz
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // Load fixture to know expected answers
    cy.fixture('questions.json').then((questions) => {
      let correctCount = 0;

      // Answer each question
      questions.forEach((q, index) => {
        const correctIdx = q.answers.findIndex((a) => a.isCorrect);
        const btnIdx = correctIdx >= 0 ? correctIdx : 0;
        if (q.answers[btnIdx].isCorrect) correctCount++;

        // Click the corresponding answer button
        cy.get('.answer-btn').eq(btnIdx).click();
      });

      // Verify completion screen
      cy.contains('Quiz Completed').should('be.visible');
      cy.contains(`Your Score: ${correctCount}/${questions.length}`).should('be.visible');

      // Restart the quiz
      cy.contains('Start New Quiz').click();
      cy.wait('@getQuestions');

      // Verify new quiz loaded
      cy.get('.question-text').should('be.visible');
      cy.get('.answer-btn').should('have.length', questions[0].answers.length);
    });
  });
});