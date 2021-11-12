import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';
import mockArticleService from '../services/articleServices';

jest.mock('../services/articleServices')


const testArr = [ 
    {
        id: 'aMqwd', 
        headline: "headline", 
        createdOn: Date.time, 
        summary: "summary", 
        body: "body",
        author: "author" 
    },
    {
        id: 'aMqwd', 
        headline: "headline", 
        createdOn: Date.time, 
        summary: "summary", 
        body: "body",
        author: "author" 
    },
    {
        id: 'aMqwd', 
        headline: "headline", 
        createdOn: Date.time, 
        summary: "summary", 
        body: "body",
        author: "author" 
    }
]


test("renders zero articles without errors", async () => {
    <View/>
});

test("renders three articles without errors", async ()=> {
    mockArticleService.mockResolvedValueOnce(testArr)

    render(<View/>)

    
    const articles = screen.queryAllByTestId('showsthree')
        
    
    
    expect(articles).toHaveLength(0)
});

//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.