import { syncBuiltinESMExports } from "module";
import { callbackify } from "util";

const request = require('supertest');
const assert = require('assert');
const express = require('express');

const baseUrl='https://eacp.energyaustralia.com.au/codingtest/'

describe('GET api/v1/festivals statusCode', ()=> {
  let statusCode;
    it('should return a 200 status code',
      async () =>{
        const response = await request(baseUrl)
        .get('api/v1/festivals');
        statusCode=response.statusCode;
        console.log("Code : " + statusCode);
        return response.statusCode;
        

    request(response, callbackify);

    function delay (ms: number){
      return new Promise( resolve => setTimeout(resolve, ms));
    }
    await delay (5000);
    console.log("Code 2 : " + statusCode);
    console.debug(assert.equal(statusCode, 200));
    })
    

});

