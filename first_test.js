Feature('first');

Scenario('test something', ({ I }) => {
    I.amOnPage('http://todomvc.com/examples/react/');
    I.dontSeeElement('.todo-count');
    I.fillField('What needs to be done?', 'Write a guide');
    I.pressKey('Enter');
    I.see('Write a guide', '.todo-list');
    I.see('1 item left', '.todo-count');
});

Scenario('test codeceptjs@github', ({ I }) => {
    I.amOnPage('https://github.com/codeceptjs/CodeceptJS');
    I.see('CodeceptJS', '#repository-container-header > div.d-flex.mb-3.px-3.px-md-4.px-lg-5 > div > h1 > strong > a');
});
