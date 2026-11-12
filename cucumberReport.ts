import { generate } from 'multiple-cucumber-html-reporter';

generate({
    jsonDir: './cucumber-report',
    reportPath: './cucumber-html-report',
    reportName: 'Playwright BDD Automation Report',
    pageTitle: 'Playwright BDD Report',
    displayDuration: true,

    metadata: {
        browser: {
            name: 'chromium',
            version: 'latest',
        },
        device: 'Local Test Machine',
        platform: {
            name: 'Windows',
            version: '11',
        },
    },

    customData: {
        title: 'Execution Info',
        data: [
            { label: 'Project', value: 'Playwright BDD Framework' },
            { label: 'Environment', value: 'QA' },
            { label: 'Tester', value: 'Shubham' },
        ],
    },
});