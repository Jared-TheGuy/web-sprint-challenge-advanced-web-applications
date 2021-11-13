import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import articleService from './../services/articleServices';
import View from './View';

jest.mock('./../services/articleServices');

test("renders zero articles without errors", async () => {
    articleService.mockResolvedValueOnce({data:[]});
    
    render(<View/>);
    await waitFor(()=> {
        const articles = screen.queryAllByTestId("article");
        expect(articles).toHaveLength(0);
    });
});

test("renders three articles without errors", async ()=> {
    articleService.mockResolvedValueOnce({data: [
        {
            id: 'a', 
            headline: "headline", 
            createdOn: Date.time, 
            summary: "summary", 
            body: "body",
            author: "author"
        },
        {
            id: 'b', 
            headline: "headline", 
            createdOn: Date.time, 
            summary: "summary", 
            body: "body",
            author: "author"
        },
        {
            id: 'c', 
            headline: "headline", 
            createdOn: Date.time, 
            summary: "summary", 
            body: "body",
            author: "author"
        }
    ]});

    render(<View />);
    const articles = await screen.findAllByTestId("article");
    expect(articles).toHaveLength(3);
});