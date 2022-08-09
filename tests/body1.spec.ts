import { response } from "express";

const request = require('supertest');
const assert = require('assert');
const express = require('express');

const baseUrl='https://eacp.energyaustralia.com.au/codingtest/'




describe('GET api/v1/festivals', function() {
    it('responds with json', function(done) {
      request(baseUrl)
        .get('api/v1/festivals')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
       
        .then((response: { body: JSON; }) => {

          jest.setTimeout(5000);
        
          done();

          console.log("festivals : " + response.body);

        })

    
    });
  });