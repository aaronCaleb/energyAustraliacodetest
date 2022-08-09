
const request = require('supertest');
const assert = require('assert');
const express = require('express');

const baseUrl='https://eacp.energyaustralia.com.au/codingtest/'


describe('GET api/v1/festivals responseHeader', ()=> {
    it('should have the correct response headers', 
    async () => {
    
      const response = await request(baseUrl)
      .get('api/v1/festivals')
      .set('Accept', 'application/json');

        expect(response.headers['content-type']).toContain('application/json; charset=utf-8');
        expect(response.headers['server']).toContain('nginx');
        
  })

});
