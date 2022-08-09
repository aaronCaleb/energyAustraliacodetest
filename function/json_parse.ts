function json_parse_test(){
    let jsonString ='responseBody.json';

    let emObj=JSON.parse(jsonString);

    console.log(emObj);
}

json_parse_test();