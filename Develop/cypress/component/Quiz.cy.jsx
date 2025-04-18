import React from 'react';
import Quiz from '../../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
  beforeEach(() => {
    // stub the network call to return our fixture
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
  });

  it('renders Start button, then loads first question on click', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible').click();
    cy.wait('@getQuestions');
    // after fetch completes, we should see a question heading
    cy.get('h2').should('not.contain', 'Quiz Completed');
    cy.get('h2').should('not.contain', 'Start Quiz');
    // verify that exactly four answers are shown for the first question
    cy.fixture('questions.json').then((qs) => {
      cy.get('.btn-primary').should('have.length', qs[0].answers.length + 1); // includes 'Start' or next buttons
    });
  });
});