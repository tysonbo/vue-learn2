import * as axios from 'axios';

  const getusers = async function() {
    try {
      const response = await axios.get('./userprofile.json');
      let data = parseList(response);
      return data;   
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const parseList = response => {
    if (response.status !== 200) throw Error(response.message);
    if (!response.data) return [];
    let list = response.data;
    if (typeof list !== 'object') {
      list = [];
    }
    return list;
  };
  

  export const data = {
    getusers,
  };

  /* axios POST example
  const response = await axios({
      method: 'post', 
      url: './userprofile/A123456',
      headers: {
          'X-Custom-Header': 'foo',
      },
      data: {
          user: {
              firstName: 'John',
              lastName: 'Doe',
          },
      },
  });

  */