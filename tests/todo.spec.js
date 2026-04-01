import { test, expect } from '@playwright/test';

test('To Do App @sanity', async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
    await page.getByTestId('text-input').fill('Buy Grocery');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('Go for walk');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('Rest');
    await page.getByTestId('text-input').press('Enter');
    await page.getByTestId('text-input').fill('Wash my hair');
    await page.getByTestId('text-input').press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'Go for walk' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('listitem').filter({ hasText: 'Buy Grocery' }).getByTestId('todo-item-toggle').check();
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'Completed' }).click();
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByRole('link', { name: 'Active' }).click();
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByRole('link', { name: 'Active' }).click();
    await expect(page.getByText('Wash my hair')).toBeVisible();
    await expect(page.getByTestId('todo-list')).toContainText('Rest');
    await page.getByRole('link', { name: 'All' }).click();
    await page.getByRole('button', { name: 'Clear completed' }).click();
    await expect(page.locator('.todo-list li')).toHaveCount(3)
});