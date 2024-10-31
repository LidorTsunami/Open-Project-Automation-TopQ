import { test } from '../utils/fixtures';
import {expect} from "@playwright/test"; // Adjust the path to your fixture file

test('simple navigation test', async ({ newPage }) => {
    await newPage.goto('https://www.example.com');
    const title = await newPage.title();
    expect(title).toBe('Example Domain'); // Adjust the expected title as needed
});